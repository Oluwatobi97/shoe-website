import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'

export function Home() {
  return (
    <section className="rounded-3xl bg-gradient-to-b from-purple-light/60 via-purple-medium/40 to-purple-deep/60 p-[1px] shadow-xl shadow-purple-deep/20">
      <div className="rounded-3xl bg-white/80 p-6 sm:p-8 lg:p-10">
        <header className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="bg-gradient-to-r from-purple-deep to-purple-rich bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
              Our Products
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-500 sm:text-base">
              Discover minimal, everyday essentials designed for comfort, style, and performance.
            </p>
          </div>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

