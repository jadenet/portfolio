import iScream from './images/iScream.png';
import TwoHourFrontPage from './images/2 Hour Front Page.png';
import iLuminate from './images/i-luminate.png';
import portfolio from './images/portfolio.png';

const Projects = [
  {
    "name": "portfolio",
    "description": "This website! After getting inspiration from other portfolio websites, I decided to make my own.",
    "date": { year: 2022, month: 9 },
    "tools": ["TypeScript", "React", "NextJS", "Tailwind"],
    "demo": null,
    "source": "https://github.com/jadenet/portfolio",
    "image": portfolio
  },
  {
    "name": "i-luminate",
    "description": "Another challenge created for fun. This was my first time using frameworks and utilizing a database. Although it turns out I didn't actually need a database for this project, it taught me more nonetheless.",
    "date": { year: 2022, month: 6 },
    "tools": ["Svelte", "TypeScript", "Tailwind"],
    "demo": null,
    "source": "https://github.com/jadenet/i-luminate",
    "image": iLuminate
  },
  {
    "name": "iScream",
    "description": "A friend suggested the idea and I wanted to try out html and css.",
    "date": { year: 2022, month: 4 },
    "tools": [],
    "demo": "https://jadenet.github.io/iScream/",
    "source": "https://github.com/jadenet/iScream",
    "image": iScream
  },
  {
    "name": "2 Hour Front Page",
    "description": "The first website I've made! At the time I didn't know about responsiveness so it's best to not look at this on mobile. :>",
    "date": { year: 2022, month: 3 },
    "tools": [],
    "demo": "https://jadenet.github.io/2-Hour-Front-Page/",
    "source": "https://github.com/jadenet/2-Hour-Front-Page",
    "image": TwoHourFrontPage
  }
]

export default Projects
