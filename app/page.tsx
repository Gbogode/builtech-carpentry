"use client"

import { Facebook, Phone, Send, ArrowUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, type FormEvent, useEffect } from "react"

const products = [
  {
    name: "Modern TV Stand",
    price: "₦55,000 – ₦70,000",
    description:
      "Stylish TV stand with multiple compartments for storage. Made with high-quality plywood and laminate finish. Perfect for any living room.",
    link: "https://wa.me/p/8993100260774904/2349070065541",
  },
  {
    name: "Wardrobe Installation",
    price: "₦90,000 – ₦100,000",
    description:
      "Spacious and durable wooden wardrobes with sliding or hinged doors. Custom-built to match your room dimensions and style.",
    link: "https://wa.me/p/9184302918275303/2349070065541",
  },
  {
    name: "Office Desk",
    price: "₦60,000 – ₦77,000",
    description: "Ergonomic office desks made from premium wood. Features storage drawers and customizable dimensions.",
    link: "https://wa.me/p/8911932528923930/2349070065541",
  },
  {
    name: "MDF Bed Frame",
    price: "₦100,000 – ₦130,000",
    description:
      "Solid wood bed frames available in sizes from single to king. Polished finish and sturdy construction for long-lasting use.",
    link: "https://wa.me/p/9599393470084483/2349070065541",
  },
  {
    name: "Shelves and Bookcases",
    price: "₦40,000 – ₦60,000",
    description:
      "Custom-designed shelves and bookcases for homes and offices. Variety of styles available to suit your space and needs.",
    link: "https://wa.me/p/9324347787608422/2349070065541",
  },
  {
    name: "Furniture Repairs",
    price: "From ₦3,000 (Depends on Damage)",
    description:
      "Expert repairs for chairs, tables, and other wooden furniture. We restore your pieces to like-new condition.",
    link: "https://wa.me/p/9024831470930066/2349070065541",
  },
  {
    name: "Customized Carpentry Projects",
    price: "Contact for Quote",
    description: "Got a unique design in mind? Share your idea, and we'll bring it to life with expert craftsmanship.",
    link: "https://wa.me/p/8774439889348417/2349070065541",
  },
  {
    name: "Kitchen Cabinet Installation",
    price: "₦80,000 – ₦150,000",
    description:
      "High-quality wooden kitchen cabinets with multiple storage options. Available in classic and modern styles.",
    link: "https://wa.me/p/28369497265998890/2349070065541",
  },
  {
    name: "Small Wooden Decor Pieces",
    price: "₦5,000 – ₦15,000",
    description:
      "Handcrafted wooden decor items like trays, coasters, and plant stands. Perfect for gifting or personal use.",
    link: "https://wa.me/p/9020989327956780/2349070065541",
  },
  {
    name: "Compact Study Desk with Storage",
    price: "₦55,000 – ₦60,000",
    description:
      "Stylish and space-saving study desk with a smooth, colorful finish. Includes built-in shelves for books and essentials. Perfect for small rooms.",
    link: "https://wa.me/p/8814755288634987/2349070065541",
  },
  {
    name: "Multifunctional Bedside Table",
    price: "₦20,000 – ₦22,000",
    description:
      "A cute and handy bedside table with a drawer for storage. Available in fun colors like yellow, blue, or pink. Great for holding your lamp, books, or phone.",
    link: "https://wa.me/p/28272520612363101/2349070065541",
  },
  {
    name: "Mini Bookshelf",
    price: "₦15,000 – ₦20,000",
    description:
      "Keep your books and gadgets organized with this lightweight, colorful bookshelf. Fits easily into small spaces and adds style to your room.",
    link: "https://wa.me/p/9544903178855124/2349070065541",
  },
  {
    name: "Portable Foldable Chair",
    price: "₦9,000 – ₦12,000",
    description:
      "Comfortable and foldable chair for studying or relaxing. Easy to store and available in vibrant colors.",
    link: "https://wa.me/p/9019850864717100/2349070065541",
  },
  {
    name: "Wardrobe Organizer",
    price: "₦90,000 – ₦110,000",
    description:
      "Compact wooden wardrobe with a sleek design. Includes hanging space and shelves for all your clothes. Comes in modern finishes like white or light wood.",
    link: "https://wa.me/p/29359290460336552/2349070065541",
  },
  {
    name: "Wall-Mounted Floating Shelves",
    price: "₦9,000 – ₦10,000 per piece",
    description:
      "Beautiful, colorful floating shelves for displaying books, decor, or plants. Adds a stylish touch to your walls.",
    link: "https://wa.me/p/8902223263160096/2349070065541",
  },
  {
    name: "Laptop Stand/Table",
    price: "₦3,000",
    description:
      "Lightweight and colorful wooden laptop stand for comfortable studying or working. Compact enough to fit in any room.",
    link: "https://wa.me/p/28087988427515639/2349070065541",
  },
  {
    name: "Decorative Wooden Frames",
    price: "₦2,500 – ₦5,000",
    description: "Bright and trendy wooden photo frames to decorate your room. Available in multiple sizes and colors.",
    link: "https://wa.me/p/8586421728134362/2349070065541",
  },
  {
    name: "Stylish Shoe Rack",
    price: "₦20,000 – ₦22,000",
    description:
      "Keep your shoes organized with this colorful, compact shoe rack. Fits up to 10 pairs and blends well with modern room decor.",
    link: "https://wa.me/p/9716326571734235/2349070065541",
  },
]

