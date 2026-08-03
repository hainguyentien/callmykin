import type { Metadata } from "next";

import { CMKPageClient } from "../../CMKPageClient";
import { deleteAccountMarkup } from "../../content/delete-account-markup";

export const metadata: Metadata = {
  title: "Delete Account | CallMyKin",
};

export default function DeleteAccountPage() {
  return <CMKPageClient markup={deleteAccountMarkup} />;
}
