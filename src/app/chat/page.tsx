'use client';

import { useState, useEffect, useMemo } from 'react';
import { CONTACTS, INITIAL_MESSAGES, type Contact, type Message } from '@/lib/chat-data';
import { getAiResponse } from '@/lib/actions';
import { ChatSidebar } from '@/components/chat/chat-sidebar';
import { ChatHeader } from '@/components/chat/chat-header';
import { MessageList } from '@/components/chat/message-list';
import { MessageInput } from '@/components/chat/message-input';
import { cn } from '@/lib/utils';
import { useIsMobile } from "@/hooks/use-mobile";

export default function ChatPage() {
  const [contacts] = useState<Contact[]>(CONTACTS);
  const [messages, setMessages] = useState<Record<number, Message[]>>(INITIAL_MESSAGES);
  const [activeContact, setActiveContact] = useState<Contact>(contacts[0]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [search, setSearch] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isMobile = useIsMobile();

  const activeMessages = useMemo(() => {
    return messages[activeContact.id] || [];
  }, [messages, activeContact.id]);

  useEffect(() => {
    if (!isMobile) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }, [isMobile]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const currentInput = input;
    const currentContactId = activeContact.id;
    
    setInput('');

    setMessages(prev => {
        const currentMessages = prev[currentContactId] || [];
        const newMessage: Message = {
            id: currentMessages.length + 1,
            from: 'me',
            text: currentInput,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'text',
        };
        return {
            ...prev,
            [currentContactId]: [...currentMessages, newMessage]
        };
    });

    if (activeContact.type === 'ai') {
      setIsTyping(true);
      const aiResponseText = await getAiResponse(currentInput);

      setMessages(prev => {
        const currentMessages = prev[currentContactId] || [];
        const aiMessage: Message = {
            id: currentMessages.length + 1,
            from: 'them',
            text: aiResponseText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'text',
        };
        return {
            ...prev,
            [currentContactId]: [...currentMessages, aiMessage]
        };
      });
      setIsTyping(false);
    }
  };

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [contacts, search]);
  
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <div className={cn(
        "h-full flex-shrink-0 md:w-[320px] md:block",
        isMobile ? "absolute inset-0 z-40" : "",
        isMobile && !sidebarOpen ? "hidden" : "w-full"
      )}>
        <ChatSidebar
          contacts={filteredContacts}
          activeContact={activeContact}
          setActiveContact={(contact) => {
            setActiveContact(contact);
            if (isMobile) {
              setSidebarOpen(false);
            }
          }}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div className={cn("flex flex-1 flex-col", isMobile && sidebarOpen ? "hidden" : "flex")}>
        <ChatHeader 
          activeContact={activeContact} 
          isTyping={isTyping}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <MessageList 
          messages={activeMessages} 
          activeContact={activeContact} 
          isTyping={isTyping}
        />
        <MessageInput
          input={input}
          setInput={setInput}
          sendMessage={handleSendMessage}
          isTyping={isTyping}
          activeContactName={activeContact.name}
        />
      </div>
    </div>
  );
}
