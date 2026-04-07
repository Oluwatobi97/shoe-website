interface CategoryHeaderProps {
  category: string;
  productCount: number;
}

export function CategoryHeader({
  category,
  productCount,
}: CategoryHeaderProps) {
  return (
    <header className="mb-10 max-w-2xl">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl capitalize">
        {category}
      </h1>
      <p className="mt-3 text-white/70">
        {productCount} {productCount === 1 ? "product" : "products"} found.
      </p>
    </header>
  );
}
