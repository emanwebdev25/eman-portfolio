export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "aurelia",
    name: "Aurelia",
    shortDescription: "Luxury fashion and lifestyle e-commerce experience.",
    description:
      "A product-focused fashion and lifestyle website designed to create a polished e-commerce browsing experience.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/aurelia.png",
    liveUrl: "https://aurelia-cyan-seven.vercel.app/",
    githubUrl: "https://github.com/emanwebdev25/aurelia",
    featured: true,
  },

  {
    slug: "roamly",
    name: "Roamly",
    shortDescription: "Responsive travel planner with API integrations.",
    description:
      "A travel planning experience that combines destination information and weather data into a responsive interface.",
    techStack: ["React", "TypeScript", "Open-Meteo API"],
    image: "/projects/roamly.png",
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },

  
{
  slug: "job-application-tracker",
  name: "Job Application Tracker",
  shortDescription: "Dashboard for managing and tracking job applications.",
  description:
    "A dashboard-style application for organizing job applications with search, filtering, and local data persistence.",
  techStack: ["Next.js", "Tailwind CSS", "localStorage"],
  image: "/projects/job-tracker.png",
  liveUrl: "https://job-application-tracker-nine-flame.vercel.app/",
  githubUrl: "https://github.com/emanwebdev25/job-application-tracker",
  featured: true,
},

  
{
  slug: "savore",
  name: "Savoré",
  shortDescription: "Premium restaurant website with a modern editorial feel.",
  description:
    "A responsive restaurant experience designed around premium desi and continental dining.",
  techStack: ["React", "TypeScript"],
  image: "/projects/savore.png",
  liveUrl: "https://savore-dusky.vercel.app/",
  githubUrl: "https://github.com/emanwebdev25/savore",
  featured: true,
},

  {
    slug: "veloura",
    name: "Veloura",
    shortDescription: "Luxury events and wedding business website.",
    description:
      "A responsive multi-page website created for a luxury events and wedding brand.",
    techStack: ["React"],
    image: "/projects/veloura.png",
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    slug: "recipe-finder",
    name: "Recipe Finder",
    shortDescription: "Recipe discovery application using a public API.",
    description:
      "A recipe discovery experience built around API data and responsive browsing.",
    techStack: ["React", "JavaScript", "API"],
    image: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },

  {
    slug: "expense-tracker",
    name: "Expense Tracker",
    shortDescription: "Simple expense management application.",
    description:
      "A frontend expense tracker with income, expense, search, filtering, editing, and local data persistence.",
    techStack: ["React", "JavaScript", "localStorage"],
    image: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },

  {
    slug: "studyflow",
    name: "StudyFlow",
    shortDescription: "Study-focused productivity application.",
    description:
      "A React application designed around organizing study-related tasks and information.",
    techStack: ["React", "JavaScript"],
    image: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },

  {
    slug: "color-palette-generator",
    name: "Color Palette Generator",
    shortDescription: "Interactive tool for creating color palettes.",
    description:
      "A small frontend tool for generating and exploring color combinations.",
    techStack: ["React", "JavaScript"],
    image: "",
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
];