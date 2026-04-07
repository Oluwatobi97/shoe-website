import { Link } from "react-router-dom";
import type { Product } from "./Product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="
        w-full text-left
        group block
        rounded-2xl
        border border-white/20
        bg-white/10
        p-3 sm:p-4
        shadow-lg
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        hover:border-white/40
        hover:bg-white/20
      "
    >
      <div className="relative mb-3 overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="
            aspect-square w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div>
        <h3 className="text-sm sm:text-base font-semibold text-white line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-1.5 text-base sm:text-lg font-medium text-accent-cream">
          ₦{product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
