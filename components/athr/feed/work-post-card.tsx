"use client";

import * as React from "react";

import {
  PostCard,
  type PostCardAuthor,
  type PostCardMedia,
} from "@/components/ui/post-card";
import { cn } from "@/lib/utils";

export type AthrWorkPostType =
  | "case_study"
  | "breakdown"
  | "teardown"
  | "experiment"
  | "availability"
  | "collaboration_request"
  | "opportunity";

export interface WorkPostCardProps {
  author: PostCardAuthor;
  timestamp?: string;
  type: AthrWorkPostType;
  body?: React.ReactNode;
  media?: PostCardMedia;
  contextLabel?: string;
  className?: string;
  liked?: boolean;
  defaultLiked?: boolean;
  saved?: boolean;
  defaultSaved?: boolean;
  onAuthorClick?: () => void;
  onLikeChange?: (liked: boolean) => void;
  onSaveChange?: (saved: boolean) => void;
  onShare?: () => void;
}

const typeLabels: Record<AthrWorkPostType, string> = {
  case_study: "Case Study",
  breakdown: "Breakdown",
  teardown: "Teardown",
  experiment: "Experiment",
  availability: "Available",
  collaboration_request: "Looking for collaborator",
  opportunity: "Opportunity",
};

export function WorkPostCard({
  author,
  timestamp,
  type,
  body,
  media,
  contextLabel,
  className,
  liked,
  defaultLiked,
  saved,
  defaultSaved,
  onAuthorClick,
  onLikeChange,
  onSaveChange,
  onShare,
}: WorkPostCardProps) {
  return (
    <PostCard
      author={author}
      timestamp={timestamp}
      body={body}
      media={media}
      liked={liked}
      defaultLiked={defaultLiked}
      saved={saved}
      defaultSaved={defaultSaved}
      onAuthorClick={onAuthorClick}
      onLikeChange={onLikeChange}
      onSaveChange={onSaveChange}
      onShare={onShare}
      className={cn("max-w-[38rem]", className)}
      eyebrow={
        <span className="inline-flex max-w-44 items-center truncate rounded-full border border-border bg-muted px-2.5 py-1 text-[0.7rem] font-semibold text-muted-foreground">
          {typeLabels[type]}
        </span>
      }
      footer={
        contextLabel ? (
          <div className="rounded-2xl bg-muted/70 px-3 py-2 text-sm text-muted-foreground">
            {contextLabel}
          </div>
        ) : undefined
      }
    />
  );
}
