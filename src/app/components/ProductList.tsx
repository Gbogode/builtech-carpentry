import Link from "next/link"
import { MessageCircle } from "lucide-react"

const products = [
  { id: 1, name: "Custom Cabinets", image: "/cabinet.jpg" },
  { id: 2, name: "Wooden Furniture", image: "/furniture.jpg" },
  { id: 3, name: "Doors and Windows", image: "/door.jpg" },
  { id: 4, name: "Wooden Flooring", image: "/flooring.jpg" },
]

export default function ProductList() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <Link
                  href={`https://wa.me/your-number?text=I'm interested in ${product.name}`}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <MessageCircle className="mr-2" />
                  Inquire on WhatsApp
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

