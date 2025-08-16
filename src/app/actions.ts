"use server";

import { z } from "zod";

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

  // In a real application, you would send an email or save to a database here.
  // For this example, we'll just log it to the console.
  console.log("New contact message:", parsed.data);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}
