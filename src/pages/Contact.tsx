import { useState, type FormEvent } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    console.log({
      name,
      email,
      message,
    });

    alert("Message sent successfully.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="flex justify-center py-10">
      <div
        className="
          w-full max-w-3xl
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8 sm:p-10
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="mb-8 space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">Contact Us</h1>

          <p className="text-white/70">
            Have a question about T&amp;K? Send us a message and our team will
            respond shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm text-white/80">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="
                w-full rounded-xl
                border border-white/20
                bg-white/10
                px-4 py-3
                text-white
                placeholder-white/40
                backdrop-blur
                outline-none
                transition
                focus:border-white
              "
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm text-white/80">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="
                w-full rounded-xl
                border border-white/20
                bg-white/10
                px-4 py-3
                text-white
                placeholder-white/40
                backdrop-blur
                outline-none
                transition
                focus:border-white
              "
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm text-white/80">Message</label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us how we can help..."
              className="
                w-full resize-none rounded-xl
                border border-white/20
                bg-white/10
                px-4 py-3
                text-white
                placeholder-white/40
                backdrop-blur
                outline-none
                transition
                focus:border-white
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={!name || !email || !message}
            className="
              w-full rounded-full
              bg-white text-black
              py-3 font-medium
              transition
              hover:brightness-110
              disabled:opacity-40
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
