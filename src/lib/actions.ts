"use server";

import { askProductQuestions } from "@/ai/flows/ask-product-questions-flow";

export async function getAiResponse(question: string) {
  try {
    const response = await askProductQuestions({ question });
    return response.answer;
  } catch (error) {
    console.error("Error getting AI response:", error);
    return "Sorry, I encountered an error and couldn't process your request. Please try again later.";
  }
}
