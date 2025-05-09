'use client';

import Link from 'next/link';
import NavLink from './NavLink';
import { Coffee, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-3xl font-playfair font-bold text-primary hover:text-primary/90 transition-colors">
          <Coffee className="h-8 w-8" />
          <span>CoffeeZilla</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 items-center" onClick={() => setIsMenuOpen(false)}>
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/menu">Menu</NavLink></li>
            <li><NavLink href="/order">Order Online</NavLink></li>
            <li><NavLink href="/ask">Ask Barista</NavLink></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card shadow-lg py-4 px-4">
          <ul className="flex flex-col items-center space-y-4" onClick={() => setIsMenuOpen(false)}>
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/menu">Menu</NavLink></li>
            <li><NavLink href="/order">Order Online</NavLink></li>
            <li><NavLink href="/ask">Ask Barista</NavLink></li>
          </ul>
        </div>
      )}
    </header>
  );
}
