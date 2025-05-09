import HeroSection from '@/components/home/HeroSection';
import CoffeeCollage from '@/components/home/CoffeeCollage';
import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />
      
      <section>
        <SectionTitle 
          title="A Symphony of Flavors"
          subtitle="Experience coffee like never before. Each cup tells a story, crafted with passion and precision from the world's finest beans."
        />
        <CoffeeCollage />
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/menu">Explore Our Full Menu</Link>
          </Button>
        </div>
      </section>

      <section className="text-center py-16 bg-card rounded-lg shadow-xl">
        <SectionTitle
          title="Your Daily Brew, Elevated"
          subtitle="Ready to indulge? Order your favorite coffee online or ask our expert baristas anything about your perfect cup."
        />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
            <Link href="/order">Order Online Now</Link>
          </Button>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/ask">Ask Our Barista</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
