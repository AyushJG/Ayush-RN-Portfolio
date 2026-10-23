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
}

export const Projects: ProjectInterface[] = [
  {
    id: "gcuh-gi-surgical-placement",
    companyName: "Gold Coast University Hospital",
    type: "Personal",
    category: ["Web Dev", "UI/UX"],

    shortDescription:
      "Completed a Gastrointestinal and Surgical clinical placement, gaining hands-on experience in patient assessment, medication administration, clinical documentation, multidisciplinary collaboration, and patient-centred care.",

    websiteLink: "",
    githubLink: "",

    techStack: ["HTML 5", "CSS 3", "Javascript"],

    startDate: new Date("2026-07-21"),
    endDate: new Date("2026-08-14"),

    companyLogoImg: "/projects/gcuh/logo.png",

    pagesInfoArr: [
      {
        title: "Gastrointestinal & Surgical Placement",
        description:
          "Clinical placement experience within a fast-paced acute care environment at Gold Coast University Hospital.",
        imgArr: ["/projects/gcuh/placement-1.png"],
      },
      {
        title: "Clinical Skill Development",
        description:
          "Developed essential nursing skills through supervised clinical practice and multidisciplinary teamwork.",
        imgArr: [
          "/projects/gcuh/placement-2.png",
          "/projects/gcuh/placement-3.png",
        ],
      },
      {
        title: "Patient-Centred Care",
        description:
          "Supported safe, evidence-based care while building confidence in communication, documentation, and clinical decision-making.",
        imgArr: ["/projects/gcuh/placement-4.png"],
      },
    ],

    descriptionDetails: {
      paragraphs: [
        "Completed a clinical placement in the Gastrointestinal and Surgical Unit at Gold Coast University Hospital, caring for patients with a wide range of acute and complex health conditions.",

        "Worked alongside Registered Nurses and multidisciplinary healthcare teams to deliver safe, evidence-based, and patient-centred care in a dynamic hospital environment.",

        "Applied theoretical nursing knowledge in real-world clinical settings through patient assessments, medication administration, clinical documentation, blood glucose monitoring, and structured ISBAR handovers.",

        "Gained valuable exposure to gastrointestinal and surgical nursing, strengthening clinical reasoning, communication, teamwork, and professional practice skills.",

        "This placement further developed my confidence, adaptability, and commitment to providing compassionate and high-quality healthcare while continuing my journey toward becoming a Registered Nurse.",
      ],

      bullets: [
        "Patient assessment and monitoring",
        "Medication administration",
        "Clinical documentation",
        "ISBAR handovers",
        "Blood glucose monitoring",
        "Infection prevention and control",
        "Patient-centred care",
        "Clinical reasoning and decision-making",
        "Multidisciplinary collaboration",
        "Professional communication",
        "Gastrointestinal nursing care",
        "Surgical nursing care",
        "Healthcare teamwork",
        "Evidence-based practice",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
