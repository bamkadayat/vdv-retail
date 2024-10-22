import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const emailContent = `
      Name: ${name}\n
      Email: ${email}\n
      Message: ${message}
    `;

    const { data, error } = await resend.emails.send({
      from: 'Retail web <onboarding@resend.dev>',
      to: ['chris.reviresco@gmail.com'],
      subject: 'Contact Form Submission',
      text: emailContent,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
