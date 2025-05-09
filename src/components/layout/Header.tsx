import Link from 'next/link';
import NavLink from './NavLink';
import { Coffee } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-3xl font-playfair font-bold text-primary hover:text-primary/90 transition-colors">
          <Coffee className="h-8 w-8" />
          <span>CoffeeZilla</span>
        </Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/menu">Menu</NavLink></li>
            <li><NavLink href="/order">Order Online</NavLink></li>
            <li><NavLink href="/ask">Ask Barista</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
