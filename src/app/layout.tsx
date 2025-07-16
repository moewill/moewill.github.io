import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "../styles/animations.css";
import { generateMetadata, organizationSchema, websiteSchema, generateJsonLd } from '@/utils/seo';

// Nagara-inspired typography
const playfairDisplay = Playfair_Display({
  variable: "--font-nagara-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-nagara-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-nagara-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = generateMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={generateJsonLd([organizationSchema, websiteSchema])}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${jetBrainsMono.variable} antialiased bg-nagara-black text-nagara-white font-nagara-sans`}
      >
        {children}
      </body>
    </html>
  );
}
