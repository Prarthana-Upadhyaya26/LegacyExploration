'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { generateStory } from '../components/generateStory'

export default function StoryGenerator() {
  const [topic, setTopic] = useState('')
  const [story, setStory] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      const generatedStory = await generateStory(topic)
      setStory(generatedStory)
    } catch (err) {
      setError('Failed to generate story. Please try again.')
    } finally {
      setIsLoading(false)
    }
    setTopic('')
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/Story.jpeg')" }}
    >
      {/* This div ensures the content stays centered */}
      <div className="w-full max-w-2xl bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-white text-center mb-6">Story Generator</h1>
        
        {/* Form content */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 mb-6">
          <Input
            type="text"
            placeholder="Enter a topic or description for your story"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white bg-opacity-50"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            {isLoading ? 'Generating...' : 'Generate Story'}
          </Button>
        </form>
        
        {/* Error message */}
        {error && (
          <p className="mt-4 text-red-500 text-center">{error}</p>
        )}

        {/* Story output */}
        {story && (
          <div className="mt-6 p-4 bg-white bg-opacity-50 rounded-lg max-h-96 overflow-auto">
            <p className="text-gray-800 whitespace-pre-wrap">{story}</p>
          </div>
        )}
      </div>
    </div>
  )
}
