import { Resend } from "resend";

import EmailTemplate from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.FROM_EMAIL!;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL!;

export async function POST(request: Request) {
  const body = await request.json();
  const { from, name, subject, message } = body;

  const templateBody = {
    name,
    email: from,
    subject,
    message,
  };

  try {
    const { data, error } = await resend.emails.send({
      from: `Portfolio - ${FROM_EMAIL}`,
      to: RECEIVER_EMAIL,
      subject: `New message from ${name || from} on your portfolio website.`,
      react: EmailTemplate(templateBody),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
