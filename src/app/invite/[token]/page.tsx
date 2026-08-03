import type { Metadata } from "next";

import { InviteLandingClient } from "./InviteLandingClient";

export const metadata: Metadata = {
  title: "Call My Kin Invite",
  description:
    "Accept your Call My Kin invite and join your family member in the app.",
  robots: {
    index: false,
    follow: false,
  },
};

type InvitePageProps = {
  params: Promise<{
    token: string;
  }>;
};

export default async function InvitePage({ params }: InvitePageProps) {
  const { token } = await params;

  return <InviteLandingClient token={token} />;
}
