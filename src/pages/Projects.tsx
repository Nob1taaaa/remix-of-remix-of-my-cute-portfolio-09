import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// Screenshots live in public/projects. Projects without one get an emoji panel.
const screenshots: Record<string, string> = {
  "NIU Campus": "/projects/niu-campus.jpg",
  "ChatPup": "/projects/chatpup.jpg",
  "GPSVNS": "/projects/gpsvns.jpg",
  "TenderGift": "/projects/tendergift.jpg",
  "BeBrave": "/projects/bebrave.jpg",
  "RAGMode": "/projects/ragmode.jpg",
  "AI/ML Model Lab": "/projects/ai-ml-model-lab.jpg",
  "Split": "/projects/split.jpg",
  "DiffusionAI": "/projects/diffusionai.jpg",
  "System Designing": "/projects/system-designing.jpg",
  "CodingAI": "/projects/codingai.jpg",
  "JanamDivash": "/projects/janamdivash.jpg",
  "AirGuardian": "/projects/airguardian.jpg",
  "VirtualCashMachine": "/projects/virtualcashmachine.jpg",
};

const projects = [
  {
    title: "NIU Campus",
    subtitle: "Student-Powered Campus Platform",
    description:
      "From idea to 500+ users at Noida International University 🎉 — a student-powered hub for shared study materials, events & fests, lost & found, community connect, and buying/selling books & accessories.",
    role: "Founder · Full-Stack Developer",
    tags: ["Study Materials", "Events", "Lost & Found", "Marketplace", "Community", "500+ Users"],
    url: "https://niucampus.org",
    emoji: "🎓",
    gradient: "from-[hsl(265,55%,93%)] to-[hsl(280,45%,96%)]",
    accentColor: "hsl(265, 60%, 55%)",
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
];

// Short looping previews that play on hover. Projects without one keep the screenshot.
const videos: Record<string, string> = {
  "NIU Campus": "/projects/niu-campus-demo.webm",
};

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const image = screenshots[project.title];
  const video = videos[project.title];

  const handleEnter = () => {
    videoRef.current?.play().catch(() => {});
  };
  const handleLeave = () => {
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 80);
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
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/65 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-700 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-18px_rgba(15,23,42,0.28)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/70 bg-muted">
        {image ? (
          <img
            src={image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent text-5xl">
            {project.emoji}
          </div>
        )}
        {video && (
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold text-foreground">{project.title}</h3>
            <p className="text-sm text-foreground/70">{project.subtitle}</p>
          </div>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>

        <p className="text-sm leading-relaxed text-foreground/85">{project.description}</p>
        <p className="text-xs font-medium text-foreground/70">{project.role}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/80 bg-white/75 px-2.5 py-0.5 text-xs font-medium text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Projects = () => (
  <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10 text-foreground">
    <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl" />
    <div aria-hidden className="pointer-events-none absolute right-[-10rem] top-1/3 h-[32rem] w-[32rem] rounded-full bg-accent/60 blur-3xl" />

    <header className="sticky top-0 z-20 border-b border-white/60 bg-white/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <h1 className="text-base font-semibold tracking-tight sm:text-lg">Projects</h1>
        <Link to="/" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
          ← Back to home
        </Link>
      </div>
    </header>

    <main className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-16">
      <section className="max-w-2xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70">Selected work</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Real products I&apos;ve designed &amp; shipped
        </h2>
        <p className="text-base leading-relaxed text-foreground/80">
          AI chatbots, travel experiences and modern web apps, each built with clean UI, thoughtful UX and reliable
          engineering.
        </p>
        <span className="inline-flex items-center rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
          {projects.length} projects
        </span>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </section>

      <section className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/70 bg-white/65 px-6 py-5 shadow-sm backdrop-blur-xl">
        <div>
          <p className="text-sm font-medium text-foreground">Want to talk about one of these projects?</p>
          <p className="mt-1 text-sm text-foreground/70">I&apos;m always open to new ideas and collaborations.</p>
        </div>
        <a href="mailto:harshit840hs@gmail.com">
          <Button size="sm" className="rounded-full px-5 text-xs font-semibold">
            Let&apos;s collaborate ↗
          </Button>
        </a>
      </section>
    </main>
  </div>
);

export default Projects;
