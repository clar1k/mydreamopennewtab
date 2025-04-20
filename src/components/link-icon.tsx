"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface LinkIconProps {
  href: string;
  icon: LucideIcon;
  label: string;
  color?: string;
}

export function LinkIcon({ href, icon: Icon, label, color }: LinkIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-secondary transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className={cn("size-8", color)} />

      <span className="text-sm">{label}</span>
    </a>
  );
}
