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
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="rounded-3xl bg-[#2b1f17]/80 backdrop-blur-xl p-8 text-center text-white shadow-2xl">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <Link
            to="/"
            className="mt-6 inline-block rounded-full bg-[#e6c9a8] px-5 py-2 text-sm font-medium text-[#2b1f17]"
          >
            Back to products
          </Link>
        </div>
      </main>
    );
  }

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <main
      className="
        min-h-screen px-4 py-10
        bg-gradient-to-br
        from-[#3b2a1f]
        via-[#2b1f17]
        to-[#140e09]
        text-white
      "
    >
      <section
        className="
          mx-auto max-w-6xl
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6 sm:p-10
          shadow-2xl
        "
      >
        {/* Back */}
        <Link
          to="/"
          className="text-sm text-white/70 hover:text-white transition"
        >
          ← Back to products
        </Link>

        <div className="mt-8 grid gap-12 md:grid-cols-2 items-center">
          {/* ================= IMAGE ================= */}
          <div className="group relative overflow-hidden rounded-3xl">
            {/* glass glow */}
            <div className="absolute inset-0 bg-white/5 opacity-0 transition group-hover:opacity-100" />

            <img
              src={product.image}
              alt={product.name}
              className="
                w-full h-full object-cover
                transition duration-700
                group-hover:scale-110
              "
            />
          </div>

          {/* ================= INFO ================= */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-4xl font-semibold tracking-tight">
                {product.name}
              </h1>

              <p className="mt-3 text-white/70 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <p className="text-3xl font-semibold text-[#e6c9a8]">
              ₦{product.price.toLocaleString()}
            </p>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <p className="text-sm text-white/70">Quantity</p>

              <div
                className="
                  inline-flex items-center gap-5
                  rounded-full
                  border border-white/20
                  bg-white/10
                  backdrop-blur-md
                  px-5 py-2
                "
              >
                <button
                  onClick={decreaseQuantity}
                  className="text-xl hover:text-[#e6c9a8] transition"
                >
                  −
                </button>

                <span className="text-lg font-medium">{quantity}</span>

                <button
                  onClick={increaseQuantity}
                  className="text-xl hover:text-[#e6c9a8] transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Luxury Buy Button */}
            <button
              onClick={() => setShowOrderForm(true)}
              className="
                w-full sm:w-auto
                rounded-full
                bg-[#e6c9a8]
                px-8 py-3
                font-semibold
                text-[#2b1f17]
                shadow-lg
                transition-all duration-300
                hover:scale-[1.03]
                hover:brightness-110
              "
            >
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {showOrderForm && (
        <OrderForm
          product={product}
          quantity={quantity}
          onClose={() => setShowOrderForm(false)}
        />
      )}
    </main>
  );
}
