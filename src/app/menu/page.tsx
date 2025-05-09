import SectionTitle from '@/components/shared/SectionTitle';
import CoffeeMenuItemCard from '@/components/menu/CoffeeMenuItemCard';
import { MENU_ITEMS } from '@/lib/constants';
import type { MenuItem } from '@/types';

export default function MenuPage() {
  const coffeeItems = MENU_ITEMS.filter(item => item.category === 'Coffee');
  const pastryItems = MENU_ITEMS.filter(item => item.category === 'Pastries');
  const teaItems = MENU_ITEMS.filter(item => item.category === 'Tea');

  const renderMenuSection = (title: string, items: MenuItem[]) => {
    if (items.length === 0) return null;
    return (
      <section className="mb-16">
        <h3 className="text-3xl font-playfair font-semibold text-primary/90 mb-8 text-center md:text-left">{title}</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <CoffeeMenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="py-8">
      <SectionTitle 
        title="Our Exquisite Menu" 
        subtitle="Indulge in our carefully curated selection of premium coffees, delightful pastries, and refreshing teas. Each item is crafted with the finest ingredients and utmost care."
      />
      
      {renderMenuSection('Signature Coffees', coffeeItems)}
      {renderMenuSection('Delicious Pastries', pastryItems)}
      {renderMenuSection('Artisanal Teas', teaItems)}
    </div>
  );
}
