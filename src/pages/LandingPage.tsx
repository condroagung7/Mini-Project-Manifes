import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LandingPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <main className="flex-1 flex items-center justify-center px-4 pt-20">
        <div className="max-w-3xl w-full mx-auto text-center py-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-ink-800 border border-ink-700 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-xs font-mono text-ink-400">Bea Cukai Balikpapan</span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-ink-50 leading-[1.05] tracking-tight mb-6 animate-fade-in stagger-1">
            Redress Manifes
            <br />
            <span className="text-accent">Paperless.</span>
          </h1>

          <p className="text-ink-400 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-10 animate-fade-in stagger-2">
            Perubahan data manifes yang cepat, akurat dan transparansi dalam pelayanan .
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in stagger-3">
            {isAuthenticated ? (
              <Link to="/home" className="btn-primary text-base px-8 py-3.5">
                View Users →
              </Link>
            ) : (
              <>
                <Link to="/register" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
                  Get Started →
                </Link>
                <Link to="/login" className="btn-secondary text-base px-8 py-3.5 w-full sm:w-auto">
                  Login
                </Link>
              </>
            )}
          </div>

    
          
        
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-ink-800 py-5">
        <p className="text-center text-xs text-ink-600 font-mono">
          Created by{" "}
          <a href="https://reqres.in" target="_blank" rel="noreferrer" className="text-ink-400 hover:text-accent transition-colors">
            Condro Agung
          </a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
