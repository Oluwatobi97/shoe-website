export function About() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl space-y-14 px-4">
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">About T&K</h1>

          <p className="text-white/70 leading-relaxed">
            T&K is a premium leather brand focused on timeless craftsmanship,
            refined masculinity, and modern elegance. Every product reflects
            durability, confidence, and understated luxury.
          </p>
        </div>

        {/* Glass Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl">
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <p className="text-white/70 leading-relaxed">
              We create leather products that stand the test of time. True style
              is effortless — built on quality materials, precision
              craftsmanship, and intentional design.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl">
            <h2 className="text-xl font-semibold mb-3">
              Designed for Modern Men
            </h2>
            <p className="text-white/70 leading-relaxed">
              Every experience on T&K is minimal and refined. From browsing to
              ordering, we remove distractions so customers focus purely on
              quality and style.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Quality First",
              text: "Premium materials and expert craftsmanship ensure durability and comfort.",
            },
            {
              title: "Timeless Design",
              text: "Clean aesthetics that remain stylish across seasons.",
            },
            {
              title: "Customer Focused",
              text: "A seamless shopping experience built on trust and simplicity.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-6
                shadow-lg
              "
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
