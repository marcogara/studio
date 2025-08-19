"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendContactMessage(values: z.infer<typeof contactSchema>) {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Invalid input." };
  }

  const { name, email, message } = parsed.data;

  // Create a transporter object using the Gmail SMTP server
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Set up email data
  const mailOptions = {
    from: `"${name}" <${email}>`, // sender address
    to: process.env.GMAIL_EMAIL, // list of receivers
    subject: `New Contact Form Message from ${name}`, // Subject line
    text: `You have received a new message from your portfolio contact form.\n\nHere are the details:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `, // html body
  };

  try {
    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
