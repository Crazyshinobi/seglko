'use client';

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import JobApplicationForm from "@/app/components/JobApplicationForm";

export default function SlugHandler() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (pathname === '/career/application') {
      const storedJob = localStorage.getItem('selectedJob');
      if (storedJob) {
        setSelectedJob(JSON.parse(storedJob));
      } else {
        router.push('/career');
      }
    }
  }, [pathname, router]);

  if (pathname === '/career/application' && selectedJob) {
    return (
      <JobApplicationForm
        job={selectedJob}
        onClose={() => {
          setSelectedJob(null);
          localStorage.removeItem('selectedJob');
          router.push('/career');
        }}
      />
    );
  }

  return null;
}
