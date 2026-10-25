import { Metadata } from "next";

import CertificateCard from "@/components/certificates/certificate-card";
import { AnimatedSection } from "@/components/common/animated-section";
import PageContainer from "@/components/common/page-container";
import { certificates } from "@/config/certificates";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.certificates.metadata.title,
  description: pagesConfig.certificates.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/certificates`,
  },
  openGraph: {
    title: `${pagesConfig.certificates.metadata.title} | ${siteConfig.name}`,
    description: pagesConfig.certificates.metadata.description,
    url: `${siteConfig.url}/certificates`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function CertificatesPage() {
  return (
    <PageContainer
      title={pagesConfig.certificates.title}
      description={pagesConfig.certificates.description}
    >
      {certificates.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="mb-4 text-4xl">🏅</p>

          <h2 className="mb-2 text-xl font-semibold text-foreground">
            No certificates added yet
          </h2>

          <p className="text-sm text-muted-foreground">
            Your certificates and professional training will appear here.
          </p>
        </div>
      ) : (
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <AnimatedSection
              key={certificate.id}
              delay={0.05 * index}
              direction="up"
              className="h-full"
            >
              <CertificateCard certificate={certificate} />
            </AnimatedSection>
          ))}
        </div>
      )}
    </PageContainer>
  );
}
