"use client";

import { Button } from "@/components/ui/button";
import type { Contact } from "@/lib/chat-data";
import { Menu, MoreHorizontal, Phone, Video } from "lucide-react";
import { ChatAvatar } from "./avatar";

export function ChatHeader({
  activeContact,
  isTyping,
  onToggleSidebar,
}: {
  activeContact: Contact;
  isTyping: boolean;
  onToggleSidebar: () => void;
}) {

  return (
    <div className="flex shrink-0 items-center justify-between border-b bg-card p-3 md:p-4">
      <div className="flex items-center gap-3">
        <Button onClick={onToggleSidebar} variant="ghost" size="icon" className="h-8 w-8 md:hidden">
          <Menu className="h-5 w-5 text-muted-foreground" />
        </Button>
        <ChatAvatar contact={activeContact} />
        <div>
          <div className="font-bold">{activeContact.name}</div>
          <div
            className={`text-xs transition-colors ${
              isTyping ? "text-primary" : activeContact.status === "online" ? "text-green-500" : "text-muted-foreground"
            }`}
          >
            {isTyping ? "typing..." : activeContact.status}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 md:gap-2">
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Phone className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Video className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
