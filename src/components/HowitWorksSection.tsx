import { Download, Compass, Headphones, Play } from 'lucide-react'

const HowItWorksSection = () => {
  const steps = [
    { icon: <Download className="w-12 h-12 text-amber-600" />, title: "Download the app" },
    { icon: <Compass className="w-12 h-12 text-amber-600" />, title: "Choose a heritage story or site" },
    { icon: <Headphones className="w-12 h-12 text-amber-600" />, title: "Put on your AR/VR device (optional)" },
    { icon: <Play className="w-12 h-12 text-amber-600" />, title: "Experience the past in real-time" },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0 bg-amber-50 p-4 rounded-lg">
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              {index < steps.length - 1 && (
                <div className="hidden md:block w-24 h-0.5 bg-amber-50 mt-6 mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

