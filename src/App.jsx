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

    {/* Noise Texture */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

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

// 1. HOME
const HomePage = ({ setPage }) => (
  <section className="min-h-screen flex flex-col justify-center pt-24 pb-32 px-4 md:px-6">
    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
      {/* Left: Typography & CTA */}
      <div className="space-y-6 md:space-y-8 z-10 order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/30 border border-blue-500/30 text-blue-300 text-[10px] md:text-xs font-bold uppercase tracking-widest animate-fade-in-up shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)]">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Available for Hire
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.95]">
            Manoj <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              Chavan.
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
          Architecting{" "}
          <span className="text-white font-semibold">Digital Experiences</span>{" "}
          that merge the precision of engineering with the fluidity of design.
          Specialist in MERN & Flutter.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
          <button
            onClick={() => setPage("work")}
            className="flex-1 sm:flex-none px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-2xl font-bold text-sm md:text-base shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform flex justify-center items-center gap-2 group"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setPage("journey")}
            className="flex-1 sm:flex-none px-6 md:px-8 py-3 md:py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-sm md:text-base text-white hover:bg-white/10 transition-all flex justify-center items-center gap-2 backdrop-blur-md"
          >
            My Journey
          </button>
        </div>

        {/* Social Proof / Stats - Responsive Grid */}
        <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-4 md:gap-8">
          <div>
            <div className="text-xl md:text-2xl font-bold text-white font-display">
              3+
            </div>
            <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
              Years Exp
            </div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-bold text-white font-display">
              10+
            </div>
            <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
              Projects
            </div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-bold text-white font-display">
              100%
            </div>
            <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
              Commitment
            </div>
          </div>
        </div>
      </div>

      {/* Right: Abstract 3D Representation */}
      <div className="relative order-1 lg:order-2 h-[350px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center">
        <div className="relative w-full max-w-[320px] md:max-w-md aspect-square">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-violet-600/30 rounded-full blur-[60px] md:blur-[80px] animate-pulse-glow"></div>

          <div className="absolute inset-0 bg-[#0a0a12] rounded-[2.5rem] md:rounded-[3rem] border border-white/10 shadow-2xl flex flex-col p-6 md:p-8 overflow-hidden rotate-3 hover:rotate-0 transition-all duration-700">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

            <div className="flex justify-between items-center mb-6 md:mb-8">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              </div>
              <Code2 className="text-gray-600" size={20} />
            </div>

            <div className="space-y-3 md:space-y-4 font-mono text-xs md:text-sm">
              <div className="p-3 md:p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center gap-3 md:gap-4">
                <Globe className="text-blue-400" size={18} />
                <div>
                  <div className="text-white font-bold">Full Stack</div>
                  <div className="text-blue-300 text-[10px] md:text-xs">
                    MERN Ecosystem
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center gap-3 md:gap-4">
                <Smartphone className="text-violet-400" size={18} />
                <div>
                  <div className="text-white font-bold">Mobile</div>
                  <div className="text-violet-300 text-[10px] md:text-xs">
                    Flutter & Dart
                  </div>
                </div>
              </div>
              <div className="p-3 md:p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-3 md:gap-4">
                <Cpu className="text-cyan-400" size={18} />
                <div>
                  <div className="text-white font-bold">AI Integration</div>
                  <div className="text-cyan-300 text-[10px] md:text-xs">
                    Gemini API & RAG
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 w-[85%]"></div>
              </div>
              <div className="flex justify-between text-[10px] md:text-xs text-gray-500 mt-2">
                <span>System Status</span>
                <span className="text-green-400">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Infinite Marquee */}
    <div className="fixed bottom-0 left-0 w-full bg-black/50 backdrop-blur-md border-t border-white/5 py-4 overflow-hidden z-40 hidden md:block">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex gap-12 items-center text-gray-400 font-display font-bold text-4xl opacity-20"
          >
            <span>REACT</span> <span>•</span>
            <span>FLUTTER</span> <span>•</span>
            <span>NODE.JS</span> <span>•</span>
            <span>MONGODB</span> <span>•</span>
            <span>TYPESCRIPT</span> <span>•</span>
            <span>TAILWIND</span> <span>•</span>
            <span>SUPABASE</span> <span>•</span>
            <span>FIGMA</span> <span>•</span>
            <span>PYTHON</span> <span>•</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 2. WORK
