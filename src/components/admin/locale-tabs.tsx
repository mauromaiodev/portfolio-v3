"use client";

import { useState } from "react";

type Props = {
  pt: React.ReactNode;
  en: React.ReactNode;
};

/**
 * PT/EN tabs that keep both fieldsets in the form DOM.
 */
export function LocaleTabs({ pt, en }: Props) {
  const [tab, setTab] = useState<"pt" | "en">("pt");

  return (
    <div>
      <div role="tablist" className="mb-4 flex w-fit rounded-lg border border-border bg-surface p-1">
        {(["pt", "en"] as const).map((id) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`h-9 min-w-14 rounded-md px-3 font-mono text-xs uppercase ${
              tab === id ? "bg-current-line text-pink" : "text-comment"
            }`}
          >
            {id}
          </button>
        ))}
      </div>
      <div hidden={tab !== "pt"} className="grid gap-4">
        {pt}
      </div>
      <div hidden={tab !== "en"} className="grid gap-4">
        {en}
      </div>
    </div>
  );
}
