import Image from "next/image";
import Link from "next/link";

import { Award, CalendarDays, ExternalLink, FileText } from "lucide-react";

import { CertificateInterface } from "@/config/certificates";

interface CertificateCardProps {
  certificate: CertificateInterface;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg">
      {/* Certificate image */}
      {certificate.image && (
        <div className="relative h-[180px] w-full flex-shrink-0 overflow-hidden bg-muted">
          <Image
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-grow flex-col gap-3 p-5">
        {/* Certificate icon and issuer */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
            <Award className="h-5 w-5 text-primary" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="line-clamp-2 text-lg font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary">
              {certificate.title}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {certificate.issuer}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="flex-grow text-sm leading-relaxed text-muted-foreground">
          {certificate.description}
        </p>

        {/* Issue date */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5 flex-shrink-0" />
          <span>Issued: {certificate.date}</span>
        </div>

        {/* Certificate links */}
        {(certificate.credentialUrl || certificate.fileUrl) && (
          <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-border pt-3">
            {certificate.credentialUrl && (
              <Link
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Verify credential
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            )}

            {certificate.fileUrl && (
              <Link
                href={certificate.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                View certificate
                <FileText className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
