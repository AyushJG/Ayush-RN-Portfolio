import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import EducationCard from "@/components/education/education-card";
import { education } from "@/config/education";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.education.metadata.title,
  description: pagesConfig.education.metadata.description,
};

export default function EducationPage() {
  return (
    <PageContainer
      title={pagesConfig.education.title}
      description={pagesConfig.education.description}
    >
      <EducationCard education={education} />
    </PageContainer>
  );
}
