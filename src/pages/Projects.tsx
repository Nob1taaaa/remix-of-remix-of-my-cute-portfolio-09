import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Trutalenza",
    subtitle: "AI Chatbot Platform",
    description:
      "Production-ready AI chatbot platform where users can create and manage assistants, with React UI, API layer, and Firebase backend.",
    role: "Full-Stack Developer · AI Engineer",
    tags: ["React", "Firebase", "Hugging Face", "n8n", "Vercel", "REST APIs"],
    url: "https://trutalenza.com/",
    emoji: "🤖",
    gradient: "from-[hsl(210,60%,92%)] to-[hsl(220,50%,96%)]",
    accentColor: "hsl(210, 60%, 55%)",
  },
  {
    title: "ChatPup",
    subtitle: "Puppy Sale Platform",
    description:
      "AI text generation platform with Supabase database, authentication, and analytics. Clean UX with integrated payments for premium features.",
    role: "Full-Stack Developer · AI Integration",
    tags: ["Vue.js", "Supabase", "OpenAI", "Auth", "Payments", "Vercel"],
    url: "https://petscares.vercel.app/",
    emoji: "🐶",
    gradient: "from-[hsl(30,70%,93%)] to-[hsl(35,50%,96%)]",
    accentColor: "hsl(30, 70%, 50%)",
  },
  {
    title: "GPSVNS",
    subtitle: "My School Website",
    description:
      "AI-enabled web experience demonstrating automation workflows, clean UI, and reliable deployment pipelines with modern UI/UX.",
    role: "Full-Stack Developer",
    tags: ["AI Integration", "Modern Web", "Pipelines", "UI/UX", "Cloud"],
    url: "https://gps-3iuzohgam-gyandeepvns.vercel.app/",
    emoji: "🏫",
    gradient: "from-[hsl(145,40%,92%)] to-[hsl(150,30%,96%)]",
    accentColor: "hsl(145, 45%, 45%)",
  },
  {
    title: "TenderGift",
    subtitle: "Soft Gift Finder",
    description:
      "AI-powered gift recommendation app — takes a heartfelt prompt and suggests the perfect personalized gift with a dreamy UI.",
    role: "Full-Stack Developer · AI Integration",
    tags: ["AI Matching", "Gallery", "Prompt UX", "Affiliate", "Vercel"],
    url: "https://tendergift.vercel.app/",
    emoji: "🎁",
    gradient: "from-[hsl(340,50%,93%)] to-[hsl(350,40%,96%)]",
    accentColor: "hsl(340, 55%, 55%)",
  },
  {
    title: "BeBrave",
    subtitle: "BoostHabits Wellness",
    description:
      "A mood-aware wellness app that delivers personalized boosts, habit tracking, and daily motivation with a soothing, cozy UI.",
    role: "Full-Stack Developer · Wellness Tech",
    tags: ["Mood Tracking", "Habits", "Auth", "Streaks", "Wellness UX"],
    url: "https://bebrave.vercel.app/",
    emoji: "💪",
    gradient: "from-[hsl(270,45%,93%)] to-[hsl(280,35%,96%)]",
    accentColor: "hsl(270, 50%, 55%)",
  },
  {
    title: "RAGMode",
    subtitle: "Realtime AI Workspace",
    description:
      "Full RAG + LangChain system with realtime AI assistance. Ingest PDFs, reports, and datasets, then query them through a streaming assistant with vector search and analytical copilots.",
    role: "Full-Stack Developer · AI Engineer",
    tags: ["RAG", "LangChain", "Vector Search", "Streaming AI", "PDF Parsing"],
    url: "https://ragmode.vercel.app/",
    emoji: "⚡",
    gradient: "from-[hsl(175,50%,90%)] to-[hsl(185,40%,95%)]",
    accentColor: "hsl(175, 55%, 40%)",
  },
  {
    title: "GhatBanaras",
    subtitle: "Hidden Banaras Explorer",
    description:
      "AI-assisted travel platform for Varanasi — surfaces hidden ghats, local stories, and non-obvious experiences with OpenAI-powered trip planning.",
    role: "Product Designer · Full-Stack Developer",
    tags: ["OpenAI", "Travel", "Auth", "Local Insights", "Modern UI"],
    url: "https://ghatbanaras.com/",
    emoji: "🔱",
    gradient: "from-[hsl(40,60%,92%)] to-[hsl(45,45%,96%)]",
    accentColor: "hsl(40, 65%, 48%)",
  },
  {
    title: "AI/ML Model Lab",
    subtitle: "NLP & Agents Playground",
    description:
      "Hands-on AI lab exploring NLP, fine-tuning with LoRA, and multi-agent orchestration. Features an AI Resume Scanner, text classification, and streaming assistants — all in a playful learning interface.",
    role: "Full-Stack Developer · AI/ML Engineer",
    tags: ["NLP", "Fine-tuning", "LoRA", "AI Agents", "Lovable Cloud", "Edge Functions"],
    url: "https://aimlmodel.vercel.app/",
    emoji: "🧠",
    gradient: "from-[hsl(20,60%,92%)] to-[hsl(25,45%,96%)]",
    accentColor: "hsl(20, 65%, 50%)",
  },
  {
    title: "Split",
    subtitle: "Expense Splitter",
    description:
      "A clean expense-splitting app that lets you create or join groups with invite codes, track shared expenses, and settle balances effortlessly.",
    role: "Full-Stack Developer",
    tags: ["Expense Tracking", "Groups", "Invite Codes", "Clean UX", "Vercel"],
    url: "https://split-two-wheat.vercel.app",
    emoji: "💸",
    gradient: "from-[hsl(160,50%,92%)] to-[hsl(170,40%,96%)]",
    accentColor: "hsl(160, 55%, 42%)",
  },
  {
    title: "StudentHelp",
    subtitle: "Student Resource Hub",
    description:
      "A student-focused platform connecting learners with helpful resources, tools, and community support with a clean, accessible interface.",
    role: "Full-Stack Developer",
    tags: ["Student Tools", "Resources", "Community", "Modern UI", "Vercel"],
    url: "https://studentshelp.vercel.app",
    emoji: "🎓",
    gradient: "from-[hsl(230,50%,93%)] to-[hsl(240,40%,96%)]",
    accentColor: "hsl(230, 55%, 55%)",
  },
  {
    title: "DiffusionAI",
    subtitle: "AI Image Generation",
    description:
      "An AI-powered image generation platform leveraging diffusion models to create stunning visuals from text prompts with an intuitive, modern interface.",
    role: "Full-Stack Developer · AI Engineer",
    tags: ["AI", "Diffusion Models", "Image Generation", "Modern UI", "Vercel"],
    url: "https://diffusionai.vercel.app/",
    emoji: "🎨",
    gradient: "from-[hsl(280,50%,93%)] to-[hsl(290,40%,96%)]",
    accentColor: "hsl(280, 55%, 55%)",
  },
  {
    title: "System Designing",
    subtitle: "Architecture Learning Hub",
    description:
      "An interactive system design learning platform covering scalable architectures, design patterns, and distributed systems concepts with visual diagrams and real-world case studies.",
    role: "Full-Stack Developer · Educator",
    tags: ["System Design", "Architecture", "Scalability", "Learning Platform", "Vercel"],
    url: "https://systemdesigning.vercel.app/",
    emoji: "🏗️",
    gradient: "from-[hsl(200,50%,92%)] to-[hsl(210,40%,96%)]",
    accentColor: "hsl(200, 55%, 50%)",
  },
  {
    title: "CodingAI",
    subtitle: "AI Coding Assistant",
    description:
      "An AI-powered coding assistant platform that helps developers write, debug, and optimize code with intelligent suggestions and real-time collaboration features.",
    role: "Full-Stack Developer · AI Engineer",
    tags: ["AI", "Code Generation", "Developer Tools", "Modern UI", "Vercel"],
    url: "https://codingai-eta.vercel.app/",
    emoji: "💻",
    gradient: "from-[hsl(150,50%,92%)] to-[hsl(160,40%,96%)]",
    accentColor: "hsl(150, 55%, 45%)",
  },
  {
    title: "JanamDivash",
    subtitle: "Interactive Birthday Wisher",
    description:
      "A magical birthday celebration page where users pick candles, make a wish, and blow them out using their microphone — a delightful, interactive experience with playful animations.",
    role: "Full-Stack Developer · Creative Tech",
    tags: ["Interactive", "Microphone API", "Animations", "Fun UX", "Vercel"],
    url: "https://janamdivash.vercel.app/",
    emoji: "🎂",
    gradient: "from-[hsl(330,55%,92%)] to-[hsl(340,45%,96%)]",
    accentColor: "hsl(330, 60%, 55%)",
  },
  {
    title: "AirGuardian",
    subtitle: "Air Quality Monitoring Platform",
    description:
      "A real-time air quality monitoring dashboard that tracks pollution levels, provides health recommendations, and visualizes environmental data to help users stay informed and safe.",
    role: "Full-Stack Developer · Environmental Tech",
    tags: ["Air Quality", "Real-Time Data", "Dashboard", "Health", "Vercel"],
    url: "https://air-guardian.vercel.app/",
    emoji: "🌬️",
    gradient: "from-[hsl(200,55%,92%)] to-[hsl(210,45%,96%)]",
    accentColor: "hsl(200, 60%, 45%)",
  },
  {
    title: "VirtualCashMachine",
    subtitle: "ATM Simulator",
    description:
      "A virtual ATM simulator that replicates real banking operations — withdraw, deposit, check balance, and manage accounts with an authentic cash machine experience.",
    role: "Full-Stack Developer",
    tags: ["Finance", "Simulation", "Banking", "Interactive", "Vercel"],
    url: "https://virtualcashmachine.vercel.app/",
    emoji: "🏧",
    gradient: "from-[hsl(170,50%,92%)] to-[hsl(180,40%,96%)]",
    accentColor: "hsl(170, 55%, 40%)",
  },
];

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col overflow-hidden rounded-[20px] border border-border/30 bg-card transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.18),0_0_0_1px_hsl(var(--primary)/0.08)] hover:-translate-y-3 hover:scale-[1.02]
        ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.97]"}
      `}
    >
      {/* Colorful top gradient band */}
      <div
        className={`h-1.5 w-full bg-gradient-to-r ${project.gradient} transition-all duration-500`}
        style={{
          height: isHovered ? "4px" : "3px",
          background: isHovered
            ? `linear-gradient(90deg, ${project.accentColor}, transparent)`
            : undefined,
        }}
      />

      {/* Inner padding area */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Header: emoji bubble + title + number */}
        <div className="flex items-start gap-3.5">
          {/* Emoji in a soft bubble */}
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-xl shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-md group-hover:rotate-3`}
          >
            {project.emoji}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[15px] font-bold tracking-tight text-foreground sm:text-base truncate">
                {project.title}
              </h3>
              <span className="shrink-0 font-mono text-[10px] font-semibold text-muted-foreground/30 transition-colors duration-300 group-hover:text-primary/50">
                #{String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/50 sm:text-xs">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-[12.5px] leading-[1.7] text-muted-foreground/65 sm:text-[13px]">
          {project.description}
        </p>

        {/* Role pill */}
        <div className="mt-4 flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] transition-all duration-300 group-hover:shadow-sm sm:text-[10.5px]"
            style={{
              background: `${project.accentColor}15`,
              color: project.accentColor,
            }}
          >
            <Sparkles className="h-2.5 w-2.5" />
            {project.role}
          </span>
        </div>

        {/* Tags */}
        <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag, tagIdx) => (
            <span
              key={tag}
              className="rounded-lg border border-border/20 bg-background/50 px-2 py-[3px] text-[9.5px] font-semibold tracking-wide text-muted-foreground/50 transition-all duration-300 group-hover:border-border/40 group-hover:text-muted-foreground/70 sm:text-[10px]"
              style={{
                transitionDelay: isHovered ? `${tagIdx * 30}ms` : "0ms",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Visit CTA — appears on hover */}
        <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold tracking-wide opacity-0 transition-all duration-400 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          style={{ color: project.accentColor }}
        >
          Visit project
          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Floating glow blob behind card on hover */}
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30"
        style={{ background: project.accentColor }}
      />
      <div
        className="pointer-events-none absolute -top-8 -left-8 h-24 w-24 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20"
        style={{ background: project.accentColor }}
      />
    </a>
  );
};

