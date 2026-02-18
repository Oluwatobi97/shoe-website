import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function Home() {
  return (
    <section
      className="
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
        p-6 sm:p-8 lg:p-12
      "
    >
      {/* Header */}
      <header className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Step Into Timeless Leather Craftsmanship
        </h1>

        <p className="mt-3 text-white/70">
          Premium handcrafted leather shoes designed for comfort, confidence,
          and modern elegance.
        </p>
      </header>

      {/* Products */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
