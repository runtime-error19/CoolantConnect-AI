import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Flame, Shield, Clock, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/landing/contact-form';


function NavBar() {
  return (
    <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h2 className="text-xl font-bold text-primary">CoolantConnect AI</h2>
        <ul className="hidden md:flex items-center space-x-6">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
          <li><Link href="#products" className="hover:text-primary transition-colors">Products</Link></li>
          <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
          <li><Link href="/chat" className="hover:text-primary transition-colors">Chat</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  return (
    <section className="relative text-center text-white py-24 md:py-32 lg:py-40 px-4 h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
            src={heroImage?.imageUrl || "https://picsum.photos/seed/hero-bg/1200/800"}
            alt={heroImage?.description || "Engine bay"}
            fill
            className="object-cover animate-slow-zoom"
            data-ai-hint={heroImage?.imageHint || "engine automotive"}
            priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>Keep Your Engine Cool. Drive Without Worry.</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '0.4s' }}>High-performance radiator coolant for long-lasting engine protection</p>
            <div className="mt-8 flex justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '0.6s' }}>
                <Button asChild size="lg">
                  <Link href="#contact">Get Quote</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="#contact">Contact Us</Link>
                </Button>
            </div>
        </div>
    </section>
  );
}

const featuresData = [
    { icon: <Flame className="h-8 w-8 text-primary" />, text: "Prevents Overheating" },
    { icon: <Clock className="h-8 w-8 text-primary" />, text: "Long-lasting Protection" },
    { icon: <Shield className="h-8 w-8 text-primary" />, text: "Rust & Corrosion Protection" }
];

function Features() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>Why Our Coolant?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="bg-card p-8 flex flex-col items-center justify-center opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: `${0.2 * (index + 1)}s` }}>
              {feature.icon}
              <p className="mt-4 text-lg font-semibold">{feature.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-4 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>About Us</h2>
        <p className="text-muted-foreground text-lg opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
          We provide high-quality radiator coolant and automotive cooling solutions
          trusted by mechanics, garages, and fleet operators across Kerala.
        </p>
      </div>
    </section>
  );
}

const productsData = [
    { title: "Radiator Coolant", description: "Premium coolant for cars & bikes" },
    { title: "Engine Cooling Solutions", description: "Complete cooling system protection" },
    { title: "Bulk Supply", description: "Best deals for garages & businesses" }
];

function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsData.map((product, index) => (
            <Card key={index} className="bg-card p-8 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: `${0.2 * (index + 1)}s` }}>
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const whyChooseUsData = [
    "High Quality", "Affordable Price", "Trusted by Mechanics", "Fast Delivery"
];

function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>Why Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {whyChooseUsData.map((item, index) => (
            <Card key={index} className="bg-card p-6 flex items-center justify-center gap-2 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: `${0.1 * (index + 1)}s` }}>
                <Check className="h-5 w-5 text-green-500" />
                <span className="font-semibold">{item}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonialsData = [
    "\"Best coolant in Kerala!\"",
    "\"Reliable and affordable.\""
];

function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="bg-card p-8 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: `${0.2 * (index + 1)}s` }}>
              <p className="text-lg italic text-muted-foreground">{testimonial}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqData = [
    { question: "How often should coolant be replaced?", answer: "Every 2 years or as recommended." },
    { question: "Is it safe for all vehicles?", answer: "Yes, compatible with most engines." }
];

function Faq() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>FAQs</h2>
        <div className="space-y-6 text-left">
            {faqData.map((faq, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: `${0.2 * (index + 1)}s` }}>
                    <p className="font-bold text-lg">{faq.question}</p>
                    <p className="text-muted-foreground mt-2">{faq.answer}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
    return (
        <footer className="bg-background border-t border-border">
            <div className="container mx-auto text-center py-6">
                <p className="text-muted-foreground">&copy; 2026 CoolantConnect AI | Radiator Coolant Supplier</p>
            </div>
        </footer>
    );
}


export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <Features />
      <About />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
      <ContactForm />
      <Footer />
    </main>
  );
}
