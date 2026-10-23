import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Ayush Timalsina's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Ayush Timalsina's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Placements",
    description:
      "Showcasing my clinical placement experiences throughout my nursing journey.",
    metadata: {
      title: "Projects",
      description: "Ayush Timalsina's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Ayush Timalsina.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Ayush Timalsina's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Ayush Timalsina's resume.",
    metadata: {
      title: "Resume",
      description: "Ayush Timalsina's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Thoughts on AI, software engineering, and building in public.",
    metadata: {
      title: "Blogs",
      description:
        "Ayush Timalsina's blog — thoughts on AI, software engineering, and building in public.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Ayush Timalsina's professional journey and experience timeline.",
    },
  },
};
