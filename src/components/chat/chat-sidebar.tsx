"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Contact } from "@/lib/chat-data";
import { Edit, MoreHorizontal, Search, MessageSquare } from "lucide-react";
import { ChatAvatar } from "./avatar";

interface ChatSidebarProps {
  contacts: Contact[];
  activeContact: Contact;
  setActiveContact: (contact: Contact) => void;
  search: string;
  setSearch: (value: string) => void;
}

export function ChatSidebar({
  contacts,
  activeContact,
  setActiveContact,
  search,
  setSearch,
}: ChatSidebarProps) {
  const filterTabs = ["All", "AI", "Groups", "Personal"];

  return (
    <aside className="flex h-full w-full flex-col border-r bg-card">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple-600">
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-lg font-bold tracking-tight">CoolantConnect</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="icon" className="h-8 w-8">
                <Edit className="h-4 w-4 text-muted-foreground" />
            </Button>
            <Button variant="secondary" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search conversations..."
            className="h-9 rounded-full bg-secondary pl-9 text-sm"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 p-4 border-b">
        {filterTabs.map((tab, i) => (
          <Button
            key={tab}
            variant={i === 0 ? "default" : "secondary"}
            size="sm"
            className="rounded-full h-7 px-3 text-xs"
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Contact List */}
      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            onClick={() => setActiveContact(contact)}
            className={`flex cursor-pointer items-center gap-3 p-3 transition-colors ${
              activeContact.id === contact.id
                ? "bg-secondary"
                : "hover:bg-secondary/50"
            } ${activeContact.id === contact.id ? "border-l-2 border-primary" : "border-l-2 border-transparent"}`}
          >
            <ChatAvatar contact={contact} size="lg" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="truncate font-semibold text-sm">{contact.name}</p>
                <p className="text-xs text-muted-foreground">{contact.time}</p>
              </div>
              <div className="flex items-center justify-between mt-0.5">
                <p className="truncate text-xs text-muted-foreground max-w-[160px]">
                  {contact.lastMsg}
                </p>
                {contact.unread > 0 && (
                  <span className="flex-shrink-0 rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">
                    {contact.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
