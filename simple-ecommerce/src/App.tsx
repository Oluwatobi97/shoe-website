import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { CategoryPage } from "./pages/CategoryPage";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div
      className="
        min-h-screen text-white
        bg-[radial-gradient(circle_at_top,#111_0%,#000_60%)]
      "
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-[140px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            to="/"
            className="flex items-center gap-1 text-3xl font-extrabold tracking-tight"
          >
            <span className="transition hover:brightness-125">T&</span>
            <span className="rounded-lg bg-[#643511] px-2 py-1 text-black shadow-md">
              K
            </span>
          </Link>

          <nav className="flex items-center gap-4 text-sm font-medium">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-full px-4 py-1.5 transition ${
                    isActive
                      ? "bg-white text-black"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-white/60">
          © {new Date().getFullYear()} T&K. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
