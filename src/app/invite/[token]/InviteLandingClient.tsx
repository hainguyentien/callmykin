"use client";

import { useEffect, useMemo, useState } from "react";
import { Copy, ExternalLink } from "lucide-react";

const APP_SCHEME = "call-my-kin";

type InviteLandingClientProps = {
  token: string;
};

function decodeInviteToken(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function isLikelyMobileBrowser(): boolean {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return (
    /android|iphone|ipad|ipod/.test(userAgent) ||
    window.navigator.maxTouchPoints > 1
  );
}

export function InviteLandingClient({ token }: InviteLandingClientProps) {
  const [copied, setCopied] = useState(false);
  const decodedToken = useMemo(() => decodeInviteToken(token).trim(), [token]);
  const appInviteUrl = useMemo(
    () => `${APP_SCHEME}://invite/${encodeURIComponent(decodedToken)}`,
    [decodedToken],
  );

  useEffect(() => {
    if (!decodedToken || !isLikelyMobileBrowser()) return;

    const timer = window.setTimeout(() => {
      window.location.href = appInviteUrl;
    }, 650);

    return () => {
      window.clearTimeout(timer);
    };
  }, [appInviteUrl, decodedToken]);

  const handleOpenApp = () => {
    window.location.href = appInviteUrl;
  };

  const handleCopyInvite = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden px-6 py-14 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(253,245,216,0.9),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(253,237,238,0.9),transparent_32%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white/72 px-3 py-1.5 text-sm font-semibold text-red-800 shadow-[0_6px_18px_rgba(58,2,2,0.06)]">
            <span className="h-2 w-2 rounded-full bg-green" />
            Family invite
          </div>

          <h1 className="max-w-3xl text-[42px] font-black leading-[1.05] tracking-[-0.04em] text-red-800 sm:text-[56px] lg:text-[68px]">
            You have been invited to Call My Kin
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-text-2 sm:text-xl">
            Join your family member on Call My Kin and explore family kinship
            terms together.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={handleOpenApp}
              className="inline-flex h-[52px] cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-red-500 px-[22px] text-[15px] font-semibold tracking-tight text-white shadow-[0_4px_14px_rgba(222,28,36,0.28),inset_0_-2px_0_rgba(0,0,0,0.08)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-[0_10px_24px_rgba(222,28,36,0.32),inset_0_-2px_0_rgba(0,0,0,0.08)] active:translate-y-0"
            >
              Open app / Accept invite
              <ExternalLink size={16} />
            </button>

            <button
              type="button"
              onClick={handleCopyInvite}
              className="inline-flex h-[52px] cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-white px-[22px] text-[15px] font-semibold tracking-tight text-red-800 shadow-[0_1px_0_rgba(58,2,2,0.06),0_6px_16px_rgba(58,2,2,0.06)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_2px_0_rgba(58,2,2,0.06),0_12px_28px_rgba(58,2,2,0.10)] active:translate-y-0"
            >
              <Copy size={16} />
              {copied ? "Copied" : "Copy invite link"}
            </button>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-6 text-text-3">
            If you do not have the app yet, download it first, then come back to
            this invite link.
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-text-3">
            Android testers must join the test with their approved Google
            account before installing.
          </p>

        </div>

        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute -left-10 top-10 h-28 w-28 rotate-12 rounded-[2rem] bg-yellow-soft" />
          <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-red-50" />
          <div className="relative rounded-[28px] border border-white/80 bg-white/74 p-5 shadow-[0_24px_80px_rgba(58,2,2,0.14)] backdrop-blur">
            <div className="rounded-[22px] border border-grey-100 bg-surface p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-text-3">
                    Invite token
                  </p>
                  <p className="mt-1 max-w-[220px] truncate font-mono text-sm text-red-800">
                    {decodedToken}
                  </p>
                </div>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-yellow-soft text-sm font-black text-red-800">
                  CMK
                </div>
              </div>

              <div className="space-y-3 rounded-2xl bg-bg p-4">
                <div className="h-3 w-32 rounded-full bg-red-100" />
                <div className="h-3 w-full rounded-full bg-grey-100" />
                <div className="h-3 w-5/6 rounded-full bg-grey-100" />
              </div>

              <div className="mt-5 rounded-2xl border border-green-soft bg-green-soft/50 p-4">
                <p className="font-semibold text-green-dark">
                  Ready to connect
                </p>
                <p className="mt-1 text-sm leading-6 text-text-3">
                  Open Call My Kin to accept this family invite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
