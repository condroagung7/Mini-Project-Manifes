import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/reqres";
import { useAuth } from "../context/AuthContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await registerUser(form);
      setSuccess(true);
      login(res.token, form.email);
      setTimeout(() => navigate("/home"), 1000);
    } catch (err: any) {
      setError(err.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-md animate-fade-in">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl items-center justify-center mb-4">
            <span className="text-accent text-xl">✦</span>
          </div>
          <h1 className="font-display font-bold text-3xl text-ink-50 tracking-tight">Create account</h1>
          <p className="text-ink-500 text-sm mt-2">
            Use a{" "}
            <a href="https://reqres.in" target="_blank" rel="noreferrer" className="text-accent hover:underline">
              reqres.in
            </a>{" "}
            registered email
          </p>
        </div>

        <div className="card p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-ink-400 mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="eve.holt@reqres.in"
                className="input-field"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-ink-400 mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="input-field"
                autoComplete="new-password"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 bg-danger/10 border border-danger/20 rounded-lg px-4 py-3 animate-fade-in">
                <span className="text-danger text-sm">✗</span>
                <p className="text-danger text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="flex items-center gap-2 bg-success/10 border border-success/20 rounded-lg px-4 py-3 animate-fade-in">
                <span className="text-success text-sm">✓</span>
                <p className="text-success text-sm font-medium">Registered successfully! Redirecting...</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || success}
              className="btn-primary w-full mt-2 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-ink-900/40 border-t-ink-900 rounded-full animate-spin" />
                  Registering...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="mt-4 pt-4 border-t border-ink-700 text-center">
            <p className="text-sm text-ink-500">
              Already have an account?{" "}
              <Link to="/login" className="text-accent hover:underline font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* Hint */}
        <p className="text-center text-xs text-ink-600 mt-4 font-mono">
          Try: eve.holt@reqres.in / cityslicka
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
