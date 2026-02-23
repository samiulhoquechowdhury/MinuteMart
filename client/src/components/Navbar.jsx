import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, SearchIcon, Menu, User } from "lucide-react";

import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, setShowUserLogin, navigate } = useAppContext();

  const logout = async () => {
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm transition-all">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4">
        {/* Logo */}
        <NavLink to="/" onClick={() => setOpen(false)}>
          <h1 className="text-2xl font-bold tracking-tight text-gray-800 hover:text-primary transition">
            Minute <span className="text-primary">Mart</span>
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8 font-medium text-gray-700">
          <NavLink
            to="/"
            className="hover:text-primary transition duration-200"
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className="hover:text-primary transition duration-200"
          >
            All Products
          </NavLink>

          <NavLink
            to="/contact"
            className="hover:text-primary transition duration-200"
          >
            Contact
          </NavLink>

          {/* Search */}
          <div className="hidden lg:flex items-center gap-2 border border-gray-300 px-4 py-1.5 rounded-full bg-gray-50 focus-within:ring-2 focus-within:ring-primary transition">
            <SearchIcon size={18} className="text-gray-500" />
            <input
              className="bg-transparent outline-none text-sm placeholder-gray-400 w-40"
              type="text"
              placeholder="Search products..."
            />
          </div>

          {/* Cart */}
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer group"
          >
            <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-primary transition" />
            <span className="absolute -top-2 -right-2 text-xs text-white bg-primary w-5 h-5 flex items-center justify-center rounded-full shadow-md">
              3
            </span>
          </div>

          {/* Auth */}
          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="px-6 py-2 rounded-full bg-primary text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Login
            </button>
          ) : (
            <div className="relative group">
              <User className="w-9 h-9 p-2 bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:bg-primary hover:text-white transition" />

              {/* Dropdown */}
              <ul className="absolute right-0 mt-3 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li
                  onClick={() => navigate("my-orders")}
                  className="px-4 py-2 hover:bg-primary/10 cursor-pointer transition"
                >
                  My Orders
                </li>
                <li
                  onClick={logout}
                  className="px-4 py-2 hover:bg-red-50 text-red-500 cursor-pointer transition"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden bg-white border-t border-gray-200 shadow-md px-6 py-5 flex flex-col gap-4 text-gray-700 font-medium animate-in slide-in-from-top-2 duration-200">
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={() => setOpen(false)}>
            All Products
          </NavLink>

          {user && (
            <NavLink to="/orders" onClick={() => setOpen(false)}>
              My Orders
            </NavLink>
          )}

          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="mt-2 px-6 py-2 rounded-full bg-primary text-white shadow hover:shadow-lg transition"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="mt-2 px-6 py-2 rounded-full bg-red-500 text-white shadow hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
