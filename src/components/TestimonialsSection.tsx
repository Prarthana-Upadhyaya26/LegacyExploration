import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "AR-VR technology offers a way to digitally preserve cultural sites",
      name: "Vedang Joshi",
      avatar: "/placeholder.svg"
    },
    {
      quote: "This app has brought me closer to my roots than ever before.",
      name: "Ritvik Chaturvedi",
      avatar: "/placeholder.svg"
    },
    {
      quote: "An incredible way to pass down our traditions to the next generation.",
      name: "Nandini Bhatt",
      avatar: "/placeholder.svg"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-blue-50">
              <CardContent className="p-6">
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">{testimonial.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-2xl font-bold">95% of users feel more connected to their roots</p>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

