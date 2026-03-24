import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layak Viral — Worthy of Going Viral",
  description:
    "Kurasi konten terbaik Indonesia. Yang layak viral, kita viralkan. Platform untuk menemukan konten yang benar-benar worth sharing.",
  openGraph: {
    title: "Layak Viral — Worthy of Going Viral",
    description:
      "Kurasi konten terbaik Indonesia. Yang layak viral, kita viralkan.",
    siteName: "Layak Viral",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Layak Viral — Worthy of Going Viral",
  },
};

export default function LayakViralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
