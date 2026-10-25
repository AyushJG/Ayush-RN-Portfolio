import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "arcare-psw",
    position: "Personal Support Worker (PSW)",
    company: "Arcare",
    location: "Pimpama, Queensland, Australia",
    startDate: new Date("2026-11-01"),
    endDate: "Present",
    description: [
      "Provide person-centred support to aged-care residents, promoting dignity, comfort, independence, and wellbeing.",
      "Assist residents with activities of daily living and mobility while following individual care plans and workplace procedures.",
      "Communicate with residents and care-team members to support safe, compassionate, and respectful care.",
    ],
    achievements: [
      "Develop practical experience supporting older people in a residential aged-care environment.",
      "Strengthen communication, teamwork, observation, and person-centred care skills.",
      "Develop an understanding of aged-care routines, resident safety, and multidisciplinary teamwork.",
    ],
    skills: ["Communication", "Teamwork"],
    companyUrl: "https://arcare.com.au/",
    logo: "/experience/arcare-logo.png",
  },
  {
    id: "arcare-environment-assistant",
    position: "Environment Assistant",
    company: "Arcare",
    location: "Pimpama, Queensland, Australia",
    startDate: new Date("2025-05-01"), // Replace with your actual start date
    endDate: new Date("2026-10-25"),
    description: [
      "Maintain a clean, hygienic, and comfortable environment for residents, visitors, and staff.",
      "Follow infection prevention and control procedures and workplace cleaning protocols.",
      "Support a safe care environment by maintaining cleanliness and reporting environmental concerns.",
    ],
    achievements: [
      "Contribute to a hygienic and safe environment in a residential aged-care setting.",
      "Develop an understanding of environmental hygiene and infection prevention in healthcare.",
      "Demonstrate reliability, attention to detail, and teamwork in daily duties.",
    ],
    skills: ["Communication", "Teamwork"],
    companyUrl: "https://arcare.com.au/",
    logo: "/experience/arcare-logo.png",
  },

  {
    id: "varicon",
    position: "Product Engineer",
    company: "Varicon",
    location: "Melbourne, Australia",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2024-06-30"),
    description: [
      "Developed and maintained various features for Varicon, a civil construction cost management platform, using React and Python.",
      "Built responsive frontend interfaces and implemented backend functionality to support platform features and business requirements.",
      "Managed development tasks through Jira and collaborated with team members in an agile environment.",
      "Contributed to testing, debugging, and delivering reliable software features.",
    ],
    achievements: [
      "Contributed to the development of a civil construction cost management platform across frontend and backend components.",
      "Applied full-stack development skills to deliver features and improve application functionality.",
      "Developed experience in agile software development, task management, and collaborative delivery.",
    ],
    skills: ["React", "Python", "Typescript", "Django"],
    companyUrl: "https://muzecmo.com",
    logo: "/experience/varicon-logo.png",
  },

  {
    id: "cloudfactory",
    position: "Data Entry Specialist (Remote)",
    company: "CloudFactory",
    location: "Remote",
    startDate: new Date("2020-12-01"),
    endDate: new Date("2022-07-31"),
    description: [
      "Worked as a Data Specialist performing image annotation and data labelling tasks.",
      "Performed HUDL tagging for basketball and volleyball video footage.",
      "Processed and analysed AFB game data while maintaining accuracy and consistency.",
    ],
    achievements: [
      "Developed strong attention to detail through image annotation and sports data labelling.",
      "Built experience in remote collaboration, structured data processing, and quality-focused workflows.",
    ],
    skills: ["Communication", "Teamwork"],
    companyUrl: "https://www.cloudfactory.com/",
    logo: "/experience/cf-logo.png",
  },
];
