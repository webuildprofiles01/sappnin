import { Resend } from "resend";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
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
    return NextResponse.json({ success: false, error });
  }
}
