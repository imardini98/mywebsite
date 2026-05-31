import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "imardinig@gmail.com",
      replyTo: email,
      subject: `New message from ${name} — ivanmardini.de`,
      html: `
        <div style="font-family: monospace; background: #0a0a0f; color: #f1f5f9; padding: 32px; border-radius: 8px; max-width: 600px;">
          <h2 style="color: #22d3ee; margin: 0 0 24px; font-size: 20px;">New contact form submission</h2>
          <p style="margin: 0 0 8px;"><strong style="color: #94a3b8;">Name:</strong> ${name}</p>
          <p style="margin: 0 0 8px;"><strong style="color: #94a3b8;">Email:</strong> <a href="mailto:${email}" style="color: #22d3ee;">${email}</a></p>
          <p style="margin: 24px 0 8px;"><strong style="color: #94a3b8;">Message:</strong></p>
          <p style="margin: 0; padding: 16px; background: #111118; border: 1px solid #22222e; border-radius: 6px; white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid #22222e; margin: 24px 0;" />
          <p style="color: #475569; font-size: 12px; margin: 0;">Sent from ivanmardini.de</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
