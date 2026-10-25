import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
  hour: string;
}

export const Projects: ProjectInterface[] = [
  {
    id: "gcuh-gi-surgical-placement",
    companyName: "Gold Coast University Hospital",
    type: "Personal",
    category: ["Web Dev", "UI/UX"],

    shortDescription:
      "Completed two supervised clinical nursing placements at Gold Coast University Hospital over six weeks, from 6 July to 14 August 2026. Gained experience in gastrointestinal and surgical nursing, chronic health and disability care, patient assessment, clinical skills, documentation, and patient-centred care.",

    websiteLink: "",
    githubLink: "",

    techStack: ["HTML 5", "CSS 3", "Javascript"],

    startDate: new Date("2026-07-06"),
    endDate: new Date("2026-08-14"),

    companyLogoImg: "/projects/gcuh/building.png",

    pagesInfoArr: [
      {
        title: "Health Assessment Across the Lifespan | NURS5012 |",
        description:
          " Completed a supervised placement in the Gastrointestinal and Surgical Unit. Developed experience in patient assessment, vital signs monitoring, blood glucose monitoring, medication administration under supervision, clinical documentation, infection prevention and control, and ISBAR handovers. Worked alongside Registered Nurses to support safe and patient-centred care.",

        imgArr: [
          "/projects/gcuh/placement-2.png",
          "/projects/gcuh/placement-3.png",
        ],
      },
      {
        title: "Chronic Health and Disability Across the Lifespan | NURS5011 |",
        description:
          "Completed a second supervised placement focused on chronic health and disability care. Developed understanding of holistic assessment, individual healthcare needs, patient dignity, effective communication, and person-centred support. Further strengthened teamwork, clinical reasoning, and professional communication while working with Registered Nurses and the wider healthcare team.",

        imgArr: ["/projects/gcuh/placement-1.png"],
      },
    ],
    hour: "240 hr ",
    descriptionDetails: {
      paragraphs: [
        "Completed two supervised clinical placements at Gold Coast University Hospital over six weeks, from 6 July to 14 August 2026, as part of the Master of Nursing (Graduate Entry) at Southern Cross University.",
      ],

      bullets: [
        "Patient assessment and vital signs monitoring",
        "Gastrointestinal and surgical nursing",
        "Chronic health and disability care",
        "Medication administration under RN supervision",
        "Blood glucose monitoring",
        "Clinical documentation and record keeping",
        "ISBAR handovers and clinical communication",
        "Infection prevention and control",
        "Patient-centred and holistic care",
        "Clinical reasoning and prioritisation",
        "Multidisciplinary collaboration",
        "Time management and professional accountability",
        "Reflective practice and ongoing clinical development",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
