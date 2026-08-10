"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Bookmark,
  BriefcaseBusiness,
  Compass,
  Home,
  MessageCircle,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import {
  ExpandableTabs,
  type ExpandableTabItem,
} from "@/components/ui/expandable-tabs";
import { cn } from "@/lib/utils";

interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

interface NavigationSeparator {
  type: "separator";
}

type PrimaryNavigationItem = NavigationItem | NavigationSeparator;

export interface AthrPrimaryNavProps {
  className?: string;
  profileHref?: string;
}

function createNavigation(profileHref: string): PrimaryNavigationItem[] {
  return [
    { title: "Home", href: "/", icon: Home },
    { title: "Discover", href: "/discover", icon: Compass },
    {
      title: "Opportunities",
      href: "/opportunities",
      icon: BriefcaseBusiness,
    },
    { title: "Messages", href: "/messages", icon: MessageCircle },
    { type: "separator" },
    { title: "Saved", href: "/saved", icon: Bookmark },
    { title: "Profile", href: profileHref, icon: UserRound },
  ];
}

function isNavigationItem(
  item: PrimaryNavigationItem
): item is NavigationItem {
  return !("type" in item);
}

function routeMatches(pathname: string, href: string) {
  if (href === "/") return pathname === "/";

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AthrPrimaryNav({
  className,
  profileHref = "/profile",
}: AthrPrimaryNavProps) {
  const pathname = usePathname();
  const router = useRouter();

  const navigation = React.useMemo(
    () => createNavigation(profileHref),
    [profileHref]
  );

  const tabs = React.useMemo<ExpandableTabItem[]>(
    () =>
      navigation.map((item) => {
        if (!isNavigationItem(item)) return { type: "separator" as const };

        return {
          title: item.title,
          icon: item.icon,
        };
      }),
    [navigation]
  );

  const activeIndex = React.useMemo(
    () =>
      navigation.findIndex(
        (item) => isNavigationItem(item) && routeMatches(pathname, item.href)
      ),
    [navigation, pathname]
  );

  const handleChange = (index: number | null) => {
    if (index === null) return;

    const item = navigation[index];
    if (!item || !isNavigationItem(item)) return;

    router.push(item.href);
  };

  return (
    <nav aria-label="Primary navigation" className={cn("max-w-full", className)}>
      <ExpandableTabs
        tabs={tabs}
        value={activeIndex >= 0 ? activeIndex : null}
        collapseOnOutsideClick={false}
        ariaLabel="AthR primary navigation"
        onChange={handleChange}
        className="max-w-full"
      />
    </nav>
  );
}
