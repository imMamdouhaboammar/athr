"use client";

import * as React from "react";
import Image from "next/image";
import { Bookmark, Heart, Send } from "lucide-react";

import { cn } from "@/lib/utils";

export interface PostCardAuthor {
  name: string;
  handle?: string;
  avatarUrl?: string;
  avatarAlt?: string;
}

export interface PostCardMedia {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface PostCardProps {
  author: PostCardAuthor;
  timestamp?: string;
  body?: React.ReactNode;
  media?: PostCardMedia;
  eyebrow?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  liked?: boolean;
  defaultLiked?: boolean;
  saved?: boolean;
  defaultSaved?: boolean;
  showActionLabels?: boolean;
  onAuthorClick?: () => void;
  onLikeChange?: (liked: boolean) => void;
  onSaveChange?: (saved: boolean) => void;
  onShare?: () => void;
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function PostCard({
  author,
  timestamp,
  body,
  media,
  eyebrow,
  footer,
  className,
  liked,
  defaultLiked = false,
  saved,
  defaultSaved = false,
  showActionLabels = true,
  onAuthorClick,
  onLikeChange,
  onSaveChange,
  onShare,
}: PostCardProps) {
  const [internalLiked, setInternalLiked] = React.useState(defaultLiked);
  const [internalSaved, setInternalSaved] = React.useState(defaultSaved);

  const isLikeControlled = liked !== undefined;
  const isSaveControlled = saved !== undefined;
  const isLiked = isLikeControlled ? liked : internalLiked;
  const isSaved = isSaveControlled ? saved : internalSaved;

  const handleLike = () => {
    const nextValue = !isLiked;

    if (!isLikeControlled) {
      setInternalLiked(nextValue);
    }

    onLikeChange?.(nextValue);
  };

  const handleSave = () => {
    const nextValue = !isSaved;

    if (!isSaveControlled) {
      setInternalSaved(nextValue);
    }

    onSaveChange?.(nextValue);
  };

  return (
    <article
      className={cn(
        "w-full max-w-[34rem] rounded-3xl border border-border bg-card p-4 text-card-foreground shadow-sm",
        className
      )}
    >
      <header className="flex items-start justify-between gap-4">
        <button
          type="button"
          onClick={onAuthorClick}
          disabled={!onAuthorClick}
          className={cn(
            "flex min-w-0 items-center gap-3 rounded-xl text-left outline-none",
            onAuthorClick &&
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          )}
        >
          {author.avatarUrl ? (
            <Image
              src={author.avatarUrl}
              alt={author.avatarAlt ?? `${author.name} avatar`}
              width={40}
              height={40}
              className="size-10 shrink-0 rounded-full object-cover"
            />
          ) : (
            <span
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground"
              aria-hidden="true"
            >
              {getInitials(author.name)}
            </span>
          )}

          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-foreground">
              {author.name}
            </span>

            {(author.handle || timestamp) && (
              <span className="mt-0.5 flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground">
                {author.handle && <span className="truncate">{author.handle}</span>}
                {author.handle && timestamp && <span aria-hidden="true">·</span>}
                {timestamp && <time>{timestamp}</time>}
              </span>
            )}
          </span>
        </button>

        {eyebrow && (
          <div className="shrink-0 text-xs font-medium text-muted-foreground">
            {eyebrow}
          </div>
        )}
      </header>

      {(body || media) && (
        <div className="mt-4 flex flex-col gap-4">
          {body && (
            <div className="whitespace-pre-wrap text-[0.95rem] leading-6 text-foreground">
              {body}
            </div>
          )}

          {media && (
            <div className="overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                src={media.src}
                alt={media.alt}
                width={media.width ?? 1600}
                height={media.height ?? 1000}
                className="h-auto w-full object-cover"
              />
            </div>
          )}
        </div>
      )}

      {footer && <div className="mt-4">{footer}</div>}

      <footer className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-3">
        <button
          type="button"
          aria-pressed={isLiked}
          aria-label={isLiked ? "Remove like" : "Like"}
          onClick={handleLike}
          className={cn(
            "flex min-h-10 items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium outline-none transition-colors",
            "hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            isLiked ? "text-primary" : "text-muted-foreground"
          )}
        >
          <Heart
            className="size-4"
            fill={isLiked ? "currentColor" : "none"}
            aria-hidden="true"
          />
          {showActionLabels && <span className="max-sm:hidden">Like</span>}
        </button>

        <button
          type="button"
          aria-pressed={isSaved}
          aria-label={isSaved ? "Remove from saved" : "Save"}
          onClick={handleSave}
          className={cn(
            "flex min-h-10 items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium outline-none transition-colors",
            "hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            isSaved ? "text-primary" : "text-muted-foreground"
          )}
        >
          <Bookmark
            className="size-4"
            fill={isSaved ? "currentColor" : "none"}
            aria-hidden="true"
          />
          {showActionLabels && <span className="max-sm:hidden">Save</span>}
        </button>

        <button
          type="button"
          aria-label="Share"
          onClick={onShare}
          className="flex min-h-10 items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Send className="size-4" aria-hidden="true" />
          {showActionLabels && <span className="max-sm:hidden">Share</span>}
        </button>
      </footer>
    </article>
  );
}
