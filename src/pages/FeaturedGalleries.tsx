import { GalleryCard } from '@/components/gallery-card'

const galleries = [
  {
    title: 'Elephanta Caves',
    description: 'A UNESCO World Heritage Site near Mumbai, showcasing ancient rock-cut temples dedicated to Lord Shiva, with exquisite sculptures and carvings.',
    imageUrl: '\Image1.jpeg',
    href: 'https://tapestry.cyark.org/content/elephanta'
  },
  {
    title: 'Patan Durbar Square',
    description: 'A historic royal square in Nepal, adorned with intricately designed temples, palaces, and courtyards reflecting Newar architecture.',
    imageUrl: '\Image2.jpeg',
    href: 'https://tapestry.cyark.org/content/patan'
  },
  {
    title: 'Wat Arun',
    description: 'The Temple of Dawn in Bangkok, an iconic riverside landmark known for its stunning Khmer-style spires and colorful ceramic decorations.',
    imageUrl: '\Image3.jpeg',
    href: 'https://tapestry.cyark.org/content/watarun'
  },{
    title: 'Amarbayasgalant monastery',
    description: 'This 18th-century Buddhist monastery, nestled in Mongolias rolling hills, is a masterpiece of traditional architecture dedicated to Zanabazar, a revered spiritual leader.',
    imageUrl: '\Image4.jpeg',
    href: 'https://tapestry.cyark.org/content/amarbayasgalant'
  },{
    title: 'El-Kurru',
    description: 'El-Kurru is an ancient Nubian royal burial site, with the Tomb of Tanwetamani, a Kushite king, adorned with vibrant murals depicting his journey to the afterlife.',
    imageUrl: '\Image5.jpeg',
    href: 'https://tapestry.cyark.org/content/kurru'
  },{
    title: 'Dinetah',
    description: 'Dinetah is the ancestral homeland of the Navajo people, featuring ancient rock art and sacred sites significant to Navajo history and spirituality..',
    imageUrl: '\Image6.jpeg',
    href: 'https://tapestry.cyark.org/content/dinetah'
  }
]

export default function FeaturedGalleries() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Immersive AR/VR Experiences</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleries.map((gallery) => (
          <GalleryCard
            key={gallery.title}
            title={gallery.title}
            description={gallery.description}
            imageUrl={gallery.imageUrl}
            href={gallery.href}
          />
        ))}
      </div>
    </section>
  )
}

