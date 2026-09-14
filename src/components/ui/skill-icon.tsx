"use client";

import { Icon } from "@iconify/react";

/**
 * Renders an Iconify skill mark on the client.
 */
export function SkillIcon({ tag, label }: { tag: string; label: string }) {
  return <Icon icon={tag} className="size-8" aria-label={label} />;
}
