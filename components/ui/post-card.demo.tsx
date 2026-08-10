"use client";

import { PostCard } from "@/components/ui/post-card";

export function PostCardDemo() {
  const handleShare = async () => {
    const shareData = {
      title: "AthR Case Study",
      text: "A marketing case study shared from the AthR component demo",
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
  };

  return (
    <PostCard
      author={{
        name: "Mariam Farouk",
        handle: "@mariam.performance",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
        avatarAlt: "Portrait of Mariam Farouk",
      }}
      timestamp="2h"
      eyebrow="Case Study"
      body={
        "We rebuilt the acquisition structure around contribution margin instead of ROAS alone.\n\nThe useful change was not another campaign type. It was separating prospecting decisions from blended reporting so the team could see where growth was actually coming from."
      }
      media={{
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
        alt: "Laptop showing marketing analytics on a desk",
        width: 1600,
        height: 1067,
      }}
      defaultLiked
      onShare={handleShare}
    />
  );
}
