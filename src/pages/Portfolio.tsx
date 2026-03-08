import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Sparkles, ArrowUpRight } from "lucide-react";
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
    tags: [
      "React Frontend",
      "Firebase Backend",
      "Hugging Face AI",
      "n8n Automation",
      "Vercel Deployment",
      "REST APIs",
    ],
    url: "https://trutalenza.com",
  },
  {
    title: "ChatPup —  Puppy sale 🐶",
    description:
      "AI text generation platform with Supabase database, authentication, and analytics. Combined OpenAI and Hugging Face models to deliver fast content generation with a clean UX and integrated payments for premium features.",
    role: "Full-Stack Developer · AI Integration",
    tags: [
      "Vue.js Frontend",
      "Supabase",
      "OpenAI & Hugging Face",
      "Auth & User Accounts",
      "Payments & Analytics",
      "Vercel",
    ],
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
    tags: [
      "AI Gift Matching",
      "Modern Frontend",
      "Curated Gallery",
      "Prompt-Based UX",
      "Affiliate Commerce",
      "Vercel Deployment",
    ],
    url: "https://tendergift.vercel.app",
  },
  {
    title: "BeBrave — BoostHabits 💪",
    description:
      "A mood-aware wellness app that checks in on how you're feeling and delivers personalized boosts, habit tracking, and daily motivation. Features a soothing UI with mood selection, streak tracking, and gentle nudges to build positive routines.",
    role: "Full-Stack Developer · Wellness Tech",
    tags: [
      "Mood Tracking",
      "Habit Builder",
      "Modern Frontend",
      "Auth & Streaks",
      "Wellness UX",
      "Vercel Deployment",
    ],
    url: "https://bebrave.vercel.app/",
  },
  {
    title: "GhatBanaras — Hidden Banaras 🔱",
    description:
      "AI-assisted travel platform for Varanasi that surfaces hidden ghats, local stories, and non-obvious experiences. Designed flows for OpenAI-powered trip planning, authentication, and a polished frontend for travelers, hotel owners, and tour guides.",
    role: "Product Designer · Full-Stack Developer",
    tags: [
      "OpenAI API",
      "Travel & Tourism",
      "Auth & User Profiles",
      "Hotel & Guide Contacts",
      "Banaras Local Insights",
      "Modern Frontend",
    ],
    url: "https://ghatbanaras.com",
  },
];

/* Reusable scroll-reveal wrapper */
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

const Portfolio = () => {
  const [showMobileSkills, setShowMobileSkills] = useState(false);

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
              {coreChips.map((chip, i) => (
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
              <a
                href="https://linkedin.com/in/harshit-shah--"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                🔗 linkedin.com/in/harshit-shah--
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-border/60 sm:inline-block" />
              <a href="https://github.com/Nob1taaaa" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                💻 github.com/Nob1taaaa
              </a>
            </div>
          </section>
        </FadeInSection>

        {/* ─── Education & Experience ─── */}
        <FadeInSection delay={80}>
          <section className="space-y-3">
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 pr-6 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 md:pr-0 scroll-smooth">
              {/* Education */}
              <article className="group min-w-[72%] flex-shrink-0 snap-center rounded-2xl border border-border/30 bg-card/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-primary/15 hover:shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.12)] md:min-w-0">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">🎓</span>
                  <h2 className="text-sm font-bold tracking-tight sm:text-base">Education &amp; Key Achievements</h2>
                </div>
                <ul className="space-y-3 text-xs text-muted-foreground/70 sm:text-sm">
                  <li className="rounded-xl bg-background/50 p-3 transition-colors hover:bg-background/80">
                    <span className="font-semibold text-foreground/85">B.Tech Computer Science &amp; Engineering</span>
                    <br />
                    <span className="text-muted-foreground/50">Noida International University, 2024–2027 · GPA 8.0/10.0</span>
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

              {/* Experience */}
              <article className="group min-w-[72%] flex-shrink-0 snap-center rounded-2xl border border-border/30 bg-card/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-primary/15 hover:shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.12)] md:min-w-0">
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
            </div>

            {/* Mobile scroll hint */}
            <p className="pl-1 text-[11px] text-muted-foreground/40 sm:hidden">
              <span className="mr-1 inline-block text-base align-middle pulse">↔</span>
              Swipe sideways to see both cards
            </p>
          </section>
        </FadeInSection>

        {/* ─── Tech Stack ─── */}
        <FadeInSection delay={100}>
          <section className="grid gap-4 md:grid-cols-3">
            {[
              { icon: "⚡", label: "Core stack", title: "Frontend & product UI", items: ["React, Vue, TypeScript, Tailwind CSS", "Design systems, smooth motion, responsive layouts"] },
              { icon: "🧠", label: "AI & backend", title: "APIs, databases & models", items: ["Firebase, Supabase, REST APIs", "OpenAI, Hugging Face, automation workflows (n8n)"] },
              { icon: "🚀", label: "Shipping & collaboration", title: "From idea to deployed product", items: ["Vercel deployment, GitHub, CI-style workflows", "Hackathons, mentorship, clear documentation"] },
            ].map((stack, i) => (
              <article
                key={stack.label}
                className="group rounded-2xl border border-border/30 bg-card/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-primary/15 hover:shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.12)] hover:-translate-y-1"
              >
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
            ))}
          </section>
        </FadeInSection>

        {/* ─── Featured Publication ─── */}
        <FadeInSection delay={120}>
          <section>
            <div className="group grid gap-5 rounded-2xl border border-border/30 bg-card/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-primary/15 hover:shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.12)] md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:p-7">
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
                <div className="relative w-full max-w-xs overflow-hidden rounded-xl border border-border/20 bg-background/30 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:shadow-primary/10">
                  <img
                    src={jsiarCertificate}
                    alt="JSIAR publication certificate for Harshit Shah"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
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
              </div>
              <div className="flex items-center gap-3">
                <a href="/Harshit_Shah_resume_1.pdf" download>
                  <Button
                    size="sm"
                    className="inline-flex items-center gap-2 rounded-full px-5 shadow-md shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download resume (PDF)</span>
                  </Button>
                </a>
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