const Projects = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setHeaderVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/10 text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-6 sm:py-4">
          <h1 className="text-base font-semibold tracking-tight sm:text-lg">Projects</h1>
          <Link to="/" className="text-xs text-muted-foreground hover:text-primary sm:text-sm transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-3 pb-10 pt-8 sm:gap-10 sm:px-6 sm:pb-14 sm:pt-14">
        {/* Hero intro with stagger */}
        <section
          className={`space-y-4 transition-all duration-700 ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 rounded-full bg-primary/40" />
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground/70">
              Selected work
            </p>
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text">
            Real products I&apos;ve designed &amp; shipped
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground/70 sm:text-base">
            A concise view of my favorite projects — spanning AI chatbots, travel experiences, and modern web apps — each
            crafted with clean UI, thoughtful UX, and reliable engineering.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {projects.length} Projects
            </span>
            <span className="text-[11px] text-muted-foreground/40">·</span>
            <span className="text-[11px] text-muted-foreground/50">Open to new opportunities</span>
          </div>
        </section>

        {/* 3-column project grid */}
        <section className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </section>

        {/* Coming soon - refined */}
        <section className="group mt-2 overflow-hidden rounded-2xl border border-dashed border-border/50 bg-card/50 px-5 py-4 text-xs text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/20 sm:py-5 sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="text-lg">✨</span>
            <p className="font-semibold text-foreground/80 sm:text-base">More projects coming soon</p>
          </div>
          <p className="mt-1.5 max-w-xl text-muted-foreground/60 leading-relaxed">
            This section is ready for future work — when I ship a new product, it will
            appear here automatically with the same beautiful layout.
          </p>
        </section>

        {/* CTA - polished */}
        <section className="mt-2 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/40 bg-card/80 px-5 py-4 backdrop-blur-sm sm:mt-3">
          <div>
            <p className="text-xs font-medium text-foreground/70 sm:text-sm">
              Want to talk about one of these projects?
            </p>
            <p className="mt-0.5 text-[11px] text-muted-foreground/50">
              I&apos;m always open to new ideas and collaborations
            </p>
          </div>
          <a href="mailto:harshit840hs@gmail.com">
            <Button
              size="sm"
              className="rounded-full px-5 text-xs font-semibold shadow-md shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
            >
              Let&apos;s collaborate ↗
            </Button>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Projects;