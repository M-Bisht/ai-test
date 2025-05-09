'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating coffee brewing guides based on user questions.
 *
 * - generateBrewingGuide - A function that generates a coffee brewing guide based on a user question.
 * - GenerateBrewingGuideInput - The input type for the generateBrewingGuide function.
 * - GenerateBrewingGuideOutput - The return type for the generateBrewingGuide function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBrewingGuideInputSchema = z.object({
  question: z.string().describe('The user question about coffee brewing.'),
});
export type GenerateBrewingGuideInput = z.infer<typeof GenerateBrewingGuideInputSchema>;

const GenerateBrewingGuideOutputSchema = z.object({
  brewingGuide: z.string().describe('The generated coffee brewing guide.'),
});
export type GenerateBrewingGuideOutput = z.infer<typeof GenerateBrewingGuideOutputSchema>;

export async function generateBrewingGuide(input: GenerateBrewingGuideInput): Promise<GenerateBrewingGuideOutput> {
  return generateBrewingGuideFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBrewingGuidePrompt',
  input: {schema: GenerateBrewingGuideInputSchema},
  output: {schema: GenerateBrewingGuideOutputSchema},
  prompt: `You are an expert coffee brewing guide generator.

  Based on the user's question, generate a personalized coffee brewing guide.

  Question: {{{question}}}
  `,
});

const generateBrewingGuideFlow = ai.defineFlow(
  {
    name: 'generateBrewingGuideFlow',
    inputSchema: GenerateBrewingGuideInputSchema,
    outputSchema: GenerateBrewingGuideOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
