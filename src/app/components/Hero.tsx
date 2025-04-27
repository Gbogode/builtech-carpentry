import Link from "next/link"
import { Facebook, PhoneIcon as WhatsApp } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/carpentry-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
        <img src="/logo.png" alt="GBD-1 BUILTECH CARPENTRY" className="w-32 h-32 mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">GBD-1 BUILTECH CARPENTRY</h1>
        <p className="text-xl md:text-2xl mb-8">Innovative Carpentry Solutions</p>
        <div className="flex space-x-4">
          <Link
            href="https://www.facebook.com/your-page"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <Facebook className="mr-2" />
            Facebook
          </Link>
          <Link
            href="https://wa.me/your-number"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <WhatsApp className="mr-2" />
            WhatsApp
          </Link>
        </div>
      </div>
    </section>
  )
}

