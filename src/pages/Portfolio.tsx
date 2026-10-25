import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Download, Sparkles } from "lucide-react";
import jsiarCertificate from "@/assets/jsiar-certificate.png";

interface Project {
  title: string;
  description: string;
  role: string;
  tags: string[];
  url: string;
}

const coreChips = [
  "React & Modern Frontend",
  "Firebase & Supabase Backends",
  "AI / Hugging Face & OpenAI",
  "Vercel & Cloud Deployment",
  "Team Leadership & Hackathons",
  "Claude Code / Lovable",
  "Vercel AI SDK / Docker",
];

const projects: Project[] = [
  {
    title: "Trutalenza — AI Chatbot Platform",
    description:
      "Production-ready AI chatbot platform where users can create and manage assistants, with React UI, API layer, and Firebase backend. Integrated Hugging Face models and n8n workflows to automate support flows and reduce manual responses.",
    role: "Full-Stack Developer · AI Engineer",
    tags: ["React Frontend", "Firebase Backend", "Hugging Face AI", "n8n Automation", "Vercel Deployment", "REST APIs"],
    url: "https://trutalenza.com",
  },
  {
    title: "ChatPup —  Puppy sale 🐶",
    description:
      "AI text generation platform with Supabase database, authentication, and analytics. Combined OpenAI and Hugging Face models to deliver fast content generation with a clean UX and integrated payments for premium features.",
    role: "Full-Stack Developer · AI Integration",
    tags: ["Vue.js Frontend", "Supabase", "OpenAI & Hugging Face", "Auth & User Accounts", "Payments & Analytics", "Vercel"],
    url: "https://chatpup.vercel.app",
  },
  {
    title: "GPSVNS — My Skool Website 🏫",
    description:
      "AI-enabled web experience demonstrating automation workflows, clean UI, and reliable deployment pipelines. Focused on fast page loads, modern UI/UX, and cloud-native infrastructure for experiments and demos.",
    role: "Full-Stack Developer",
    tags: ["AI Integration", "Modern Web App", "Deployment Pipelines", "UI/UX", "Cloud-native"],
    url: "https://gpsvns.vercel.app",
  },
  {
    title: "TenderGift — Soft Gift Finder 🎁",
    description:
      "AI-powered gift recommendation app that takes a single heartfelt prompt about someone and suggests the perfect personalized gift. Features a dreamy UI, curated gift gallery, and affiliate-powered shopping links — all wrapped in a gentle, cozy experience.",
    role: "Full-Stack Developer · AI Integration",
    tags: ["AI Gift Matching", "Modern Frontend", "Curated Gallery", "Prompt-Based UX", "Affiliate Commerce", "Vercel Deployment"],
    url: "https://tendergift.vercel.app",
  },
  {
    title: "BeBrave — BoostHabits 💪",
    description:
      "A mood-aware wellness app that checks in on how you're feeling and delivers personalized boosts, habit tracking, and daily motivation. Features a soothing UI with mood selection, streak tracking, and gentle nudges to build positive routines.",
    role: "Full-Stack Developer · Wellness Tech",
    tags: ["Mood Tracking", "Habit Builder", "Modern Frontend", "Auth & Streaks", "Wellness UX", "Vercel Deployment"],
    url: "https://bebrave.vercel.app/",
  },
  {
    title: "GhatBanaras — Hidden Banaras 🔱",
    description:
      "AI-assisted travel platform for Varanasi that surfaces hidden ghats, local stories, and non-obvious experiences. Designed flows for OpenAI-powered trip planning, authentication, and a polished frontend for travelers, hotel owners, and tour guides.",
    role: "Product Designer · Full-Stack Developer",
    tags: ["OpenAI API", "Travel & Tourism", "Auth & User Profiles", "Hotel & Guide Contacts", "Banaras Local Insights", "Modern Frontend"],
    url: "https://ghatbanaras.com",
  },
  {
    title: "Split — Expense Splitter 💸",
    description:
      "A clean expense-splitting app that lets you create or join a partner's group with invite codes, track shared expenses, and settle balances effortlessly. Features a minimal, intuitive UI focused on simplicity and ease of use.",
    role: "Full-Stack Developer",
    tags: ["Expense Tracking", "Group Management", "Invite Codes", "Modern Frontend", "Clean UX", "Vercel Deployment"],
    url: "https://split-two-wheat.vercel.app",
  },
  {
    title: "StudentHelp — Student Resource Hub 🎓",
    description:
      "A student-focused platform that connects learners with helpful resources, tools, and community support. Designed to streamline the student experience with a clean, accessible interface and useful utilities.",
    role: "Full-Stack Developer",
    tags: ["Student Tools", "Resource Hub", "Community", "Modern Frontend", "Clean UX", "Vercel Deployment"],
    url: "https://studentshelp.vercel.app",
  },
  {
    title: "AI/ML Model Lab 🧠",
    description:
      "Hands-on AI lab exploring NLP, fine-tuning with LoRA, and multi-agent orchestration. Features an AI Resume Scanner, text classification, and streaming assistants — all in a playful learning interface.",
    role: "Full-Stack Developer · AI/ML Engineer",
    tags: ["NLP", "Fine-tuning", "LoRA", "AI Agents", "Lovable Cloud", "Edge Functions"],
    url: "https://aimlmodel.vercel.app/",
  },
  {
    title: "DiffusionAI 🎨",
    description:
      "An AI-powered image generation platform leveraging diffusion models to create stunning visuals from text prompts with an intuitive, modern interface.",
    role: "Full-Stack Developer · AI Engineer",
    tags: ["AI", "Diffusion Models", "Image Generation", "Modern UI", "Vercel"],
    url: "https://diffusionai.vercel.app/",
  },
  {
    title: "System Designing 🏗️",
    description:
      "An interactive system design learning platform covering scalable architectures, design patterns, and distributed systems concepts with visual diagrams and real-world case studies.",
    role: "Full-Stack Developer · Educator",
    tags: ["System Design", "Architecture", "Scalability", "Learning Platform", "Vercel"],
    url: "https://systemdesigning.vercel.app/",
  },
  {
    title: "CodingAI 💻",
    description:
      "An AI-powered coding assistant platform that helps developers write, debug, and optimize code with intelligent suggestions and real-time collaboration features.",
    role: "Full-Stack Developer · AI Engineer",
    tags: ["AI", "Code Generation", "Developer Tools", "Modern UI", "Vercel"],
    url: "https://codingai-eta.vercel.app/",
  },
];

