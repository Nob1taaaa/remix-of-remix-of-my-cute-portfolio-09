import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
// Projects data reused from Portfolio, kept in-page for now to avoid changing behavior
const projects = [
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
    url: "https://trutalenza.com/",
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
    url: "https://petscares.vercel.app/",
  },
  {
    title: "GPSVNS — My Skool Website 🏫",
    description:
      "AI-enabled web experience demonstrating automation workflows, clean UI, and reliable deployment pipelines. Focused on fast page loads, modern UI/UX, and cloud-native infrastructure for experiments and demos.",
    role: "Full-Stack Developer",
    tags: [
      "AI Integration",
      "Modern Web App",
      "Deployment Pipelines",
      "UI/UX",
      "Cloud-native",
    ],
    url: "https://gps-3iuzohgam-gyandeepvns.vercel.app/",
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
    url: "https://tendergift.vercel.app/",
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
    url: "https://ghatbanaras.com/",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-primary/5 via-background to-accent/10 text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80/95 backdrop-blur-md">
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

        <section className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-3xl border border-border/70 bg-background/95/100 p-5 shadow-sm shadow-primary/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
            >
              <div className="space-y-3">
                <h3 className="text-base font-semibold tracking-tight sm:text-lg">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                  {project.role}
                  <ExternalLink className="h-3 w-3 opacity-70 transition-opacity group-hover:opacity-100" />
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-[13px]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 bg-muted px-3 py-1 text-muted-foreground transition-colors group-hover:bg-muted/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </section>

        <section className="mt-2 rounded-2xl border border-dashed border-border/70 bg-background/90 px-4 py-3 text-xs text-muted-foreground shadow-sm shadow-primary/5 sm:py-4 sm:text-sm">
          <p className="font-medium text-foreground/90 sm:text-base">
            More projects coming soon.
          </p>
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
