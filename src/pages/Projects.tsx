import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Trutalenza — AI Chatbot Platform",
    description:
      "Production-ready AI chatbot platform where users can create and manage assistants, with React UI, API layer, and Firebase backend. Integrated Hugging Face models and n8n workflows to automate support flows and reduce manual responses.",
    role: "Full-Stack Developer · AI Engineer",
    tags: ["React Frontend", "Firebase Backend", "Hugging Face AI", "n8n Automation", "Vercel Deployment", "REST APIs"],
    url: "https://trutalenza.com/",
    emoji: "🤖",
  },
  {
    title: "ChatPup — Puppy sale",
    description:
      "AI text generation platform with Supabase database, authentication, and analytics. Combined OpenAI and Hugging Face models to deliver fast content generation with a clean UX and integrated payments for premium features.",
    role: "Full-Stack Developer · AI Integration",
    tags: ["Vue.js Frontend", "Supabase", "OpenAI & Hugging Face", "Auth & User Accounts", "Payments & Analytics", "Vercel"],
    url: "https://petscares.vercel.app/",
    emoji: "🐶",
  },
  {
    title: "GPSVNS — My Skool Website",
    description:
      "AI-enabled web experience demonstrating automation workflows, clean UI, and reliable deployment pipelines. Focused on fast page loads, modern UI/UX, and cloud-native infrastructure for experiments and demos.",
    role: "Full-Stack Developer",
    tags: ["AI Integration", "Modern Web App", "Deployment Pipelines", "UI/UX", "Cloud-native"],
    url: "https://gps-3iuzohgam-gyandeepvns.vercel.app/",
    emoji: "🏫",
  },
  {
    title: "TenderGift — Soft Gift Finder",
    description:
      "AI-powered gift recommendation app that takes a single heartfelt prompt about someone and suggests the perfect personalized gift. Features a dreamy UI, curated gift gallery, and affiliate-powered shopping links.",
    role: "Full-Stack Developer · AI Integration",
    tags: ["AI Gift Matching", "Modern Frontend", "Curated Gallery", "Prompt-Based UX", "Affiliate Commerce", "Vercel Deployment"],
    url: "https://tendergift.vercel.app/",
    emoji: "🎁",
  },
  {
    title: "BeBrave — BoostHabits",
    description:
      "A mood-aware wellness app that checks in on how you're feeling and delivers personalized boosts, habit tracking, and daily motivation. Features a soothing UI with mood selection, streak tracking, and gentle nudges.",
    role: "Full-Stack Developer · Wellness Tech",
    tags: ["Mood Tracking", "Habit Builder", "Modern Frontend", "Auth & Streaks", "Wellness UX", "Vercel Deployment"],
    url: "https://bebrave.vercel.app/",
    emoji: "💪",
  },
  {
    title: "GhatBanaras — Hidden Banaras",
    description:
      "AI-assisted travel platform for Varanasi that surfaces hidden ghats, local stories, and non-obvious experiences. Designed flows for OpenAI-powered trip planning, authentication, and a polished frontend.",
    role: "Product Designer · Full-Stack Developer",
    tags: ["OpenAI API", "Travel & Tourism", "Auth & User Profiles", "Hotel & Guide Contacts", "Banaras Local Insights", "Modern Frontend"],
    url: "https://ghatbanaras.com/",
    emoji: "🔱",
  },
];

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/40 bg-card p-6 sm:p-7 transition-all duration-500 ease-out
        hover:border-primary/30 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.25)] hover:-translate-y-2
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Hover gradient overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Project number */}
      <span className="absolute right-5 top-4 font-mono text-[11px] font-medium tracking-wider text-muted-foreground/40 transition-colors duration-300 group-hover:text-primary/60">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative space-y-4">
        {/* Emoji + Title */}
        <div className="flex items-start gap-3 pr-8">
          <span className="mt-0.5 text-2xl leading-none drop-shadow-sm">{project.emoji}</span>
          <div>
            <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg leading-snug">
              {project.title.split(" — ")[0]}
            </h3>
            {project.title.includes(" — ") && (
              <p className="mt-0.5 text-[11px] font-medium text-muted-foreground/60 tracking-wide">
                {project.title.split(" — ")[1]}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-[13px] leading-relaxed text-muted-foreground/75 sm:text-sm">{project.description}</p>

        {/* Role badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-[11px]">
            <Sparkles className="h-3 w-3" />
            {project.role}
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </div>
      </div>

      {/* Tags */}
      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border/25 bg-background/60 px-2.5 py-1 text-[10px] font-medium tracking-wide text-muted-foreground/60 transition-all duration-300 group-hover:border-primary/15 group-hover:text-muted-foreground/80 sm:text-[11px]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary/50 via-primary/20 to-transparent transition-all duration-500 group-hover:w-full" />
    </a>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/10 text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-6 sm:py-4">
          <h1 className="text-base font-semibold tracking-tight sm:text-lg">Projects</h1>
          <Link to="/" className="text-xs text-muted-foreground hover:text-primary sm:text-sm">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-4 px-3 pb-8 pt-5 sm:gap-8 sm:px-6 sm:pb-10 sm:pt-10">
        <section className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Selected work
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Real products I&apos;ve designed &amp; shipped
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            A concise view of my favorite projects—spanning AI chatbots, travel experiences, and modern web apps—each
            crafted with clean UI, thoughtful UX, and reliable engineering.
          </p>
        </section>

        {/* Beautiful 3-column project grid */}
        <section className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </section>

        <section className="mt-2 rounded-2xl border border-dashed border-border/70 bg-background/90 px-4 py-3 text-xs text-muted-foreground shadow-sm shadow-primary/5 sm:py-4 sm:text-sm">
          <p className="font-medium text-foreground/90 sm:text-base">More projects coming soon.</p>
          <p className="mt-1 max-w-xl">
            This section is ready for future work—when you ship a new product, just add it to the list above and it will
            appear here automatically with the same layout and interactions.
          </p>
        </section>

        <section className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/95 px-4 py-3 shadow-sm shadow-primary/10 backdrop-blur-sm sm:mt-4">
          <p className="text-xs text-muted-foreground sm:text-sm">
            Want to talk about one of these projects or something new?
          </p>
          <a href="mailto:harshit840hs@gmail.com">
            <Button
              size="sm"
              className="rounded-full px-4 text-xs shadow-md shadow-primary/15 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
            >
              Let&apos;s collaborate
            </Button>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Projects;