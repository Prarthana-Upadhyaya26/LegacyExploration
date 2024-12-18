import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai'

const google = createGoogleGenerativeAI({
  apiKey: 'AIzaSyBRqRIkLoQX2MAdQ-AvPo_fPOXBxKni3a0',
});

export async function generateStory(topic: string) {
  try {
    const prompt = `
      Generate a short story based on the following topic or description: "${topic}".
      The story should be engaging, creative, and approximately 3-4 paragraphs long.
    `

    const { text } = await generateText({
      model: google('gemini-pro'),
      prompt: prompt,
      temperature: 0.7,
      maxTokens: 1000,
    })

    return text
  } catch (error) {
    console.error('Error generating story:', error)
    throw new Error('Failed to generate story')
  }
}

