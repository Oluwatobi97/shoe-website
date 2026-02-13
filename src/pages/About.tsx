export function About() {
  return (
    <section className="space-y-6 rounded-3xl bg-white/80 p-6 text-sm text-slate-600 shadow-xl shadow-purple-deep/15 sm:p-8 lg:p-10">
      <div className="space-y-2">
        <h1 className="bg-gradient-to-r from-purple-deep to-purple-rich bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
          About T&amp;K
        </h1>
        <p>
          T&amp;K is a modern mini–ecommerce experience focused on clean design,
          simple ordering, and a delightful browsing experience on any device.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            Our Mission
          </h2>
          <p>
            We believe great everyday products should be easy to discover. This
            demo store showcases a curated collection of essentials with a
            focus on clarity, accessibility, and smooth user experience.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            Designed for mobile first
          </h2>
          <p>
            The layout, typography, and interactions are built with a
            mobile‑first mindset so your customers can browse and order
            comfortably from any screen size.
          </p>
        </div>
      </div>
    </section>
  );
}

