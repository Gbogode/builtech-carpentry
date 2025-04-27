import Link from "next/link"
import Image from "next/image"

export default function TermsAndConditions() {
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
        <h1 className="text-3xl font-bold mb-6 text-[#8B4513]">Terms and Conditions</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            <strong>Effective Date:</strong> 2/7/2025
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">1. Introduction</h2>
          <p className="mb-4">
            Welcome to BUILTECH Carpentry. By using our website and services, you agree to comply with these Terms and
            Conditions. If you do not agree, please do not use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">2. Services Offered</h2>
          <p className="mb-4">
            BUILTECH Carpentry provides carpentry-related services, including custom furniture, repairs, and
            installations. All services are subject to availability and confirmation.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">3. Orders & Payments</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Orders must be placed through our official website, WhatsApp, phone, or in person.</li>
            <li>Payments must be made in full or as agreed upon before work begins.</li>
            <li>We accept Cash or Transfer.</li>
            <li>Late payments may incur additional charges.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">4. Delivery & Timelines</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Delivery timelines vary based on project scope and availability.</li>
            <li>Delays due to unforeseen circumstances (e.g., weather, supply issues) will be communicated.</li>
            <li>Customers are responsible for providing accurate delivery details.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">5. Cancellations & Refunds</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Orders may be canceled within 2 hours of confirmation for a full/partial refund.</li>
            <li>Custom projects are non-refundable once production begins.</li>
            <li>Refunds (if applicable) will be processed within 7 business days.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">6. Warranty & Liability</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Our products come with a 2-month warranty against manufacturing defects.</li>
            <li>We are not liable for damages caused by improper use, modifications, or external factors.</li>
            <li>Liability is limited to the cost of the product/service purchased.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">7. Intellectual Property</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>All content, images, and designs on our website are the property of BUILTECH Carpentry.</li>
            <li>Unauthorized use or reproduction of our materials is prohibited.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">8. User Responsibilities</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Users must provide accurate information when placing orders.</li>
            <li>Users agree not to misuse our website or services.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">9. Privacy Policy</h2>
          <p className="mb-4">
            By using our services, you acknowledge our{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">10. Changes to Terms</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>We reserve the right to update these Terms and Conditions at any time.</li>
            <li>Continued use of our services implies acceptance of the revised terms.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">11. Contact Information</h2>
          <p className="mb-4">For inquiries, contact us at:</p>
          <p className="mb-4">
            <strong>BUILTECH Carpentry</strong>
            <br />
            Email:{" "}
            <a href="mailto:gbogodedurotolu@gmail.com" className="text-blue-600 hover:underline">
              gbogodedurotolu@gmail.com
            </a>
            <br />
            Phone: 09070065541
          </p>
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

