import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weframetech Dashboard",
  description: "Admin dashboard built with Next.js, ShadCN UI, and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-slate-50">
        {children}
      </body>
    </html>
  );
}
