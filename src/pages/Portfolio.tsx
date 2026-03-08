import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, ArrowUpRight } from "lucide-react";
import jsiarCertificate from "@/assets/jsiar-certificate.png";

const coreChips = [
  "React & Modern Frontend",
  "Firebase & Supabase",
  "AI / Hugging Face & OpenAI",
  "Vercel & Cloud Deployment",
  "Team Leadership",
  "Claude Code / Lovable",
  "Docker / Vercel AI SDK",
];

const projects = [
  {
    title: "Trutalenza",
    description: "AI chatbot platform — React, Firebase, Hugging Face, n8n automation.",
    url: "https://trutalenza.com",
  },
  {
    title: "ChatPup",
    description: "AI text generation with Supabase, OpenAI, payments & analytics.",
    url: "https://chatpup.vercel.app",
  },
  {
    title: "GPSVNS",
    description: "School website with AI integration and modern deployment.",
    url: "https://gpsvns.vercel.app",
  },
  {
    title: "TenderGift",
    description: "AI gift finder with dreamy UI and affiliate commerce.",
    url: "https://tendergift.vercel.app",
  },
  {
    title: "GhatBanaras",
    description: "AI travel platform for Varanasi — trip planning & local insights.",
    url: "https://ghatbanaras.com",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-sm font-semibold tracking-tight">
            Harshit Shah
          </Link>
          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
            <Link to="/projects" className="transition-colors hover:text-foreground">Projects</Link>
            <Link to="/portfolio" className="font-medium text-foreground">Portfolio</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        {/* Intro */}
        <section className="max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "0ms" }}>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Full-Stack Developer · AI Engineer
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            Building thoughtful products with AI & the web.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I specialize in modern web apps with AI integration — from Firebase/Supabase backends and automation workflows to clean, production-ready interfaces.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            IIT BHU Hackathon 2025 winner and IBM Student Ambassador. I write on Medium about full-stack development, AI tooling, and career strategies.
          </p>
        </section>

        {/* Contact */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <a href="tel:+919140382662" className="hover:text-foreground transition-colors">+91 9140382662</a>
          <a href="mailto:harshit840hs@gmail.com" className="hover:text-foreground transition-colors">harshit840hs@gmail.com</a>
          <a href="https://linkedin.com/in/harshit-shah--" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://github.com/Nob1taaaa" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        </div>

        {/* Skills */}
        <div className="mt-10 flex flex-wrap gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
          {coreChips.map((chip) => (
            <span key={chip} className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              {chip}
            </span>
          ))}
        </div>

        {/* Two-column cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {/* Education */}
          <div className="rounded-2xl border border-border bg-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Education & Achievements</p>
            <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
              <li>
                <p className="font-medium text-foreground">B.Tech Computer Science & Engineering</p>
                <p>Noida International University, 2024–2027</p>
                <p>GPA 8.0/10.0</p>
              </li>
              <li>
                <p className="font-medium text-foreground">🏆 Winner, IIT BHU Hackathon 2025</p>
                <p>Led team to build a full-stack AI product</p>
              </li>
              <li>
                <p className="font-medium text-foreground">Published Writer (Medium)</p>
                <p>Full-stack dev, AI integration, career strategy</p>
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="rounded-2xl border border-border bg-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Experience & Leadership</p>
            <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
              <li>
                <p className="font-medium text-foreground">Full-Stack Developer & AI Enthusiast</p>
                <p>Self-directed, 2025 — End-to-end web apps with AI integration</p>
              </li>
              <li>
                <p className="font-medium text-foreground">Coding Club Lead</p>
                <p>Noida International University — Mentoring 50+ students</p>
              </li>
              <li>
                <p className="font-medium text-foreground">IBM Student Ambassador</p>
                <p>Workshops on full-stack dev, AI tools, cloud deployment</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-20 grid gap-6 md:grid-cols-3 opacity-0 animate-slide-up" style={{ animationDelay: "500ms" }}>
          {[
            {
              label: "Frontend",
              title: "Product UI",
              items: ["React, Vue, TypeScript, Tailwind CSS", "Design systems, motion, responsive layouts"],
            },
            {
              label: "AI & Backend",
              title: "APIs & Models",
              items: ["Firebase, Supabase, REST APIs", "OpenAI, Hugging Face, n8n automation"],
            },
            {
              label: "Shipping",
              title: "Idea → Product",
              items: ["Vercel, GitHub, CI workflows", "Hackathons, mentorship, documentation"],
            },
          ].map((stack) => (
            <div key={stack.label} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{stack.label}</p>
              <p className="mt-2 text-sm font-semibold text-foreground">{stack.title}</p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {stack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects quick list */}
        <div className="mt-20 opacity-0 animate-slide-up" style={{ animationDelay: "600ms" }}>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Selected Projects</p>
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-border">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-5 transition-colors"
              >
                <div>
                  <p className="font-medium text-foreground group-hover:text-muted-foreground transition-colors">{project.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>

        {/* Publication */}
        <div className="mt-20 rounded-2xl border border-border bg-card overflow-hidden opacity-0 animate-slide-up" style={{ animationDelay: "700ms" }}>
          <div className="grid md:grid-cols-[1.4fr_1fr]">
            <div className="p-8 md:p-10">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Published Research</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight">
                Adaptive Hybrid Intelligence Framework for Proactive Cross-Border Fraud Detection
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Journal of Scientific Innovation and Advanced Research (JSIAR), 2025 — Peer-reviewed, multidisciplinary journal.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Co-designed a hybrid AI framework for detecting cross-border transaction fraud with real-time risk scoring.
              </p>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/50">
              <img
                src={jsiarCertificate}
                alt="JSIAR publication certificate"
                className="w-full max-w-xs rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Resume download */}
        <div className="mt-16 flex flex-col items-center gap-6 text-center rounded-2xl border border-border bg-card p-10 opacity-0 animate-slide-up" style={{ animationDelay: "800ms" }}>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Updated résumé</p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight">Download my résumé</h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Full PDF with clickable links to projects, education, experience, and publications.
            </p>
          </div>
          <a href="/Harshit_Shah_resume_1.pdf" download>
            <Button className="rounded-full px-8 text-sm font-medium shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5">
              <Download className="mr-2 h-4 w-4" />
              Download résumé
            </Button>
          </a>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 flex flex-col items-center text-center opacity-0 animate-slide-up" style={{ animationDelay: "900ms" }}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's build something together.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            I'm always excited to collaborate on full-stack and AI-powered products.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="mailto:harshit840hs@gmail.com">
              <Button className="rounded-full px-8 text-sm font-medium shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5">
                Email me
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/harshit-shah--"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
