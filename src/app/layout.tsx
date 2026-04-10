import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ghostprompt.app"),
  title: "GhostPrompt - Invisible Mac Teleprompter for Screen Sharing",
  description:
    "Read scripts naturally during video calls without anyone knowing. GhostPrompt is a Mac teleprompter that stays invisible during screen sharing on Zoom, Teams, Meet, and OBS. One-time purchase, $24.99 lifetime.",
  keywords: [
    "teleprompter",
    "invisible teleprompter",
    "mac teleprompter",
    "screen sharing teleprompter",
    "zoom teleprompter",
    "teleprompter app",
    "teleprompter for mac",
    "video call teleprompter",
    "presentation teleprompter",
    "OBS teleprompter",
    "Microsoft Teams teleprompter",
    "Google Meet teleprompter",
  ],
  openGraph: {
    title: "GhostPrompt - Invisible Mac Teleprompter for Screen Sharing",
    description:
      "Read scripts naturally during video calls without anyone knowing. Invisible during screen sharing. $24.99 lifetime.",
    url: "https://ghostprompt.app",
    siteName: "GhostPrompt",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostPrompt - Invisible Mac Teleprompter",
    description:
      "Read scripts naturally during video calls without anyone knowing. Invisible during screen sharing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "GhostPrompt",
              operatingSystem: "macOS",
              applicationCategory: "ProductivityApplication",
              offers: {
                "@type": "Offer",
                price: "24.99",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "1",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
