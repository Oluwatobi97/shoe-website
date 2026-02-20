import { useParams } from "react-router-dom";
import { products } from "./products";
import { ProductCard } from "./ProductCard";
import { CategoryHeader } from "./CategoryHeader";
import type { Category } from "./Product";

export function CategoryPage() {
  const { category } = useParams<{ category: Category }>();

  if (!category) {
    return <div>Invalid category.</div>;
  }

  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <section
      className="
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
        p-4 sm:p-6 lg:p-8
      "
    >
      <CategoryHeader
        category={category}
        productCount={filteredProducts.length}
      />

      <div className="grid gap-4 sm:gap-6 grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
