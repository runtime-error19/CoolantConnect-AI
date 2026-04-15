"use client";

import type { Contact } from "@/lib/chat-data";
import { ChatAvatar } from "./avatar";

export function TypingIndicator({ contact }: { contact: Contact }) {
  return (
    <div className="flex items-end gap-2 animate-fade-slide-in">
      <ChatAvatar contact={contact} size="sm" />
      <div className="flex items-center gap-1.5 rounded-[18px] rounded-bl-sm bg-secondary px-4 py-3">
        <div className="h-1.5 w-1.5 animate-message-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
        <div className="h-1.5 w-1.5 animate-message-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
        <div className="h-1.5 w-1.5 animate-message-bounce rounded-full bg-primary" />
      </div>
    </div>
  );
}
