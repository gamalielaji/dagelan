import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dagelan — Indonesia's #1 Entertainment Platform",
  description:
    "Platform hiburan dan konten kreatif terbesar di Indonesia. 24M+ komunitas yang terhubung lewat humor, budaya, dan kreativitas.",
  openGraph: {
    title: "Dagelan — Indonesia's #1 Entertainment Platform",
    description:
      "Platform hiburan dan konten kreatif terbesar di Indonesia. 24M+ komunitas.",
    siteName: "Dagelan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dagelan — Indonesia's #1 Entertainment Platform",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
