import { useState, type FormEvent } from "react";
import type { Product } from "./Product";

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
    if (!fullName.trim() || !phone.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitting(true);
    console.log("Submitting order:", {
      product: product.name,
      quantity,
      total: product.price * quantity,
      customer: fullName,
      phone,
    });

    // Simulate API call
    setTimeout(() => {
      alert("Order submitted successfully!");
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-2xl bg-leather-dark p-8 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-white/70 transition hover:text-white"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold">Order {product.name}</h2>
        <p className="mt-2 text-white/80">
          You are ordering {quantity} of {product.name}.
        </p>
        <p className="mt-4 text-xl font-bold">
          Total: ₦{(product.price * quantity).toLocaleString()}
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="fullName" className="text-sm text-white/80">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 p-2 outline-none transition focus:border-white"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm text-white/80">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 p-2 outline-none transition focus:border-white"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="
              w-full rounded-full bg-accent-cream py-3 font-semibold text-leather-dark
              transition hover:brightness-110
              disabled:cursor-not-allowed disabled:opacity-50
            "
          >
            {submitting ? "Submitting..." : "Confirm Order"}
          </button>
        </form>
      </div>
    </div>
  );
}
