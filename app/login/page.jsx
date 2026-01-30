"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }
    setLoading(true);
    setMessage("");
    // Simulate OTP send – replace with your backend API
    await new Promise((r) => setTimeout(r, 1000));
    setOtpSent(true);
    setMessage("A one-time password has been sent to your email. Enter it below.");
    setLoading(false);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp.trim() || otp.length < 4) {
      setMessage("Please enter the OTP you received.");
      return;
    }
    setLoading(true);
    setMessage("");
    // Simulate OTP verify – replace with your backend API
    await new Promise((r) => setTimeout(r, 1000));
    setMessage("Login successful! Redirecting...");
    setLoading(false);
    // In production: router.push('/dashboard') or set auth state
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
            <h1 className="text-2xl font-bold text-[var(--text)] mb-2">Log in</h1>
            <p className="text-[var(--text-muted)] text-sm mb-6">
              Sign in with your email. We&apos;ll send you a one-time password (OTP).
            </p>

            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                    required
                    autoComplete="email"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-3.5 rounded-xl font-semibold disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send OTP"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <p className="text-sm text-[var(--text-muted)] mb-2">
                  OTP sent to <strong className="text-[var(--text)]">{email}</strong>
                  <button
                    type="button"
                    onClick={() => { setOtpSent(false); setOtp(""); setMessage(""); }}
                    className="ml-2 text-[var(--accent)] hover:underline"
                  >
                    Change
                  </button>
                </p>
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-[var(--text)] mb-2">
                    One-time password
                  </label>
                  <input
                    id="otp"
                    type="text"
                    inputMode="numeric"
                    maxLength="6"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="000000"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] text-center text-xl tracking-[0.5em] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                    required
                    autoComplete="one-time-code"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-3.5 rounded-xl font-semibold disabled:opacity-60"
                >
                  {loading ? "Verifying…" : "Verify & Log in"}
                </button>
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={loading}
                  className="w-full text-[var(--accent)] text-sm font-medium hover:underline disabled:opacity-60"
                >
                  Resend OTP
                </button>
              </form>
            )}

            {message && (
              <p className={`mt-4 text-sm ${message.includes("success") ? "text-emerald-600" : "text-[var(--text-muted)]"}`}>
                {message}
              </p>
            )}

            <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-[var(--accent)] font-semibold hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-[var(--text-muted)]">
            By logging in, you agree to our{" "}
            <Link href="/terms" className="text-[var(--accent)] hover:underline">Terms</Link>
            {" "}and{" "}
            <Link href="/privacy-policy" className="text-[var(--accent)] hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