export default function GBD1BuiltechCarpentry() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const message = `Hello, my name is ${name}. I'm interested in your carpentry services.`
    const whatsappUrl = `https://wa.me/2349070065541?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#faf4eb]">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-white shadow-sm sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a_logo_for_GBD-1_BUILTECH_CARPENTRY-removebg-preview-5S2MJLEIdR9lTbISdl4Shg8q5IMSlB.png"
            alt="GBD-1 BUILTECH CARPENTRY"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-[#8B4513] transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-[#8B4513] transition-colors" href="#products">
            Products
          </Link>
          <Link className="text-sm font-medium hover:text-[#8B4513] transition-colors" href="#contact">
            Contact
          </Link>
          <Link className="text-sm font-medium hover:text-[#8B4513] transition-colors" href="/faq">
            FAQ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#8B4513] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Quality Wood Work and Furniture
                  </h1>
                  <p className="max-w-[600px] text-amber-100 md:text-xl">
                    Crafting beautiful, durable furniture that brings warmth and style to your space.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600 hover:shadow-lg hover:scale-105 hover:glow-green-500"
                    href="https://wa.me/2349070065541"
                    target="_blank"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 hover:shadow-lg hover:scale-105 hover:glow-blue-500"
                    href="https://www.facebook.com/profile.php?id=61572530343679"
                    target="_blank"
                  >
                    <Facebook className="mr-2 h-4 w-4" />
                    Visit Facebook
                  </Link>
                </div>
              </div>
              <Image
                alt="GBD-1 BUILTECH CARPENTRY Logo"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last bg-[#faf4eb]"
                height="550"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%20logo%20for%20GBD-1%20BUILTECH%20CARPENTRY.jpg-i71f2wQ8TPPCUpa5diPn74sBMCrGAz.jpeg"
                width="550"
              />
            </div>
          </div>
        </section>

        <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#8B4513]">
              Our Products
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-4 bg-[#faf4eb] p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#8B4513]">{product.name}</h3>
                    <p className="text-xl font-semibold text-green-600">{product.price}</p>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                  <Link
                    href={product.link}
                    target="_blank"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-green-700"
                  >
                    Order on WhatsApp
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#8B4513]">
              About GBD-1 BUILTECH CARPENTRY
            </h2>
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#8B4513]">Our Story</h3>
                <p className="text-gray-600">
                  Founded in 2020, GBD-1 BUILTECH CARPENTRY has quickly become a leading name in custom woodworking and
                  carpentry services in Nigeria. Our passion for craftsmanship and attention to detail has allowed us to
                  create stunning pieces that transform spaces and delight our customers.
                </p>
                <h3 className="text-2xl font-bold text-[#8B4513]">Our Mission</h3>
                <p className="text-gray-600">
                  We strive to blend traditional carpentry techniques with modern design, creating functional and
                  beautiful wooden products that enhance the lives of our customers. Our goal is to deliver
                  high-quality, customized solutions that exceed expectations and stand the test of time.
                </p>
                <h3 className="text-2xl font-bold text-[#8B4513]">Why Choose Us?</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Expert craftsmanship with attention to detail</li>
                  <li>Use of high-quality, sustainably sourced materials</li>
                  <li>Customizable designs to fit your unique needs</li>
                  <li>Competitive pricing without compromising on quality</li>
                  <li>Excellent customer service and after-sales support</li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cleaning-up-the-project.jpg-UDNgKWdNJmSJdLXthsXLwQ08WmK9on.jpeg"
                  alt="Traditional woodworking at GBD-1 BUILTECH CARPENTRY"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#faf4eb]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#8B4513]">Contact Us</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Ready to transform your space with beautiful, custom woodwork? Reach out to us through WhatsApp or
                    Facebook for quick responses and personalized service.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600 hover:shadow-lg hover:scale-105 hover:glow-green-500"
                    href="https://wa.me/2349070065541"
                    target="_blank"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 hover:shadow-lg hover:scale-105 hover:glow-blue-500"
                    href="https://www.facebook.com/profile.php?id=61572530343679"
                    target="_blank"
                  >
                    <Facebook className="mr-2 h-4 w-4" />
                    Visit Our Facebook Page
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#8B4513] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#6d3710] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8B4513] hover:shadow-lg hover:scale-105 hover:glow-[#8B4513]"
                    href="tel:+2349070065541"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </Link>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[#8B4513] mb-4">Sign Up for Updates</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B4513] focus:ring-[#8B4513] sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B4513] focus:ring-[#8B4513] sm:text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md bg-[#8B4513] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#6d3710] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B4513]"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Sign Up and Chat on WhatsApp
                    </button>
                  </form>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[#8B4513] mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Quality craftsmanship</li>
                    <li>✓ Customizable designs</li>
                    <li>✓ Competitive pricing</li>
                    <li>✓ Quick turnaround time</li>
                    <li>✓ Professional installation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t bg-[#8B4513] text-white">
        <div className="container flex flex-col gap-2 sm:flex-row items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a_logo_for_GBD-1_BUILTECH_CARPENTRY-removebg-preview-5S2MJLEIdR9lTbISdl4Shg8q5IMSlB.png"
            alt="GBD-1 BUILTECH CARPENTRY"
            width={140}
            height={45}
            className="h-8 w-auto brightness-0 invert"
          />
          <p className="text-xs text-amber-100 sm:ml-4">© 2025 GBD-1 BUILTECH CARPENTRY. All rights reserved.</p>
          <div className="sm:ml-auto flex gap-4">
            <Link className="text-amber-100 hover:text-white" href="https://wa.me/2349070065541" target="_blank">
              <Phone className="h-5 w-5" />
            </Link>
            <Link
              className="text-amber-100 hover:text-white"
              href="https://www.facebook.com/profile.php?id=61572530343679"
              target="_blank"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link className="text-amber-100 hover:text-white" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="text-amber-100 hover:text-white" href="/terms-and-conditions">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#8B4513] text-white p-2 rounded-full shadow-lg hover:bg-[#6d3710] focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition-all duration-300"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

