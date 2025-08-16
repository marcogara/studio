'use server';

/**
 * @fileOverview A project description generator AI agent.
 *
 * - generateProjectDescription - A function that handles the project description generation process.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  title: z.string().describe('The title of the project.'),
  technologies: z.string().describe('A comma-separated list of technologies used in the project.'),
  overview: z.string().describe('A brief overview of the project.'),
});
export type GenerateProjectDescriptionInput = z.infer<typeof GenerateProjectDescriptionInputSchema>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z.string().describe('A short, engaging project description.'),
});
export type GenerateProjectDescriptionOutput = z.infer<typeof GenerateProjectDescriptionOutputSchema>;

// This is an exported wrapper for server-side use if needed, but the flow is what we expose to the client.
export async function generateProjectDescription(input: GenerateProjectDescriptionInput): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are a creative copywriter specializing in crafting engaging project descriptions for developer portfolios. Your tone is professional yet punchy, with a retro-tech vibe.

  Based on the project's title, technologies used, and a brief overview, generate a short, impactful description (2-3 sentences) to capture the attention of recruiters and highlight the project's key features and value.

  Title: {{{title}}}
  Technologies: {{{technologies}}}
  Overview: {{{overview}}}
  `,
});

export const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
