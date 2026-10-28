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
    title: "First Aid & CPR Certification",
    issuer: "Australia Wide First Aid",
    date: "March 2026",
    description:
      "Statement of Attainment covering CPR (HLTAID009), Basic Emergency Life Support (HLTAID010), and Provide First Aid (HLTAID011). || Attainment no : 14688763-9774626",
    image: "/certificates/first-aid.png",
    credentialUrl:
      "https://www.australiawidefirstaid.com.au/certificate-verify",
    fileUrl: "/certificates/first-aid.pdf",
  },
];
