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
  Menu,
  X,
  ShieldCheck,
  Mail,
  AlertTriangle,
  Video,
  Presentation,
  BookOpen,
  Clock,
  Image as ImageIcon,
} from "lucide-react";

// ─── Header ─────────────────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-zinc-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        <a href="/" className="flex items-center gap-2" aria-label="GhostPrompt home">
          <Ghost className="w-6 h-6 text-purple-600" aria-hidden="true" />
          <span className="text-lg font-semibold text-zinc-900">GhostPrompt</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">How It Works</a>
          <a href="#compatibility" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Compatibility</a>
          <a href="#pricing" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Pricing</a>
          <a href="#faq" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">FAQ</a>
          <a href="#blog" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Blog</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/GhostPrompt.dmg"
            className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-colors"
            download
          >
            Download Free
          </a>
        </div>

        <button
          className="md:hidden text-zinc-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden px-6 py-4 border-t border-zinc-200 bg-white/95">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            <a href="#features" className="text-sm text-zinc-500 hover:text-zinc-900" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-sm text-zinc-500 hover:text-zinc-900" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#compatibility" className="text-sm text-zinc-500 hover:text-zinc-900" onClick={() => setMenuOpen(false)}>Compatibility</a>
            <a href="#pricing" className="text-sm text-zinc-500 hover:text-zinc-900" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="text-sm text-zinc-500 hover:text-zinc-900" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href="#blog" className="text-sm text-zinc-500 hover:text-zinc-900" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="/GhostPrompt.dmg" className="px-5 py-2 rounded-full bg-purple-600 text-white text-sm font-medium text-center" onClick={() => setMenuOpen(false)} download>
              Download Free
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
    <section className="relative pt-32 pb-20 px-6 overflow-hidden" aria-labelledby="hero-heading">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-200/40 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 mb-8">
          <Ghost className="w-4 h-4 text-purple-600" aria-hidden="true" />
          <span className="text-sm text-purple-700">Invisible to screen sharing</span>
        </div>

        <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold text-zinc-900 leading-tight tracking-tight mb-6">
          The Invisible Mac Teleprompter
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            for Screen Sharing
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          GhostPrompt is a <strong className="text-zinc-700">Mac teleprompter</strong> that stays completely invisible during screen sharing.
          Read scripts naturally on <strong className="text-zinc-700">Zoom, Teams, Google Meet</strong>, and OBS — without anyone knowing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="/GhostPrompt.dmg"
            className="px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-base transition-colors flex items-center gap-2"
            aria-label="Download GhostPrompt for Mac"
            download
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Download for Mac — Free
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 rounded-full border border-zinc-200 hover:border-zinc-300 text-zinc-700 font-medium text-base transition-colors flex items-center gap-2"
          >
            See How It Works
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Demo Video */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl border border-zinc-200">
            {/* macOS window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 border-b border-zinc-700">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            {/*
              Replace the placeholder below with your demo video:
              <video
                src="/demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            */}
            <div className="aspect-video flex items-center justify-center bg-zinc-900 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-600/90 flex items-center justify-center cursor-pointer hover:bg-purple-500 transition-colors shadow-lg">
                  <Play className="w-7 h-7 text-white ml-1" />
                </div>
              </div>
              <p className="absolute bottom-4 text-sm text-zinc-500">Demo video coming soon</p>
            </div>
          </div>
          <p className="text-center text-sm text-zinc-400 mt-4">macOS 14+ &middot; Apple Silicon &amp; Intel</p>
        </div>
      </div>
    </section>
  );
}

