"use client";

import {
  BookText,
  Mail,
  Github,
  Sparkles,
  MessageSquare,
  Bot,
} from "lucide-react";
import { LinkIcon } from "./link-icon";
import Image from "next/image";

const links = [
  {
    href: "https://www.notion.so",
    icon: () => (
      <Image alt="notion" src="./notion.png" width={24} height={24} />
    ),
    label: "Notion",
    color: "text-black dark:text-white",
  },
  {
    href: "https://mail.notion.so/inbox",
    icon: () => (
      <Image alt="notion" src="./notion-mail.png" width={24} height={24} />
    ),
    label: "Notion Mail",
    color: "text-white",
  },
  {
    href: "https://github.com",
    icon: Github,
    label: "GitHub",
    color: "text-gray-800 dark:text-gray-200",
  },
  {
    href: "https://chat.openai.com",
    icon: MessageSquare,
    label: "ChatGPT",
    color: "text-emerald-500",
  },
  {
    href: "https://claude.ai",
    icon: Sparkles,
    label: "Claude",
    color: "text-purple-500",
  },
  {
    href: "https://gemini.google.com",
    icon: Bot,
    label: "Gemini",
    color: "text-blue-500",
  },
];

export function LinkGrid() {
  return (
    <div className="flex flex-col space-y-2">
      {links.map((link) => (
        <LinkIcon
          key={link.label}
          href={link.href}
          icon={link.icon}
          label={link.label}
          color={link.color}
        />
      ))}
    </div>
  );
}
