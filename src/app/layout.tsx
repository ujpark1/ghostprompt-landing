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
    "teleprompter software mac",
    "video call teleprompter",
    "presentation teleprompter",
    "OBS teleprompter",
    "Microsoft Teams teleprompter",
    "Google Meet teleprompter",
    "teleprompter overlay mac",
    "invisible screen overlay",
    "script reader for presentations",
    "auto scroll teleprompter",
    "macOS teleprompter app",
    "teleprompter for zoom calls",
    "hidden teleprompter for screen sharing",
  ],
  alternates: {
    canonical: "https://ghostprompt.app",
  },
  openGraph: {
    title: "GhostPrompt - Invisible Mac Teleprompter for Screen Sharing",
    description:
      "Read scripts naturally during video calls without anyone knowing. Invisible during screen sharing on Zoom, Teams, Meet & OBS. $24.99 lifetime.",
    url: "https://ghostprompt.app",
    siteName: "GhostPrompt",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GhostPrompt - Invisible Mac Teleprompter for Screen Sharing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostPrompt - Invisible Mac Teleprompter for Screen Sharing",
    description:
      "Read scripts naturally during video calls without anyone knowing. Invisible during screen sharing on Zoom, Teams, Meet & OBS. $24.99 lifetime.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "apple-itunes-app": "app-id=XXXXXXXXXX",
  },
};

const faqItems = [
  {
    question: "How does GhostPrompt stay invisible during screen sharing?",
    answer:
      "GhostPrompt uses the official macOS screen-capture exclusion API (available since macOS 12.0). This tells the operating system to exclude the window from all screen captures, recordings, and shares. It's not a hack — it's a built-in macOS feature.",
  },
  {
    question: "Does it work with Zoom, Teams, and Google Meet?",
    answer:
      "Yes! Because GhostPrompt uses an OS-level API, it works with every screen sharing and recording app — Zoom, Microsoft Teams, Google Meet, Slack, Discord, OBS, Loom, and more.",
  },
  {
    question: "Will my audience notice anything?",
    answer:
      "No. The overlay is completely invisible in screen shares and recordings. Your audience will only see your normal desktop. There's no visual artifact, flicker, or any indication that a teleprompter is running.",
  },
  {
    question: "Can I control the scroll speed?",
    answer:
      "Yes. You can set speed from 30 to 300 words per minute. Use the slider, or press the Up/Down arrow keys during playback to adjust on the fly.",
  },
  {
    question: "What are section markers?",
    answer:
      "You can add [PAUSE] to automatically pause at specific points, and [SECTION:name] to create named jump points. These appear as buttons in the control bar for quick navigation.",
  },
  {
    question: "Does it work on multiple monitors?",
    answer:
      "Yes. You can drag the overlay to any monitor and resize it freely. Position it wherever feels most natural for maintaining eye contact with your camera.",
  },
  {
    question: "Is there a subscription?",
    answer:
      "No. GhostPrompt is a one-time purchase of $24.99. All future updates are included for free. No accounts, no subscriptions, no upsells.",
  },
  {
    question: "What macOS version do I need?",
    answer:
      "GhostPrompt requires macOS 12.0 (Monterey) or later. The screen-capture exclusion API was introduced in macOS 12.0.",
  },
  {
    question: "Can I import scripts from other apps?",
    answer:
      "Yes. You can paste text directly, or import .txt files. GhostPrompt also has a built-in note manager for organizing multiple scripts.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "GhostPrompt is available as a one-time purchase on the Mac App Store. Check the App Store listing for current availability.",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}

        {/* SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "GhostPrompt",
              description:
                "Invisible Mac teleprompter for screen sharing. Read scripts naturally during video calls on Zoom, Teams, Meet, and OBS without anyone knowing.",
              operatingSystem: "macOS 12.0+",
              applicationCategory: "ProductivityApplication",
              url: "https://ghostprompt.app",
              downloadUrl: "https://ghostprompt.app",
              screenshot: "https://ghostprompt.app/og-image.png",
              softwareVersion: "1.0",
              offers: {
                "@type": "Offer",
                price: "24.99",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2027-12-31",
                url: "https://ghostprompt.app",
                description:
                  "Lifetime license — one-time purchase, all future updates included",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "1",
                bestRating: "5",
                worstRating: "1",
              },
              featureList: [
                "Invisible overlay using macOS screen-capture exclusion API",
                "Works with Zoom, Microsoft Teams, Google Meet, OBS, and more",
                "Adjustable scroll speed from 30 to 300 WPM",
                "Customizable font size, color, opacity, and margins",
                "Hover-to-pause with mouse wheel scroll support",
                "Section markers and auto-pause points",
                "Built-in script manager with auto-save",
                "Full keyboard shortcuts for hands-free control",
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GhostPrompt",
              url: "https://ghostprompt.app",
              logo: "https://ghostprompt.app/icon.png",
            }),
          }}
        />

        {/* FAQPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />

        {/* WebSite Schema (for sitelinks search box potential) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "GhostPrompt",
              url: "https://ghostprompt.app",
              description:
                "Invisible Mac teleprompter for screen sharing on Zoom, Teams, Meet, and OBS.",
            }),
          }}
        />
      </body>
    </html>
  );
}
