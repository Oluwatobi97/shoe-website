import type { Product } from "../types/Product";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className="
        group relative flex flex-col overflow-hidden
        rounded-2xl
        border border-white/10
        bg-gradient-to-br
        from-[#3b2a1f]
        via-[#2b1f17]
        to-[#1a120c]
        backdrop-blur-xl
        shadow-xl
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl
      "
    >
      {/* Glass shine overlay */}
      <div className="pointer-events-none absolute inset-0 bg-white/5 opacity-0 transition group-hover:opacity-100" />

      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="
            h-full w-full object-cover
            transition duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-base font-semibold text-white line-clamp-2">
            {product.name}
          </h3>

          <p className="mt-1 text-sm text-white/70 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price + Button */}
        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-semibold text-[#e6c9a8]">
            ₦{product.price.toLocaleString()}
          </p>

          <Link
            to={`/product/${product.id}`}
            className="
              rounded-full
              bg-white/10
              backdrop-blur-md
              border border-white/20
              px-4 py-2
              text-sm font-medium
              text-white
              transition-all duration-300
              hover:bg-white hover:text-[#2b1f17]
            "
          >
            View Product
          </Link>
        </div>
      </div>
    </article>
  );
}
