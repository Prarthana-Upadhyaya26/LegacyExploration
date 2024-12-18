import { generateStory } from './generateStory'

export async function POST(req: Request) {
  try {
    const { topic } = await req.json()
    const story = await generateStory(topic)
    return new Response(JSON.stringify({ story }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error in story generation:', error)
    return new Response(JSON.stringify({ error: 'Failed to generate story' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

