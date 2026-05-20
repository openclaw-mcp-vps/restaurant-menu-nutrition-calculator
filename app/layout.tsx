import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NutriMenu — FDA-Compliant Nutrition Labels for Restaurants",
  description: "Calculate nutrition facts for restaurant menus. Generate FDA-compliant nutrition labels instantly based on ingredients and portions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8a80f4e0-0277-4f3b-8581-2038cecc444d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
