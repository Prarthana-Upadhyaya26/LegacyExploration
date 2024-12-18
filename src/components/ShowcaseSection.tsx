import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom';

const ShowcaseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    { src: "/Pic1.jpeg", alt: "AR Experience 1" },
    { src: "/Pic2.jpeg", alt: "VR Experience 2" },
    { src: "/Pic3.jpeg", alt: "Cultural Event 3" },
  ]

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Experience Gallery</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="outline" size="icon" onClick={prevImage}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextImage}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button variant="outline"><Link to="/FeaturedGalleries">See More</Link></Button>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection

