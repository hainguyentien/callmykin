import type { Metadata } from "next";

import { CMKPageClient } from "../../CMKPageClient";
import { termsMarkup } from "../../content/terms-markup";

export const metadata: Metadata = {
  title: "Terms of Service | CallMyKin",
};

export default function TermsPage() {
  return <CMKPageClient markup={termsMarkup} />;
}
