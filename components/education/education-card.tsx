"use client";

import { CalendarDays, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { EducationInterface } from "@/config/education";

interface EducationCardProps {
  education: EducationInterface;
}

interface EducationListProps {
  education: EducationInterface[];
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <article className="group relative overflow-hidden rounded-lg border bg-background p-4 transition-all duration-300 sm:p-6">
      <div className="flex items-start gap-3 sm:gap-4">
        {/* University logo */}
        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg border-2 border-border bg-white sm:h-12 sm:w-12">
          <Image
            src={education.logo}
            alt={`${education.institution} logo`}
            width={48}
            height={48}
            className="h-full w-full object-contain p-1.5 sm:p-2"
          />
        </div>

        {/* Qualification details */}
        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-base font-bold text-foreground sm:text-lg">
            {education.qualification}
          </h3>

          <div className="mt-1 flex flex-wrap items-center gap-2">
            <p className="text-sm font-medium text-muted-foreground">
              {education.institution}
            </p>

            {education.link && (
              <Link
                href={education.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${education.institution} website`}
                className="inline-flex shrink-0 items-center text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink size={15} />
              </Link>
            )}
          </div>

          {/* Study period */}
          <div className="mt-3 flex items-start gap-2">
            <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {education.startDate} – {education.endDate}
            </span>
          </div>

          {/* Location */}
          <div className="mt-2 flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {education.location}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {education.description}
      </p>
    </article>
  );
};

export default function EducationCardList({ education }: EducationListProps) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
      {education.map((item) => (
        <EducationCard key={item.id} education={item} />
      ))}
    </div>
  );
}
