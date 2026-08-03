import type { Metadata } from "next";

import { CMKPageClient } from "../../CMKPageClient";
import { privacyMarkup } from "../../content/privacy-markup";

export const metadata: Metadata = {
  title: "Privacy Policy | CallMyKin",
};

export default function PrivacyPage() {
  return <CMKPageClient markup={privacyMarkup} />;
}
