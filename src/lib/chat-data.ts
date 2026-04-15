export type Contact = {
  id: number;
  name: string;
  avatar: string;
  status: "online" | "away" | "offline";
  lastMsg: string;
  time: string;
  unread: number;
  type: "ai" | "support" | "group" | "personal";
};

export type Message = {
  id: number;
  from: "me" | "them";
  text: string;
  time: string;
  type: "text";
};

export const CONTACTS: Contact[] = [
  { id: 1, name: "Aria AI", avatar: "🤖", status: "online", lastMsg: "Hey! How can I help?", time: "now", unread: 0, type: "ai" },
  { id: 2, name: "Support Bot", avatar: "🎧", status: "online", lastMsg: "Ticket #4821 resolved", time: "2m", unread: 2, type: "support" },
  { id: 3, name: "Team Alpha", avatar: "👥", status: "online", lastMsg: "Meeting at 3pm confirmed", time: "10m", unread: 5, type: "group" },
  { id: 4, name: "Jordan Lee", avatar: "😎", status: "away", lastMsg: "See you tomorrow!", time: "1h", unread: 0, type: "personal" },
  { id: 5, name: "Maya Chen", avatar: "🌸", status: "offline", lastMsg: "Thanks for the update", time: "3h", unread: 0, type: "personal" },
  { id: 6, name: "Dev Community", avatar: "💻", status: "online", lastMsg: "New PR merged 🎉", time: "5h", unread: 12, type: "group" },
];

export const INITIAL_MESSAGES: Record<number, Message[]> = {
  1: [
    { id: 1, from: "them", text: "Hi there! I'm Aria, your AI assistant for CoolantConnect. I can answer questions about our products and services. What would you like to know? 🚀", time: "10:00 AM", type: "text" },
  ],
  2: [
    { id: 1, from: "them", text: "Your support ticket #4821 has been resolved ✅", time: "9:45 AM", type: "text" },
    { id: 2, from: "them", text: "Is there anything else I can assist you with?", time: "9:46 AM", type: "text" },
  ],
  3: [
    { id: 1, from: "them", text: "Team meeting confirmed for 3PM today 📅", time: "9:00 AM", type: "text" },
    { id: 2, from: "me", text: "I'll be there!", time: "9:05 AM", type: "text" },
    { id: 3, from: "them", text: "Great! Don't forget to bring the Q3 report 📊", time: "9:06 AM", type: "text" },
  ],
  4: [{ id: 1, from: "them", text: "See you tomorrow! 👋", time: "Yesterday", type: "text" }],
  5: [{ id: 1, from: "them", text: "Thanks for the update!", time: "3h ago", type: "text" }],
  6: [
    { id: 1, from: "them", text: "New PR #234 has been merged into main 🎉", time: "5h ago", type: "text" },
    { id: 2, from: "them", text: "Build passing ✅ Deployment in progress...", time: "5h ago", type: "text" },
  ],
};
