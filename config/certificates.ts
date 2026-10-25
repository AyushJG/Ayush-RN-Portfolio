export interface CertificateInterface {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  credentialUrl?: string;
  fileUrl?: string;
}

export const certificates: CertificateInterface[] = [
  {
    id: "first-aid-certificate",
    title: "First Aid and CPR Training",
    issuer: "Example Training Organisation",
    date: "October 2026",
    description:
      "Sample certificate demonstrating first aid knowledge, CPR skills, and emergency response training.",
    image: "/certificates/sample.png",
    credentialUrl: "https://example.com/verify/first-aid",
    fileUrl: "/certificates/first-aid.pdf",
  },
  {
    id: "clinical-informatics",
    title: "Introduction to Clinical Informatics",
    issuer: "Example Digital Health Academy",
    date: "September 2026",
    description:
      "Sample training covering digital health systems, clinical information management, and healthcare technology.",
    image: "/certificates/sample.png",
    credentialUrl: "https://example.com/verify/clinical-informatics",
    fileUrl: "/certificates/clinical-informatics.pdf",
  },
  {
    id: "infection-control",
    title: "Infection Prevention and Control",
    issuer: "Example Healthcare Education Provider",
    date: "August 2026",
    description:
      "Sample training covering hand hygiene, standard precautions, personal protective equipment, and infection prevention.",
    image: "/certificates/sample.png",
    credentialUrl: "https://example.com/verify/infection-control",
    fileUrl: "/certificates/infection-control.pdf",
  },
];
