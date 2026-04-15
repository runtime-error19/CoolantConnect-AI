"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Paperclip, Send, Smile } from "lucide-react";

interface MessageInputProps {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
  isTyping: boolean;
  activeContactName: string;
}

export function MessageInput({
  input,
  setInput,
  sendMessage,
  isTyping,
  activeContactName,
}: MessageInputProps) {
  const canSend = input.trim() !== "" && !isTyping;

  return (
    <div className="flex items-center gap-3 border-t bg-card p-3 md:p-4">
      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
        <Smile />
      </Button>
      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
        <Paperclip />
      </Button>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (canSend) sendMessage();
          }
        }}
        placeholder={`Message ${activeContactName}...`}
        disabled={isTyping}
        className="h-11 flex-1 rounded-full bg-secondary px-5 text-sm ring-offset-background focus-visible:ring-1 disabled:opacity-60"
        autoComplete="off"
      />
      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
        <Mic />
      </Button>
      <Button
        onClick={sendMessage}
        disabled={!canSend}
        size="icon"
        className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-110 disabled:scale-100 disabled:bg-secondary disabled:text-muted-foreground disabled:shadow-none"
      >
        <Send className="h-5 w-5" />
      </Button>
    </div>
  );
}
