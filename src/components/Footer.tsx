import React from 'react'
import { Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Download</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400">App Store</a></li>
              <li><a href="#" className="hover:text-amber-400">Google Play</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400">About</a></li>
              <li><a href="#" className="hover:text-amber-400">Features</a></li>
              <li><a href="#" className="hover:text-amber-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-400">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-400"><Facebook /></a>
              <a href="#" className="hover:text-amber-400"><Instagram /></a>
              <a href="#" className="hover:text-amber-400"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-700 text-center">
          <p>&copy; {new Date().getFullYear()} Heritage AR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

