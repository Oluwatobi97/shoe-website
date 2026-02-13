import { FormEvent, useState } from 'react'
import type { Product } from '../types/Product'

interface OrderFormProps {
  product: Product
  quantity: number
  onClose: () => void
}

export function OrderForm({ product, quantity, onClose }: OrderFormProps) {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!fullName.trim() || !phone.trim()) return

    setSubmitting(true)

    const orderDetails = {
      productId: product.id,
      productName: product.name,
      quantity,
      fullName: fullName.trim(),
      phone: phone.trim(),
      totalPrice: product.price * quantity,
    }

    console.log('Order submitted:', orderDetails)
    alert('Order Submitted Successfully')

    setSubmitting(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white/90 p-6 shadow-2xl shadow-purple-deep/30">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="bg-gradient-to-r from-purple-deep to-purple-rich bg-clip-text text-lg font-semibold text-transparent">
              Order Summary
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Complete your details to place the order.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-purple-light text-slate-500 transition hover:bg-purple-light/60 hover:text-slate-700"
          >
            <span className="sr-only">Close</span>
            ×
          </button>
        </div>

        <div className="mb-4 rounded-xl bg-purple-light/40 p-4 text-sm text-slate-700">
          <p className="font-medium text-slate-900">{product.name}</p>
          <p className="mt-1 flex items-center justify-between text-sm">
            <span className="text-slate-500">Quantity</span>
            <span className="font-medium text-slate-900">{quantity}</span>
          </p>
          <p className="mt-1 flex items-center justify-between text-sm">
            <span className="text-slate-500">Total</span>
            <span className="font-semibold text-purple-rich">
              ${(product.price * quantity).toFixed(2)}
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-slate-800"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full rounded-lg border border-purple-light bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-purple-deep focus:ring-1 focus:ring-purple-deep"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-slate-800"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full rounded-lg border border-purple-light bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-purple-deep focus:ring-1 focus:ring-purple-deep"
              placeholder="Enter your phone number"
            />
          </div>

          <button
            type="submit"
            disabled={submitting || !fullName.trim() || !phone.trim()}
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-deep to-purple-rich px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-purple-light"
          >
            {submitting ? 'Submitting...' : 'Confirm Order'}
          </button>
        </form>
      </div>
    </div>
  )
}

