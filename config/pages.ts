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

  education: {
    title: "Education",
    description:
      "My academic journey across nursing, information technology, and business.",
    metadata: {
      title: "Education",
      description:
        "Ayush Timalsina's academic background and educational qualifications.",
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
  certificates: {
    title: "Certificates",
    description:
      "Professional certifications, clinical training, and continuing professional development.",
    metadata: {
      title: "Certificates",
      description:
        "Explore my professional certifications and clinical training.",
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
