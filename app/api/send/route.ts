import { NextResponse } from "next/server";

export const runtime = "nodejs";

const CONTACT_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.5;">
    <h2>Sappnin Contact Form Submission</h2>
    <p><strong>First Name:</strong> {{firstName}}</p>
    <p><strong>Last Name:</strong> {{lastName}}</p>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>
  </body>
</html>
`;

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { success: false, error: "Server email configuration is missing." },
        { status: 500 }
      );
    }

    // Delay loading external SDK until request time to avoid build-time crashes.
    const { Resend } = await import("resend");
    const resend = new Resend(resendApiKey);
    const { firstName, lastName, email, message } = await req.json();

    // Build HTML from a bundled template string to avoid filesystem/runtime issues.
    const html = CONTACT_EMAIL_TEMPLATE
      .replace("{{firstName}}", firstName)
      .replace("{{lastName}}", lastName)
      .replace("{{email}}", email)
      .replace("{{message}}", message);

    // Send the email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: `Sappnin Contact Form Submission`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send message.";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
