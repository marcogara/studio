
"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import { rateLimit } from "@/lib/rate-limiter";

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendContactMessage(values: z.infer<typeof contactSchema>) {
  const { success: isRateLimited } = await rateLimit();
  if (!isRateLimited) {
    return { success: false, error: "Too many requests. Please try again later." };
  }
  
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Invalid input." };
  }

  const { name, email, message } = parsed.data;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    requireTLS: true,
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, 
    to: process.env.GMAIL_EMAIL, 
    subject: `New Contact Form Message from ${name}`, 
    text: `You have received a new message from your portfolio contact form.\n\nHere are the details:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `, 
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", JSON.stringify(error, null, 2));
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
