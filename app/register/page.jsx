"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    acceptTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    if (form.password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }
    if (!form.acceptTerms) {
      setMessage("Please accept the Terms and Conditions and Privacy Policy.");
      return;
    }
    setLoading(true);
    // Simulate registration – replace with your backend API
    await new Promise((r) => setTimeout(r, 1200));
    setMessage("Account created! You can now log in.");
    setLoading(false);
    setForm({ name: "", email: "", password: "", confirmPassword: "", company: "", acceptTerms: false });
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] flex flex-col">
      <header className="border-b border-[var(--border)] bg-[var(--bg-card)] px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline text-[var(--text)] font-bold text-xl">
            <span className="logo-icon text-[1.1rem]">C</span>
            CRM Basegrid
          </Link>
          <Link href="/" className="text-[var(--text-muted)] text-sm hover:text-[var(--accent)] transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] shadow-[var(--shadow-lg)] p-8">
            <h1 className="text-2xl font-bold text-[var(--text)] mb-2">Create an account</h1>
            <p className="text-[var(--text-muted)] text-sm mb-6">
              Get started with CRM Basegrid. Manage your customer relationships in one place.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                  required
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                  required
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Company <span className="text-[var(--text-muted)] font-normal">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                  autoComplete="organization"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                  required
                  minLength={8}
                  autoComplete="new-password"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat password"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                  required
                  autoComplete="new-password"
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  checked={form.acceptTerms}
                  onChange={handleChange}
                  className="mt-1 rounded border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)]"
                />
                <label htmlFor="acceptTerms" className="text-sm text-[var(--text-muted)]">
                  I agree to the{" "}
                  <Link href="/terms" className="text-[var(--accent)] hover:underline">Terms and Conditions</Link>
                  {" "}and{" "}
                  <Link href="/privacy-policy" className="text-[var(--accent)] hover:underline">Privacy Policy</Link>.
                </label>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-3.5 rounded-xl font-semibold disabled:opacity-60"
              >
                {loading ? "Creating account…" : "Create account"}
              </button>
            </form>

            {message && (
              <p className={`mt-4 text-sm ${message.includes("created") ? "text-emerald-600" : "text-red-600"}`}>
                {message}
              </p>
            )}

            <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
              Already have an account?{" "}
              <Link href="/login" className="text-[var(--accent)] font-semibold hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
