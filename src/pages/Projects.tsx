import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Trutalenza",
    subtitle: "AI Chatbot Platform",
    description:
      "Production-ready AI chatbot platform where users create and manage assistants. React UI, API layer, Firebase backend, Hugging Face models, and n8n automation workflows.",
    role: "Full-Stack Developer · AI Engineer",
    tags: ["React", "Firebase", "Hugging Face", "n8n", "Vercel", "REST APIs"],
    url: "https://trutalenza.com/",
  },
  {
    title: "ChatPup",
    subtitle: "Puppy Sale Platform 🐶",
    description:
      "AI text generation platform with Supabase database, authentication, analytics, and integrated payments. OpenAI and Hugging Face models with clean UX.",
    role: "Full-Stack Developer · AI Integration",
    tags: ["Vue.js", "Supabase", "OpenAI", "Hugging Face", "Payments", "Vercel"],
    url: "https://petscares.vercel.app/",
  },
  {
    title: "GPSVNS",
    subtitle: "School Website 🏫",
    description:
      "AI-enabled web experience with automation workflows, clean UI, and reliable deployment pipelines. Fast page loads and cloud-native infrastructure.",
    role: "Full-Stack Developer",
    tags: ["AI Integration", "Modern Web", "CI/CD", "UI/UX", "Cloud-native"],
    url: "https://gps-3iuzohgam-gyandeepvns.vercel.app/",
  },
  {
    title: "TenderGift",
    subtitle: "Soft Gift Finder 🎁",
    description:
      "AI-powered gift recommendation app. One heartfelt prompt suggests the perfect personalized gift with a dreamy UI, curated gallery, and affiliate shopping links.",
    role: "Full-Stack Developer · AI Integration",
    tags: ["AI Matching", "Prompt UX", "Curated Gallery", "Affiliate", "Vercel"],
    url: "https://tendergift.vercel.app/",
  },
  {
    title: "GhatBanaras",
    subtitle: "Hidden Banaras 🔱",
    description:
      "AI-assisted travel platform for Varanasi surfacing hidden ghats, local stories, and non-obvious experiences. OpenAI-powered trip planning with polished frontend.",
    role: "Product Designer · Full-Stack Developer",
    tags: ["OpenAI", "Travel", "Auth", "User Profiles", "Local Insights"],
    url: "https://ghatbanaras.com/",
  },
];

const Projects = () => {
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
            <Link to="/portfolio" className="transition-colors hover:text-foreground">Portfolio</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        {/* Header */}
        <div className="max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "0ms" }}>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Selected work
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Real products I've designed and shipped — spanning AI, travel, education, and e-commerce.
          </p>
        </div>

        {/* Project list */}
        <div className="mt-16 space-y-0 divide-y divide-border">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-4 py-10 first:pt-0 last:pb-0 transition-colors opacity-0 animate-fade-in sm:flex-row sm:items-start sm:justify-between"
              style={{ animationDelay: `${150 + i * 100}ms` }}
            >
              <div className="flex-1 space-y-3">
                <div className="flex items-baseline gap-3">
                  <h2 className="text-xl font-semibold tracking-tight sm:text-2xl group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-sm text-muted-foreground">{project.subtitle}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                </div>
                <p className="max-w-xl text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs font-medium text-muted-foreground/70">{project.role}</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:max-w-[220px] sm:justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-foreground/10 group-hover:text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-20 flex flex-col items-center text-center opacity-0 animate-slide-up"
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-muted-foreground">
            Want to talk about a project?
          </p>
          <a href="mailto:harshit840hs@gmail.com" className="mt-4">
            <Button className="rounded-full px-8 text-sm font-medium shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5">
              Let's collaborate
            </Button>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Projects;
