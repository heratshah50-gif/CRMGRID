import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  title: "CRM Basegrid – Streamline Sales & Delight Your Customers",
  description:
    "Our CRM isn't just software—it's a catalyst for growth. Streamline sales, delight your customers, and supercharge your team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
