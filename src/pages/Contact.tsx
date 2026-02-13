import { FormEvent, useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    console.log("Contact form submitted:", {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    alert("Message sent! We'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="space-y-6 rounded-3xl bg-white/80 p-6 text-sm text-slate-600 shadow-xl shadow-purple-deep/15 sm:p-8 lg:p-10">
      <div className="space-y-2">
        <h1 className="bg-gradient-to-r from-purple-deep to-purple-rich bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
          Contact Us
        </h1>
        <p>
          Have a question or feedback about T&amp;K? Send us a quick message and
          we&apos;ll respond as soon as we can.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-slate-800">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-lg border border-purple-light bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-purple-deep focus:ring-1 focus:ring-purple-deep"
            placeholder="Enter your full name"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-sm font-medium text-slate-800"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-purple-light bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-purple-deep focus:ring-1 focus:ring-purple-deep"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="message"
            className="text-sm font-medium text-slate-800"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full resize-none rounded-lg border border-purple-light bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-purple-deep focus:ring-1 focus:ring-purple-deep"
            placeholder="Tell us how we can help..."
          />
        </div>

        <button
          type="submit"
          disabled={!name.trim() || !email.trim() || !message.trim()}
          className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-deep to-purple-rich px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-deep focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-purple-light"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

