import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Globe,
  Code2,
  Layers,
  ExternalLink,
  Terminal,
  User,
  MapPin,
  Heart,
  PenTool,
  Plane,
  ArrowRight,
  Zap,
  Briefcase,
  GraduationCap,
  Twitter,
  Feather,
  Cpu,
  Sparkles,
  Monitor,
  Coffee,
  Music,
  Award,
  GitBranch,
  Lightbulb,
  Rocket,
  BookOpen,
  Database,
  Wifi,
  Server,
  LayoutGrid,
  Command,
  MessageSquare,
} from "lucide-react";

// --- GLOBAL STYLES & FONTS ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;600&display=swap');

    :root {
      --font-display: 'Space Grotesk', sans-serif;
      --font-body: 'Inter', sans-serif;
    }

    body {
      font-family: var(--font-body);
      background-color: #02040a;
      color: #e2e8f0;
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6, button, .font-display {
      font-family: var(--font-display);
    }

    html {
      scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #02040a;
    }
    ::-webkit-scrollbar-thumb {
      background: #334155;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #475569;
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }

    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-marquee { animation: marquee 30s linear infinite; }
    .animate-blob { animation: blob 10s infinite; }
    .animate-pulse-glow { animation: pulse-glow 3s infinite; }
    
    /* Clay Card Hover Effects */
    .clay-card-hover {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    @media (hover: hover) {
      .clay-card-hover:hover {
        transform: translateY(-5px);
      }
    }
  `}</style>
);

// --- VISUAL COMPONENTS ---

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-[#000000]">
    {/* Orbs - Responsive sizing */}
    <div className="absolute top-[-10%] left-[-10%] w-[90vw] md:w-[60vw] h-[90vw] md:h-[60vw] bg-blue-800/30 rounded-full blur-[80px] md:blur-[120px] animate-blob mix-blend-screen opacity-40 md:opacity-50"></div>
    <div className="absolute top-[20%] right-[-20%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-violet-800/30 rounded-full blur-[80px] md:blur-[120px] animate-blob animation-delay-2000 mix-blend-screen opacity-40 md:opacity-50"></div>
    <div className="absolute bottom-[-20%] left-[20%] w-[90vw] md:w-[60vw] h-[90vw] md:h-[60vw] bg-cyan-800/20 rounded-full blur-[80px] md:blur-[120px] animate-blob animation-delay-4000 mix-blend-screen opacity-30 md:opacity-40"></div>

    {/* Reduced Noise Texture Globally */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>

    {/* Futuristic Grid - Finer grid on mobile */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_90%)] pointer-events-none"></div>
  </div>
);

const ClayCard = ({
  children,
  className,
  title,
  subtitle,
  icon: Icon,
  glow = "blue",
  delay = "0ms",
}) => {
  const glowStyles = {
    blue: "group-hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.3)] hover:border-blue-500/30",
    violet:
      "group-hover:shadow-[0_0_40px_-5px_rgba(124,58,237,0.3)] hover:border-violet-500/30",
    cyan: "group-hover:shadow-[0_0_40px_-5px_rgba(8,145,178,0.3)] hover:border-cyan-500/30",
    gold: "group-hover:shadow-[0_0_40px_-5px_rgba(234,179,8,0.3)] hover:border-yellow-500/30",
    white:
      "group-hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.15)] hover:border-white/30",
  };

  return (
    <div
      className={`
        group relative flex flex-col p-6 md:p-8
        bg-[#0a0a12]/70 backdrop-blur-2xl rounded-[1.5rem] md:rounded-[2rem] border border-white/10 
        shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] 
        clay-card-hover overflow-hidden 
        ${glowStyles[glow]} ${className} animate-fade-in-up
      `}
      style={{ animationDelay: delay }}
    >
      {/* Header (Optional) */}
      {(title || Icon) && (
        <div className="flex justify-between items-start mb-4 z-10">
          {Icon && (
            <div className="p-2.5 md:p-3 rounded-2xl bg-white/5 border border-white/5 text-white group-hover:scale-110 transition-transform duration-300 shadow-inner">
              <Icon size={20} className="md:w-6 md:h-6" />
            </div>
          )}
          {title && (
            <div className="text-right ml-auto">
              <h3 className="text-base md:text-lg font-bold text-white font-display">
                {title}
              </h3>
              {subtitle && (
                <p className="text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-wider">
                  {subtitle}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">{children}</div>

      {/* Inner Glow Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.5rem] md:rounded-[2rem]"></div>
    </div>
  );
};

// --- NAVIGATION ---

const DockNav = ({ activePage, setPage }) => {
  const navItems = [
    { id: "home", label: "Home", icon: Terminal },
    { id: "journey", label: "Journey", icon: MapPin },
    { id: "work", label: "Work", icon: Layers },
    { id: "blog", label: "Insights", icon: Feather },
    { id: "about", label: "Me", icon: User },
  ];

  return (
    <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-full max-w-fit px-0 md:px-4">
      <nav className="flex items-center gap-1 md:gap-2 p-1.5 md:p-2 rounded-full bg-[#0f111a]/90 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] ring-1 ring-white/5">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`
                group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 ease-out
                ${
                  isActive
                    ? "bg-white text-black md:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }
              `}
            >
              <item.icon
                size={18}
                className="md:w-5 md:h-5"
                strokeWidth={isActive ? 2.5 : 2}
              />

              {/* Tooltip (Desktop Only) */}
              <span className="hidden md:block absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 font-medium font-display">
                {item.label}
              </span>

              {/* Active Dot */}
              {isActive && (
                <span className="absolute -bottom-1 md:-bottom-2 w-1 h-1 bg-current rounded-full"></span>
              )}
            </button>
          );
        })}

        <div className="w-px h-6 md:h-8 bg-white/10 mx-1"></div>

        <a
          href="mailto:manojschavan6@gmail.com"
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform"
        >
          <Mail size={18} className="md:w-5 md:h-5" />
        </a>
      </nav>
    </div>
  );
};

// --- SECTIONS ---

// 1. HOME - Expanded with "Philosophy", "Impact", "CTA"
const HomePage = ({ setPage }) => (
  <section className="relative w-full overflow-hidden">
    {/* HERO SECTION */}
    <div className="min-h-screen flex flex-col justify-center px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
        {/* Left: Typography & CTA */}
        <div className="space-y-8 order-2 lg:order-1">
          {/* Status Badge - "Command Center" Style */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-900/20 border border-green-500/30 text-green-400 text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(34,197,94,0.2)]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              System Online
            </div>
            <div className="h-px w-12 bg-white/10"></div>
            <span className="text-xs text-gray-500 font-mono tracking-widest">
              V 2.5.0
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9] animate-fade-in-up">
              Manoj <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 drop-shadow-[0_0_40px_rgba(124,58,237,0.4)]">
                Chavan.
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
              Full Stack Engineer &{" "}
              <span className="text-white font-normal">Mobile Architect</span>
            </h2>
          </div>

          <p className="text-lg text-gray-400 max-w-lg leading-relaxed border-l-2 border-white/10 pl-6">
            Crafting digital experiences where{" "}
            <span className="text-white font-semibold">Performance</span> meets{" "}
            <span className="text-white font-semibold">Precision</span>.
            Specializing in scalable MERN architectures and fluid Flutter
            applications.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => setPage("work")}
              className="flex-1 sm:flex-none px-8 py-4 bg-white text-black rounded-2xl font-bold text-sm md:text-base shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:scale-105 transition-transform flex justify-center items-center gap-3 group"
            >
              Explore Works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setPage("journey")}
              className="flex-1 sm:flex-none px-8 py-4 bg-[#0a0a12] border border-white/10 rounded-2xl font-bold text-sm md:text-base text-white hover:bg-white/5 hover:border-white/20 transition-all flex justify-center items-center gap-3 backdrop-blur-xl"
            >
              <User className="w-4 h-4" />
              About Me
            </button>
          </div>

          {/* Tech Scroller - Mini */}
          <div className="pt-8 flex items-center gap-4 opacity-60">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
              Stack:
            </div>
            <div className="flex gap-4 text-gray-400">
              <Code2 size={16} />
              <Globe size={16} />
              <Smartphone size={16} />
              <Database size={16} />
            </div>
          </div>
        </div>

        {/* Right: Holographic Code Terminal */}
        <div className="relative order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative w-full max-w-md bg-[#05050a]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-float">
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                <Terminal size={10} />
                <span>manoj@dev:~/portfolio</span>
              </div>
            </div>

            <div className="p-6 font-mono text-xs md:text-sm space-y-4">
              <div className="flex gap-2">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-300">
                  npx init-profile --name="Manoj"
                </span>
              </div>

              <div className="space-y-2 pl-4 border-l border-white/10">
                <div className="text-gray-400">
                  Loading developer profile...
                </div>
                <div className="text-green-400">✔ Core Loaded: MERN Stack</div>
                <div className="text-green-400">
                  ✔ Mobile Module: Flutter & Dart
                </div>
                <div className="text-green-400">
                  ✔ AI Engine: Gemini API Integration
                </div>
                <div className="text-yellow-400 flex items-center gap-2">
                  <span className="animate-pulse">
                    ⚠ Status: Ready for next challenge
                  </span>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-300 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* --- 2. THE PHILOSOPHY SECTION (New) --- */}
    <div className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display leading-tight">
              Design is not just what it looks like.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Design is how it works.
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              I believe that the best software is invisible. It anticipates
              needs, performs instantly, and scales effortlessly. My engineering
              philosophy is built on three non-negotiable pillars:
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "User-Centric",
                  desc: "Every line of code must serve the end user's experience.",
                },
                {
                  title: "Performance-First",
                  desc: "Optimized render cycles and efficient state management.",
                },
                {
                  title: "Scalable Architecture",
                  desc: "Codebases designed to grow, not just to function.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-white/5 text-blue-400 mt-1">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract Visual */}
          <div className="relative h-[500px] bg-[#0a0a12] rounded-[3rem] border border-white/10 overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-violet-900/10 group-hover:opacity-50 transition-opacity duration-700"></div>

            <div className="relative z-10 grid grid-cols-2 gap-4 p-8 transform group-hover:scale-105 transition-transform duration-700">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md h-40 w-40 flex flex-col justify-between">
                <Cpu className="text-blue-400" size={32} />
                <span className="text-xs text-gray-400 font-mono uppercase">
                  Logic
                </span>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md h-40 w-40 flex flex-col justify-between translate-y-8">
                <Heart className="text-red-400" size={32} />
                <span className="text-xs text-gray-400 font-mono uppercase">
                  Empathy
                </span>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md h-40 w-40 flex flex-col justify-between -translate-y-8">
                <Zap className="text-yellow-400" size={32} />
                <span className="text-xs text-gray-400 font-mono uppercase">
                  Speed
                </span>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md h-40 w-40 flex flex-col justify-between">
                <Layers className="text-violet-400" size={32} />
                <span className="text-xs text-gray-400 font-mono uppercase">
                  Structure
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* --- 3. SELECTED IMPACT PREVIEW (New) --- */}
    <div className="py-32 px-6 bg-[#05050a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
            Selected <span className="text-blue-500">Impact</span>
          </h2>
          <button
            onClick={() => setPage("work")}
            className="text-sm text-gray-400 hover:text-white flex items-center gap-2"
          >
            View All Work <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group cursor-pointer" onClick={() => setPage("work")}>
            <div className="h-[400px] bg-[#0a0a12] rounded-[2rem] border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="text-orange-400 font-mono text-xs tracking-widest uppercase mb-2">
                  EdTech
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Play_Bucket
                </h3>
                <p className="text-gray-400 text-sm">
                  A massive learning ecosystem with AI-powered tutoring.
                </p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500/20 rounded-full blur-[50px] group-hover:bg-orange-500/40 transition-colors"></div>
            </div>
          </div>

          <div className="group cursor-pointer" onClick={() => setPage("work")}>
            <div className="h-[400px] bg-[#0a0a12] rounded-[2rem] border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-2">
                  Mobile
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Digital Garage
                </h3>
                <p className="text-gray-400 text-sm">
                  Offline-first vehicle management architecture.
                </p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] group-hover:bg-blue-500/40 transition-colors"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* --- 4. MASSIVE CALL TO ACTION (New) --- */}
    <div className="py-40 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-block p-4 rounded-full bg-blue-500/10 text-blue-400 mb-8 animate-bounce">
          <MessageSquare size={32} />
        </div>
        <h2 className="text-5xl md:text-8xl font-bold text-white font-display mb-8 tracking-tight">
          Let's Build the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
            Impossible.
          </span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm currently available for freelance projects and open to full-time
          opportunities. If you have a vision, let's make it reality.
        </p>

        <a
          href="mailto:manojschavan6@gmail.com"
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_50px_-10px_rgba(255,255,255,0.5)]"
        >
          Start a Conversation <ArrowRight size={20} />
        </a>
      </div>
    </div>
  </section>
);

// 2. WORK - MASSIVE CINEMATIC UPDATE (New Layout)
const WorkPage = () => (
  <section className="min-h-screen pt-24 pb-40 px-4 md:px-6">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-24 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
          <Briefcase size={12} />
          <span>Portfolio</span>
        </div>
        <h2 className="text-5xl md:text-8xl font-bold text-white mb-6 font-display tracking-tight">
          Selected{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
            Works
          </span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed">
          A curated gallery of engineering feats. From scalable EdTech platforms
          to offline-first mobile architectures.
        </p>
      </div>

      {/* --- PROJECT 1: Play_Bucket (Cinematic Showcase) --- */}
      <div className="relative mb-32 group">
        {/* Cinematic "Stage Light" Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none"></div>

        <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          {/* Left: Narrative (Floating without box) */}
          <div className="relative z-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-orange-400 font-mono text-xs tracking-widest uppercase mb-6">
              <Layers size={14} />
              <span>EdTech Platform</span>
            </div>

            <h3 className="text-5xl md:text-8xl font-bold text-white font-display mb-8 leading-tight">
              Play_
              <br />
              Bucket
            </h3>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg mb-8 border-l-2 border-orange-500/30 pl-6">
              A massive learning ecosystem integrating real-time collaborative
              whiteboards, YouTube course integration, and a personalized{" "}
              <span className="text-white font-bold">Gemini AI Tutor</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-wide hover:scale-105 transition-transform shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]"
              >
                View Project <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0a0a12] border border-white/10 text-white font-bold text-sm uppercase tracking-wide hover:bg-white/5 transition-all"
              >
                <Github size={18} /> Code
              </a>
            </div>
          </div>

          {/* Right: HUD / Metrics (Floating in space) */}
          <div className="relative z-10 order-1 lg:order-2">
            <div className="relative bg-[#0a0a12]/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl animate-float">
              {/* Floating 3D Icon */}
              <div className="absolute -top-12 -right-12 text-orange-500/10">
                <Layers size={200} strokeWidth={0.5} />
              </div>

              <div className="grid grid-cols-2 gap-y-10 gap-x-8 relative z-10">
                {[
                  { label: "Users", val: "500+" },
                  { label: "Latency", val: "< 50ms" },
                  { label: "AI Model", val: "Gemini Pro" },
                  { label: "Stack", val: "MERN" },
                ].map((stat) => (
                  <div key={stat.label} className="group">
                    <div className="text-3xl md:text-4xl font-bold text-white font-display group-hover:text-orange-400 transition-colors">
                      {stat.val}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                  Core Tech
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Socket.io", "MongoDB"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-200 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Watermark Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-5">
          <span className="text-[15vw] font-display font-bold text-white whitespace-nowrap">
            EDTECH
          </span>
        </div>
      </div>

      {/* --- GRID FOR SECONDARY PROJECTS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        {/* Project 2: Digital Garage */}
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <ClayCard
            className="min-h-[500px] relative overflow-hidden p-0 bg-[#0a0a12]"
            glow="blue"
          >
            <div className="relative z-10 p-10 md:p-14 flex flex-col h-full">
              <div className="mb-auto">
                <div className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-3">
                  Mobile App
                </div>
                <h3 className="text-4xl font-bold text-white font-display mb-6">
                  Digital Garage
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  A comprehensive solution for vehicle management. Features
                  offline-first architecture, appointment scheduling, and
                  inventory tracking.
                </p>
              </div>

              <div className="flex items-center gap-4 mb-10">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-blue-500/20 border-2 border-[#0a0a12]"
                    ></div>
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  Used by 10+ Garages
                </span>
              </div>

              <div className="mt-auto border-t border-white/10 pt-8">
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Supabase", "Riverpod"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-300 text-xs border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <Smartphone
              className="absolute bottom-8 right-8 text-blue-500/10 w-64 h-64 rotate-[-15deg] group-hover:scale-110 transition-transform duration-700"
              strokeWidth={0.5}
            />
          </ClayCard>
        </div>

        {/* Project 3: LearnX */}
        <div className="relative group">
          <div className="absolute inset-0 bg-violet-600/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <ClayCard
            className="min-h-[500px] relative overflow-hidden p-0 bg-[#0a0a12]"
            glow="violet"
          >
            <div className="relative z-10 p-10 md:p-14 flex flex-col h-full">
              <div className="mb-auto">
                <div className="text-violet-400 font-mono text-xs tracking-widest uppercase mb-3">
                  AI Tool
                </div>
                <h3 className="text-4xl font-bold text-white font-display mb-6">
                  LearnX
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Intelligent Document Analysis. Upload PDFs and chat with them
                  using RAG (Retrieval Augmented Generation) for grounded
                  answers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-gray-300 font-mono uppercase tracking-wider">
                    Response Generation
                  </span>
                </div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-violet-500 w-[80%] animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>

              <div className="mt-auto border-t border-white/10 pt-8">
                <div className="flex flex-wrap gap-2">
                  {["React", "Vector DB", "Gemini API"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-violet-500/10 text-violet-300 text-xs border border-violet-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Cpu
              className="absolute bottom-8 right-8 text-violet-500/10 w-64 h-64 rotate-[15deg] group-hover:scale-110 transition-transform duration-700"
              strokeWidth={0.5}
            />
          </ClayCard>
        </div>
      </div>

      {/* --- SERVICES COMMAND CENTER (Redesigned) --- */}
      <div className="mb-24">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 pl-4 border-l-4 border-blue-500">
          Capabilities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Web */}
          <ClayCard
            className="p-8 bg-gradient-to-br from-[#0a0a12] to-blue-950/20"
            glow="blue"
          >
            <Globe className="text-blue-400 w-10 h-10 mb-6" />
            <h4 className="text-xl font-bold text-white mb-3">
              Web Engineering
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building scalable, SEO-friendly web apps using Next.js and React.
              Focus on performance and accessibility.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 font-mono">
              <li>• Responsive Design</li>
              <li>• Server Side Rendering</li>
              <li>• Progressive Web Apps</li>
            </ul>
          </ClayCard>

          {/* Card 2: Mobile */}
          <ClayCard
            className="p-8 bg-gradient-to-br from-[#0a0a12] to-violet-950/20"
            glow="violet"
          >
            <Smartphone className="text-violet-400 w-10 h-10 mb-6" />
            <h4 className="text-xl font-bold text-white mb-3">
              Mobile Architecture
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Native-performance cross-platform apps with Flutter. Smooth
              animations and offline capabilities.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 font-mono">
              <li>• iOS & Android</li>
              <li>• Clean Architecture</li>
              <li>• Custom Animations</li>
            </ul>
          </ClayCard>

          {/* Card 3: Backend */}
          <ClayCard
            className="p-8 bg-gradient-to-br from-[#0a0a12] to-cyan-950/20"
            glow="cyan"
          >
            <Server className="text-cyan-400 w-10 h-10 mb-6" />
            <h4 className="text-xl font-bold text-white mb-3">
              Backend Systems
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Robust APIs and database schema design. Secure authentication and
              real-time data synchronization.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 font-mono">
              <li>• REST & GraphQL</li>
              <li>• MongoDB / SQL</li>
              <li>• Cloud Deployment</li>
            </ul>
          </ClayCard>
        </div>
      </div>

      {/* GitHub Discovery Section - Responsive */}
      <div className="mt-12 mb-8">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <ClayCard
            className="relative overflow-hidden flex items-center justify-between p-6 md:p-12 border-white/10 bg-[#0a0a12]"
            glow="white"
          >
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left w-full">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full animate-pulse-glow"></div>
                <div className="relative p-4 md:p-5 rounded-full bg-[#0a0a12] border border-white/20 group-hover:border-white/40 transition-colors shadow-2xl">
                  <Github size={32} className="text-white md:w-12 md:h-12" />
                </div>
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <h3 className="text-2xl md:text-4xl font-bold text-white font-display">
                    Explore the{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                      Codebase
                    </span>
                  </h3>
                  <GitBranch
                    className="text-gray-500 animate-pulse"
                    size={20}
                  />
                </div>
                <p className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
                  Dive into 50+ repositories featuring clean architecture,
                  commit history, and experimental projects not listed here.
                </p>
              </div>

              <div className="flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-black font-bold text-xs md:text-sm tracking-wide uppercase group-hover:scale-105 transition-transform shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
                View GitHub{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </ClayCard>
        </a>
      </div>
    </div>
  </section>
);

// 3. JOURNEY - Redesigned with "Origin Story" and Cinematic Layout
const JourneyPage = () => (
  <section className="min-h-screen pt-24 pb-40 px-4 md:px-6">
    <div className="max-w-4xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display">
          Evolution <span className="text-blue-500">Log</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          The milestones that defined the engineer.
        </p>
      </div>

      <div className="relative ml-4 md:ml-6 space-y-16 md:space-y-20">
        {/* Gradient Connection Line */}
        <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500 to-transparent opacity-30"></div>

        {[
          {
            year: "2025 - Present",
            title: "Freelance Mobile Architect",
            role: "Self Employed",
            desc: "Architecting high-performance Flutter applications. Direct client collaboration to solve complex business problems with elegant, scalable code.",
            icon: Rocket,
            color: "blue",
            tags: ["Flutter", "System Design"],
          },
          {
            year: "2024 - 2027",
            title: "B.Tech in Info Tech",
            role: "Matoshri College of Engineering",
            desc: "Deepening core CS fundamentals. Advanced algorithms, network security, and AI systems integration.",
            icon: BookOpen,
            color: "violet",
            tags: ["DSA", "CS Theory"],
          },
          {
            year: "Jan - Apr 2024",
            title: "Frontend Intern",
            role: "Marg Foundation",
            desc: "Spearheaded the React frontend overhaul. Improved load times by 20% and implemented pixel-perfect UI from Figma.",
            icon: Briefcase,
            color: "cyan",
            tags: ["React", "Performance"],
          },
          {
            year: "2021 - 2024",
            title: "Diploma in Computer Eng.",
            role: "Government Polytechnic",
            desc: "The foundation. Mastered C++, Java, and built my first real-world web projects. Graduated with distinction.",
            icon: GraduationCap,
            color: "gold",
            tags: ["C++", "Java"],
          },
        ].map((item, i) => (
          <div key={i} className="relative pl-12 md:pl-16 group">
            {/* Timeline Node */}
            <div
              className={`absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-[#02040a] border-4 border-${item.color}-500 shadow-[0_0_20px_currentColor] text-${item.color}-500 transition-all group-hover:scale-125 group-hover:border-white z-10`}
            ></div>

            <div
              className={`text-xs md:text-sm font-mono text-${item.color}-400 mb-2 tracking-widest uppercase font-bold`}
            >
              {item.year}
            </div>

            <ClayCard
              className="p-6 md:p-8 hover:shadow-2xl transition-all duration-500"
              glow={item.color}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-1 font-display">
                    {item.title}
                  </h3>
                  <div className="text-sm md:text-base text-gray-400 flex items-center gap-2">
                    {item.role}
                  </div>
                </div>
                <div
                  className={`p-3 rounded-2xl bg-${item.color}-500/10 text-${item.color}-400`}
                >
                  <item.icon size={24} />
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                {item.desc}
              </p>

              <div className="flex gap-2 flex-wrap">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full bg-${item.color}-500/10 border border-${item.color}-500/20 text-${item.color}-300 text-[10px] md:text-xs font-bold uppercase tracking-wide`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ClayCard>
          </div>
        ))}
      </div>

      {/* --- THE ORIGIN STORY SECTION (Cinematic & Borderless) --- */}
      <div className="mt-32 relative py-20">
        {/* Cinematic Background Glow - No Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15)_0%,transparent_50%)] blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6">
          {/* Floating Icon */}
          <div className="mb-8 p-4 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 shadow-[0_0_50px_-10px_rgba(234,179,8,0.5)] animate-float">
            <Lightbulb size={32} />
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-bold text-white font-display leading-tight mb-10 tracking-tight">
            "It started with a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-200 drop-shadow-[0_0_20px_rgba(251,191,36,0.4)]">
              Simple Dream.
            </span>
            "
          </h2>

          {/* Narrative Text */}
          <div className="prose prose-invert prose-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            <p className="font-light opacity-90">
              "I remember staring at a monochrome terminal during my diploma
              days, fascinated by how simple lines of code could build entire
              worlds. The dream wasn't just to write software—it was to create
              experiences that people{" "}
              <span className="text-yellow-200 font-medium">feel</span>, not
              just use."
            </p>
          </div>

          {/* Footer Tags */}
          <div className="mt-12 flex items-center gap-3 md:gap-6 text-xs md:text-sm font-mono text-yellow-500/60 uppercase tracking-[0.2em]">
            <span>Curiosity</span>
            <span className="w-1.5 h-1.5 bg-yellow-500/40 rounded-full"></span>
            <span>Passion</span>
            <span className="w-1.5 h-1.5 bg-yellow-500/40 rounded-full"></span>
            <span>Execution</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// 4. BLOG/INSIGHTS
const BlogPage = () => (
  <section className="min-h-screen pt-24 pb-40 px-4 md:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Insights
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Engineering thoughts and tutorials.
          </p>
        </div>
        <button className="text-blue-400 text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[
          {
            category: "Flutter",
            date: "Oct 2, 2025",
            title: "Riverpod 2.0: The Ultimate Guide to State",
            desc: "Moving beyond setState. How to architect scalable apps with Riverpod and reducing boilerplate.",
            color: "blue",
          },
          {
            category: "MERN",
            date: "Sep 15, 2025",
            title: "Scaling Node.js: Event Loop Explained",
            desc: "Understanding the single-threaded nature of Node and when to use Worker Threads for CPU tasks.",
            color: "gold",
          },
          {
            category: "AI Engineering",
            date: "Aug 10, 2025",
            title: "RAG 101: Chatting with PDFs",
            desc: "A deep dive into Vector Databases, Embeddings, and the Gemini API to build LearnX.",
            color: "violet",
          },
        ].map((post, i) => (
          <ClayCard
            key={i}
            className="min-h-[300px] md:min-h-[350px] group"
            glow={post.color}
          >
            <div
              className={`h-2 w-12 rounded-full bg-${post.color}-500 mb-6`}
            ></div>
            <div className="flex justify-between items-center mb-4 text-[10px] md:text-xs font-mono text-gray-500">
              <span className={`text-${post.color}-400`}>{post.category}</span>
              <span>{post.date}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {post.desc}
            </p>
            <div className="mt-auto flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
              Read Article <ArrowRight size={14} />
            </div>
          </ClayCard>
        ))}
      </div>
    </div>
  </section>
);

// 5. ABOUT ME - Redesigned with Cinematic Intro and "Vision" Section
const AboutPage = () => (
  <section className="min-h-screen pt-24 pb-40 px-4 md:px-6">
    <div className="max-w-6xl mx-auto">
      {/* 1. CINEMATIC INTRO HEADER */}
      <div className="mb-20 text-center max-w-3xl mx-auto relative z-10">
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_60%)] blur-[100px] pointer-events-none"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
            <User size={12} />
            <span>The Architect</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white font-display leading-[1.1] mb-6">
            Code is my Canvas, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
              Impact is my Art.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            I don't just build applications; I engineer digital ecosystems that
            breathe, scale, and delight.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-12 mb-24">
        {/* Left Column: Profile & Proficiency */}
        <div className="space-y-6">
          {/* Profile Card */}
          <ClayCard className="text-center p-6 md:p-8" glow="blue">
            <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow"></div>
              <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-blue-500 to-violet-500">
                <div className="w-full h-full bg-[#0a0a12] rounded-full flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-violet-900/50"></div>
                  <span className="text-4xl md:text-5xl font-bold text-white font-display relative z-10">
                    MC
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-2 tracking-tight">
              Manoj Chavan
            </h2>
            <p className="text-blue-400 font-medium text-xs md:text-sm mb-8 tracking-wider uppercase">
              Full Stack Developer
            </p>

            <div className="flex justify-center gap-4 mb-8 md:mb-10">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="p-3 rounded-2xl bg-[#1a1f2e] text-gray-400 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 border border-white/5 shadow-lg group"
                >
                  <Icon size={20} className="group-hover:animate-bounce" />
                </button>
              ))}
            </div>

            <div className="space-y-4 pt-8 border-t border-white/5 text-sm">
              <div className="flex justify-between items-center p-2 hover:bg-white/5 rounded-lg transition-colors">
                <span className="text-gray-500 font-medium uppercase text-[10px] md:text-xs tracking-wider">
                  Location
                </span>
                <span className="text-white font-semibold text-xs md:text-sm">
                  Nashik, India
                </span>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-white/5 rounded-lg transition-colors">
                <span className="text-gray-500 font-medium uppercase text-[10px] md:text-xs tracking-wider">
                  Email
                </span>
                <span className="text-white font-semibold text-xs md:text-sm truncate max-w-[160px]">
                  manojschavan6@gmail.com
                </span>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-white/5 rounded-lg transition-colors">
                <span className="text-gray-500 font-medium uppercase text-[10px] md:text-xs tracking-wider">
                  Languages
                </span>
                <span className="text-white font-semibold text-xs md:text-sm">
                  Eng, Mar, Hin
                </span>
              </div>
            </div>
          </ClayCard>

          {/* Proficiency Card */}
          <ClayCard title="Proficiency" glow="violet" className="p-6 md:p-8">
            <div className="space-y-6 mt-2">
              {[
                {
                  label: "Frontend (React/Tailwind)",
                  val: 95,
                  color: "from-blue-500 to-cyan-400",
                },
                {
                  label: "Mobile (Flutter)",
                  val: 92,
                  color: "from-violet-500 to-fuchsia-400",
                },
                {
                  label: "Backend (Node/DB)",
                  val: 88,
                  color: "from-green-500 to-emerald-400",
                },
              ].map((s) => (
                <div key={s.label} className="group">
                  <div className="flex justify-between text-[10px] md:text-xs mb-2 text-gray-400 font-bold uppercase tracking-wider">
                    <span>{s.label}</span>
                    <span className="text-white">{s.val}%</span>
                  </div>
                  <div className="h-2 md:h-3 bg-[#0f111a] rounded-full overflow-hidden border border-white/5">
                    <div
                      className={`h-full bg-gradient-to-r ${s.color} relative`}
                      style={{ width: `${s.val}%` }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite] skew-x-12"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ClayCard>
        </div>

        {/* Right Column: Narrative & Details */}
        <div className="space-y-8">
          {/* Narrative */}
          <div className="relative pl-6 border-l-2 border-white/10 space-y-4">
            <h3 className="text-3xl font-bold text-white font-display">
              The Methodology
            </h3>
            <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed text-base md:text-lg">
              <p>
                My approach to development is rooted in{" "}
                <strong className="text-white">First Principles</strong>. I
                deconstruct complex problems into their fundamental truths and
                build up from there.
              </p>
              <p>
                Whether I'm optimizing a Flutter render loop or designing a
                MongoDB schema, I focus on three core pillars:{" "}
                <span className="text-blue-400 font-bold">Scalability</span>,{" "}
                <span className="text-violet-400 font-bold">Readability</span>,
                and <span className="text-cyan-400 font-bold">Performance</span>
                .
              </p>
            </div>
          </div>

          {/* Hobbies & Interests */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 font-display">
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ClayCard glow="cyan" className="relative overflow-hidden group">
                <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:opacity-20 transition-opacity">
                  <PenTool size={100} />
                </div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-400 border border-cyan-500/20">
                    <PenTool size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-white">
                      Sketching
                    </h4>
                    <p className="text-[10px] md:text-xs text-gray-400 mt-1">
                      Visualizing ideas on paper
                    </p>
                  </div>
                </div>
              </ClayCard>

              <ClayCard glow="gold" className="relative overflow-hidden group">
                <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:opacity-20 transition-opacity">
                  <Plane size={100} />
                </div>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-4 bg-yellow-500/10 rounded-2xl text-yellow-400 border border-yellow-500/20">
                    <Plane size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-white">
                      Traveling
                    </h4>
                    <p className="text-[10px] md:text-xs text-gray-400 mt-1">
                      Exploring new cultures
                    </p>
                  </div>
                </div>
              </ClayCard>
            </div>
          </div>

          {/* Tech Stack - Grouped */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 font-display">
              Technical Arsenal
            </h3>
            <ClayCard glow="violet" className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                    Languages
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Javascript", "Dart", "Python", "Java", "C++"].map(
                      (t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm text-gray-300 hover:text-white hover:border-violet-500 transition-colors cursor-default"
                        >
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                    Frameworks & Libraries
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Flutter",
                      "Next.js",
                      "Node.js",
                      "Express",
                      "Tailwind CSS",
                    ].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm text-gray-300 hover:text-white hover:border-blue-500 transition-colors cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                    Tools & Platforms
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "MongoDB",
                      "PostgreSQL",
                      "Supabase",
                      "Firebase",
                      "Git",
                      "Docker",
                      "Figma",
                    ].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm text-gray-300 hover:text-white hover:border-green-500 transition-colors cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ClayCard>
          </div>
        </div>
      </div>

      {/* 3. CINEMATIC "VISION" SECTION (Borderless & Massive) */}
      <div className="relative py-20 mt-12">
        {/* Cinematic Background Glow - Borderless */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.12)_0%,transparent_55%)] blur-[80px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6">
          {/* Central Icon - Reactor Core Effect */}
          <div className="mb-10 relative group cursor-pointer">
            <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full animate-pulse-glow"></div>
            <div className="relative p-6 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 shadow-[0_0_40px_-5px_rgba(139,92,246,0.4)] transition-transform duration-500 hover:scale-110 hover:rotate-12">
              <Cpu
                size={48}
                className="drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
              />
            </div>
          </div>

          {/* Massive Headline */}
          <h2 className="text-5xl md:text-8xl font-bold text-white font-display leading-tight mb-8 tracking-tight">
            "Building for the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-200 drop-shadow-[0_0_25px_rgba(167,139,250,0.4)]">
              Next Generation
            </span>
            ."
          </h2>

          {/* Narrative */}
          <div className="prose prose-invert prose-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-16">
            <p className="font-light opacity-90">
              "Software isn't just about lines of code—it's about extending
              human capability. My mission is to leverage cutting-edge
              technologies like{" "}
              <span className="text-violet-200 font-semibold">AI</span> and{" "}
              <span className="text-fuchsia-200 font-semibold">
                Cross-Platform
              </span>{" "}
              frameworks to create tools that empower users to do more, faster."
            </p>
          </div>

          {/* Bottom Icons - Spaced and Clean */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12 w-full max-w-4xl pt-8 border-t border-white/5">
            {[
              {
                label: "Clean Code",
                icon: Code2,
                desc: "Maintainable & Scalable",
              },
              {
                label: "User Centric",
                icon: Heart,
                desc: "Empathy Driven Design",
              },
              { label: "Future Ready", icon: Zap, desc: "Modern Tech Stack" },
              {
                label: "Pixel Perfect",
                icon: Monitor,
                desc: "Precision UI/UX",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-4 text-gray-400 group hover:text-violet-300 transition-colors duration-300 cursor-default"
              >
                <item.icon
                  size={28}
                  strokeWidth={1.5}
                  className="group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(167,139,250,0.5)] transition-all duration-300"
                />
                <div className="text-center">
                  <span className="block text-sm font-mono uppercase tracking-widest font-bold mb-1">
                    {item.label}
                  </span>
                  <span className="block text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors uppercase tracking-wider">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- MAIN APP ---

const App = () => {
  const [activePage, setActivePage] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePageChange = (newPage) => {
    if (activePage === newPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <>
      <GlobalStyles />
      <div className="min-h-screen text-gray-200 selection:bg-blue-500/30 selection:text-blue-200">
        <AnimatedBackground />

        <main
          className={`transition-opacity duration-500 ease-in-out ${
            isTransitioning
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          {activePage === "home" && <HomePage setPage={handlePageChange} />}
          {activePage === "journey" && <JourneyPage />}
          {activePage === "work" && <WorkPage />}
          {activePage === "blog" && <BlogPage />}
          {activePage === "about" && <AboutPage />}
        </main>

        <DockNav activePage={activePage} setPage={handlePageChange} />

        <footer className="py-8 text-center text-gray-600 text-xs font-mono pb-32">
          © 2025 Manoj Chavan. Built with Precision & Passion.
        </footer>
      </div>
    </>
  );
};

export default App;
