import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./products";
import type { Product } from "./Product";
import { OrderForm } from "../components/OrderForm";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id) as Product | undefined;

  const [quantity, setQuantity] = useState(1);
  const [showOrderForm, setShowOrderForm] = useState(false);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl bg-[#2b1f17]/80 backdrop-blur-xl p-8 text-center text-white shadow-2xl">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <Link
            to="/"
            className="mt-6 inline-block rounded-full bg-[#e6c9a8] px-5 py-2 text-sm font-medium text-[#2b1f17]"
          >
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div
      className="
        bg-gradient-to-br
        from-[#3b2a1f]
        via-[#2b1f17]
        to-[#140e09]
        text-white
      "
    >
      {/* The section below provides its own padding */}
      <section
        className="
          mx-auto max-w-5xl
          rounded-2xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-4 sm:p-6
          shadow-2xl
        "
      >
        {/* Back */}
        <Link
          to="/"
          className="text-xs sm:text-sm text-white/70 hover:text-white transition"
        >
          ← Back to products
        </Link>

        <div className="mt-6 grid gap-6 md:gap-8 md:grid-cols-2 items-start">
          {/* ================= IMAGE ================= */}
          <div className="group relative overflow-hidden rounded-2xl">
            {/* glass glow */}
            <div className="absolute inset-0 bg-white/5 opacity-0 transition group-hover:opacity-100" />

            <img
              src={product.image}
              alt={product.name}
              className="
                w-full h-auto object-cover
                transition duration-700
                group-hover:scale-110
                max-h-96
              "
            />
          </div>

          {/* ================= INFO ================= */}
          <div className="space-y-4">
            {/* Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                {product.name}
              </h1>

              <p className="mt-2 text-sm sm:text-base text-white/70 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <p className="text-2xl sm:text-2xl font-semibold text-[#e6c9a8]">
              ₦{product.price.toLocaleString()}
            </p>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm text-white/70">Quantity</p>

              <div
                className="
                  inline-flex items-center gap-3
                  rounded-full
                  border border-white/20
                  bg-white/10
                  backdrop-blur-md
                  px-3 py-1.5
                "
              >
                <button
                  onClick={decreaseQuantity}
                  className="text-base sm:text-lg hover:text-[#e6c9a8] transition"
                >
                  −
                </button>

                <span className="text-sm sm:text-base font-medium">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  className="text-base sm:text-lg hover:text-[#e6c9a8] transition"
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
                px-6 sm:px-8 py-2.5
                text-sm sm:text-base
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
    </div>
  );
}
