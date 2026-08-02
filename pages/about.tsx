import LinkedIn from "../public/links/linkedin.svg";
import Email from "../public/links/email.svg";
import GitHub from "../public/links/github.svg";
import Resume from "../public/links/resume.svg";
import LogoLink from "../components/LogoLink";

function About() {
  return (
    <section className="section-shell mx-auto max-w-5xl overflow-hidden">
      <div className="flex flex-col gap-10 lg:items-start">
        <div className="space-y-6 text-lg leading-8 text-[var(--ink-soft)]">
          <h1 className="text-5xl font-semibold text-[var(--ink)] sm:text-6xl">
            About Me
          </h1>

          <div className="grid gap-3 pt-2 text-left sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-lg border border-[var(--line)] bg-[var(--paper-strong)] p-3">
              <p className="text-sm font-semibold text-[var(--ink)]">
                2+ years
              </p>
              <p className="mt-1 text-[0.72rem] uppercase tracking-[0.1em] text-[var(--ink-soft)]">
                Freelance Web Development Experience
              </p>
            </article>

            <article className="rounded-lg border border-[var(--line)] bg-[var(--paper-strong)] p-3">
              <p className="text-sm font-semibold text-[var(--ink)]">B.S.</p>
              <p className="mt-1 text-[0.72rem] uppercase tracking-[0.1em] text-[var(--ink-soft)]">
                Computer Science
              </p>
            </article>

            <article className="rounded-lg border border-[var(--line)] bg-[var(--paper-strong)] p-3 sm:col-span-2 lg:col-span-1">
              <p className="text-sm font-semibold text-[var(--ink)]">
                JS / TS / React
              </p>
              <p className="mt-1 text-[0.72rem] uppercase tracking-[0.1em] text-[var(--ink-soft)]">
                Core Stack
              </p>
            </article>
          </div>
          <p>
            Hi, I'm Jaden! I'm a full-stack developer with a bachelor's
            degree in computer science and an interest in building thoughtful, maintainable software.
          </p>
          <p>
            I work primarily with JavaScript, TypeScript, and React, but also have knowledge in backend technologies such as Node.js, Express, and Python. 
          </p>
          <p>
            I value team collaboration, clean code, and a strong user experience. I enjoy working on projects that challenge me to learn new technologies and improve my skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
