import Link from "next/link"
import Image from "next/image"

const faqs = [
  {
    question: "What types of wood do you use?",
    answer:
      "We use a variety of high-quality woods including oak, maple, pine, and mahogany. The choice depends on the project requirements and customer preferences.",
  },
  {
    question: "How long does it take to complete a custom furniture piece?",
    answer:
      "The timeline varies depending on the complexity of the project. On average, small pieces take 2-3 weeks, while larger or more intricate items may take 4-6 weeks.",
  },
  {
    question: "Do you offer delivery services?",
    answer:
      "Yes, we offer delivery services within Nigeria. Delivery fees depend on the location and size of the item.",
  },
  {
    question: "Can I request modifications to existing designs?",
    answer:
      "We specialize in custom work and are happy to modify our designs to suit your needs or create entirely new pieces based on your ideas.",
  },
  {
    question: "What is your warranty policy?",
    answer:
      "We offer a 2-month warranty on all our products against manufacturing defects. Please refer to our Terms & Conditions for more details.",
  },
  {
    question: "How do I care for my wooden furniture?",
    answer:
      "We recommend regular dusting with a soft cloth, avoiding direct sunlight, and using coasters for hot or wet items. We provide specific care instructions with each piece.",
  },
  {
    question: "Do you offer repair services for old furniture?",
    answer:
      "Yes, we offer repair and restoration services for wooden furniture. Contact us with details about your piece for a quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash and bank transfers. For custom projects, we typically require a deposit before starting work.",
  },
]

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf4eb]">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-white shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a_logo_for_GBD-1_BUILTECH_CARPENTRY-removebg-preview-5S2MJLEIdR9lTbISdl4Shg8q5IMSlB.png"
            alt="GBD-1 BUILTECH CARPENTRY"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-[#8B4513] transition-colors" href="/#products">
            Products
          </Link>
          <Link className="text-sm font-medium hover:text-[#8B4513] transition-colors" href="/#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-[#8B4513]">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 text-[#8B4513]">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
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
              WhatsApp
            </Link>
            <Link
              className="text-amber-100 hover:text-white"
              href="https://www.facebook.com/profile.php?id=61572530343679"
              target="_blank"
            >
              Facebook
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
    </div>
  )
}

