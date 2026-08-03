import type { Metadata } from "next";

import { CMKPageClient } from "../CMKPageClient";
import { landingMarkup } from "../content/landing-markup";

export const metadata: Metadata = {
  title: "CallMyKin — Call Your Kin with Confidence",
  description:
    "Learn to address family members correctly in Mandarin, Cantonese, Hokkien, Hakka, and Teochew.",
};

export default function HomePage() {
  return <CMKPageClient markup={landingMarkup} />;
}
