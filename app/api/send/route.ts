import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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

    // Load HTML template file
    const templatePath = path.join(process.cwd(), "emails", "contact-template.html");
    let html = fs.readFileSync(templatePath, "utf8");

    // Replace placeholders with actual data
    html = html
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
