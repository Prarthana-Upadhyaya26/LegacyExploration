import React from 'react'
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/homepage.jpeg"
        alt="AR/VR Cultural Scene"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
          Step Into the Past, Relive Your Heritage
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Experience your cultural roots like never before with our immersive AR/VR app.
        </p>
        <div className="space-x-4">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            Start Your Journey
          </Button>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            Watch the Experience
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