const WorkPage = () => (
  <section className="min-h-screen pt-24 pb-40 px-4 md:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-display">
          Selected <span className="text-blue-500">Works</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto md:mx-0">
          Engineering solutions that solve real problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[auto] md:auto-rows-[400px]">
        {/* Featured Project: Play_Bucket */}
        <ClayCard
          className="md:col-span-2 md:row-span-1 group relative overflow-hidden min-h-[320px]"
          glow="gold"
          title="Play_Bucket"
          subtitle="EdTech Platform"
          icon={Layers}
        >
          <div className="absolute top-0 right-0 p-6 z-20">
            <ExternalLink className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>

          <div className="relative z-10 mt-4 flex-1">
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-sm md:text-base">
              A comprehensive learning ecosystem. Collaborative whiteboards,
              YouTube course integration, and a personalized Gemini AI Tutor.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["React", "Node.js", "MongoDB", "Socket.io", "Gemini AI"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] md:text-xs text-gray-300"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Visual Preview */}
          <div className="absolute -bottom-10 -right-10 z-0 opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-110 rotate-[-10deg]">
            <span className="text-[5rem] md:text-[8rem] font-display font-bold text-orange-500 select-none whitespace-nowrap">
              EdTech
            </span>
          </div>

          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
        </ClayCard>

        {/* Services Card */}
        <ClayCard
          className="md:col-span-1 bg-gradient-to-b from-blue-900/20 to-transparent min-h-[300px]"
          glow="blue"
          title="My Services"
          icon={Briefcase}
        >
          <ul className="space-y-3 md:space-y-4 mt-4">
            <li className="flex items-center gap-3 text-gray-300">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Globe size={16} className="text-blue-400" />
              </div>
              <span className="text-xs md:text-sm">Full Stack Web Dev</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <Smartphone size={16} className="text-violet-400" />
              </div>
              <span className="text-xs md:text-sm">iOS/Android Apps</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Cpu size={16} className="text-cyan-400" />
              </div>
              <span className="text-xs md:text-sm">AI Integration</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <PenTool size={16} className="text-green-400" />
              </div>
              <span className="text-xs md:text-sm">UI/UX Prototyping</span>
            </li>
          </ul>
          <div className="mt-auto pt-6">
            <button className="w-full py-3 bg-white text-black font-bold rounded-xl text-sm hover:bg-gray-200 transition-colors shadow-lg">
              Hire Me
            </button>
          </div>
        </ClayCard>

        {/* Project 2: Digital Garage */}
        <ClayCard
          className="md:col-span-1 min-h-[280px]"
          glow="blue"
          title="Digital Garage"
          subtitle="Mobile App"
          icon={Smartphone}
        >
          <div className="mt-auto">
            <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
              Vehicle management solution. Appointment booking, inventory
              tracking, and offline-first architecture using Supabase.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-blue-500/10 text-blue-300 text-[10px] rounded border border-blue-500/20">
                Flutter
              </span>
              <span className="px-2 py-1 bg-blue-500/10 text-blue-300 text-[10px] rounded border border-blue-500/20">
                Supabase
              </span>
            </div>
          </div>
        </ClayCard>

        {/* Project 3: LearnX */}
        <ClayCard
          className="md:col-span-2 overflow-hidden min-h-[300px]"
          glow="violet"
          title="LearnX"
          subtitle="AI Document Analysis"
          icon={Cpu}
        >
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 h-full relative z-10">
            <div className="flex-1 mt-2">
              <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                Upload PDFs and chat with them. Uses RAG (Retrieval Augmented
                Generation) and Vector DBs to provide grounded answers.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind", "Gemini API", "Vector DB"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] md:text-xs text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden sm:flex w-1/3 h-full bg-violet-500/10 rounded-xl border border-violet-500/20 items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              <Zap className="text-violet-400 w-16 h-16 relative z-10" />
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 z-0 opacity-5 group-hover:opacity-10 transition-all duration-500 rotate-[-5deg]">
            <span className="text-[5rem] md:text-[7rem] font-display font-bold text-violet-500 select-none whitespace-nowrap">
              AI TOOL
            </span>
          </div>
        </ClayCard>
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

// 5. ABOUT ME
const AboutPage = () => (
  <section className="min-h-screen pt-24 pb-40 px-4 md:px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-12">
      {/* Left Column: Profile & Proficiency */}
      <div className="space-y-6">
        {/* Profile Card */}
        <ClayCard className="text-center p-6 md:p-8" glow="blue">
          <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 group">
            {/* Avatar Glow Ring */}
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

          {/* Social Icons Row */}
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

          {/* Details Grid */}
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

      {/* Right Column: Story, Hobbies, Stack */}
      <div className="space-y-8">
        {/* About Me - The Story */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white font-display">
            Beyond the <span className="text-violet-500">Code</span>
          </h3>
          <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed text-base md:text-lg">
            <p>
              I am an adaptable software developer with a passion for building
              things that live on the internet. My journey started with a
              curiosity about how mobile apps worked, which led me to dive deep
              into the world of <strong className="text-white">Flutter</strong>.
            </p>
            <p>
              Realizing the need for robust backends to support these apps, I
              mastered the entire{" "}
              <strong className="text-white">MERN stack</strong>. Today, I
              bridge the gap between mobile and web, ensuring a consistent,
              high-quality user experience across all devices.
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
                  {["Javascript", "Dart", "Python", "Java", "C++"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm text-gray-300 hover:text-white hover:border-violet-500 transition-colors cursor-default"
                    >
                      {t}
                    </span>
                  ))}
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
