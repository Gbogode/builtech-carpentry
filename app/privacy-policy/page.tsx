import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf4eb]">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-white shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a_logo_for_GBD-1_BUILTECH_CARPENTRY-removebg-preview-5S2MJLEIdR9lTbISdl4Shg8q5IMSlB.png"
            alt="GBD-1 BUILTECH CARPENTRY"
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
        <h1 className="text-3xl font-bold mb-6 text-[#8B4513]">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            <strong>Effective Date:</strong> 2/7/2025
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">1. Introduction</h2>
          <p className="mb-4">
            Welcome to BUILTECH Carpentry. Your privacy is important to us. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your personal information when you visit our website, purchase our products, or
            engage with our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">2. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, billing/shipping address, and
              payment details.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Browser type, IP address, device type, and usage data collected
              through cookies and analytics tools.
            </li>
            <li>
              <strong>Customer Communication:</strong> Any messages or feedback sent to us.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">3. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process orders and deliver products.</li>
            <li>Improve our website and customer experience.</li>
            <li>Respond to inquiries and provide customer support.</li>
            <li>Send promotional offers (with your consent).</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">4. Sharing of Information</h2>
          <p className="mb-4">
            We do not sell, trade, or rent your personal information. However, we may share information with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Service Providers:</strong> Payment processors, shipping partners, and IT support providers.
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law or to protect our rights.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">5. Data Security</h2>
          <p className="mb-4">
            We implement security measures to protect your personal data. However, no method of transmission over the
            Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">6. Cookies & Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to enhance user experience and analyze website traffic. You
            can manage cookie settings through your browser.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">7. Your Rights</h2>
          <p className="mb-4">Depending on your location, you may have rights to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access, correct, or delete your personal data.</li>
            <li>Opt out of marketing communications.</li>
            <li>Request data portability.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">8. Third-Party Links</h2>
          <p className="mb-4">
            Our website may contain links to third-party sites. We are not responsible for their privacy practices.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">9. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy periodically. Changes will be posted on this page with a revised effective
            date.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-[#8B4513]">10. Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please get in touch with us at:</p>
          <p className="mb-4">
            <strong>BUILTECH Carpentry</strong>
            <br />
            Email:{" "}
            <a href="mailto:gbogodedurotolu@gmail.com" className="text-blue-600 hover:underline">
              gbogodedurotolu@gmail.com
            </a>
            <br />
            Phone: +2349070065541
          </p>
        </div>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t bg-[#8B4513] text-white">
        <div className="container flex flex-col gap-2 sm:flex-row items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a_logo_for_GBD-1_BUILTECH_CARPENTRY-removebg-preview-5S2MJLEIdR9lTbISdl4Shg8q5IMSlB.png"
            alt="GBD-1 BUILTECH CARPENTRY"
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
          </div>
        </div>
      </footer>
    </div>
  )
}

