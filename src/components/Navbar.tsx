import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-ink-800 bg-ink-950/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center">
              <span className="font-display font-bold text-ink-950 text-xs">M</span>
            </div>
            <span className="font-display font-bold text-ink-100 text-lg tracking-tight">
              Manifes<span className="text-accent">.</span>bpn
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-1">
            {isAuthenticated && (
              <>
                <Link
                  to="/home"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive("/home")
                      ? "bg-ink-800 text-accent"
                      : "text-ink-400 hover:text-ink-100 hover:bg-ink-800/50"
                  }`}
                >
                  Users
                </Link>
              </>
            )}
          </div>

          {/* Right side */}
          <div className="hidden sm:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-xs text-ink-500 font-mono truncate max-w-[160px]">
                  {user?.email}
                </span>
                <button onClick={handleLogout} className="btn-secondary text-sm px-4 py-2">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="btn-secondary text-sm px-4 py-2">
                  Login
                </Link>
                <Link to="/register" className="btn-primary text-sm px-4 py-2">
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 rounded-lg text-ink-400 hover:text-ink-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden border-t border-ink-800 py-3 space-y-1 animate-fade-in">
            {isAuthenticated ? (
              <>
                <Link
                  to="/home"
                  className="block px-4 py-2.5 text-sm text-ink-300 hover:text-accent rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Users
                </Link>
                <div className="px-4 py-2 text-xs text-ink-500 font-mono border-t border-ink-800 mt-2 pt-3">
                  {user?.email}
                </div>
                <button
                  onClick={() => { handleLogout(); setMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2.5 text-sm text-danger hover:bg-ink-800 rounded-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-4 py-2.5 text-sm text-ink-300 hover:text-accent rounded-lg" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/register" className="block px-4 py-2.5 text-sm text-accent rounded-lg" onClick={() => setMenuOpen(false)}>
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
