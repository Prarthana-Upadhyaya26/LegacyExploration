import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Globe, Users } from 'lucide-react'
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">About the App</h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Explore, experience, and engage with your roots like never before using cutting-edge AR/VR technology.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Smartphone className="w-12 h-12 text-amber-600" />}
            title="Storytelling from the Past"
            description="Immerse yourself in vivid narratives that bring your heritage to life."
          />
          <FeatureCard
            icon={<Globe className="w-12 h-12 text-amber-600" />}
            title="AR/VR Experiences"
            description="Step into historical scenes and interact with your cultural heritage."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-amber-600" />}
            title="Community Preservation"
            description="Connect with others and contribute to preserving your shared heritage."
          />
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="text-center hover:shadow-lg transition-shadow bg-amber-200">
    <CardContent className="pt-6">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-stone-600">{description}</p>
    </CardContent>
  </Card>
)

export default AboutSection