/* ── Journey timeline data ── */
const timelineEvents = [
  { year: "2024", emoji: "🎓", title: "Started B.Tech CS at NIU", description: "Began Computer Science & Engineering at Noida International University with a focus on AI and web development.", side: "left" as const },
  { year: "2024", emoji: "💻", title: "First Full-Stack Projects", description: "Built Trutalenza, ChatPup, and GPSVNS — shipping production apps with Firebase, Supabase, and AI integrations.", side: "right" as const },
  { year: "2025", emoji: "🏆", title: "Won IIT BHU Hackathon", description: "Led a team to build an AI-powered product using Hugging Face models, winning against strong competition.", side: "left" as const },
  { year: "2025", emoji: "🏢", title: "IBM Student Ambassador", description: "Selected as IBM Ambassador — conducting workshops on full-stack development, AI tools, and cloud deployment.", side: "right" as const },
  { year: "2025", emoji: "📄", title: "Published in JSIAR", description: "Co-authored a peer-reviewed paper on Adaptive Hybrid Intelligence for Cross-Border Fraud Detection.", side: "left" as const },
  { year: "2025", emoji: "🚀", title: "Coding Club Lead", description: "Leading hackathons, mentoring 50+ students in web dev, AI tooling, and modern deployment workflows.", side: "right" as const },
  { year: "2026", emoji: "🎪", title: "Events & Tech Fest, IIT BHU", description: "Took part in the Events & Tech Fest at IIT BHU, Varanasi.", side: "left" as const },
];

