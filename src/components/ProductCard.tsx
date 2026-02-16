import type { Product } from "../types/Product";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white/80 shadow-sm ring-1 ring-purple-light/60 transition hover:-translate-y-1 hover:shadow-lg hover:ring-purple-medium/80">
      <div className="aspect-[4/3] overflow-hidden bg-purple-light/60">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900 line-clamp-2">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-slate-500 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-semibold text-purple-rich">
            #{product.price.toFixed(2)}
          </p>

          <Link
            to={`/product/${product.id}`}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-deep to-purple-rich px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:ring-offset-2"
          >
            View Product
          </Link>
        </div>
      </div>
    </article>
  );
}
