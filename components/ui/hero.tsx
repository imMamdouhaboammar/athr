"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

export type HeroNavItem = {
  label: string;
  href: string;
};

export type HeroEvidenceCard = {
  name: string;
  headline: string;
  context: string;
  initials?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export type HeroFeature = {
  title: string;
  description: string;
  detail: string;
};

export type RequiredHeroProps = {
  brand?: string;
  navItems?: HeroNavItem[];
  primaryActionLabel?: string;
  primaryActionHref?: string;
  headline?: [string, string, string];
  evidenceCards?: [HeroEvidenceCard, HeroEvidenceCard];
  badgeText?: string;
  badgeHref?: string;
  features?: [HeroFeature, HeroFeature, HeroFeature];
};

const DEFAULT_NAV: HeroNavItem[] = [
  { label: "Discover", href: "/discover" },
  { label: "Work", href: "/discover/work" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "About", href: "/about" },
];

const DEFAULT_EVIDENCE: [HeroEvidenceCard, HeroEvidenceCard] = [
  {
    name: "Mariam Farouk",
    headline: "Paid Social · DTC",
    context: "Available · MENA",
    initials: "MF",
  },
  {
    name: "Omar Adel",
    headline: "SEO · GEO/AEO",
    context: "B2B SaaS · MENA",
    initials: "OA",
  },
];

const DEFAULT_FEATURES: [HeroFeature, HeroFeature, HeroFeature] = [
  {
    title: "SHOW THE WORK",
    description: "Publish marketing work with context, contribution and evidence",
    detail: "Case study",
  },
  {
    title: "FIND BY EVIDENCE",
    description: "Discover specialists through relevant work, not vanity signals",
    detail: "Discover",
  },
  {
    title: "START THE CONVERSATION",
    description: "Move from proof to a qualified collaboration or opportunity",
    detail: "Connect",
  },
];

const extrusion = Array.from({ length: 12 }, (_, index) => {
  const step = index + 1;
  return `${step}px ${step}px 0 rgb(0 0 0 / 0.18)`;
}).join(", ");

function ArrowAccentLeft() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className="h-full w-full overflow-visible stroke-current text-accent"
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10,90 C 10,40 40,20 60,50 C 70,65 80,75 95,70" />
      <path d="M80,55 L95,70 L85,85" />
    </svg>
  );
}

function ArrowAccentRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className="h-full w-full overflow-visible stroke-current text-accent"
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M90,10 C 80,60 60,80 40,60 C 20,40 40,20 60,30 C 80,40 70,70 50,80" />
      <path d="M65,75 L50,80 L55,65" />
    </svg>
  );
}

function ArrowDark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className="h-full w-full overflow-visible stroke-current text-foreground"
      fill="none"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20,80 Q 40,20 80,40" />
      <path d="M60,20 L80,40 L50,60" />
    </svg>
  );
}

function EvidenceAvatar({ card }: { card: HeroEvidenceCard }) {
  if (card.imageUrl) {
    return (
      <img
        src={card.imageUrl}
        alt={card.imageAlt ?? `${card.name} profile`}
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <span className="text-lg font-black tracking-tight text-foreground md:text-2xl">
      {card.initials ?? card.name.slice(0, 2).toUpperCase()}
    </span>
  );
}

function EvidenceCard({
  card,
  side,
  reduceMotion,
}: {
  card: HeroEvidenceCard;
  side: "left" | "right";
  reduceMotion: boolean | null;
}) {
  const isLeft = side === "left";

  return (
    <motion.div
      animate={reduceMotion ? undefined : { y: isLeft ? [0, -12, 0] : [0, -16, 0] }}
      transition={
        reduceMotion
          ? undefined
          : {
              duration: isLeft ? 5 : 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: isLeft ? 0 : 1,
            }
      }
      className={
        isLeft
          ? "pointer-events-auto absolute bottom-[8%] left-[4%] z-30 md:left-[18%]"
          : "pointer-events-auto absolute right-[4%] top-[14%] z-30 md:right-[20%]"
      }
    >
      <article
        className={`flex aspect-[3/3.5] w-40 flex-col items-center justify-center rounded-[2rem] border border-primary-foreground/35 bg-primary-foreground/15 p-5 text-center shadow-xl backdrop-blur-md transition-transform duration-500 md:w-52 ${
          isLeft ? "-rotate-12 hover:rotate-0" : "rotate-12 hover:rotate-0"
        }`}
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-primary-foreground/40 bg-card shadow-inner md:h-24 md:w-24">
          <EvidenceAvatar card={card} />
        </div>
        <p className="text-sm font-bold text-primary-foreground md:text-lg">{card.name}</p>
        <p className="mt-1 text-[10px] font-semibold text-primary-foreground/80 md:text-xs">
          {card.headline}
        </p>
        <p className="mt-1 text-[10px] text-primary-foreground/70 md:text-xs">{card.context}</p>
      </article>
    </motion.div>
  );
}

function CircularBadge({
  text,
  href,
  reduceMotion,
}: {
  text: string;
  href: string;
  reduceMotion: boolean | null;
}) {
  const circlePathId = React.useId();

  return (
    <a
      href={href}
      aria-label={text}
      className="pointer-events-auto relative flex h-28 w-28 rotate-12 items-center justify-center rounded-full border-[3px] border-foreground/10 bg-accent text-accent-foreground shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:h-36 md:w-36"
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-1"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
        }
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <path
            id={circlePathId}
            d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
            fill="none"
          />
          <text className="fill-current text-[11px] font-black uppercase tracking-[0.18em]">
            <textPath href={`#${circlePathId}`} startOffset="0%">
              {`${text} · ${text} · `}
            </textPath>
          </text>
        </svg>
      </motion.span>

      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="h-10 w-10 stroke-current"
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20,80 Q 40,50 30,30 T 80,20" />
        <path d="M60,10 L80,20 L70,40" />
      </svg>
    </a>
  );
}

