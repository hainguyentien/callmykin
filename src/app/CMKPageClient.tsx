"use client";

import { useEffect } from "react";

type CMKPageClientProps = {
  markup: string;
};

export function CMKPageClient({ markup }: CMKPageClientProps) {
  useEffect(() => {
    void import("./marketing-effects.js");
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
