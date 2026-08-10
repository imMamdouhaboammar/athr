"use client";

import {
  Bell,
  FileText,
  HelpCircle,
  Home,
  Lock,
  Mail,
  Settings,
  Shield,
  User,
} from "lucide-react";

import { ExpandableTabs } from "@/components/ui/expandable-tabs";

export function DefaultDemo() {
  const tabs = [
    { title: "Dashboard", icon: Home },
    { title: "Notifications", icon: Bell },
    { type: "separator" as const },
    { title: "Settings", icon: Settings },
    { title: "Support", icon: HelpCircle },
    { title: "Security", icon: Shield },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs tabs={tabs} defaultValue={0} />
    </div>
  );
}

export function CustomColorDemo() {
  const tabs = [
    { title: "Profile", icon: User },
    { title: "Messages", icon: Mail },
    { type: "separator" as const },
    { title: "Documents", icon: FileText },
    { title: "Privacy", icon: Lock },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs
        tabs={tabs}
        defaultValue={0}
        activeColor="text-primary"
      />
    </div>
  );
}