export function RequiredHero({
  brand = "AthR",
  navItems = DEFAULT_NAV,
  primaryActionLabel = "Join AthR",
  primaryActionHref = "/signup",
  headline = ["PEOPLE", "WORK", "PROOF"],
  evidenceCards = DEFAULT_EVIDENCE,
  badgeText = "EXPLORE ATHR",
  badgeHref = "/discover",
  features = DEFAULT_FEATURES,
}: RequiredHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-primary text-primary-foreground selection:bg-accent selection:text-accent-foreground">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <nav className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a
          href="/"
          className="rounded-2xl rounded-bl-sm bg-primary-foreground px-3 py-1.5 text-sm font-black tracking-tight text-primary shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {brand}
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-primary-foreground/30 px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={primaryActionHref}
          className="rounded-full border border-primary-foreground px-5 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:px-6 md:text-sm"
        >
          {primaryActionLabel}
        </a>
      </nav>

      <main className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-center px-4 pb-32 pt-8 md:pb-48 md:pt-12">
        <div className="relative z-10 mx-auto mb-16 mt-4 flex w-full max-w-5xl flex-col items-center justify-center text-center">
          <h1 className="relative z-10 flex w-full flex-col items-center gap-2 md:gap-4">
            <span className="relative z-30 flex w-full justify-start pl-[10%] md:pl-[25%]">
              <span
                className="m-0 p-0 text-[clamp(4.5rem,12vw,160px)] font-black uppercase leading-[0.85] tracking-tighter text-accent"
                style={{ textShadow: extrusion }}
              >
                {headline[0]}
              </span>
            </span>

            <span className="relative z-20 flex w-full justify-center">
              <span
                className="m-0 p-0 text-[clamp(5rem,15vw,220px)] font-black uppercase leading-[0.85] tracking-tighter text-primary-foreground"
                style={{ textShadow: extrusion }}
              >
                {headline[1]}
              </span>
            </span>

            <span className="relative z-10 flex w-full justify-start pl-[15%] md:pl-[30%]">
              <span
                className="m-0 p-0 text-[clamp(4.5rem,12vw,160px)] font-black uppercase leading-[0.85] tracking-tighter text-primary-foreground"
                style={{ textShadow: extrusion }}
              >
                {headline[2]}
              </span>
            </span>
          </h1>

          <div className="pointer-events-none absolute inset-0 h-full w-full">
            <EvidenceCard card={evidenceCards[0]} side="left" reduceMotion={reduceMotion} />
            <EvidenceCard card={evidenceCards[1]} side="right" reduceMotion={reduceMotion} />

            <div className="absolute bottom-0 left-0 z-20 h-24 w-24 md:left-[10%] md:h-32 md:w-32">
              <ArrowAccentLeft />
            </div>
            <div className="absolute right-0 top-[5%] z-20 h-24 w-24 md:right-[10%] md:h-32 md:w-32">
              <ArrowAccentRight />
            </div>
            <div className="pointer-events-auto absolute bottom-[-10%] right-0 z-40 md:right-[15%]">
              <CircularBadge text={badgeText} href={badgeHref} reduceMotion={reduceMotion} />
            </div>
          </div>
        </div>
      </main>

      <section className="relative z-20 mt-auto w-full rounded-t-[2.5rem] bg-background px-6 py-12 text-foreground shadow-[0_-20px_50px_rgb(0_0_0/0.12)] md:rounded-t-[3.5rem] md:px-10 md:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="relative flex min-h-64 flex-col items-center rounded-[2rem] border border-border bg-card p-8 text-center text-card-foreground"
            >
              <h2 className="text-xl font-black uppercase leading-tight md:text-2xl">{feature.title}</h2>
              <p className="mt-2 text-xs font-semibold text-muted-foreground">{feature.description}</p>
              <div className="mt-auto pt-8">
                <span className="inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm">
                  {feature.detail}
                </span>
              </div>

              {index < features.length - 1 ? (
                <div className="absolute -right-12 bottom-8 z-30 hidden h-16 w-16 md:block">
                  <ArrowDark />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

export const Component = RequiredHero;
