import iScream from "./images/projects/iScream.png";
import TwoHourFrontPage from "./images/projects/2 Hour Front Page.png";
import iLuminate from "./images/projects/i-luminate.png";
import portfolio from "./images/projects/portfolio.png";
import theNewOil from "./images/projects/The New Oil.png";

const Projects = [
  {
    name: "The New Oil",
    description: (
      <p>
        In a collaboration with{" "}
        <a href="https://www.rikdenbreejen.nl">
          Rik
        </a>
        , we redesigned and developed a website to improve UI and
        maintainability. We were given a challenge to include no client-side
        javascript per request, so we went with a static site generator that
        could build the code of the website containing no javascript.
      </p>
    ),
    date: { year: 2023, month: 1 },
    tools: ["HTML", "CSS", "Astro", "Tailwind"],
    demo: "https://thenewoil.org",
    source: "https://gitlab.com/thenewoil/website",
    image: theNewOil,
  },
  {
    name: "portfolio",
    description: (
      <p>
        This website! After getting inspiration from other portfolio websites, I
        decided to make my own.
      </p>
    ),
    date: { year: 2022, month: 9 },
    tools: ["HTML", "CSS", "TypeScript", "React", "NextJS", "Tailwind"],
    demo: "https://jadenet.github.io/portfolio",
    source: "https://github.com/jadenet/portfolio",
    image: portfolio,
  },
  {
    name: "i-luminate",
    description: (
      <p>
        Another challenge created for fun. This was my first time using
        frameworks and utilizing a database. Although it turns out I didn't
        actually need a database for this project, it taught me more
        nonetheless.
      </p>
    ),
    date: { year: 2022, month: 6 },
    tools: ["HTML", "CSS", "Svelte", "TypeScript", "Tailwind", "Supabase"],
    demo: null,
    source: "https://github.com/jadenet/i-luminate",
    image: iLuminate,
  },
  {
    name: "iScream",
    description: (
      <p>A friend suggested the idea and I wanted to try out html and css.</p>
    ),
    date: { year: 2022, month: 4 },
    tools: ["HTML", "CSS"],
    demo: "https://jadenet.github.io/iScream/",
    source: "https://github.com/jadenet/iScream",
    image: iScream,
  },
  {
    name: "2 Hour Front Page",
    description: (
      <p>
        The first website I've made! At the time I didn't know about
        responsiveness so it's best to not look at this on mobile. :>
      </p>
    ),
    date: { year: 2022, month: 3 },
    tools: ["HTML", "CSS"],
    demo: "https://jadenet.github.io/2-Hour-Front-Page/",
    source: "https://github.com/jadenet/2-Hour-Front-Page",
    image: TwoHourFrontPage,
  },
];

export default Projects;
