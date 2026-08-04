import iScream from "./images/projects/iScream.png";
import TwoHourFrontPage from "./images/projects/2 Hour Front Page.png";
import iLuminate from "./images/projects/i-luminate.png";
import portfolio from "./images/projects/portfolio.png";
import theNewOil from "./images/projects/The New Oil.png";
import MentorMe from "./images/projects/MentorMe.png";
import Werewolf from "./images/projects/Werewolf.png";

const Projects = [
  {
    name: "AI-Integrated Receipt Scanner",
    description:
      "First mobile app created using React Native, featuring a receipt scanner integrated with AI to automatically extract and categorize purchases.",
    date: { year: 2025, month: 5 },
    tools: ["TypeScript", "React Native", "NodeJS"],
    source: "https://github.com/jadenet/receipt-scanner",
  },
  {
    name: "One Night Werewolf Boardgame",
    description:
      "An online version of the One Night Werewolf boardgame. This is my first production-ready project with a dedicated frontend and backend. Features real-time communication (text and audio) and state management.",
    date: { year: 2024, month: 4 },
    tools: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "NextJS",
      "Tailwind",
      "DaisyUI",
    ],
    demo: "https://werewolf-peom.onrender.com/",
    source: "https://github.com/jadenet/werewolf-boardgame",
    image: Werewolf,
  },
  {
    name: "The New Oil",
    description:
      "I did a long-term commission with a content creator to redesign and implement a privacy-focused blog site with no client-side JavaScript. Working with one other developer, we used Astro to create a static site with a custom CMS.",
    date: { year: 2023, month: 1 },
    tools: ["HTML", "CSS", "Astro", "Tailwind"],
    demo: "https://thenewoil.org",
    source: "https://gitlab.com/thenewoil/website",
    image: theNewOil,
  },
  {
    name: "portfolio",
    description:
      "This website! I redesign every few years to match my current \"vibe\", using my core technologies including HTML/CSS, TypeScript, React, NextJS, and Tailwind.",
    date: { year: 2022, month: 9 },
    tools: ["HTML", "CSS", "TypeScript", "React", "NextJS", "Tailwind"],
    demo: "https://jadenet.github.io/portfolio",
    source: "https://github.com/jadenet/portfolio",
    image: portfolio,
  },
  {
    name: "ShellHacks2022 | MentorMe",
    description:
      "I participated in a 3-day long hackathon with 3 team members to create an execute a development idea. I used the time as an opportunity to gain collaborative and coding experience working on a thought-out project.",
    date: { year: 2022, month: 9 },
    tools: ["HTML", "CSS", "JavaScript", "React", "NextJS", "MUI"],
    image: MentorMe,
  },
  {
    name: "i-luminate",
    description:
      "Another challenge created for fun. This was my first time using frameworks and utilizing a database. Learned quickly that losing your database loses all of your saved progress, whoops.",
    date: { year: 2022, month: 6 },
    tools: ["HTML", "CSS", "Svelte", "TypeScript", "Tailwind", "Supabase"],
    demo: null,
    image: iLuminate,
  },
  {
    name: "iScream",
    description:
      "A joke site suggested by a friend. Realized at this point that websites needed to look good on both mobile and desktop, so I learned about CSS relative units and media queries to make the site responsive.",
    date: { year: 2022, month: 4 },
    tools: ["HTML", "CSS"],
    image: iScream,
  },
  {
    name: "2 Hour Front Page",
    description:
      "The first website I've made for fun! This was all before learning about responsive design and accessibility, but making this gave me the confidence to learn more about web development.",
    date: { year: 2022, month: 3 },
    tools: ["HTML", "CSS"],
    image: TwoHourFrontPage,
  },
];

export default Projects;
