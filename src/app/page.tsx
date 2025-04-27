import Hero from "./components/Hero"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ProductList />
      <Footer />
    </main>
  )
}

