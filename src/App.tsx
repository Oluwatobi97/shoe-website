import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <div className="animated-bg fixed inset-0 -z-10" />

      <header className="border-b border-white/30 bg-white/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            to="/"
            className="group flex items-center gap-1 text-3xl sm:text-4xl font-extrabold tracking-tight animate-in fade-in duration-700"
          >
            <span className="bg-gradient-to-r from-purple-deep via-purple-medium to-purple-rich bg-clip-text text-transparent transition-all duration-500 group-hover:brightness-125">
              T&
            </span>

            <span className="relative text-white px-2 py-1 rounded-lg bg-gradient-to-r from-purple-deep to-purple-rich shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-purple-500/50">
              K
            </span>
          </Link>

          <nav className="flex items-center gap-4 text-xs font-medium text-slate-600 sm:text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-full px-3 py-1 transition hover:text-purple-deep ${
                  isActive ? "bg-purple-light/60 text-purple-deep" : ""
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `rounded-full px-3 py-1 transition hover:text-purple-deep ${
                  isActive ? "bg-purple-light/60 text-purple-deep" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `rounded-full px-3 py-1 transition hover:text-purple-deep ${
                  isActive ? "bg-purple-light/60 text-purple-deep" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-10 pt-6 sm:pt-8 lg:pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="border-t border-white/30 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-slate-500">
          © {new Date().getFullYear()} simple shop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
