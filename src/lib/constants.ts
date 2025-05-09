import type { MenuItem } from '@/types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'espresso',
    name: 'Classic Espresso',
    description: 'A rich and aromatic shot of concentrated coffee, the heart of many beloved drinks.',
    price: 3.50,
    imageUrl: 'https://picsum.photos/seed/espresso/400/300',
    category: 'Coffee',
    aiHint: 'espresso coffee'
  },
  {
    id: 'cappuccino',
    name: 'Velvet Cappuccino',
    description: 'Perfectly balanced espresso, steamed milk, and a luxurious layer of foamed milk.',
    price: 4.50,
    imageUrl: 'https://picsum.photos/seed/cappuccino/400/300',
    category: 'Coffee',
    aiHint: 'cappuccino art'
  },
  {
    id: 'latte',
    name: 'Silky Latte',
    description: 'Smooth espresso blended with steamed milk, topped with a thin layer of foam. Customizable with flavors.',
    price: 4.75,
    imageUrl: 'https://picsum.photos/seed/latte/400/300',
    category: 'Coffee',
    aiHint: 'latte art'
  },
  {
    id: 'americano',
    name: 'Bold Americano',
    description: 'Espresso shots diluted with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.',
    price: 4.00,
    imageUrl: 'https://picsum.photos/seed/americano/400/300',
    category: 'Coffee',
    aiHint: 'americano coffee'
  },
  {
    id: 'mocha',
    name: 'Decadent Mocha',
    description: 'A delightful blend of espresso, steamed milk, and rich chocolate syrup, topped with whipped cream.',
    price: 5.25,
    imageUrl: 'https://picsum.photos/seed/mocha/400/300',
    category: 'Coffee',
    aiHint: 'mocha coffee'
  },
  {
    id: 'croissant',
    name: 'Buttery Croissant',
    description: 'Flaky, golden-brown pastry, perfect for pairing with your favorite coffee.',
    price: 3.00,
    imageUrl: 'https://picsum.photos/seed/croissant/400/300',
    category: 'Pastries',
    aiHint: 'croissant pastry'
  },
  {
    id: 'muffin',
    name: 'Blueberry Muffin',
    description: 'A soft and moist muffin bursting with fresh blueberries and a hint of lemon.',
    price: 3.25,
    imageUrl: 'https://picsum.photos/seed/muffin/400/300',
    category: 'Pastries',
    aiHint: 'blueberry muffin'
  },
  {
    id: 'herbal_tea',
    name: 'Soothing Herbal Tea',
    description: 'A calming blend of chamomile, lavender, and mint. Caffeine-free.',
    price: 3.75,
    imageUrl: 'https://picsum.photos/seed/herbaltea/400/300',
    category: 'Tea',
    aiHint: 'herbal tea'
  },
];
