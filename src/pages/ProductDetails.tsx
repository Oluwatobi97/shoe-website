import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import type { Product } from "../types/Product";
import { OrderForm } from "../components/OrderForm";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id) as Product | undefined;

  const [quantity, setQuantity] = useState(1);
  const [showOrderForm, setShowOrderForm] = useState(false);

  if (!product) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md rounded-2xl bg-white/80 p-6 text-center shadow-lg shadow-purple-deep/10">
          <p className="text-sm font-medium text-purple-deep">
            Product not found
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
            We couldn&apos;t find that item
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            The product you&apos;re looking for may have been moved or is
            temporarily unavailable.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-deep to-purple-rich px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:brightness-110"
          >
            Back to products
          </Link>
        </div>
      </main>
    );
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleOrderClick = () => {
    setShowOrderForm(true);
  };

  const handleCloseForm = () => {
    setShowOrderForm(false);
  };

  return (
    <main className="py-6 sm:py-8 lg:py-10">
      <section className="rounded-3xl bg-white/80 p-6 shadow-xl shadow-purple-deep/15 sm:p-8 lg:p-10">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-purple-rich transition hover:text-purple-deep"
        >
          ← Back to products
        </Link>

        <div className="mt-6 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
          <div className="overflow-hidden rounded-3xl bg-purple-light/60 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="bg-gradient-to-r from-purple-deep to-purple-rich bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
                {product.name}
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                {product.description}
              </p>
            </div>

            <p className="text-2xl font-semibold text-purple-rich">
              #{product.price.toFixed(2)}
            </p>

            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-700">Quantity</p>
              <div className="inline-flex items-center gap-3 rounded-full border border-purple-light bg-white px-3 py-2 shadow-sm">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-purple-light text-base font-medium text-slate-700 transition hover:bg-purple-light/60"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm font-medium text-slate-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-purple-light text-base font-medium text-slate-700 transition hover:bg-purple-light/60"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleOrderClick}
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-deep to-purple-rich px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:ring-offset-2 md:w-auto"
            >
              Order Now
            </button>
          </div>
        </div>
      </section>

      {showOrderForm && (
        <OrderForm
          product={product}
          quantity={quantity}
          onClose={handleCloseForm}
        />
      )}
    </main>
  );
}
