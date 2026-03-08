import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import jsiarCertificate from "@/assets/jsiar-certificate.png";

const coreChips = [
  "React & Modern Frontend",
  "Firebase & Supabase Backends",
  "AI / Hugging Face & OpenAI",
  "Vercel & Cloud Deployment",
  "Team Leadership & Hackathons",
  "Claude Code / Lovable",
  "Vercel AI SDK / Docker",
];

const timelineEvents = [
  { year: "2024", title: "Started B.Tech CS at NIU", description: "Began Computer Science & Engineering at Noida International University with a focus on AI and web development." },
  { year: "2024", title: "First Full-Stack Projects", description: "Built Trutalenza, ChatPup, and GPSVNS — shipping production apps with Firebase, Supabase, and AI integrations." },
  { year: "2025", title: "Won IIT BHU Hackathon", description: "Led a team to build an AI-powered product using Hugging Face models, winning against strong competition." },
  { year: "2025", title: "IBM Student Ambassador", description: "Selected as IBM Ambassador — conducting workshops on full-stack development, AI tools, and cloud deployment." },
  { year: "2025", title: "Published in JSIAR", description: "Co-authored a peer-reviewed paper on Adaptive Hybrid Intelligence for Cross-Border Fraud Detection." },
  { year: "2025", title: "Coding Club Lead", description: "Leading hackathons, mentoring 50+ students in web dev, AI tooling, and modern deployment workflows." },
];

const aiSkills = [
  { title: "LLM & Prompt Engineering", description: "System prompts, chain-of-thought reasoning, few-shot learning, and guardrails for GPT-4, Claude, Gemini.", tags: ["OpenAI API", "Claude API", "Gemini", "Prompt Design"] },
  { title: "RAG & Vector Search", description: "Retrieval-augmented generation pipelines with document ingestion, chunking strategies, embedding models.", tags: ["LangChain", "Embeddings", "Vector DBs", "PDF Parsing"] },
  { title: "AI Agents & Orchestration", description: "Multi-agent systems, tool-calling agents, autonomous workflows, and function-calling patterns.", tags: ["Agent Systems", "Tool Calling", "n8n", "Workflows"] },
  { title: "Fine-Tuning & Adapters", description: "Supervised fine-tuning, LoRA adapters, dataset curation, and model evaluation.", tags: ["LoRA", "Fine-Tuning", "Hugging Face", "Datasets"] },
  { title: "NLP & Text Processing", description: "Tokenization, text classification, NER, sentiment analysis, and structured extraction.", tags: ["NLP", "Classification", "NER", "Extraction"] },
  { title: "AI Infrastructure", description: "Edge functions for AI inference, streaming responses, API gateway design, cost optimization.", tags: ["Edge Functions", "Streaming", "API Design", "Cost Ops"] },
  { title: "Evaluation & Testing", description: "AI output evaluation, hallucination detection, A/B testing prompts, benchmarking.", tags: ["Eval Pipelines", "Benchmarks", "Quality", "Testing"] },
  { title: "AI Safety & Ethics", description: "Content filtering, bias detection, responsible AI practices, safety guardrails.", tags: ["Safety", "Guardrails", "Bias Detection", "Ethics"] },
  { title: "Production AI Deployment", description: "Model serving, monitoring, fallback strategies, and scaling for real users.", tags: ["Vercel AI SDK", "Docker", "Monitoring", "Scaling"] },
];

const aiTools = [
  "GPT-4 / GPT-4o", "Claude 3.5 / Claude Code", "Gemini Pro", "Llama 3", "Mistral",
  "Hugging Face Transformers", "LangChain", "Vercel AI SDK", "OpenAI API",
  "Pinecone", "ChromaDB", "n8n Workflows", "Docker", "Edge Functions",
  "TensorFlow.js", "Stable Diffusion", "Whisper API",
];

/* ── Scroll-reveal ── */
const Reveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect(); } }, { threshold: 0.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}>
      {children}
    </div>
  );
};

/* ── Divider ── */
const SectionDivider = () => <div className="h-px w-full bg-gradient-to-r from-border/50 via-border/20 to-transparent" />;

/* ── Section Label ── */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-serif text-[11px] font-medium italic tracking-wide text-muted-foreground/40 sm:text-xs">{children}</p>
);

