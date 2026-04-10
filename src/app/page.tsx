"use client";

import { useState } from "react";
import {
  Ghost,
  Eye,
  EyeOff,
  Monitor,
  Zap,
  Type,
  Gauge,
  MousePointerClick,
  Download,
  ChevronDown,
  Check,
  Star,
  ArrowRight,
  Play,
  Pause,
  Menu,
  X,
} from "lucide-react";

// ─── Header ─────────────────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Ghost className="w-6 h-6 text-purple-400" />
          <span className="text-lg font-semibold text-white">GhostPrompt</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition-colors">How It Works</a>
          <a href="#compatibility" className="text-sm text-zinc-400 hover:text-white transition-colors">Compatibility</a>
          <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-sm text-zinc-400 hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pricing"
            className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors"
          >
            Get GhostPrompt — $24.99
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 py-4 border-t border-white/5 bg-black/90">
          <nav className="flex flex-col gap-4">
            <a href="#features" className="text-sm text-zinc-400 hover:text-white" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-white" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#compatibility" className="text-sm text-zinc-400 hover:text-white" onClick={() => setMenuOpen(false)}>Compatibility</a>
            <a href="#pricing" className="text-sm text-zinc-400 hover:text-white" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="text-sm text-zinc-400 hover:text-white" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href="#pricing" className="px-5 py-2 rounded-full bg-purple-600 text-white text-sm font-medium text-center" onClick={() => setMenuOpen(false)}>
              Get GhostPrompt — $24.99
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
          <Ghost className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300">Invisible to screen sharing</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Read your script.
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Nobody sees it.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          GhostPrompt is a Mac teleprompter that stays completely invisible during screen sharing.
          Read scripts naturally on Zoom, Teams, Meet, and more — without anyone knowing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#pricing"
            className="px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-base transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download for Mac — $24.99
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 rounded-full border border-white/10 hover:border-white/20 text-white font-medium text-base transition-colors flex items-center gap-2"
          >
            See How It Works
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Visual comparison */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* What you see */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 text-left">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">What you see</span>
              </div>
              <div className="rounded-lg bg-black/60 p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="space-y-2">
                  <div className="text-center text-sm text-zinc-300 leading-relaxed opacity-60">
                    Welcome everyone to today&apos;s quarterly review...
                  </div>
                  <div className="text-center text-base text-white leading-relaxed font-medium">
                    Our revenue grew 34% this quarter, driven by
                    strong enterprise adoption across three key segments.
                  </div>
                  <div className="text-center text-sm text-zinc-500 leading-relaxed opacity-40">
                    Let me walk you through the highlights...
                  </div>
                </div>
              </div>
            </div>

            {/* What they see */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 text-left">
              <div className="flex items-center gap-2 mb-4">
                <EyeOff className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-green-300">What they see</span>
              </div>
              <div className="rounded-lg bg-black/60 p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3 py-4">
                  <div className="h-3 bg-zinc-700/30 rounded w-full" />
                  <div className="h-3 bg-zinc-700/30 rounded w-4/5" />
                  <div className="h-3 bg-zinc-700/30 rounded w-3/5" />
                  <div className="text-center text-xs text-zinc-600 mt-4">
                    Your normal screen — no teleprompter visible
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features ────────────────────────────────────────────────────────────────
const features = [
  {
    icon: EyeOff,
    title: "Truly Invisible",
    description: "Uses macOS screen-capture exclusion API. Your teleprompter never appears in screen shares, recordings, or screenshots.",
    color: "purple",
  },
  {
    icon: Gauge,
    title: "Adjustable Speed",
    description: "Control scroll speed from 30 to 300 WPM. Use keyboard shortcuts or mouse to adjust on the fly.",
    color: "blue",
  },
  {
    icon: Type,
    title: "Customizable Text",
    description: "Adjust font size, line spacing, margins, and text color. Make it comfortable for your eyes.",
    color: "pink",
  },
  {
    icon: MousePointerClick,
    title: "Hover to Pause",
    description: "Hover your mouse over the overlay to instantly pause scrolling. Scroll manually with your mouse wheel.",
    color: "orange",
  },
  {
    icon: Monitor,
    title: "Resizable Overlay",
    description: "Drag and resize the transparent overlay anywhere on screen. Adjustable opacity from 10% to 100%.",
    color: "green",
  },
  {
    icon: Zap,
    title: "Section Markers",
    description: "Add [PAUSE] and [SECTION:name] markers to your scripts for automatic pause points and quick navigation.",
    color: "yellow",
  },
  {
    icon: Play,
    title: "Full Keyboard Control",
    description: "Space to play/pause, arrow keys for speed and manual scroll, Escape to reset. Never touch the mouse.",
    color: "cyan",
  },
];

const colorMap: Record<string, string> = {
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
  yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need to present confidently
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A teleprompter built specifically for screen sharing — with the features presenters actually need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50 p-6 transition-colors"
            >
              <div className={`inline-flex p-2.5 rounded-xl border ${colorMap[feature.color]} mb-4`}>
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ────────────────────────────────────────────────────────────
const steps = [
  {
    step: "01",
    title: "Write or paste your script",
    description: "Type directly, paste from your notes, or import a text file. Organize scripts in the built-in note manager.",
  },
  {
    step: "02",
    title: "Launch the invisible overlay",
    description: "Click Start to open the floating teleprompter. Position and resize it anywhere on your screen.",
  },
  {
    step: "03",
    title: "Present like a pro",
    description: "Share your screen confidently. The overlay is completely invisible to everyone else — only you can see it.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Up and running in seconds
          </h2>
          <p className="text-zinc-400 text-lg">
            No complex setup. No accounts. Just a teleprompter that works.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={step.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center">
                <span className="text-sm font-bold text-purple-400">{step.step}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Compatibility ───────────────────────────────────────────────────────────
const apps = [
  "Zoom", "Microsoft Teams", "Google Meet", "Slack Huddle",
  "FaceTime", "Discord", "Webex", "OBS Studio",
  "Loom", "QuickTime", "Skype", "StreamYard",
];

function Compatibility() {
  return (
    <section id="compatibility" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Works with every app
        </h2>
        <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
          GhostPrompt uses the macOS screen-capture exclusion API, so it&apos;s invisible to all screen sharing and recording apps.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {apps.map((app) => (
            <div
              key={app}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors"
            >
              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-sm text-zinc-300">{app}</span>
            </div>
          ))}
        </div>

        <p className="text-zinc-500 text-sm mt-6">
          Requires macOS 12.0 (Monterey) or later
        </p>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          One price. Yours forever.
        </h2>
        <p className="text-zinc-400 text-lg mb-12">
          No subscriptions. No hidden fees. Pay once, use forever.
        </p>

        <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-900/20 to-zinc-900/50 p-8">
          <div className="mb-6">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-bold text-white">$24</span>
              <span className="text-2xl font-bold text-white">.99</span>
            </div>
            <p className="text-zinc-400">Lifetime license — all future updates included</p>
          </div>

          <ul className="text-left space-y-3 mb-8">
            {[
              "Invisible overlay for screen sharing",
              "Built-in script manager",
              "Adjustable speed, font, and opacity",
              "Section markers & auto-pause",
              "Keyboard shortcuts for full control",
              "All future updates free",
              "Works with Zoom, Teams, Meet & more",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-zinc-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="block w-full py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-base transition-colors"
          >
            Download for Mac
          </a>

          <p className="text-zinc-500 text-xs mt-4">
            Available on the Mac App Store. Requires macOS 12.0+
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="flex -space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-zinc-400">Loved by presenters, teachers, and content creators</span>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How does GhostPrompt stay invisible during screen sharing?",
    a: "GhostPrompt uses the official macOS screen-capture exclusion API (available since macOS 12.0). This tells the operating system to exclude the window from all screen captures, recordings, and shares. It's not a hack — it's a built-in macOS feature.",
  },
  {
    q: "Does it work with Zoom, Teams, and Google Meet?",
    a: "Yes! Because GhostPrompt uses an OS-level API, it works with every screen sharing and recording app — Zoom, Microsoft Teams, Google Meet, Slack, Discord, OBS, Loom, and more.",
  },
  {
    q: "Will my audience notice anything?",
    a: "No. The overlay is completely invisible in screen shares and recordings. Your audience will only see your normal desktop. There's no visual artifact, flicker, or any indication that a teleprompter is running.",
  },
  {
    q: "Can I control the scroll speed?",
    a: "Yes. You can set speed from 30 to 300 words per minute. Use the slider, or press the Up/Down arrow keys during playback to adjust on the fly.",
  },
  {
    q: "What are section markers?",
    a: "You can add [PAUSE] to automatically pause at specific points, and [SECTION:name] to create named jump points. These appear as buttons in the control bar for quick navigation.",
  },
  {
    q: "Does it work on multiple monitors?",
    a: "Yes. You can drag the overlay to any monitor and resize it freely. Position it wherever feels most natural for maintaining eye contact with your camera.",
  },
  {
    q: "Is there a subscription?",
    a: "No. GhostPrompt is a one-time purchase of $24.99. All future updates are included for free. No accounts, no subscriptions, no upsells.",
  },
  {
    q: "What macOS version do I need?",
    a: "GhostPrompt requires macOS 12.0 (Monterey) or later. The screen-capture exclusion API was introduced in macOS 12.0.",
  },
  {
    q: "Can I import scripts from other apps?",
    a: "Yes. You can paste text directly, or import .txt files. GhostPrompt also has a built-in note manager for organizing multiple scripts.",
  },
  {
    q: "Is there a free trial?",
    a: "GhostPrompt is available as a one-time purchase on the Mac App Store. Check the App Store listing for current availability.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-white/5 bg-zinc-900/30">
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Ghost className="w-5 h-5 text-purple-400" />
          <span className="text-sm text-zinc-400">GhostPrompt</span>
        </div>
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} GhostPrompt. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Compatibility />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
