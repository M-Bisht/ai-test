export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'Coffee' | 'Pastries' | 'Tea';
  aiHint?: string;
};
