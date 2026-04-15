"use client";

import type { Contact, Message } from "@/lib/chat-data";
import { useEffect, useRef } from "react";
import { ChatAvatar } from "./avatar";
import { TypingIndicator } from "./typing-indicator";

function MessageBubble({ message, contact }: { message: Message; contact: Contact }) {
  const isMe = message.from === "me";
  return (
    <div
      className={`flex items-end gap-2 animate-fade-slide-in ${isMe ? "justify-end" : "justify-start"}`}
    >
      {!isMe && <ChatAvatar contact={contact} size="sm" />}
      <div className={`flex flex-col max-w-[70%] ${isMe ? "items-end" : "items-start"}`}>
        <div
          className={`px-4 py-2.5 text-sm leading-relaxed ${
            isMe
              ? "rounded-t-2xl rounded-bl-2xl bg-gradient-to-br from-primary to-purple-600 text-primary-foreground shadow-lg shadow-primary/20"
              : "rounded-t-2xl rounded-br-2xl bg-secondary"
          }`}
        >
          {message.text}
        </div>
        <span className="mt-1.5 text-xs text-muted-foreground">{message.time}</span>
      </div>
    </div>
  );
}

export function MessageList({
  messages,
  activeContact,
  isTyping,
}: {
  messages: Message[];
  activeContact: Contact;
  isTyping: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages.length, isTyping]);
  
  return (
    <div className="flex-1 overflow-y-auto bg-chat-gradient p-4 md:p-6">
      <div className="flex flex-col gap-4">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} contact={activeContact} />
        ))}
        {isTyping && <TypingIndicator contact={activeContact} />}
        <div ref={scrollRef} />
      </div>
    </div>
  );
}
