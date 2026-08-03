import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Call My Kin · Learn to call your Chinese family",
  description:
    "Master Chinese family relationship terms in Cantonese, Mandarin, Hakka, Hokkien and Teochew. Audio pronunciation, formal & informal forms, for the diaspora.",
  keywords: [
    "Chinese family terms",
    "Cantonese",
    "Mandarin",
    "Hakka",
    "Hokkien",
    "Teochew",
    "family relationships",
    "Chinese diaspora",
    "language learning",
  ],
  openGraph: {
    title: "Call My Kin · Learn to call your Chinese family",
    description:
      "Master Chinese family relationship terms in Cantonese, Mandarin, Hakka, Hokkien and Teochew.",
    type: "website",
  },
  icons: {
    icon: {
      url: "/cmk/brand_assets/favicon-round.png?v=4",
      sizes: "512x512",
      type: "image/png",
    },
    shortcut: "/cmk/brand_assets/favicon-round.png?v=4",
    apple: "/cmk/brand_assets/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
