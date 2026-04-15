'use server';
/**
 * @fileOverview An AI assistant that answers questions about radiator coolant products and services.
 *
 * - askProductQuestions - A function that handles product-related queries.
 * - AskProductQuestionsInput - The input type for the askProductQuestions function.
 * - AskProductQuestionsOutput - The return type for the askProductQuestions function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AskProductQuestionsInputSchema = z.object({
  question: z.string().describe('The user\'s question about products or services.'),
});
export type AskProductQuestionsInput = z.infer<typeof AskProductQuestionsInputSchema>;

const AskProductQuestionsOutputSchema = z.object({
  answer: z.string().describe('The AI assistant\'s answer to the question.'),
});
export type AskProductQuestionsOutput = z.infer<typeof AskProductQuestionsOutputSchema>;

const marketingContent = `
Business Name: CoolantConnect AI
Tagline: Keep Your Engine Cool. Drive Without Worry. High-performance radiator coolant for long-lasting engine protection.
About Us: We provide high-quality radiator coolant and automotive cooling solutions trusted by mechanics, garages, and fleet operators across Kerala.
Location: Kerala, India
Phone: +91 XXXXXXXX
Email: your@email.com
Copyright Year: 2026

Why Our Coolant? (Benefits):
- Prevents Overheating
- Long-lasting Protection
- Rust & Corrosion Protection

Our Products:
- Radiator Coolant: Premium coolant for cars & bikes
- Engine Cooling Solutions: Complete cooling system protection
- Bulk Supply: Best deals for garages & businesses

Why Choose Us:
- High Quality
- Affordable Price
- Trusted by Mechanics
- Fast Delivery

Customer Reviews:
- "Best coolant in Kerala!"
- "Reliable and affordable."

FAQs:
- How often should coolant be replaced?: Every 2 years or as recommended.
- Is it safe for all vehicles?: Yes, compatible with most engines.
`;

const askProductQuestionsPrompt = ai.definePrompt({
  name: 'askProductQuestionsPrompt',
  input: { schema: AskProductQuestionsInputSchema },
  output: { schema: AskProductQuestionsOutputSchema },
  prompt: `You are Aria, a friendly and intelligent AI assistant for CoolantConnect AI, a radiator coolant supplier.
Your role is to answer user questions about our products and services based *only* on the provided marketing information below. 
If the information is not available, politely state that you don't have the answer.
Keep your responses concise, typically 2-4 sentences.

### Marketing Information:
${marketingContent}

### User Question:
{{{question}}}`,
});

const askProductQuestionsFlow = ai.defineFlow(
  {
    name: 'askProductQuestionsFlow',
    inputSchema: AskProductQuestionsInputSchema,
    outputSchema: AskProductQuestionsOutputSchema,
  },
  async (input) => {
    const { output } = await askProductQuestionsPrompt(input);
    return output!;
  },
);

export async function askProductQuestions(input: AskProductQuestionsInput): Promise<AskProductQuestionsOutput> {
  return askProductQuestionsFlow(input);
}
