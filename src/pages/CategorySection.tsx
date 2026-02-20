import { Link } from "react-router-dom";
import { products } from "./products";
import type { Category } from "./Product";

interface CategorySectionProps {
  category: Category;
  title: string;
}

export function CategorySection({ category, title }: CategorySectionProps) {
  const categoryProducts = products.filter((p) => p.category === category);

  if (categoryProducts.length === 0) {
    return null;
  }

  return (
    <Link to={`/category/${category}`} className="group block">
      <div
        className="
        relative
        overflow-hidden
        rounded-xl
        bg-leather-dark
        aspect-square
        flex
        items-end
        p-3 sm:p-4
        transition
        duration-300
        hover:shadow-lg
        hover:scale-105
        cursor-pointer
      "
      >
        {/* Background image of featured product */}
        {categoryProducts[0]?.image && (
          <img
            src={categoryProducts[0].image}
            alt={title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              opacity-30
              group-hover:opacity-50
              transition
              duration-300
            "
          />
        )}

        {/* Content overlay */}
        <div className="relative z-10">
          <h3 className="text-base sm:text-lg font-semibold text-white">{title}</h3>
          <p className="text-xs text-accent-cream/80 mt-1">
            {categoryProducts.length}{" "}
            {categoryProducts.length === 1 ? "item" : "items"}
          </p>
        </div>
      </div>
    </Link>
  );
}
