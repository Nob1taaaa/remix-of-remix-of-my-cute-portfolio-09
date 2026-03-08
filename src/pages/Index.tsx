import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import harshitPortrait from "@/assets/harshit-portrait.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-sm font-semibold tracking-tight">
            Harshit Shah
          </Link>
          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/projects" className="transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link to="/portfolio" className="transition-colors hover:text-foreground">
              Portfolio
            </Link>
            <a
              href="mailto:harshit840hs@gmail.com"
              className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition-all hover:opacity-80"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        <div className="flex flex-col items-center text-center">
          {/* Portrait */}
          <div
            className="mb-10 h-28 w-28 overflow-hidden rounded-full shadow-xl opacity-0 animate-fade-in"
            style={{ animationDelay: "0ms" }}
          >
            <img
              src={harshitPortrait}
              alt="Harshit Shah"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Headline */}
          <h1
            className="text-5xl font-bold tracking-tight leading-[1.08] sm:text-7xl lg:text-8xl text-balance opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            Design.
            <br />
            Build.
            <br />
            <span className="text-muted-foreground">Ship.</span>
          </h1>

          <p
            className="mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "250ms" }}
          >
            Full-stack developer & AI engineer crafting products that are
            as beautiful as they are functional.
          </p>

          {/* CTA */}
          <div
            className="mt-10 flex items-center gap-5 opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <Link to="/portfolio">
              <Button
                size="lg"
                className="rounded-full px-8 text-sm font-medium shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a
              href="/Harshit_Shah_resume_1.pdf"
              download
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Download résumé
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-28 grid grid-cols-2 gap-px rounded-2xl bg-border overflow-hidden sm:grid-cols-4 opacity-0 animate-slide-up"
          style={{ animationDelay: "550ms" }}
        >
          {[
            { value: "2+", label: "Years experience" },
            { value: "5+", label: "Products shipped" },
            { value: "IIT BHU", label: "Hackathon winner" },
            { value: "IBM", label: "Ambassador" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-background px-6 py-8"
            >
              <p className="text-2xl font-bold tracking-tight sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div
          className="mt-20 opacity-0 animate-slide-up"
          style={{ animationDelay: "650ms" }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground text-center mb-8">
            Core technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "TypeScript", "Tailwind CSS", "Firebase", "Supabase",
              "OpenAI", "Hugging Face", "Vue.js", "Vercel", "n8n",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div
          className="mt-20 flex flex-col items-center gap-4 text-center opacity-0 animate-slide-up"
          style={{ animationDelay: "750ms" }}
        >
          <p className="text-sm text-muted-foreground">
            <a href="tel:+919140382662" className="hover:text-foreground transition-colors">+91 9140382662</a>
            <span className="mx-3 text-border">·</span>
            <a href="mailto:harshit840hs@gmail.com" className="hover:text-foreground transition-colors">harshit840hs@gmail.com</a>
            <span className="mx-3 text-border">·</span>
            <a href="https://linkedin.com/in/harshit-shah--" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <span className="mx-3 text-border">·</span>
            <a href="https://github.com/Nob1taaaa" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
