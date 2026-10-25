export interface EducationInterface {
  id: string;
  qualification: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
  link?: string;
}

export const education: EducationInterface[] = [
  {
    id: "scu-nursing",
    qualification: "Master of Nursing (Graduate Entry)",
    institution: "Southern Cross University",
    location: "Gold Coast, Queensland, Australia",
    startDate: "Jan 2026",
    endDate: "Dec 2027 (Expected)",
    description:
      "RN leading graduate-entry nursing program focused on clinical assessment, medication safety, evidence-based practice, and person-centred care.",
    logo: "/education/scu-logo.png",
    link: "https://www.scu.edu.au/",
  },
  {
    id: "mba",
    qualification: "Master of Business Administration (MBA)",
    institution:
      "Affiliated to Kuala Lumpur University of Science and Technology (KLUST)",
    location: "Kathmandu (Himalayan College of Management)",
    startDate: "2024",
    endDate: "2026",
    description:
      "Postgraduate business studies covering management, strategy, leadership, and organisational decision-making.",
    logo: "/education/klust-logo.png",
    link: "https://www.klust.edu.my/",
  },
  {
    id: "bca",
    qualification: "Bachelor in Computer Application",
    institution: "Tribhuvan University",
    location: "Kathmandu, Nepal",
    startDate: "2018",
    endDate: "2023",
    description:
      "Undergraduate studies in computer applications, building a foundation in computing and software development.",
    logo: "/education/tu-logo.png",
    link: "https://tu.edu.np/",
  },
];
