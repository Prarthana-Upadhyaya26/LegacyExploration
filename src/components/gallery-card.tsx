import React from 'react'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface GalleryCardProps {
  title: string
  description?: string
  imageUrl: string
  href: string
}

export function GalleryCard({ title, description, imageUrl, href }: GalleryCardProps) {
  return (
    <div>
      <a href={href}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="overflow-hidden group relative">
            <div className="aspect-[16/9] relative">
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
              {description && (
                <p className="mb-4 text-sm text-gray-100">{description}</p>
              )}
              <Button 
                variant="secondary" 
                size="sm"
                className="bg-amber-500 hover:bg-amber-600 text-white"
              >
                VR tour
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </a>
      <h2 className="text-xl font-semibold mt-3 text-center text-amber-600">{title}</h2>
    </div>
  )
}