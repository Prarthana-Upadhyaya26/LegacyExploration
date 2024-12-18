import { Button } from "@/components/ui/button"

const CTASection = () => {
  return (
    <section className="py-20 bg-stone-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-bold mb-6">Ready to Reconnect?</h2>
        <div className="space-x-4">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            Download Now
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection

