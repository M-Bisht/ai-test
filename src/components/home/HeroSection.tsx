import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative text-center py-20 md:py-32 rounded-lg overflow-hidden shadow-2xl">
      <Image
        src="https://picsum.photos/seed/geometricpattern/1200/800"
        alt="Abstract geometric background pattern"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="absolute inset-0 z-0 opacity-30"
        data-ai-hint="geometric pattern"
      />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-playfair font-extrabold text-white mb-6 leading-tight">
          Welcome to <span className="text-primary">CoffeeZilla</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto">
          Experience the art of premium coffee. Every sip, a masterpiece.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
            <Link href="/menu">View Our Menu</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary px-8 py-3 text-lg">
            <Link href="/order">Order Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
