"use client";

import { cn } from "@/lib/utils";
import type { Contact } from "@/lib/chat-data";
import { cva, type VariantProps } from "class-variance-authority";

const avatarVariants = cva(
  "flex items-center justify-center rounded-full flex-shrink-0 relative text-white",
  {
    variants: {
      contactType: {
        ai: "bg-gradient-to-br from-indigo-500 to-purple-600",
        support: "bg-gradient-to-br from-cyan-500 to-cyan-600",
        group: "bg-gradient-to-br from-amber-500 to-orange-600",
        personal: "bg-gradient-to-br from-emerald-500 to-green-600",
      },
      size: {
        sm: "w-7 h-7 text-xs",
        md: "w-10 h-10 text-lg",
        lg: "w-11 h-11 text-xl",
      },
    },
    defaultVariants: {
      contactType: "personal",
      size: "md",
    },
  }
);

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  contact: Contact;
  className?: string;
}

export function ChatAvatar({ contact, size, className }: AvatarProps) {
  return (
    <div
      className={cn(avatarVariants({ contactType: contact.type, size }), className)}
    >
      {contact.avatar}
      {contact.status === "online" && (
        <div className="absolute bottom-0 right-0 w-[25%] h-[25%] bg-green-500 rounded-full border-2 border-card" />
      )}
    </div>
  );
}
