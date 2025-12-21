import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
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

const Portfolio = () => {
  const [showMobileSkills, setShowMobileSkills] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/10 text-foreground">
      {/* Top nav */}
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
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

      <main className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-10 pt-6 sm:gap-12 sm:px-6 sm:pb-16 sm:pt-10">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-64 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl opacity-70" />

        {/* Intro / resume summary */}
        <section className="space-y-5 animate-enter">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/90 px-4 py-2 text-[11px] font-medium text-muted-foreground shadow-sm shadow-primary/10 backdrop-blur">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">
              ✦
            </span>
            Full-Stack Developer · AI Engineer · Computer Science Student
          </span>

          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Selected work
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Building thoughtful products with
              <span className="ml-2 bg-gradient-to-r from-primary via-primary/70 to-accent/80 bg-clip-text text-transparent">
                AI &amp; the web
              </span>
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              I&apos;m a full-stack developer and AI engineer specializing in modern web apps with AI integration — from
              Firebase/Supabase backends and automation workflows to clean, production-ready interfaces.
            </p>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              IIT BHU Hackathon 2025 winner and IBM Student Ambassador, I regularly write on Medium about full-stack
              development, AI tooling, and career strategies while leading technical teams and coding clubs.
            </p>
          </div>

          {/* Core skills / chips */}
          {/* Mobile: toggle to reveal skills with animation */}
          <div className="w-full sm:hidden">
            <button
              type="button"
              onClick={() => setShowMobileSkills((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-full border border-border/60 bg-background/90 px-4 py-2 text-[11px] font-medium text-muted-foreground shadow-sm shadow-primary/10 transition-colors hover:bg-accent/10"
            >
              <span>Core skills &amp; tools</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                {showMobileSkills ? "Hide" : "View"}
              </span>
            </button>
            {showMobileSkills && (
              <div className="mt-3 flex flex-wrap gap-2 text-xs animate-enter">
                {coreChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-border/60 bg-background/95 px-3 py-1 text-muted-foreground shadow-sm shadow-primary/5 hover-scale"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Tablet / desktop: always-visible chips */}
          <div className="hidden flex-wrap gap-2 text-xs sm:flex sm:text-[13px]">
            {coreChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-border/60 bg-background/90 px-3 py-1 text-muted-foreground shadow-sm shadow-primary/5 hover-scale"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:text-sm">
            <span className="font-medium text-foreground">📞 +91 9140382662</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <a href="mailto:harshit840hs@gmail.com" className="font-medium text-primary hover:text-primary/80">
              📧 harshit840hs@gmail.com
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <a
              href="https://linkedin.com/in/harshit-shah--"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              🔗 linkedin.com/in/harshit-shah--
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <a href="https://github.com/Nob1taaaa" target="_blank" rel="noreferrer" className="hover:underline">
              💻 github.com/Nob1taaaa
            </a>
          </div>
        </section>

        {/* Snapshot of education & experience */}
        <section className="space-y-2">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 pr-6 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 md:pr-0 scroll-smooth">
            {/* Education first */}
            <article className="min-w-[72%] flex-shrink-0 snap-center rounded-3xl border border-border/70 bg-background/95 p-5 shadow-sm shadow-primary/10 backdrop-blur-sm animate-enter [animation-delay:80ms] md:min-w-0">
              <h2 className="text-sm font-semibold tracking-tight sm:text-base">Education &amp; Key Achievements</h2>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground sm:text-sm">
                <li>
                  <span className="font-medium text-foreground">B.Tech Computer Science &amp; Engineering</span>
                  <br />
                  Noida International University,
                  <br />
                  2024–2027 (Expected), GPA 8.0/10.0
                </li>
                <li>
                  <span className="font-medium text-foreground">🏆 Winner, IIT BHU Hackathon 2025</span>
                  <br />
                  Led a team to build a full-stack AI-powered product
                  <br />
                  using Hugging Face models and modern deployment.
                </li>
                <li>
                  <span className="font-medium text-foreground">Published Writer (Medium)</span>
                  <br />
                  Writing on full-stack development,
                  <br />
                  AI integration, and career strategy.
                </li>
              </ul>
            </article>

            {/* Experience second */}
            <article className="min-w-[72%] flex-shrink-0 snap-center rounded-3xl border border-border/70 bg-background/95 p-5 shadow-sm shadow-primary/10 backdrop-blur-sm animate-enter [animation-delay:140ms] md:min-w-0">
              <h2 className="text-sm font-semibold tracking-tight sm:text-base">Experience &amp; Leadership</h2>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground sm:text-sm">
                <li>
                  <span className="font-medium text-foreground">Full-Stack Developer &amp; AI Enthusiast</span> — Self-directed (2025)
                </li>
                <li>
                  Building end-to-end web apps with AI integration,
                  <br />
                  Firebase/Supabase backends, and modern deployment workflows.
                </li>
                <li>
                  <span className="font-medium text-foreground">Coding Club Lead</span> — Noida International University
                  <br />
                  Organizing hackathons,
                  <br />
                  mentoring 50+ students in web, AI tools, and Vercel deployment.
                </li>
                <li>
                  <span className="font-medium text-foreground">IBM Student Ambassador</span>
                  <br />
                  Conducting workshops on full-stack development,
                  <br />
                  AI tools, and cloud deployment.
                </li>
              </ul>
            </article>
          </div>

          {/* Mobile scroll hint */}
          <p className="pl-1 text-[11px] text-muted-foreground sm:hidden">
            <span className="mr-1 inline-block text-base align-middle pulse">↔</span>
            Swipe sideways to see both cards — they will gently snap into place
          </p>
        </section>

        {/* Tech stack & tools */}
        <section className="grid gap-3 md:grid-cols-3 sm:gap-4">
          <article className="rounded-2xl border border-border/70 bg-background/95 p-4 shadow-sm shadow-primary/10 backdrop-blur-sm animate-enter [animation-delay:80ms]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Core stack</p>
            <p className="mt-2 text-sm font-medium text-foreground">Frontend &amp; product UI</p>
            <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
              <li>React, Vue, TypeScript, Tailwind CSS</li>
              <li>Design systems, smooth motion, responsive layouts</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-border/70 bg-background/95 p-4 shadow-sm shadow-primary/10 backdrop-blur-sm animate-enter [animation-delay:120ms]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">AI &amp; backend</p>
            <p className="mt-2 text-sm font-medium text-foreground">APIs, databases &amp; models</p>
            <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
              <li>Firebase, Supabase, REST APIs</li>
              <li>OpenAI, Hugging Face, automation workflows (n8n)</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-border/70 bg-background/95 p-4 shadow-sm shadow-primary/10 backdrop-blur-sm animate-enter [animation-delay:160ms]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Shipping &amp; collaboration
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">From idea to deployed product</p>
            <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
              <li>Vercel deployment, GitHub, CI-style workflows</li>
              <li>Hackathons, mentorship, clear documentation</li>
            </ul>
          </article>
        </section>

        {/* Projects moved to dedicated /projects page */}

        {/* Featured publication */}
        <section className="mt-4 animate-enter [animation-delay:220ms] sm:mt-6">
          <div className="grid gap-4 rounded-3xl border border-border/70 bg-background/95 p-4 shadow-sm shadow-primary/15 backdrop-blur-sm md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:p-6 sm:gap-5">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">Published research</p>
              <h2 className="text-base font-semibold tracking-tight sm:text-lg">
                Adaptive Hybrid Intelligence Framework for Proactive Cross-Border Fraud Detection
              </h2>
              <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                Journal of Scientific Innovation and Advanced Research (JSIAR), 2025 — Peer-reviewed, multidisciplinary
                journal.
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Co-designed and implemented a hybrid AI framework for detecting cross-border transaction fraud,
                focusing on real-time risk scoring and improved detection accuracy.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-xs overflow-hidden rounded-2xl border border-border/60 bg-muted/40 shadow-md shadow-primary/20">
                <img
                  src={jsiarCertificate}
                  alt="JSIAR publication certificate for Harshit Shah"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Download resume */}
        <section className="mt-4 animate-enter [animation-delay:260ms] sm:mt-6">
          <div className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-background/95 px-4 py-4 shadow-sm shadow-primary/15 backdrop-blur-sm md:flex-row md:items-center md:justify-between md:px-8 md:py-6">
            <div className="space-y-2 max-w-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Updated resume
              </p>
              <h2 className="text-base font-semibold tracking-tight sm:text-lg">Download my resume 📎</h2>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Get the full, high-resolution PDF resume with clickable links to projects, education, experience, and
                publications.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a href="/Harshit_Shah_resume_1.pdf" download>
                <Button
                  size="sm"
                  className="inline-flex items-center gap-2 rounded-full px-5 shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
                >
                  <Download className="h-4 w-4" />
                  <span>Download resume (PDF)</span>
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-4 animate-fade-in sm:mt-6">
          <div className="rounded-3xl border border-border/60 bg-background/95 px-4 py-5 shadow-sm shadow-primary/10 backdrop-blur-sm md:px-8 md:py-7">
            <h2 className="text-base font-semibold tracking-tight sm:text-lg">Liked what you saw?</h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              I&apos;m always excited to collaborate on full-stack and AI-powered products. Reach out and let&apos;s build
              something impactful together.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm sm:mt-4">
              <a href="mailto:harshit840hs@gmail.com">
                <Button
                  size="sm"
                  className="rounded-full px-5 shadow-md shadow-primary/15 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
                >
                  Email me
                </Button>
              </a>
              <p className="text-xs text-muted-foreground sm:text-sm">
                or connect on
                <a
                  href="https://linkedin.com/in/harshit-shah--"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 font-medium text-primary hover:text-primary/80"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
