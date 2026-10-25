import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import harshitPortrait from "@/assets/harshit-portrait.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/10 text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/95 backdrop-blur-md transition-colors">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link
            to="/"
            className="text-base font-semibold tracking-tight transition-colors hover:text-primary sm:text-lg">
            Harshit Shah
          </Link>

          <nav className="flex items-center gap-1.5 text-xs sm:gap-2 sm:text-sm">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 font-medium text-primary shadow-sm shadow-primary/10 transition-all hover:-translate-y-0.5 hover:bg-primary/10 hover:shadow-md hover:shadow-primary/20 sm:px-4 sm:py-2">
              <span className="text-[11px] transition-transform group-hover:scale-110 sm:text-xs">💼</span>
              Portfolio
            </Link>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-1.5 rounded-full border border-accent-foreground/20 bg-accent/40 px-3 py-1.5 font-medium text-foreground shadow-sm shadow-primary/10 transition-all hover:-translate-y-0.5 hover:bg-accent/70 hover:shadow-md sm:px-4 sm:py-2">
              <span className="text-[11px] transition-transform group-hover:rotate-12 sm:text-xs">✨</span>
              Projects
            </Link>
          </nav>

          <a
            href="tel:+919140382662"
            className="hidden items-center gap-2 rounded-full border border-border/60 bg-background/90 px-3 py-1.5 text-[10px] font-medium text-foreground shadow-sm shadow-primary/10 transition-all hover:-translate-y-0.5 hover:bg-muted/80 sm:inline-flex sm:px-4 sm:py-2 sm:text-xs">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-semibold text-primary sm:h-6 sm:w-6">
              +
            </span>
            +91 9140382662
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-10 pt-8 sm:px-6 sm:pt-12 md:flex-row md:items-center md:gap-16 md:pt-16">
        {/* Left column: intro */}
        <section className="flex-1 space-y-5 animate-enter [animation-delay:60ms]">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-[11px] font-medium text-muted-foreground shadow-sm shadow-primary/5 backdrop-blur sm:px-4 sm:py-2 sm:text-xs">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-[9px] text-primary sm:h-5 sm:w-5 sm:text-[10px]">
              ✦
            </span>
            Available for freelance
          </span>

          <div className="space-y-3 sm:space-y-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-muted-foreground sm:text-[11px]">
              AI Engineer &amp; Designer
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.1rem]">
               Hey There,
               <br />
               <span className="bg-gradient-to-r from-primary via-primary/70 to-accent/80 bg-clip-text text-transparent hover-scale animate-enter [animation-delay:120ms]">
                 I&apos;m Harshit
               </span>
               <br />
               Shah
             </h1>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            I design beautifully simple, soft interfaces—and I love what I do.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1 text-sm">
            <a href="mailto:harshit840hs@gmail.com">
              <Button
                size="lg"
                className="rounded-full px-6 text-sm shadow-md shadow-primary/15 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 sm:px-7">
                Get in touch
              </Button>
            </a>
            <Link
              to="/portfolio"
              className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              View Portfolio →
            </Link>
          </div>

          <div className="inline-flex items-center gap-3 rounded-2xl border border-border/60 bg-background/90 px-3 py-2.5 text-xs text-muted-foreground shadow-sm shadow-primary/10 backdrop-blur sm:px-4 sm:py-3">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary sm:h-8 sm:w-8">
              @
            </span>
            <span className="text-[11px] font-medium text-foreground sm:text-xs">harshit840hs@gmail.com</span>
          </div>
        </section>

        {/* Right column: photo + cards */}
        <section className="relative flex flex-1 flex-col items-center gap-4 sm:gap-5 lg:items-end animate-enter [animation-delay:140ms]">
          <div className="relative h-36 w-36 overflow-hidden rounded-full border-[4px] border-background/90 bg-gradient-to-br from-primary/20 via-background to-accent/20 shadow-xl shadow-primary/25 transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.02] sm:h-48 sm:w-48 lg:h-60 lg:w-60">
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-tr from-primary/30 via-primary/0 to-accent/30 opacity-80 blur-3xl" />
            <img
              src={harshitPortrait}
              alt="Portrait of Harshit Shah, AI Engineer and Designer"
              className="relative h-full w-full object-cover"
              loading="lazy" />
          </div>

          <div className="grid w-full max-w-md gap-3 sm:gap-4 lg:max-w-none">
            <div className="flex justify-between rounded-3xl border border-border/70 bg-background/95 px-4 py-3 shadow-sm shadow-primary/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:px-5 sm:py-4">
              <div>
                <p className="text-2xl font-semibold tracking-tight sm:text-3xl">500+</p>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
                  Students use
                  <br />
                  NIU Campus
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-primary/90 to-primary/60 px-4 py-3 text-xs text-primary-foreground shadow-md shadow-primary/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-5 sm:py-4 sm:text-sm">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] opacity-80 sm:text-[11px]">
                Currently
              </p>
              <p className="mt-1.5 text-base font-semibold sm:text-lg">Open to Work</p>
              <p className="text-[11px] opacity-90 sm:text-xs">AI Engineer · Designer</p>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-background/10 px-3 py-1 text-[10px] sm:mt-2.5 sm:text-[11px]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Available Now
              </div>
            </div>

            <div className="rounded-3xl border border-border/70 bg-background/95 px-4 py-3 shadow-sm shadow-primary/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md sm:px-5 sm:py-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px]">
                Specialized in
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] sm:mt-2.5 sm:gap-2 sm:text-xs">
                {["UI Design", "UX Research", "AI Engineer", "Designing"].map((chip) =>
                <span
                  key={chip}
                  className="rounded-full bg-muted px-2.5 py-1 text-muted-foreground transition-colors hover:bg-muted/80 sm:px-3">
                    {chip}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>);


};

export default Index;