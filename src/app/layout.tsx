import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COBABANTU.COM — Smart Digital & AI Solutions",
  description:
    "COBABANTU.COM menyediakan jasa pembuatan website, aplikasi mobile, dashboard interaktif, AI & otomatisasi, dan analisis data untuk bisnis Anda.",
  keywords: [
    "jasa website",
    "pembuatan website",
    "aplikasi mobile",
    "dashboard data",
    "AI otomatisasi",
    "analisis data",
    "UMKM digital",
    "toko online",
  ],
  authors: [{ name: "COBABANTU" }],
  openGraph: {
    title: "COBABANTU.COM — Smart Digital & AI Solutions",
    description:
      "Jasa pembuatan website, dashboard, AI & analisis data untuk bisnis Anda.",
    url: "https://cobabantu.com",
    siteName: "COBABANTU.COM",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