// ─── Problem Section ─────────────────────────────────────────────────────────
function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-zinc-50" aria-labelledby="problem-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            This keeps happening.
          </h2>
          <p className="text-xl text-zinc-500">
            And every time, it costs you more than you realize.
          </p>
        </div>

        {/* Scenario 1: Presenter */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-red-50 border border-red-200">
              <Presentation className="w-5 h-5 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900">The Presenter&apos;s Nightmare</h3>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-600">
            <p>
              You prepared for hours. You know <em>exactly</em> what to say. Then the Zoom call starts, the screen share goes live, and...
            </p>
            <p className="text-zinc-900 font-semibold text-xl">
              Your mind goes completely blank.
            </p>
            <p>
              You glance at your notes. Just for a second. But your eyes dart away from the camera.
              <strong className="text-zinc-800"> Everyone notices.</strong> You look unprepared. Unprofessional.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-red-700 font-medium">
                Or even worse — you read directly from your screen. The scanning eyes. The unnatural pauses. The robotic delivery.
              </p>
              <p className="text-red-600 mt-2 font-semibold">
                &ldquo;Were they reading from a script?&rdquo;
              </p>
              <p className="text-red-700 mt-2">
                The moment they think that, your credibility is gone. The deal. The promotion. The opportunity. <strong>Gone.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Scenario 2: Content Creator */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-orange-50 border border-orange-200">
              <Video className="w-5 h-5 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900">The Creator&apos;s Dilemma</h3>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-600">
            <p>
              You&apos;re recording a tutorial. Screen sharing your code, your design, your workflow. The content is great. But you need to <em>talk</em> while you do it.
            </p>
            <p>
              Your script is on your phone, propped up next to the monitor. You keep glancing sideways. Your eyes leave the camera every 10 seconds.
              <strong className="text-zinc-800"> The viewer can tell you&apos;re reading something off-screen.</strong>
            </p>
            <p>
              You try putting notes on screen — but you&apos;re sharing your screen. <strong className="text-zinc-800">They can see everything.</strong>
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-700 font-medium">
                You&apos;re stuck choosing between sounding polished and looking natural. You can&apos;t have both.
              </p>
              <p className="text-orange-600 mt-2 font-semibold">
                Until now.
              </p>
            </div>
          </div>
        </div>

        {/* The Solution Bridge */}
        <div className="text-center bg-white border border-purple-200 rounded-2xl p-8 shadow-sm">
          <p className="text-zinc-500 text-base mb-3">Here&apos;s the thing:</p>
          <p className="text-xl md:text-2xl font-bold text-zinc-900 mb-4">
            The best presenters don&apos;t wing it. They have a secret weapon.
          </p>
          <p className="text-lg text-zinc-600 mb-6">
            A teleprompter that&apos;s <strong className="text-purple-600">completely invisible</strong> during screen sharing. One that lets them read every word while looking straight into the camera.
          </p>
          <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Now it&apos;s your turn.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── App Screenshot ──────────────────────────────────────────────────────────
function AppScreenshot() {
  return (
    <section className="py-24 px-6" aria-labelledby="screenshot-heading">
      <div className="max-w-5xl mx-auto text-center">
        <h2 id="screenshot-heading" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
          Clean, Simple, Powerful
        </h2>
        <p className="text-zinc-500 text-lg mb-12 max-w-2xl mx-auto">
          A distraction-free editor with built-in script management. Write your script, click Start, and present like a pro.
        </p>

        {/*
          Replace the placeholder below with your actual screenshot:
          <img
            src="/app-screenshot.png"
            alt="GhostPrompt app - script editor with sidebar note manager"
            className="w-full rounded-2xl shadow-2xl border border-zinc-200"
          />
        */}
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 overflow-hidden shadow-2xl">
          <div className="aspect-[16/10] flex items-center justify-center">
            <div className="text-center">
              <ImageIcon className="w-16 h-16 text-zinc-300 mx-auto mb-4" />
              <p className="text-zinc-400 text-sm">App screenshot coming soon</p>
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
    title: "Truly Invisible Overlay",
    description: "Uses the macOS screen-capture exclusion API. Your teleprompter never appears in screen shares, recordings, or screenshots — guaranteed by the operating system.",
    color: "purple",
  },
  {
    icon: Gauge,
    title: "Adjustable Scroll Speed",
    description: "Control auto-scroll speed from 30 to 300 words per minute. Use keyboard shortcuts or the mouse to adjust speed in real time.",
    color: "blue",
  },
  {
    icon: Type,
    title: "Customizable Text Display",
    description: "Adjust font size, line spacing, text margins, and color to match your preference. Readable from any distance on any display.",
    color: "pink",
  },
  {
    icon: MousePointerClick,
    title: "Hover to Pause & Scroll",
    description: "Hover your mouse over the overlay to instantly pause auto-scrolling. Use your mouse wheel to manually scroll up or down through the script.",
    color: "orange",
  },
  {
    icon: Monitor,
    title: "Resizable & Movable Overlay",
    description: "Drag the transparent overlay anywhere on screen and resize freely. Adjust background opacity from 10% to 100% for the perfect reading experience.",
    color: "green",
  },
  {
    icon: Zap,
    title: "Section Markers & Auto-Pause",
    description: "Add [PAUSE] markers for automatic pause points, and [SECTION:name] for quick-jump navigation buttons in the control bar.",
    color: "yellow",
  },
  {
    icon: Play,
    title: "Full Keyboard Control",
    description: "Space to play/pause, arrow keys for speed and manual scroll, Escape to reset. Complete hands-free control.",
    color: "cyan",
  },
];

const colorMap: Record<string, string> = {
  purple: "bg-purple-50 text-purple-600 border-purple-200",
  blue: "bg-blue-50 text-blue-600 border-blue-200",
  pink: "bg-pink-50 text-pink-600 border-pink-200",
  orange: "bg-orange-50 text-orange-600 border-orange-200",
  green: "bg-green-50 text-green-600 border-green-200",
  yellow: "bg-yellow-50 text-yellow-600 border-yellow-200",
  cyan: "bg-cyan-50 text-cyan-600 border-cyan-200",
};

function Features() {
  return (
    <section id="features" className="py-24 px-6" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Mac Teleprompter Features
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            A teleprompter app built specifically for screen sharing on macOS — with everything presenters, teachers, and creators need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-zinc-200 bg-white hover:shadow-md p-6 transition-shadow"
            >
              <div className={`inline-flex p-2.5 rounded-xl border ${colorMap[feature.color]} mb-4`} aria-hidden="true">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
            </article>
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
    description: "Type directly into the built-in editor, paste from your notes app, or import a .txt file. The auto-saving script manager keeps your notes organized.",
  },
  {
    step: "02",
    title: "Launch the invisible overlay",
    description: "Click Start to open the floating teleprompter overlay. Position and resize it anywhere — it uses the macOS screen-capture exclusion API to stay hidden.",
  },
  {
    step: "03",
    title: "Present naturally on any video call",
    description: "Share your screen on Zoom, Teams, Meet, or any app. The teleprompter is completely invisible to your audience — only you can read it.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-zinc-50" aria-labelledby="how-it-works-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            How the Invisible Teleprompter Works
          </h2>
          <p className="text-zinc-500 text-lg">
            No complex setup. No accounts. Download, paste your script, and start presenting in seconds.
          </p>
        </div>

        <ol className="space-y-8">
          {steps.map((step) => (
            <li key={step.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center" aria-hidden="true">
                <span className="text-sm font-bold text-purple-600">{step.step}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─── Compatibility ───────────────────────────────────────────────────────────
function AppIcon({ color, letter }: { color: string; letter: string }) {
  return (
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      {letter}
    </div>
  );
}

const apps = [
  { name: "Zoom", color: "#0B5CFF", letter: "Z" },
  { name: "Microsoft Teams", color: "#6264A7", letter: "T" },
  { name: "Google Meet", color: "#00897B", letter: "M" },
  { name: "Slack Huddle", color: "#4A154B", letter: "S" },
  { name: "FaceTime", color: "#34C759", letter: "FT" },
  { name: "Discord", color: "#5865F2", letter: "D" },
  { name: "Webex", color: "#00BCF2", letter: "W" },
  { name: "OBS Studio", color: "#302E31", letter: "OBS" },
  { name: "Loom", color: "#625DF5", letter: "L" },
  { name: "QuickTime", color: "#1D1D1F", letter: "QT" },
  { name: "Skype", color: "#00AFF0", letter: "S" },
  { name: "StreamYard", color: "#2B8FBE", letter: "SY" },
];

function Compatibility() {
  return (
    <section id="compatibility" className="py-24 px-6" aria-labelledby="compatibility-heading">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="compatibility-heading" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
          Compatible with Every Screen Sharing App
        </h2>
        <p className="text-zinc-500 text-lg mb-12 max-w-2xl mx-auto">
          GhostPrompt uses the <strong className="text-zinc-700">macOS screen-capture exclusion API</strong>, so the teleprompter overlay is invisible to all screen sharing and recording applications.
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 list-none p-0">
          {apps.map((app) => (
            <li
              key={app.name}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 bg-white hover:shadow-sm transition-shadow"
            >
              <AppIcon color={app.color} letter={app.letter} />
              <span className="text-sm text-zinc-700">{app.name}</span>
            </li>
          ))}
        </ul>

        <p className="text-zinc-400 text-sm mt-6">
          Requires macOS 12.0 (Monterey) or later. Works with any app that uses macOS screen capture.
        </p>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-zinc-50" aria-labelledby="pricing-heading">
      <div className="max-w-lg mx-auto text-center">
        <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
          Pay Once, Use Forever
        </h2>
        <p className="text-zinc-500 text-lg mb-12">
          No subscriptions. No hidden fees. One-time purchase with lifetime updates included.
        </p>

        <div className="rounded-3xl border border-purple-200 bg-gradient-to-b from-purple-50 to-white p-8 shadow-sm">
          <div className="mb-6">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-bold text-zinc-900">$24</span>
              <span className="text-2xl font-bold text-zinc-900">.99</span>
            </div>
            <p className="text-zinc-500">Lifetime license — all future updates included</p>
          </div>

          <ul className="text-left space-y-3 mb-8" aria-label="What's included">
            {[
              "Invisible teleprompter overlay for screen sharing",
              "Built-in script manager with auto-save",
              "Adjustable scroll speed (30–300 WPM)",
              "Customizable font, color, and opacity",
              "Section markers & auto-pause points",
              "Full keyboard shortcuts for hands-free control",
              "Works with Zoom, Teams, Meet, OBS & more",
              "All future updates included free",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-zinc-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="/GhostPrompt.dmg"
            className="block w-full py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-base transition-colors"
            aria-label="Download GhostPrompt for Mac"
            download
          >
            Download for Mac — Free
          </a>

          <p className="text-zinc-400 text-xs mt-4">
            Available on the Mac App Store. Requires macOS 12.0+
          </p>
        </div>

        {/* Trust signals */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" aria-hidden="true" />
              ))}
            </div>
            <span className="text-sm text-zinc-500">Loved by presenters, teachers, and content creators</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              Secure Mac App Store purchase
            </span>
            <span>No account required</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How does GhostPrompt stay invisible during screen sharing?",
    a: "GhostPrompt uses the official macOS screen-capture exclusion API (available since macOS 12.0 Monterey). This tells the operating system to exclude the teleprompter window from all screen captures, recordings, and shares. It\u2019s a built-in macOS feature \u2014 not a workaround.",
  },
  {
    q: "Does the invisible teleprompter work with Zoom, Teams, and Google Meet?",
    a: "Yes! Because GhostPrompt uses an OS-level screen capture exclusion API, it works with every screen sharing and recording app including Zoom, Microsoft Teams, Google Meet, Slack, Discord, OBS Studio, Loom, and more.",
  },
  {
    q: "Will my audience notice the teleprompter during a presentation?",
    a: "No. The overlay is completely invisible in screen shares and recordings. Your audience only sees your normal desktop \u2014 no visual artifacts, no flicker, and no indication that a teleprompter is running.",
  },
  {
    q: "Can I control the teleprompter scroll speed during a live presentation?",
    a: "Yes. Set auto-scroll speed from 30 to 300 words per minute. Use the slider or press the Up/Down arrow keys during playback. You can also hover to pause and use the mouse wheel to scroll manually.",
  },
  {
    q: "What are section markers and auto-pause in GhostPrompt?",
    a: "Add [PAUSE] markers to automatically pause scrolling at specific points in your script. Use [SECTION:name] to create named jump points that appear as buttons in the control bar for quick navigation during your presentation.",
  },
  {
    q: "Does GhostPrompt work with multiple monitors on Mac?",
    a: "Yes. You can drag the teleprompter overlay to any connected monitor and resize it freely. Position it wherever feels most natural for maintaining eye contact with your camera.",
  },
  {
    q: "Is GhostPrompt a subscription or one-time purchase?",
    a: "GhostPrompt is a one-time purchase of $24.99 \u2014 no subscriptions, no accounts, no recurring fees. All future updates are included for free with your lifetime license.",
  },
  {
    q: "What macOS version is required for the invisible teleprompter?",
    a: "GhostPrompt requires macOS 12.0 (Monterey) or later. The screen-capture exclusion API that makes the teleprompter invisible was introduced in macOS 12.0.",
  },
  {
    q: "Can I import scripts and organize them in GhostPrompt?",
    a: "Yes. Paste text directly, type in the built-in editor, or import .txt files. GhostPrompt includes an auto-saving script manager to organize multiple presentations and talking points.",
  },
  {
    q: "How is GhostPrompt different from other Mac teleprompter apps?",
    a: "GhostPrompt is purpose-built for screen sharing. Unlike other teleprompter apps that are visible during screen shares, GhostPrompt uses the macOS screen-capture exclusion API to stay completely invisible. It\u2019s the only teleprompter designed specifically for Zoom calls, online presentations, and content recording.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-500 text-lg">
            Everything you need to know about the invisible Mac teleprompter for screen sharing.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-zinc-200 bg-white">
              <h3>
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-base font-medium text-zinc-900 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              {openIndex === i && (
                <div id={`faq-answer-${i}`} className="px-5 pb-5" role="region" aria-labelledby={`faq-q-${i}`}>
                  <p className="text-base text-zinc-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Blog ────────────────────────────────────────────────────────────────────
const blogPosts = [
  {
    title: "Why Every Presenter Needs an Invisible Teleprompter in 2026",
    excerpt: "Screen sharing changed how we present. But it also killed the teleprompter. Until macOS introduced screen-capture exclusion...",
    category: "Guide",
    date: "Apr 2026",
    slug: "/blog/invisible-teleprompter-guide",
  },
  {
    title: "5 Tips for Natural Delivery While Reading a Script on Zoom",
    excerpt: "Looking natural while reading a script is an art. Here are five techniques that professional speakers use to sound conversational...",
    category: "Tips",
    date: "Apr 2026",
    slug: "/blog/natural-delivery-tips-zoom",
  },
  {
    title: "How Content Creators Use GhostPrompt for Screen Recording",
    excerpt: "Recording tutorials with a teleprompter used to mean awkward side-glances. Here's how creators are using invisible overlays...",
    category: "Use Case",
    date: "Apr 2026",
    slug: "/blog/content-creators-screen-recording",
  },
];

function Blog() {
  return (
    <section id="blog" className="py-24 px-6" aria-labelledby="blog-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="blog-heading" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            From the Blog
          </h2>
          <p className="text-zinc-500 text-lg">
            Tips, guides, and stories about presenting better with an invisible teleprompter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-zinc-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
              {/* Blog post image placeholder */}
              <div className="aspect-[16/9] bg-zinc-100 flex items-center justify-center border-b border-zinc-200">
                <BookOpen className="w-8 h-8 text-zinc-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">{post.category}</span>
                  <span className="text-xs text-zinc-400">{post.date}</span>
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-2 leading-snug">{post.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-sm font-medium text-purple-600 flex items-center gap-1">
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ──────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="py-20 px-6 bg-zinc-50" aria-labelledby="cta-heading">
      <div className="max-w-3xl mx-auto text-center">
        <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
          Ready to Present Without the Script Anxiety?
        </h2>
        <p className="text-zinc-500 text-lg mb-8 max-w-xl mx-auto">
          Download GhostPrompt and never worry about memorizing scripts for video calls again.
        </p>
        <a
          href="/GhostPrompt.dmg"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-base transition-colors"
          download
        >
          <Download className="w-4 h-4" aria-hidden="true" />
          Download GhostPrompt for Mac — Free
        </a>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-200" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-3" aria-label="GhostPrompt home">
              <Ghost className="w-5 h-5 text-purple-600" aria-hidden="true" />
              <span className="text-sm font-semibold text-zinc-900">GhostPrompt</span>
            </a>
            <p className="text-xs text-zinc-400 leading-relaxed">
              The invisible Mac teleprompter for screen sharing. Read scripts on Zoom, Teams, and Meet without anyone knowing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-3">Product</h4>
            <nav className="space-y-2" aria-label="Product links">
              <a href="#features" className="block text-sm text-zinc-400 hover:text-zinc-700 transition-colors">Features</a>
              <a href="#how-it-works" className="block text-sm text-zinc-400 hover:text-zinc-700 transition-colors">How It Works</a>
              <a href="#pricing" className="block text-sm text-zinc-400 hover:text-zinc-700 transition-colors">Pricing</a>
              <a href="#compatibility" className="block text-sm text-zinc-400 hover:text-zinc-700 transition-colors">Compatibility</a>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-3">Resources</h4>
            <nav className="space-y-2" aria-label="Resource links">
              <a href="#faq" className="block text-sm text-zinc-400 hover:text-zinc-700 transition-colors">FAQ</a>
              <a href="#blog" className="block text-sm text-zinc-400 hover:text-zinc-700 transition-colors">Blog</a>
              <a href="mailto:support@ghostprompt.app" className="block text-sm text-zinc-400 hover:text-zinc-700 transition-colors">Support</a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-3">Legal</h4>
            <nav className="space-y-2" aria-label="Legal links">
              <a href="/privacy" className="block text-sm text-zinc-400 hover:text-zinc-700 transition-colors">Privacy Policy</a>
              <a href="/terms" className="block text-sm text-zinc-400 hover:text-zinc-700 transition-colors">Terms of Service</a>
            </nav>
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} GhostPrompt. All rights reserved. macOS is a trademark of Apple Inc.
          </p>
          <p className="text-xs text-zinc-400">
            Built for macOS 12.0+ (Monterey, Ventura, Sonoma, Sequoia)
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <AppScreenshot />
        <Features />
        <HowItWorks />
        <Compatibility />
        <Pricing />
        <FAQ />
        <Blog />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
