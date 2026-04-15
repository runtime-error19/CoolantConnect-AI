'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useState } from 'react';

export function ContactForm() {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
        toast({
            variant: "destructive",
            title: "Missing fields",
            description: "Please fill out all fields before submitting.",
        });
        return;
    }
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log({ name, email, message });
    
    toast({
      title: "Inquiry Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });

    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <div className="space-y-4 mb-8 text-muted-foreground">
            <p className="flex items-center justify-center gap-2"><Phone className="h-5 w-5 text-primary" /> +91 XXXXXXXX</p>
            <p className="flex items-center justify-center gap-2"><Mail className="h-5 w-5 text-primary" /> your@email.com</p>
            <p className="flex items-center justify-center gap-2"><MapPin className="h-5 w-5 text-primary" /> Kerala, India</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
            <Input 
              type="text" 
              placeholder="Your Name" 
              className="bg-background" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
            />
            <Input 
              type="email" 
              placeholder="Your Email" 
              className="bg-background" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
            <Textarea 
              placeholder="Your Message" 
              className="bg-background" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required
            />
            <Button size="lg" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </Button>
        </form>
      </div>
    </section>
  );
}