/* ── Scroll-reveal wrapper ── */
const FadeInSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
};

/* ── 3D Tilt Card ── */
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -12;
    const rotateY = (x - 0.5) * 12;
    setTransform(`perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlowPos({ x: x * 100, y: y * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-300 ease-out ${className}`}
      style={{ transform, transformStyle: "preserve-3d" }}
    >
      {/* Mouse-following glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 rounded-2xl"
        style={{
          opacity: isHovered ? 0.6 : 0,
          background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, hsl(var(--primary) / 0.12), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
};

/* ── Timeline milestone ── */
const TimelineMilestone = ({ event, index }: { event: typeof timelineEvents[0]; index: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 150);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} className={`relative flex items-start gap-4 sm:gap-0 ${event.side === "right" ? "sm:flex-row-reverse" : ""}`}>
      {/* Content card */}
      <div className={`flex-1 sm:w-[calc(50%-28px)] ${event.side === "right" ? "sm:pl-0 sm:pr-10" : "sm:pl-10 sm:pr-0"}`}>
        <div
          className={`rounded-xl border border-border/25 bg-card/60 p-4 shadow-sm backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-primary/20 hover:shadow-[0_4px_20px_-6px_hsl(var(--primary)/0.15)]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-lg">{event.emoji}</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">{event.year}</span>
          </div>
          <h3 className="text-sm font-bold text-foreground/85 sm:text-[15px]">{event.title}</h3>
          <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground/55 sm:text-xs">{event.description}</p>
        </div>
      </div>

      {/* Center dot — visible on desktop */}
      <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-4 flex-col items-center z-10">
        <div
          className={`h-3.5 w-3.5 rounded-full border-2 border-primary/40 bg-card shadow-sm transition-all duration-500 ${visible ? "scale-100 bg-primary/20" : "scale-0"}`}
        />
      </div>

      {/* Mobile dot */}
      <div className="sm:hidden flex-shrink-0 mt-5">
        <div
          className={`h-3 w-3 rounded-full border-2 border-primary/40 bg-card shadow-sm transition-all duration-500 ${visible ? "scale-100 bg-primary/20" : "scale-0"}`}
        />
      </div>

      {/* Spacer for the other side (desktop) */}
      <div className="hidden sm:block flex-1 sm:w-[calc(50%-28px)]" />
    </div>
  );
};

const Portfolio = () => {
  const [showMobileSkills, setShowMobileSkills] = useState(false);
  const [resumeDialogOpen, setResumeDialogOpen] = useState(false);
  const { toast } = useToast();

  const openResumeDialog = useCallback(() => {
    setResumeDialogOpen(true);
  }, []);

  const handleResumeDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/Harshit_Shah_resume_1.pdf";
    link.download = "Harshit_Shah_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setResumeDialogOpen(false);
    toast({
      title: "Resume download started",
      description: "Your PDF should appear in your downloads in a moment.",
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5 text-foreground">
      {/* Top nav */}
      <header className="sticky top-0 z-20 border-b border-border/40 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="text-lg font-semibold tracking-tight transition-colors hover:text-primary">
            Harshit Shah
          </Link>
          <nav className="flex items-center gap-4 text-xs text-muted-foreground sm:text-sm">
            <Link to="/" className="story-link text-muted-foreground transition-colors hover:text-foreground">
              Home
            </Link>
            <Link to="/projects" className="text-muted-foreground transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link to="/portfolio">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full px-4 text-xs font-medium hover:bg-primary/10 hover:text-primary"
              >
                Portfolio
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-12 pt-8 sm:gap-14 sm:px-6 sm:pb-20 sm:pt-14">
        {/* Soft ambient glow */}
        <div className="pointer-events-none absolute inset-x-0 -top-20 -z-10 h-80 bg-gradient-to-b from-primary/8 via-primary/3 to-transparent blur-3xl" />

        {/* ─── Intro / Hero ─── */}
        <FadeInSection>
          <section className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/80 px-4 py-2 text-[11px] font-medium text-muted-foreground shadow-sm backdrop-blur-sm">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">
                <Sparkles className="h-3 w-3" />
              </span>
              Full-Stack Developer · AI Engineer · Computer Science Student
            </span>

            <div className="space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
                Selected work
              </p>
              <h1 className="text-3xl font-bold tracking-tight leading-[1.15] sm:text-[2.75rem]">
                Building thoughtful products with
                <span className="ml-2 bg-gradient-to-r from-primary via-primary/70 to-primary/40 bg-clip-text text-transparent">
                  AI &amp; the web
                </span>
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground/70 sm:text-[15px]">
                I&apos;m a full-stack developer and AI engineer specializing in modern web apps with AI integration — from
                Firebase/Supabase backends and automation workflows to clean, production-ready interfaces.
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground/70 sm:text-[15px]">
                IIT BHU Hackathon 2025 winner and IBM Student Ambassador, I regularly write on Medium about full-stack
                development, AI tooling, and career strategies while leading technical teams and coding clubs.
              </p>
            </div>

            {/* Core skills / chips — Mobile toggle */}
            <div className="w-full sm:hidden">
              <button
                type="button"
                onClick={() => setShowMobileSkills((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-full border border-border/40 bg-card/80 px-4 py-2.5 text-[11px] font-medium text-muted-foreground shadow-sm transition-colors hover:bg-accent/10"
              >
                <span>Core skills &amp; tools</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  {showMobileSkills ? "Hide" : "View"}
                </span>
              </button>
              {showMobileSkills && (
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {coreChips.map((chip, i) => (
                    <span
                      key={chip}
                      className="rounded-full border border-border/30 bg-card/60 px-3 py-1.5 text-muted-foreground/70 shadow-sm transition-all duration-300 hover:border-primary/20 hover:text-foreground"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop chips */}
            <div className="hidden flex-wrap gap-2 text-xs sm:flex sm:text-[13px]">
              {coreChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border/30 bg-card/60 px-3.5 py-1.5 text-muted-foreground/70 shadow-sm transition-all duration-300 hover:border-primary/20 hover:text-foreground hover:-translate-y-0.5"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Contact row */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground/60 sm:text-sm">
              <span className="font-medium text-foreground/80">📞 +91 9140382662</span>
              <span className="hidden h-1 w-1 rounded-full bg-border/60 sm:inline-block" />
              <a href="mailto:harshit840hs@gmail.com" className="font-medium text-primary/80 hover:text-primary transition-colors">
                📧 harshit840hs@gmail.com
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-border/60 sm:inline-block" />
              <a href="https://linkedin.com/in/harshit-shah--" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                🔗 linkedin.com/in/harshit-shah--
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-border/60 sm:inline-block" />
              <a href="https://github.com/Nob1taaaa" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                💻 github.com/Nob1taaaa
              </a>
            </div>

            <div className="grid gap-4 rounded-2xl border border-border/30 bg-card/75 p-4 shadow-sm backdrop-blur-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-5">
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/70">Quick resume access</p>
                <h2 className="text-base font-bold tracking-tight text-foreground sm:text-lg">Looking for my resume?</h2>
                <p className="max-w-xl text-xs leading-relaxed text-muted-foreground/65 sm:text-sm">
                  Open the download popup and get the latest PDF instantly with clear confirmation once the file starts downloading.
                </p>
              </div>
              <Button
                size="sm"
                onClick={openResumeDialog}
                className="w-full rounded-full px-5 shadow-md shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25 sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Open resume download
              </Button>
            </div>
          </section>
        </FadeInSection>

        {/* ─── My Journey Timeline ─── */}
        <FadeInSection delay={60}>
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-1 w-6 rounded-full bg-primary/30" />
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/50">My Journey</p>
            </div>
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              From first line of code to shipping products ✦
            </h2>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line — desktop */}
              <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/20 via-border/30 to-transparent" />
              {/* Vertical line — mobile */}
              <div className="sm:hidden absolute left-[5px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-border/30 to-transparent" />

              <div className="space-y-6 sm:space-y-8">
                {timelineEvents.map((event, i) => (
                  <TimelineMilestone key={event.title} event={event} index={i} />
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* ─── Education & Experience (with 3D tilt) ─── */}
        <FadeInSection delay={80}>
          <section className="space-y-3">
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 pr-6 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 md:pr-0 scroll-smooth">
              {/* Education */}
              <TiltCard className="min-w-[72%] flex-shrink-0 snap-center md:min-w-0">
                <article className="rounded-2xl border border-border/30 bg-card/70 p-6 shadow-sm backdrop-blur-sm h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">🎓</span>
                    <h2 className="text-sm font-bold tracking-tight sm:text-base">Education &amp; Key Achievements</h2>
                  </div>
                  <ul className="space-y-3 text-xs text-muted-foreground/70 sm:text-sm">
                    <li className="rounded-xl bg-background/50 p-3 transition-colors hover:bg-background/80">
                      <span className="font-semibold text-foreground/85">B.Tech Computer Science &amp; Engineering</span>
                      <br />
                      <span className="text-muted-foreground/50">Noida International University, 2024–2027 · GPA 8.7/10.0</span>
                    </li>
                    <li className="rounded-xl bg-background/50 p-3 transition-colors hover:bg-background/80">
                      <span className="font-semibold text-foreground/85">🏆 Winner, IIT BHU Hackathon 2025</span>
                      <br />
                      <span className="text-muted-foreground/50">Led a team to build a full-stack AI-powered product using Hugging Face models and modern deployment.</span>
                    </li>
                    <li className="rounded-xl bg-background/50 p-3 transition-colors hover:bg-background/80">
                      <span className="font-semibold text-foreground/85">Published Writer (Medium)</span>
                      <br />
                      <span className="text-muted-foreground/50">Writing on full-stack development, AI integration, and career strategy.</span>
                    </li>
                  </ul>
                </article>
              </TiltCard>

              {/* Experience */}
              <TiltCard className="min-w-[72%] flex-shrink-0 snap-center md:min-w-0">
                <article className="rounded-2xl border border-border/30 bg-card/70 p-6 shadow-sm backdrop-blur-sm h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">💼</span>
                    <h2 className="text-sm font-bold tracking-tight sm:text-base">Experience &amp; Leadership</h2>
                  </div>
                  <ul className="space-y-3 text-xs text-muted-foreground/70 sm:text-sm">
                    <li className="rounded-xl bg-background/50 p-3 transition-colors hover:bg-background/80">
                      <span className="font-semibold text-foreground/85">Full-Stack Developer &amp; AI Enthusiast</span>
                      <span className="text-muted-foreground/40"> — Self-directed (2025)</span>
                      <br />
                      <span className="text-muted-foreground/50">Building end-to-end web apps with AI integration, Firebase/Supabase backends, and modern deployment workflows.</span>
                    </li>
                    <li className="rounded-xl bg-background/50 p-3 transition-colors hover:bg-background/80">
                      <span className="font-semibold text-foreground/85">Coding Club Lead</span>
                      <span className="text-muted-foreground/40"> — Noida International University</span>
                      <br />
                      <span className="text-muted-foreground/50">Organizing hackathons, mentoring 50+ students in web, AI tools, and Vercel deployment.</span>
                    </li>
                    <li className="rounded-xl bg-background/50 p-3 transition-colors hover:bg-background/80">
                      <span className="font-semibold text-foreground/85">IBM Student Ambassador</span>
                      <br />
                      <span className="text-muted-foreground/50">Conducting workshops on full-stack development, AI tools, and cloud deployment.</span>
                    </li>
                  </ul>
                </article>
              </TiltCard>
            </div>

            {/* Mobile scroll hint */}
            <p className="pl-1 text-[11px] text-muted-foreground/40 sm:hidden">
              <span className="mr-1 inline-block text-base align-middle pulse">↔</span>
              Swipe sideways to see both cards
            </p>
          </section>
        </FadeInSection>

        {/* ─── Tech Stack (with 3D tilt) ─── */}
        <FadeInSection delay={100}>
          <section className="grid gap-4 md:grid-cols-3">
            {[
              { icon: "⚡", label: "Core stack", title: "Frontend & product UI", items: ["React, Vue, TypeScript, Tailwind CSS", "Design systems, smooth motion, responsive layouts"] },
              { icon: "🧠", label: "AI & backend", title: "APIs, databases & models", items: ["Firebase, Supabase, REST APIs", "OpenAI, Hugging Face, automation workflows (n8n)"] },
              { icon: "🚀", label: "Shipping & collaboration", title: "From idea to deployed product", items: ["Vercel deployment, GitHub, CI-style workflows", "Hackathons, mentorship, clear documentation"] },
            ].map((stack) => (
              <TiltCard key={stack.label} className="rounded-2xl">
                <article className="rounded-2xl border border-border/30 bg-card/70 p-5 shadow-sm backdrop-blur-sm h-full">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{stack.icon}</span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/50">{stack.label}</p>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground/85">{stack.title}</p>
                  <ul className="mt-2.5 space-y-1.5 text-xs text-muted-foreground/60">
                    {stack.items.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </TiltCard>
            ))}
          </section>
        </FadeInSection>

        {/* ─── AI Engineering Expertise — Glassmorphism ─── */}
        <FadeInSection delay={110}>
          <section className="space-y-8">
            {/* Section header */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-1 w-6 rounded-full bg-primary/30" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/50">AI Engineering</p>
              </div>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Full-spectrum AI capabilities{" "}
                <span className="bg-gradient-to-r from-primary via-primary/60 to-primary/30 bg-clip-text text-transparent">🧬</span>
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground/60">
                From prompt engineering to production ML pipelines — here&apos;s what I bring to the table as an AI engineer.
              </p>
            </div>

            {/* Glassmorphism grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: "🧠", title: "LLM & Prompt Engineering", description: "System prompts, chain-of-thought, few-shot learning & guardrails for GPT-4, Claude, Gemini.", tags: ["OpenAI API", "Claude API", "Gemini", "Prompt Design"], glow: "hsl(250,55%,60%)" },
                { icon: "🔗", title: "RAG & Vector Search", description: "Retrieval-augmented generation with document ingestion, chunking, embeddings & semantic search.", tags: ["LangChain", "Embeddings", "Vector DBs", "PDF Parsing"], glow: "hsl(175,55%,42%)" },
                { icon: "🤖", title: "AI Agents & Orchestration", description: "Multi-agent systems, tool-calling agents, autonomous workflows & function-calling patterns.", tags: ["Agent Systems", "Tool Calling", "n8n", "Workflows"], glow: "hsl(210,60%,55%)" },
                { icon: "🎯", title: "Fine-Tuning & Adapters", description: "LoRA adapters, supervised fine-tuning, dataset curation & model evaluation for domain tasks.", tags: ["LoRA", "Fine-Tuning", "Hugging Face", "Datasets"], glow: "hsl(340,55%,55%)" },
                { icon: "📊", title: "NLP & Text Processing", description: "Text classification, NER, sentiment analysis & structured extraction from unstructured data.", tags: ["NLP", "Classification", "NER", "Extraction"], glow: "hsl(30,65%,50%)" },
                { icon: "⚡", title: "AI Infrastructure", description: "Edge functions, streaming responses, API gateways, rate limiting, caching & cost optimization.", tags: ["Edge Functions", "Streaming", "API Design", "Cost Ops"], glow: "hsl(45,70%,48%)" },
                { icon: "🔍", title: "Evaluation & Testing", description: "Hallucination detection, A/B testing prompts, benchmarking & quality assurance pipelines.", tags: ["Eval Pipelines", "Benchmarks", "Quality", "Testing"], glow: "hsl(145,45%,45%)" },
                { icon: "🛡️", title: "AI Safety & Ethics", description: "Content filtering, bias detection, safety guardrails & AI governance compliance.", tags: ["Safety", "Guardrails", "Bias Detection", "Ethics"], glow: "hsl(200,55%,50%)" },
                { icon: "🚀", title: "Production Deployment", description: "Model serving, monitoring, fallback strategies & scaling AI from prototype to production.", tags: ["Vercel AI SDK", "Docker", "Monitoring", "Scaling"], glow: "hsl(270,50%,55%)" },
              ].map((skill) => (
                <div
                  key={skill.title}
                  className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/70 p-5 shadow-md backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-border/60 hover:bg-card/85 hover:shadow-[0_8px_40px_-12px_var(--glow)]"
                  style={{ "--glow": `${skill.glow}40` } as React.CSSProperties}
                >
                  {/* Glass shine line */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Glowing orb */}
                  <div
                    className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-[60px] transition-opacity duration-700 group-hover:opacity-40"
                    style={{ background: skill.glow }}
                  />

                  {/* Icon */}
                  <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/60 text-2xl shadow-sm backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-border/40 group-hover:shadow-lg group-hover:rotate-3">
                    {skill.icon}
                  </div>

                  {/* Title */}
                  <h3 className="relative text-sm font-bold tracking-tight text-foreground sm:text-[15px]">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-2 text-[11.5px] leading-[1.7] text-muted-foreground/80 sm:text-xs">
                    {skill.description}
                  </p>

                  {/* Tags */}
                  <div className="relative mt-4 flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/30 bg-background/40 px-2.5 py-1 text-[9px] font-semibold tracking-wider text-muted-foreground/70 backdrop-blur-sm transition-all duration-300 group-hover:border-border/40 group-hover:text-muted-foreground/90 sm:text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom glow */}
                  <div
                    className="pointer-events-none absolute -bottom-16 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full opacity-0 blur-[50px] transition-opacity duration-700 group-hover:opacity-20"
                    style={{ background: skill.glow }}
                  />
                </div>
              ))}
            </div>

            {/* Tools cloud — glass panel */}
            <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/65 p-6 shadow-md backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/8 to-transparent" />
              <div className="flex items-center gap-2 mb-4">
                <span className="text-base">🛠️</span>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/45">Models &amp; tools I work with</p>
                <span className="ml-auto rounded-full border border-primary/15 bg-primary/5 px-2.5 py-0.5 text-[10px] font-semibold text-primary/60 backdrop-blur-sm">17 tools</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "GPT-4 / GPT-4o", "Claude 3.5 / Claude Code", "Gemini Pro", "Llama 3", "Mistral",
                  "Hugging Face Transformers", "LangChain", "Vercel AI SDK", "OpenAI API",
                  "Pinecone", "ChromaDB", "n8n Workflows", "Docker", "Edge Functions",
                  "TensorFlow.js", "Stable Diffusion", "Whisper API",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border/30 bg-background/40 px-3.5 py-1.5 text-[10px] font-semibold text-muted-foreground/70 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-background/60 hover:text-foreground/90 hover:-translate-y-0.5 hover:shadow-sm sm:text-[11px]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* ─── Featured Publication ─── */}
        <FadeInSection delay={120}>
          <section>
            <TiltCard className="rounded-2xl">
              <div className="grid gap-5 rounded-2xl border border-border/30 bg-card/70 p-5 shadow-sm backdrop-blur-sm md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:p-7">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base">📄</span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/70">Published research</p>
                  </div>
                  <h2 className="text-base font-bold tracking-tight leading-snug sm:text-lg">
                    Adaptive Hybrid Intelligence Framework for Proactive Cross-Border Fraud Detection
                  </h2>
                  <p className="text-xs font-medium text-muted-foreground/60 sm:text-sm">
                    Journal of Scientific Innovation and Advanced Research (JSIAR), 2025 — Peer-reviewed, multidisciplinary journal.
                  </p>
                  <p className="text-xs text-muted-foreground/50 leading-relaxed sm:text-sm">
                    Co-designed and implemented a hybrid AI framework for detecting cross-border transaction fraud,
                    focusing on real-time risk scoring and improved detection accuracy.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-xs overflow-hidden rounded-xl border border-border/20 bg-background/30 shadow-sm">
                    <img
                      src={jsiarCertificate}
                      alt="JSIAR publication certificate for Harshit Shah"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </TiltCard>
          </section>
        </FadeInSection>

        {/* ─── Download Resume ─── */}
        <FadeInSection delay={140}>
          <section>
            <div className="flex flex-col gap-4 rounded-2xl border border-border/30 bg-card/70 px-5 py-5 shadow-sm backdrop-blur-sm md:flex-row md:items-center md:justify-between md:px-8 md:py-7">
              <div className="space-y-2 max-w-md">
                <div className="flex items-center gap-2">
                  <span className="text-base">📎</span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/50">
                    Updated resume
                  </p>
                </div>
                <h2 className="text-base font-bold tracking-tight sm:text-lg">Download my resume</h2>
                <p className="text-xs text-muted-foreground/50 leading-relaxed sm:text-sm">
                  Get the full, high-resolution PDF resume with clickable links to projects, education, experience, and
                  publications.
                </p>
                <p className="text-[11px] font-medium text-primary/70 sm:text-xs">
                  A confirmation popup appears first, then a download message shows after it starts.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Dialog open={resumeDialogOpen} onOpenChange={setResumeDialogOpen}>
                  <Button
                    size="sm"
                    onClick={openResumeDialog}
                    className="inline-flex items-center gap-2 rounded-full px-5 shadow-md shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download resume (PDF)</span>
                  </Button>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Your resume is ready</DialogTitle>
                      <DialogDescription>
                        Download the latest PDF resume. As soon as the file starts, you&apos;ll see a confirmation message so visitors know it worked.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="rounded-xl border border-border/30 bg-accent/20 p-3 text-xs leading-relaxed text-muted-foreground/70">
                      Includes projects, education, experience, achievements, and publication links.
                    </div>
                    <DialogFooter className="flex flex-col gap-2 sm:flex-row">
                      <Button variant="outline" onClick={() => setResumeDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button className="w-full gap-2" onClick={handleResumeDownload}>
                        <Download className="h-4 w-4" />
                        Yes, download now
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* ─── Contact CTA ─── */}
        <FadeInSection delay={160}>
          <section>
            <div className="rounded-2xl border border-border/30 bg-card/70 px-5 py-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-primary/15 md:px-8 md:py-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">✨</span>
                <h2 className="text-base font-bold tracking-tight sm:text-lg">Liked what you saw?</h2>
              </div>
              <p className="text-sm text-muted-foreground/60 leading-relaxed sm:text-[15px] max-w-xl">
                I&apos;m always excited to collaborate on full-stack and AI-powered products. Reach out and let&apos;s build
                something impactful together.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm sm:mt-5">
                <a href="mailto:harshit840hs@gmail.com">
                  <Button
                    size="sm"
                    className="rounded-full px-5 shadow-md shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
                  >
                    Email me
                  </Button>
                </a>
                <p className="text-xs text-muted-foreground/50 sm:text-sm">
                  or connect on
                  <a
                    href="https://linkedin.com/in/harshit-shah--"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1 font-semibold text-primary/70 hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
    </div>
  );
};

export default Portfolio;