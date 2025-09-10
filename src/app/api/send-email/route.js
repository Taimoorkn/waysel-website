import nodemailer from "nodemailer";
import { parse } from "cookie";

export async function POST(req) {
  try {
    const { to, subject, message, from } = await req.json();
    const csrfToken = req.headers.get("x-csrf-token");
    const cookies = parse(req.headers.get("cookie") || "");
    const cookieToken = cookies.csrfToken;

    if (!csrfToken || csrfToken !== cookieToken) {
      return new Response(JSON.stringify({ success: false, message: "Invalid CSRF token" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: from || process.env.EMAIL_USER,
      to,
      subject,
      text: message,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    return new Response(JSON.stringify({ success: false, message: error.message || "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}