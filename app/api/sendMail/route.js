import { Resend } from "resend";
import 'dotenv/config';

const resend = new Resend(process.env.RESEND_API_KEY);
const sending_mail = process.env.EMAIL;


export async function POST(req) {
  try {
    const { name, email, phone, company, subject, message } = await req.json();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <h2 style="color: #6c63ff;">New Contact Form Submission</h2>
        <p>You received a new message from your portfolio contact form.</p>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${phone ? phone : "-"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Company:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${company ? company : "-"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Subject:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${subject}</td>
          </tr>
        </table>

        <h3 style="margin-top: 20px;">Message:</h3>
        <p style="background: #f9f9f9; padding: 10px; border-left: 3px solid #6c63ff;">${message}</p>
      </div>
    `;

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: sending_mail,
      subject: `${name} - ${subject}`,
      html: htmlContent,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
