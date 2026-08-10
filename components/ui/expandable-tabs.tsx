"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface ExpandableTab {
  title: string;
  icon: LucideIcon;
  disabled?: boolean;
  type?: never;
}

export interface ExpandableTabSeparator {
  type: "separator";
  title?: never;
  icon?: never;
  disabled?: never;
}

export type ExpandableTabItem = ExpandableTab | ExpandableTabSeparator;

export interface ExpandableTabsProps {
  tabs: ExpandableTabItem[];
  className?: string;
  activeColor?: string;
  value?: number | null;
  defaultValue?: number | null;
  collapseOnOutsideClick?: boolean;
  ariaLabel?: string;
  onChange?: (index: number | null) => void;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const springTransition: Transition = {
  delay: 0.1,
  type: "spring",
  bounce: 0,
  duration: 0.6,
};

const reducedMotionTransition: Transition = { duration: 0 };

function Separator() {
  return (
    <div
      className="mx-1 h-6 w-px shrink-0 bg-border"
      aria-hidden="true"
    />
  );
}

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  value,
  defaultValue = null,
  collapseOnOutsideClick = true,
  ariaLabel = "Expandable options",
  onChange,
}: ExpandableTabsProps) {
  const [internalSelected, setInternalSelected] =
    React.useState<number | null>(defaultValue);
  const outsideClickRef = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const isControlled = value !== undefined;
  const selected = isControlled ? value : internalSelected;
  const transition = shouldReduceMotion
    ? reducedMotionTransition
    : springTransition;

  const setSelected = React.useCallback(
    (nextValue: number | null) => {
      if (!isControlled) {
        setInternalSelected(nextValue);
      }

      onChange?.(nextValue);
    },
    [isControlled, onChange]
  );

  useOnClickOutside(outsideClickRef, () => {
    if (!collapseOnOutsideClick) return;
    setSelected(null);
  });

  const handleSelect = (index: number) => {
    const tab = tabs[index];

    if (!tab || tab.type === "separator" || tab.disabled) return;

    setSelected(index);
  };

  return (
    <div
      ref={outsideClickRef}
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "flex max-w-full items-center gap-2 overflow-x-auto rounded-2xl border bg-background p-1 shadow-sm",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        const isSelected = selected === index;

        return (
          <motion.button
            key={tab.title}
            type="button"
            aria-pressed={isSelected}
            aria-label={tab.title}
            disabled={tab.disabled}
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={isSelected}
            onClick={() => handleSelect(index)}
            transition={transition}
            className={cn(
              "relative flex shrink-0 items-center rounded-xl py-2 text-sm font-medium outline-none transition-colors duration-300",
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              "disabled:pointer-events-none disabled:opacity-50",
              isSelected
                ? cn("bg-muted", activeColor)
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon className="size-5 shrink-0" aria-hidden="true" />

            <AnimatePresence initial={false}>
              {isSelected && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