const Portfolio = () => {
  const [showMobileSkills, setShowMobileSkills] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Minimal nav ── */}
      <header className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5 sm:px-8">
          <Link to="/" className="font-serif text-xl font-medium tracking-tight transition-colors hover:text-primary">
            Harshit Shah
          </Link>
          <nav className="flex items-center gap-5 text-[13px] text-muted-foreground/60">
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
            <Link to="/projects" className="transition-colors hover:text-foreground">Projects</Link>
            <Link to="/portfolio" className="font-medium text-foreground">Portfolio</Link>
          </nav>
        </div>
        <div className="mx-auto max-w-3xl px-5 sm:px-8"><SectionDivider /></div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20">

        {/* ══════════════════════════════════════════
            HERO — Editorial style
        ══════════════════════════════════════════ */}
        <Reveal>
          <section className="space-y-8">
            <div className="space-y-5">
              <SectionLabel>Full-Stack Developer · AI Engineer · CS Student</SectionLabel>
              <h1 className="font-serif text-[2.2rem] font-medium leading-[1.15] tracking-tight sm:text-[3.2rem]">
                Building thoughtful
                <br />
                products with{" "}
                <span className="italic text-primary/80">AI &amp; the web</span>
              </h1>
              <div className="max-w-xl space-y-3 text-[15px] leading-[1.8] text-muted-foreground/60 sm:text-base">
                <p>
                  I&apos;m a full-stack developer and AI engineer specializing in modern web apps with AI integration — from
                  Firebase/Supabase backends and automation workflows to clean, production-ready interfaces.
                </p>
                <p>
                  IIT BHU Hackathon 2025 winner and IBM Student Ambassador, I regularly write on Medium about full-stack
                  development, AI tooling, and career strategies while leading technical teams and coding clubs.
                </p>
              </div>
            </div>

            {/* Skills — inline, understated */}
            <div className="w-full sm:hidden">
              <button
                type="button"
                onClick={() => setShowMobileSkills((prev) => !prev)}
                className="flex w-full items-center justify-between border-b border-border/30 pb-2 text-[12px] font-medium text-muted-foreground/50"
              >
                <span>Core skills &amp; tools</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/60">
                  {showMobileSkills ? "Hide" : "Show"}
                </span>
              </button>
              {showMobileSkills && (
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  {coreChips.map((chip) => (
                    <span key={chip} className="border-b border-dotted border-border/40 pb-0.5 text-muted-foreground/50 transition-colors hover:text-foreground/70">{chip}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="hidden sm:flex flex-wrap gap-x-4 gap-y-1 text-[13px]">
              {coreChips.map((chip, i) => (
                <span key={chip} className="border-b border-dotted border-border/30 pb-0.5 text-muted-foreground/45 transition-colors duration-300 hover:text-foreground/70 hover:border-primary/30">{chip}</span>
              ))}
            </div>

            {/* Contact — clean inline */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-muted-foreground/45">
              <span className="text-foreground/65">📞 +91 9140382662</span>
              <a href="mailto:harshit840hs@gmail.com" className="text-primary/60 hover:text-primary transition-colors">📧 harshit840hs@gmail.com</a>
              <a href="https://linkedin.com/in/harshit-shah--" target="_blank" rel="noreferrer" className="hover:text-foreground/65 transition-colors">🔗 LinkedIn</a>
              <a href="https://github.com/Nob1taaaa" target="_blank" rel="noreferrer" className="hover:text-foreground/65 transition-colors">💻 GitHub</a>
            </div>
          </section>
        </Reveal>

        <div className="my-14 sm:my-20"><SectionDivider /></div>

        {/* ══════════════════════════════════════════
            JOURNEY — Left-bordered editorial timeline
        ══════════════════════════════════════════ */}
        <Reveal delay={60}>
          <section>
            <SectionLabel>My Journey</SectionLabel>
            <h2 className="mt-2 font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              From first line of code to shipping products
            </h2>

            <div className="mt-10 space-y-0">
              {timelineEvents.map((event, i) => (
                <Reveal key={event.title} delay={i * 80}>
                  <div className="group relative flex">
                    {/* Left line + dot */}
                    <div className="mr-6 flex flex-col items-center sm:mr-8">
                      <div className="h-3 w-3 rounded-full border-2 border-primary/30 bg-background transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary/10" />
                      {i < timelineEvents.length - 1 && <div className="w-px flex-1 bg-border/25" />}
                    </div>
                    {/* Content */}
                    <div className="pb-10">
                      <span className="font-mono text-[11px] font-medium tracking-wider text-muted-foreground/35">{event.year}</span>
                      <h3 className="mt-1 text-[15px] font-semibold text-foreground/80 sm:text-base">{event.title}</h3>
                      <p className="mt-1.5 max-w-lg text-[13px] leading-[1.7] text-muted-foreground/45">{event.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <div className="my-14 sm:my-20"><SectionDivider /></div>

        {/* ══════════════════════════════════════════
            EDUCATION & EXPERIENCE — Side by side, no cards
        ══════════════════════════════════════════ */}
        <Reveal delay={80}>
          <section>
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              {/* Education */}
              <div>
                <SectionLabel>Education &amp; Achievements</SectionLabel>
                <h2 className="mt-2 font-serif text-xl font-medium tracking-tight sm:text-2xl">Academic foundation</h2>
                <ul className="mt-6 space-y-6">
                  <li className="border-l-2 border-primary/20 pl-4 transition-colors hover:border-primary/40">
                    <p className="text-[14px] font-semibold text-foreground/80">B.Tech Computer Science &amp; Engineering</p>
                    <p className="mt-1 text-[13px] text-muted-foreground/40">Noida International University, 2024–2027 · GPA 8.7/10.0</p>
                  </li>
                  <li className="border-l-2 border-primary/20 pl-4 transition-colors hover:border-primary/40">
                    <p className="text-[14px] font-semibold text-foreground/80">🏆 Winner, IIT BHU Hackathon 2025</p>
                    <p className="mt-1 text-[13px] text-muted-foreground/40">Led a team to build a full-stack AI-powered product using Hugging Face models and modern deployment.</p>
                  </li>
                  <li className="border-l-2 border-primary/20 pl-4 transition-colors hover:border-primary/40">
                    <p className="text-[14px] font-semibold text-foreground/80">Published Writer (Medium)</p>
                    <p className="mt-1 text-[13px] text-muted-foreground/40">Writing on full-stack development, AI integration, and career strategy.</p>
                  </li>
                </ul>
              </div>

              {/* Experience */}
              <div>
                <SectionLabel>Experience &amp; Leadership</SectionLabel>
                <h2 className="mt-2 font-serif text-xl font-medium tracking-tight sm:text-2xl">Professional path</h2>
                <ul className="mt-6 space-y-6">
                  <li className="border-l-2 border-primary/20 pl-4 transition-colors hover:border-primary/40">
                    <p className="text-[14px] font-semibold text-foreground/80">Full-Stack Developer &amp; AI Enthusiast</p>
                    <p className="mt-0.5 text-[11px] font-medium text-muted-foreground/30">Self-directed · 2025</p>
                    <p className="mt-1 text-[13px] text-muted-foreground/40">Building end-to-end web apps with AI integration, Firebase/Supabase backends, and modern deployment workflows.</p>
                  </li>
                  <li className="border-l-2 border-primary/20 pl-4 transition-colors hover:border-primary/40">
                    <p className="text-[14px] font-semibold text-foreground/80">Coding Club Lead</p>
                    <p className="mt-0.5 text-[11px] font-medium text-muted-foreground/30">Noida International University</p>
                    <p className="mt-1 text-[13px] text-muted-foreground/40">Organizing hackathons, mentoring 50+ students in web, AI tools, and Vercel deployment.</p>
                  </li>
                  <li className="border-l-2 border-primary/20 pl-4 transition-colors hover:border-primary/40">
                    <p className="text-[14px] font-semibold text-foreground/80">IBM Student Ambassador</p>
                    <p className="mt-1 text-[13px] text-muted-foreground/40">Conducting workshops on full-stack development, AI tools, and cloud deployment.</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>

        <div className="my-14 sm:my-20"><SectionDivider /></div>

        {/* ══════════════════════════════════════════
            TECH STACK — Horizontal with left border accent
        ══════════════════════════════════════════ */}
        <Reveal delay={100}>
          <section>
            <SectionLabel>Technical expertise</SectionLabel>
            <h2 className="mt-2 font-serif text-xl font-medium tracking-tight sm:text-2xl">What I work with</h2>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {[
                { label: "Frontend & product UI", items: ["React, Vue, TypeScript, Tailwind CSS", "Design systems, smooth motion, responsive layouts"] },
                { label: "APIs, databases & models", items: ["Firebase, Supabase, REST APIs", "OpenAI, Hugging Face, automation workflows (n8n)"] },
                { label: "From idea to deployed product", items: ["Vercel deployment, GitHub, CI-style workflows", "Hackathons, mentorship, clear documentation"] },
              ].map((stack) => (
                <div key={stack.label} className="border-l-2 border-primary/15 pl-4 transition-colors hover:border-primary/35">
                  <p className="text-[14px] font-semibold text-foreground/75">{stack.label}</p>
                  <ul className="mt-2 space-y-1">
                    {stack.items.map((item) => (
                      <li key={item} className="text-[13px] leading-[1.7] text-muted-foreground/40">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <div className="my-14 sm:my-20"><SectionDivider /></div>

        {/* ══════════════════════════════════════════
            AI ENGINEERING — Clean numbered list, editorial
        ══════════════════════════════════════════ */}
        <Reveal delay={110}>
          <section>
            <SectionLabel>AI Engineering</SectionLabel>
            <h2 className="mt-2 font-serif text-xl font-medium tracking-tight sm:text-2xl">
              Full-spectrum AI capabilities
            </h2>
            <p className="mt-3 max-w-xl text-[14px] leading-[1.7] text-muted-foreground/45">
              From prompt engineering to production ML pipelines — here&apos;s what I bring to the table as an AI engineer.
            </p>

            <div className="mt-10 space-y-0">
              {aiSkills.map((skill, i) => (
                <Reveal key={skill.title} delay={i * 60}>
                  <div className="group border-b border-border/15 py-5 first:border-t transition-colors hover:bg-primary/[0.015]">
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 font-mono text-[12px] font-semibold text-muted-foreground/25 tabular-nums w-6 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-[15px] font-semibold text-foreground/75 sm:text-base">{skill.title}</h3>
                        <p className="mt-1.5 max-w-lg text-[13px] leading-[1.7] text-muted-foreground/40">{skill.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {skill.tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider text-primary/40 transition-colors group-hover:text-primary/60">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-10">
              <SectionLabel>Models &amp; tools I work with · {aiTools.length} tools</SectionLabel>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-[12px] sm:text-[13px]">
                {aiTools.map((tool) => (
                  <span key={tool} className="text-muted-foreground/35 transition-colors duration-300 hover:text-foreground/60 cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <div className="my-14 sm:my-20"><SectionDivider /></div>

        {/* ══════════════════════════════════════════
            PUBLICATION — Magazine layout
        ══════════════════════════════════════════ */}
        <Reveal delay={120}>
          <section>
            <SectionLabel>Published research</SectionLabel>
            <div className="mt-4 grid gap-8 md:grid-cols-[1.4fr_1fr] items-start">
              <div className="space-y-3">
                <h2 className="font-serif text-lg font-medium tracking-tight leading-snug sm:text-xl">
                  Adaptive Hybrid Intelligence Framework for Proactive Cross-Border Fraud Detection
                </h2>
                <p className="text-[13px] font-medium text-muted-foreground/45">
                  Journal of Scientific Innovation and Advanced Research (JSIAR), 2025
                </p>
                <p className="text-[13px] leading-[1.7] text-muted-foreground/40">
                  Co-designed and implemented a hybrid AI framework for detecting cross-border transaction fraud,
                  focusing on real-time risk scoring and improved detection accuracy.
                </p>
              </div>
              <div className="overflow-hidden border border-border/15 transition-shadow duration-500 hover:shadow-lg hover:shadow-primary/5">
                <img
                  src={jsiarCertificate}
                  alt="JSIAR publication certificate for Harshit Shah"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </Reveal>

        <div className="my-14 sm:my-20"><SectionDivider /></div>

        {/* ══════════════════════════════════════════
            RESUME
        ══════════════════════════════════════════ */}
        <Reveal delay={140}>
          <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <SectionLabel>Updated resume</SectionLabel>
              <h2 className="mt-2 font-serif text-lg font-medium tracking-tight sm:text-xl">Download my resume</h2>
              <p className="mt-2 max-w-md text-[13px] leading-[1.7] text-muted-foreground/40">
                Get the full, high-resolution PDF resume with clickable links to projects, education, experience, and publications.
              </p>
            </div>
            <a href="/Harshit_Shah_resume_1.pdf" download>
              <Button
                size="sm"
                variant="outline"
                className="group inline-flex items-center gap-2 border-foreground/15 px-5 text-[13px] font-medium text-foreground/60 transition-all hover:border-foreground/30 hover:text-foreground"
              >
                <Download className="h-4 w-4" />
                Download PDF
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
          </section>
        </Reveal>

        <div className="my-14 sm:my-20"><SectionDivider /></div>

        {/* ══════════════════════════════════════════
            CONTACT
        ══════════════════════════════════════════ */}
        <Reveal delay={160}>
          <section>
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              Liked what you saw?
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-[1.7] text-muted-foreground/50">
              I&apos;m always excited to collaborate on full-stack and AI-powered products. Reach out and let&apos;s build
              something impactful together.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href="mailto:harshit840hs@gmail.com">
                <Button
                  size="sm"
                  className="px-6 text-[13px] font-medium transition-all hover:-translate-y-0.5"
                >
                  Email me
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/harshit-shah--"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-medium text-primary/50 transition-colors hover:text-primary"
              >
                or connect on LinkedIn →
              </a>
            </div>
          </section>
        </Reveal>

        <div className="mt-20 mb-4 text-center">
          <p className="font-serif text-[12px] italic text-muted-foreground/25">
            Crafted with care · Harshit Shah · {new Date().getFullYear()}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;