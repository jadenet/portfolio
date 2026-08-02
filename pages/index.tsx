import LinkedIn from "../public/links/linkedin.svg";
import Email from "../public/links/email.svg";
import GitHub from "../public/links/github.svg";
import Resume from "../public/links/resume.svg";
import LogoLink from "../components/LogoLink";
import toolLogos from "../public/toolLogos.json";


function LogoColumn(props: { direction: "up" | "down" }) {
  const marqueeLogos = [...toolLogos, ...toolLogos];

  return (
    <div className="logo-rail">
      <div
        className={`logo-rail-track ${props.direction === "down" ? "logo-rail-down" : "logo-rail-up"}`}
      >
        {marqueeLogos.map((logo, index) => {
          return (
            <div
              key={`${logo.name}-${index}`}
              className="logo-rail-item"
              aria-hidden={index >= toolLogos.length}
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className="logo-mark"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LogoRow() {
  const marqueeLogos = [...toolLogos, ...toolLogos];

  return (
    <div className="logo-row">
      <div className="logo-row-track logo-row-right">
        {marqueeLogos.map((logo, index) => {
          return (
            <div
              key={`${logo.name}-row-${index}`}
              className="logo-rail-item"
              aria-hidden={index >= toolLogos.length}
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className="logo-mark"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Home() {
  return (
    <section className="relative flex min-h-[68vh] items-center justify-center overflow-hidden py-8">
      <div className="pointer-events-none absolute inset-y-8 left-2 hidden w-20 md:block md:left-6 md:w-24 lg:left-10 lg:w-32 xl:w-36">
        <LogoColumn direction="down" />
      </div>

      <div className="pointer-events-none absolute inset-y-8 right-2 hidden w-20 md:block md:right-6 md:w-24 lg:right-10 lg:w-32 xl:w-36">
        <LogoColumn direction="up" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl before:pointer-events-none before:absolute before:inset-x-8 before:top-0 before:h-px">
        <div className="relative flex flex-col items-center gap-8 text-center sm:gap-12">
          <div className="space-y-4">
            <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-[0.92] text-[var(--ink)] sm:text-6xl lg:text-8xl">
              &lt; Jaden Edwards /&gt;
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-8 text-[var(--ink-soft)] sm:text-xl">
              // Software Developer
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <LogoLink
              src={LinkedIn}
              href="https://www.linkedin.com/in/jadenet/"
              label="LinkedIn"
            />
            <LogoLink
              src={Email}
              href="mailto:jadene123456@gmail.com"
              label="Email"
            />
            <LogoLink
              src={GitHub}
              href="https://github.com/jadenet"
              label="GitHub"
            />
            <LogoLink
              src={Resume}
              href="../Jaden_A_Edwards_Resume.pdf"
              label="Resume"
            />
          </div>
          <div className="w-full pt-1 md:hidden">
            <LogoRow />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
