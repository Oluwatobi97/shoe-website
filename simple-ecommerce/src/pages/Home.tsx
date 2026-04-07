import { CategorySection } from "./CategorySection";
import type { Category } from "./Product";

const categories: { name: Category; title: string }[] = [
  { name: "shoes", title: "Shoes" },
  { name: "sneakers", title: "Sneakers" },
  { name: "bags", title: "Bags" },
  { name: "halfshoe", title: "Half Shoes" },
  { name: "belts", title: "Belts" },
  { name: "pam", title: "PAM" },
];

export function Home() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="mb-8 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Step Into Timeless Leather Craftsmanship
        </h1>
        <p className="mt-2 text-sm sm:text-base text-white/70">
          Premium handcrafted leather shoes designed for comfort, confidence,
          and modern elegance.
        </p>
      </header>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map(({ name, title }) => (
          <CategorySection key={name} category={name} title={title} />
        ))}
      </div>
    </div>
  );
}
