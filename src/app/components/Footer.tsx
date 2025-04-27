import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <img src="/logo.png" alt="GBD-1 BUILTECH CARPENTRY" className="w-16 h-16 mx-auto md:mx-0" />
            <p className="mt-2">Innovative Carpentry Solutions</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: info@gbd1builtech.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} GBD-1 BUILTECH CARPENTRY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

