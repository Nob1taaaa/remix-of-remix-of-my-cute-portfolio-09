import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import harshitPortrait from "@/assets/harshit-portrait.jpg";

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-primary/5 via-background to-accent/10 text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80/95 backdrop-blur-md transition-colors">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-3 py-3 sm:flex-nowrap sm:px-6 sm:py-4">
          <Link
            to="/"
            className="text-lg font-semibold tracking-tight transition-colors hover:text-primary"
          >
            Harshit Shah
          </Link>

          <nav className="flex items-center gap-3 text-xs text-muted-foreground sm:gap-8 sm:text-sm">
            <Link
              to="/projects"
              className="story-link relative text-xs transition-colors hover:text-foreground sm:text-sm"
            >
              Projects
            </Link>
          </nav>

          <a
            href="tel:+919140382662"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/90 px-3 py-1.5 text-[10px] font-medium text-foreground shadow-sm shadow-primary/10 transition-all hover:-translate-y-0.5 hover:bg-muted/80 sm:px-4 sm:py-2 sm:text-xs"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-semibold text-primary sm:h-6 sm:w-6">
              +
            </span>
            +91 9140382662
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-2 px-3 pb-4 pt-1 sm:gap-8 sm:px-4 sm:pb-10 sm:pt-6 md:flex-row md:items-center md:gap-16 md:pt-16">
        {/* Left column: intro */}
        <section className="max-w-xl space-y-2 animate-enter [animation-delay:60ms]">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm shadow-primary/5 backdrop-blur">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">
              ✦
            </span>
            Available for freelance
          </span>

          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">
              AI Engineering & Web Dev
            </p>
            <h1 className="text-xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.1rem]">
               Hey There,
               <br />
               <span className="bg-gradient-to-r from-primary via-primary/70 to-accent/80 bg-clip-text text-transparent hover-scale animate-enter [animation-delay:120ms]">
                 I&apos;m Harshit
               </span>
               <br />
               Shah
             </h1>
          </div>

          <p className="max-w-md text-[13px] text-muted-foreground sm:text-base">
            I design beautifully simple, soft interfaces—and I love what I do.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1 text-sm">
            <a href="mailto:harshit840hs@gmail.com">
              <Button
                size="lg"
                className="rounded-full px-7 shadow-md shadow-primary/15 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
              >
                Get in touch
              </Button>
            </a>
            <Link
              to="/portfolio"
              className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              View Portfolio →
            </Link>
          </div>

          <div className="mt-2 inline-flex items-center gap-3 rounded-2xl border border-border/60 bg-background/90 px-4 py-3 text-xs text-muted-foreground shadow-sm shadow-primary/10 backdrop-blur">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              @
            </span>
            <span className="font-medium text-foreground">harshit840hs@gmail.com</span>
          </div>
        </section>

        {/* Right column: photo + cards */}
        <section className="relative flex flex-1 flex-col items-center gap-2.5 lg:items-end animate-enter [animation-delay:140ms]">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-[4px] border-background/90 bg-gradient-to-br from-primary/20 via-background to-accent/20 shadow-xl shadow-primary/25 transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.02] sm:h-48 sm:w-48 lg:h-60 lg:w-60">
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-tr from-primary/30 via-primary/0 to-accent/30 opacity-80 blur-3xl" />
            <img
              src={harshitPortrait}
              alt="Portrait of Harshit Shah, UI/UX Designer"
              className="relative h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid w-full max-w-md gap-2.5 sm:gap-4 lg:max-w-none">
            <div className="flex justify-between rounded-3xl border border-border/70 bg-background/95 px-3 py-2.5 shadow-sm shadow-primary/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:px-5 sm:py-4">
              <div>
                <p className="text-2xl font-semibold tracking-tight sm:text-3xl">2</p>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
                  Years
                  <br />
                  Experience
                </p>
              </div>
              <div className="flex flex-col justify-end gap-1 text-right text-[10px] text-muted-foreground sm:text-[11px]">
                <span className="inline-flex items-center justify-end gap-1 rounded-full bg-muted px-2 py-1 text-[9px] font-medium sm:text-[10px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Verified 2024
                </span>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-primary/90 to-primary/60 px-3 py-2.5 text-xs text-primary-foreground shadow-md shadow-primary/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-5 sm:py-4 sm:text-sm">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] opacity-80 sm:text-[11px]">
                IDF Certified
              </p>
              <p className="mt-1.5 text-base font-semibold sm:text-lg">Professional</p>
              <p className="text-[11px] opacity-90 sm:text-xs">UI/UX Designer</p>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-background/10 px-3 py-1 text-[10px] sm:mt-2.5 sm:text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Verified 2024
              </div>
            </div>

            <div className="rounded-3xl border border-border/70 bg-background/95 px-3 py-2.5 shadow-sm shadow-primary/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:px-5 sm:py-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px]">
                What I do
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] sm:mt-2.5 sm:gap-2 sm:text-xs">
                {["Full-Stack Builder", "AI Engineer", "Cloud Native", "Hackathon Champion", "Agile Development"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-muted px-2.5 py-1 text-muted-foreground transition-colors hover:bg-muted/80 sm:px-3"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
