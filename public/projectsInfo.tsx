import iScream from "./images/projects/iScream.png";
import TwoHourFrontPage from "./images/projects/2 Hour Front Page.png";
import iLuminate from "./images/projects/i-luminate.png";
import portfolio from "./images/projects/portfolio.png";
import theNewOil from "./images/projects/The New Oil.png";
import MentorMe from "./images/projects/MentorMe.png";
import Werewolf from "./images/projects/Werewolf.png"

const Projects = [
  {
    name: "One Night Werewolf Boardgame (WIP)",
    description: "Occasionally working on making an online version of the Werewolf boardgame. The main features will include lobby creation and video calling.",
    date: { year: 2024, month: 4 },
    tools: ["HTML", "CSS", "TypeScript", "React", "NextJS", "Tailwind", "DaisyUI"],
    demo: "https://werewolf-peom.onrender.com/",
    source: "https://gitlab.com/thenewoil/website",
    image: Werewolf,
  },
  {
    name: "The New Oil",
    description: "In a collaboration with a partner, we redesigned and developed a website to improve UI and maintainability. We were given a challenge to include no client-side javascript per request, so we went with a static site generator that could build the code of the website containing no javascript.",
    date: { year: 2023, month: 1 },
    tools: ["HTML", "CSS", "Astro", "Tailwind"],
    demo: "https://thenewoil.org",
    source: "https://gitlab.com/thenewoil/website",
    image: theNewOil,
  },
  {
    name: "portfolio",
    description: "This website! After getting inspiration from other portfolio websites, I decided to make my own.",
    date: { year: 2022, month: 9 },
    tools: ["HTML", "CSS", "TypeScript", "React", "NextJS", "Tailwind"],
    demo: "https://jadenet.github.io",
    source: "https://github.com/jadenet/jadenet.github.io",
    image: portfolio,
  },
  {
    name: "ShellHacks2022 | MentorMe",
    description: "I participated in a 3-day long hackathon where I grouped up with 3 others to create an execute a development idea. I used the time as an opportunity to gain collaborative and more coding experience working on a thought-out project.",
    date: { year: 2022, month: 9 },
    tools: ["HTML", "CSS", "JavaScript", "React", "NextJS", "MUI"],
    source: "https://github.com/jadenet/jadenet.github.io",
    image: MentorMe,
  },
  {
    name: "i-luminate",
    description: "Another challenge created for fun. This was my first time using frameworks and utilizing a database. Although it turns out I didn't actually need a database for this project, it taught me more nonetheless.",
    date: { year: 2022, month: 6 },
    tools: ["HTML", "CSS", "Svelte", "TypeScript", "Tailwind", "Supabase"],
    demo: null,
    source: "https://github.com/jadenet/i-luminate",
    image: iLuminate,
  },
  {
    name: "iScream",
    description: "A friend suggested the idea and I wanted to try out html and css.",
    date: { year: 2022, month: 4 },
    tools: ["HTML", "CSS"],
    source: "https://github.com/jadenet/iScream",
    image: iScream,
  },
  {
    name: "2 Hour Front Page",
    description: "The first website I've made! At the time I didn't know about responsiveness so it's best to not look at this on mobile.",
    date: { year: 2022, month: 3 },
    tools: ["HTML", "CSS"],
    source: "https://github.com/jadenet/2-Hour-Front-Page",
    image: TwoHourFrontPage,
  },
];

export default Projects;
