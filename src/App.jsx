import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Globe,
  Database,
  Code2,
  Layers,
  ExternalLink,
  Menu,
  X,
  Download,
  Sparkles,
  Briefcase,
  GraduationCap,
  Zap,
  Cpu,
  Terminal,
  User,
  MapPin,
  Heart,
  PenTool,
  Plane,
  Coffee,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

// --- UTILS & VISUALS ---

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-[#02040a]">
    {/* Deep Royal Blue Orb */}
    <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-blue-700/15 rounded-full blur-[150px] animate-blob mix-blend-screen opacity-60"></div>
    {/* Vivid Violet Orb */}
    <div className="absolute top-[20%] right-[-20%] w-[60vw] h-[60vw] bg-violet-600/15 rounded-full blur-[150px] animate-blob animation-delay-2000 mix-blend-screen opacity-60"></div>
    {/* Cyan/Teal Orb */}
    <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] bg-cyan-600/10 rounded-full blur-[150px] animate-blob animation-delay-4000 mix-blend-screen opacity-50"></div>

    {/* Noise Texture */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

    {/* Futuristic Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none"></div>
  </div>
);

const ClayCard = ({ children, className, glow = "blue", delay = "0ms" }) => {
  const glowColors = {
    blue: "group-hover:shadow-[0_0_50px_-10px_rgba(37,99,235,0.3)] hover:border-blue-500/30",
    violet:
      "group-hover:shadow-[0_0_50px_-10px_rgba(124,58,237,0.3)] hover:border-violet-500/30",
    cyan: "group-hover:shadow-[0_0_50px_-10px_rgba(8,145,178,0.3)] hover:border-cyan-500/30",
    gold: "group-hover:shadow-[0_0_50px_-10px_rgba(234,179,8,0.3)] hover:border-yellow-500/30",
  };

  return (
    <div
      className={`relative group ${className} animate-fade-in-up`}
      style={{ animationDelay: delay }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-[2.5rem] blur-xl transition-all duration-700 opacity-0 group-hover:opacity-100`}
      ></div>
      <div
        className={` p-8
        relative h-full bg-[#0a0a12]/60 backdrop-blur-xl rounded-[2rem] border border-white/10 
        shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] 
        transition-all duration-500 hover:-translate-y-1
        ${glowColors[glow]}
      `}
      >
        {children}
      </div>
    </div>
  );
};

// --- NAVIGATION ---

const Nav = ({ activePage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Terminal },
    { id: "journey", label: "Life Journey", icon: MapPin },
    { id: "work", label: "Projects", icon: Layers },
    { id: "about", label: "About Me", icon: User },
  ];

  return (
    <>
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:w-auto sm:bottom-8">
        <div className="bg-[#0f111a]/80 backdrop-blur-2xl border border-white/10 rounded-full p-2 flex justify-between items-center shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] sm:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`
                relative px-4 py-3 rounded-full flex items-center gap-2 transition-all duration-300
                ${
                  activePage === item.id
                    ? "bg-white/10 text-white shadow-inner"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }
              `}
            >
              <item.icon
                className={`w-5 h-5 ${
                  activePage === item.id ? "text-blue-400" : ""
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  activePage === item.id ? "block" : "hidden sm:block"
                }`}
              >
                {item.label}
              </span>
              {activePage === item.id && (
                <span className="absolute inset-0 border border-white/10 rounded-full animate-ping opacity-20"></span>
              )}
            </button>
          ))}

          <div className="w-px h-6 bg-white/10 mx-2 hidden sm:block"></div>

          <a
            href="mailto:manojschavan6@gmail.com"
            className="hidden sm:flex p-3 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 hover:scale-110 transition-transform"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </>
  );
};

// --- PAGES ---

const HomePage = ({ setPage }) => (
  <section className="min-h-screen flex flex-col justify-center pt-20 pb-32 px-6">
    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
      <div className="space-y-8 z-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-950/30 border border-blue-500/30 text-blue-300 text-sm font-bold tracking-wide uppercase animate-fade-in-up">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          Nashik, India • Open for Hire
        </div>

        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white leading-[0.9] animate-fade-in-up animation-delay-200">
          Manoj <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
            Chavan.
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light animate-fade-in-up animation-delay-400">
          I don't just write code; I architect{" "}
          <span className="text-white font-medium">experiences</span>. Full
          Stack Engineer blending the precision of backend logic with the
          artistry of frontend motion.
        </p>

        <div className="flex flex-wrap gap-6 animate-fade-in-up animation-delay-600 pt-4">
          <button
            onClick={() => setPage("work")}
            className="px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform flex items-center gap-3"
          >
            See My Work <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => setPage("journey")}
            className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg text-white hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-sm"
          >
            My Story <User className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="relative hidden lg:block h-[600px] w-full animate-float-slow">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-violet-600/20 rounded-[3rem] rotate-6 blur-3xl"></div>
        <div className="absolute inset-0 bg-[#0a0a12]/90 backdrop-blur-xl rounded-[3rem] -rotate-6 border border-white/10 shadow-2xl p-8 flex flex-col">
          {/* Floating Interface Elements */}
          <div className="flex-1 relative overflow-hidden rounded-2xl bg-black/50 border border-white/5 p-6">
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs font-mono text-gray-500">
                Full Stack Architecture
              </div>
            </div>

            <div className="space-y-4">
              {/* Code Blocks */}
              <div className="h-4 w-3/4 bg-gray-800/50 rounded animate-pulse"></div>
              <div className="h-4 w-1/2 bg-blue-900/20 rounded animate-pulse delay-75"></div>
              <div className="h-4 w-5/6 bg-gray-800/50 rounded animate-pulse delay-150"></div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <div className="text-blue-400 text-xs font-bold mb-1">
                    REACT
                  </div>
                  <div className="text-white text-lg font-bold">98%</div>
                </div>
                <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20">
                  <div className="text-violet-400 text-xs font-bold mb-1">
                    FLUTTER
                  </div>
                  <div className="text-white text-lg font-bold">95%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-end">
            <div>
              <div className="text-4xl font-bold text-white">3+</div>
              <div className="text-gray-500 text-sm">Years Coding</div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-white">10+</div>
              <div className="text-gray-500 text-sm">Projects Shipped</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const JourneyPage = () => (
  <section className="min-h-screen pt-24 pb-32 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl font-bold text-white mb-6">
          Life <span className="text-blue-500">Timeline</span>
        </h2>
        <p className="text-xl text-gray-400">
          My path from a curious student to a professional engineer.
        </p>
      </div>

      <div className="relative border-l-2 border-white/10 ml-6 space-y-16">
        {/* 2025 - Current */}
        <div className="relative pl-12 group">
          <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#02040a] shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
          <div className="text-sm font-mono text-blue-400 mb-2">
            JAN 2025 - PRESENT
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Freelance Mobile Architect
          </h3>
          <ClayCard className="p-8" glow="blue">
            <p className="text-gray-300 leading-relaxed mb-4">
              Designing and developing custom mobile applications using Flutter.
              I work directly with clients to translate their business needs
              into high-performance mobile experiences.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-xs font-bold">
                Self Employed
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/5 text-gray-400 text-xs">
                Remote
              </span>
            </div>
          </ClayCard>
        </div>

        {/* 2024 - 2027 */}
        <div className="relative pl-12 group">
          <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-violet-500 border-4 border-[#02040a] shadow-[0_0_20px_rgba(124,58,237,0.5)]"></div>
          <div className="text-sm font-mono text-violet-400 mb-2">
            2024 - 2027
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Bachelor of Technology
          </h3>
          <ClayCard className="p-8" glow="violet">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-violet-400" />
              <span className="text-lg font-bold text-white">
                Matoshri College of Engineering
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Pursuing Information Technology. Deepening my understanding of
              Algorithms, System Design, and AI.
            </p>
            <div className="text-sm text-gray-500">Nashik, Maharashtra</div>
          </ClayCard>
        </div>

        {/* Jan 2024 - Apr 2024 */}
        <div className="relative pl-12 group">
          <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-cyan-500 border-4 border-[#02040a]"></div>
          <div className="text-sm font-mono text-cyan-400 mb-2">
            JAN 2024 - APR 2024
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Frontend Intern
          </h3>
          <ClayCard className="p-8" glow="cyan">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-cyan-400" />
              <span className="text-lg font-bold text-white">
                Marg Foundation
              </span>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2 marker:text-cyan-500">
              <li>Developed core homepage components using React.</li>
              <li>Collaborated on UX prototypes using Figma.</li>
              <li>Optimized load times by 20%.</li>
            </ul>
          </ClayCard>
        </div>

        {/* 2021 - 2024 */}
        <div className="relative pl-12 group">
          <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-white border-4 border-[#02040a]"></div>
          <div className="text-sm font-mono text-gray-400 mb-2">
            2021 - 2024
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">The Foundation</h3>
          <ClayCard className="p-8" glow="white">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-white" />
              <span className="text-lg font-bold text-white">
                Diploma in Computer Engineering
              </span>
            </div>
            <p className="text-gray-300">
              Government Polytechnic, Nandurbar. This is where my love for
              coding began. Mastered C++, Java, and the basics of Web
              Development.
            </p>
          </ClayCard>
        </div>
      </div>
    </div>
  </section>
);

const WorkPage = () => (
  <section className="min-h-screen pt-24 pb-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Selected{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            Works
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl">
          A curated gallery of full-stack applications, mobile tools, and AI
          experiments.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Play Bucket */}
        <ClayCard
          className="group overflow-hidden min-h-[400px] flex flex-col"
          glow="gold"
        >
          <div className="h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 mix-blend-overlay"></div>
            <div className="absolute bottom-4 left-6">
              <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg text-orange-300 text-xs font-bold">
                EDTECH
              </span>
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-3xl font-bold text-white">Play_Bucket</h3>
              <Github className="text-gray-500 hover:text-white transition-colors" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              A massive full-stack learning ecosystem. Features real-time
              collaborative whiteboards, Youtube API integration for course
              content, and a personalized AI Tutor powered by Gemini.
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Gemini AI", "Socket.io"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/5"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </ClayCard>

        {/* Digital Garage */}
        <ClayCard
          className="group overflow-hidden min-h-[400px] flex flex-col"
          glow="blue"
        >
          <div className="h-48 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 mix-blend-overlay"></div>
            <div className="absolute bottom-4 left-6">
              <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg text-blue-300 text-xs font-bold">
                MOBILE APP
              </span>
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-3xl font-bold text-white">Digital Garage</h3>
              <Github className="text-gray-500 hover:text-white transition-colors" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              A comprehensive solution for vehicle owners and mechanics.
              Supports appointment booking, inventory management, and
              offline-first functionality using Supabase.
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {["Flutter", "Dart", "Supabase", "PostgreSQL"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </ClayCard>

        {/* LearnX */}
        <ClayCard
          className="group overflow-hidden min-h-[400px] flex flex-col"
          glow="violet"
        >
          <div className="h-48 bg-gradient-to-br from-violet-600/20 to-purple-600/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 mix-blend-overlay"></div>
            <div className="absolute bottom-4 left-6">
              <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg text-violet-300 text-xs font-bold">
                AI TOOL
              </span>
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-3xl font-bold text-white">LearnX</h3>
              <Github className="text-gray-500 hover:text-white transition-colors" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Advanced Document Analysis platform. Upload any PDF and chat with
              it. Uses RAG (Retrieval Augmented Generation) to provide precise
              answers from the document content.
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {["React", "Gemini API", "Vector DB", "Tailwind"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </ClayCard>

        {/* More Projects Placeholders */}
        <div className="flex items-center justify-center p-8 rounded-[2rem] border border-dashed border-white/10 text-gray-500">
          <div className="text-center">
            <Code2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>More projects available on GitHub</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutPage = () => (
  <section className="min-h-screen pt-24 pb-32 px-6">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
      {/* Left: Profile Card */}
      <div className="space-y-8">
        <ClayCard className="p-8 text-center" glow="blue">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-violet-500 rounded-full mb-6 flex items-center justify-center text-4xl font-bold text-white shadow-2xl shadow-blue-500/30">
            M
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Manoj Chavan</h2>
          <p className="text-blue-400 font-medium mb-6">Full Stack Developer</p>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href="#"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-4 text-left">
            <div>
              <div className="text-xs text-gray-500 uppercase font-bold">
                Location
              </div>
              <div className="text-white">Maharashtra, India</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase font-bold">
                Email
              </div>
              <div className="text-white text-xs truncate">
                manojschavan6@gmail.com
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase font-bold">
                Languages
              </div>
              <div className="text-white">English, Hindi, Marathi</div>
            </div>
          </div>
        </ClayCard>

        {/* Soft Skills */}
        <ClayCard className="p-8" glow="violet">
          <h3 className="text-xl font-bold text-white mb-4">My Superpowers</h3>
          <div className="space-y-4">
            {[
              { label: "Adaptability", val: 95 },
              { label: "Teamwork", val: 90 },
              { label: "Communication", val: 85 },
              { label: "Time Management", val: 88 },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">{s.label}</span>
                  <span className="text-violet-400">{s.val}%</span>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-violet-500 rounded-full"
                    style={{ width: `${s.val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </ClayCard>
      </div>

      {/* Right: Narrative & Hobbies */}
      <div className="space-y-8">
        <div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Beyond the <span className="text-violet-500">Code</span>
          </h2>
          <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed text-lg">
            <p>
              I am an adaptable software developer with a passion for building
              things that live on the internet. My journey started with a
              curiosity about how mobile apps worked, which led me to dive deep
              into the world of <strong>Flutter</strong> and eventually the
              entire <strong>MERN stack</strong>.
            </p>
            <p>
              I believe in clean code, intuitive design, and the power of
              collaboration. Whether it's architecting a complex backend or
              refining the animation of a button, I strive for excellence in
              every layer of the stack.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white pt-4">
          Hobbies & Interests
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ClayCard className="p-6 flex items-center gap-4" glow="cyan">
            <div className="p-4 bg-cyan-500/10 rounded-2xl text-cyan-400">
              <PenTool className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Sketching</h4>
              <p className="text-gray-400 text-sm">
                Visualizing ideas on paper before screen.
              </p>
            </div>
          </ClayCard>

          <ClayCard className="p-6 flex items-center gap-4" glow="gold">
            <div className="p-4 bg-yellow-500/10 rounded-2xl text-yellow-400">
              <Plane className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Traveling</h4>
              <p className="text-gray-400 text-sm">
                Exploring new cultures and perspectives.
              </p>
            </div>
          </ClayCard>

          <ClayCard className="p-6 flex items-center gap-4" glow="violet">
            <div className="p-4 bg-violet-500/10 rounded-2xl text-violet-400">
              <Heart className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Design</h4>
              <p className="text-gray-400 text-sm">
                Matoshri & Klarity Design Concepts.
              </p>
            </div>
          </ClayCard>
        </div>

        <h3 className="text-2xl font-bold text-white pt-4">
          Tech Stack (Expanded)
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Javascript",
            "Dart",
            "Java",
            "Python",
            "C++",
            "React",
            "Flutter",
            "Express.js",
            "Node.js",
            "MongoDB",
            "Supabase",
            "Git",
            "VS Code",
            "Android Studio",
          ].map((t) => (
            <span
              key={t}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 font-mono text-sm hover:bg-white/10 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- MAIN APP COMPONENT ---

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
    <div className="min-h-screen bg-[#02040a] text-gray-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.2); }
          66% { transform: translate(-20px, 20px) scale(0.8); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 10s infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      <AnimatedBackground />

      {/* Dynamic Content Area with Fade Transition */}
      <main
        className={`transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {activePage === "home" && <HomePage setPage={handlePageChange} />}
        {activePage === "journey" && <JourneyPage />}
        {activePage === "work" && <WorkPage />}
        {activePage === "about" && <AboutPage />}
      </main>

      <Nav activePage={activePage} setPage={handlePageChange} />

      {/* Footer (Only show on bottom of pages, minimal) */}
      <footer className="py-8 text-center text-gray-600 text-xs font-mono pb-24 sm:pb-8">
        © 2025 Manoj Chavan. Engineered with Passion.
      </footer>
    </div>
  );
};

export default App;
