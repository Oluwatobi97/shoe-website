import { useState, type FormEvent } from "react";
import type { Product } from "../types/Product";

interface OrderFormProps {
  product: Product;
  quantity: number;
  onClose: () => void;
}

export function OrderForm({ product, quantity, onClose }: OrderFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim()) return;

    setSubmitting(true);

    const orderDetails = {
      productId: product.id,
      productName: product.name,
      quantity,
      fullName: fullName.trim(),
      phone: phone.trim(),
      totalPrice: product.price * quantity,
    };

    console.log("Order submitted:", orderDetails);

    setTimeout(() => {
      alert("Order Submitted Successfully");
      setSubmitting(false);
      onClose();
    }, 800);
  };

  return (
    /* Overlay */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg px-4">
      {/* Glass Card */}
      <div
        className="
          w-full max-w-md
          rounded-2xl
          border border-white/20
          bg-white/80 dark:bg-white/5
          backdrop-blur-xl
          shadow-2xl
          p-6
          animate-fadeIn
        "
      >
        {/* Header */}
        <div className="mb-5 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Order Summary
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Complete your details to place your order.
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              h-9 w-9 rounded-full
              border border-gray-300 dark:border-white/20
              text-lg
              transition
              hover:bg-gray-200 dark:hover:bg-white/10
            "
          >
            ×
          </button>
        </div>

        {/* Product Summary */}
        <div
          className="
            mb-6 rounded-xl
            bg-gray-100/80 dark:bg-white/10
            backdrop-blur-md
            p-4
          "
        >
          <p className="font-medium text-gray-900 dark:text-white">
            {product.name}
          </p>

          <div className="mt-3 flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Quantity</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {quantity}
            </span>
          </div>

          <div className="mt-1 flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Total</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              ₦{(product.price * quantity).toLocaleString()}
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-800 dark:text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="
                mt-1 w-full rounded-lg
                border border-gray-300 dark:border-white/20
                bg-white/80 dark:bg-white/5
                px-3 py-2 text-sm
                text-gray-900 dark:text-white
                backdrop-blur-md
                outline-none
                transition
                focus:border-black dark:focus:border-white
                focus:ring-1 focus:ring-black dark:focus:ring-white
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-gray-800 dark:text-gray-300">
              Phone Number
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="
                mt-1 w-full rounded-lg
                border border-gray-300 dark:border-white/20
                bg-white/80 dark:bg-white/5
                px-3 py-2 text-sm
                text-gray-900 dark:text-white
                backdrop-blur-md
                outline-none
                transition
                focus:border-black dark:focus:border-white
                focus:ring-1 focus:ring-black dark:focus:ring-white
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting || !fullName.trim() || !phone.trim()}
            className="
              w-full rounded-full
              bg-black text-white
              dark:bg-white dark:text-black
              py-3 text-sm font-medium
              transition-all duration-300
              hover:scale-[1.02]
              disabled:opacity-50
            "
          >
            {submitting ? "Submitting..." : "Confirm Order"}
          </button>
        </form>
      </div>
    </div>
  );
}
