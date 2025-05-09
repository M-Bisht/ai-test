import Image from 'next/image';
import type { MenuItem } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

type CoffeeMenuItemCardProps = {
  item: MenuItem;
};

export default function CoffeeMenuItemCard({ item }: CoffeeMenuItemCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full group hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative h-60 w-full">
          <Image
            src={item.imageUrl}
            alt={item.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={item.aiHint || item.name.toLowerCase()}
          />
        </div>
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <CardTitle className="text-2xl font-playfair text-primary mb-2">{item.name}</CardTitle>
        <CardDescription className="text-foreground/80 text-sm leading-relaxed">
          {item.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4">
        <p className="text-xl font-semibold text-primary">${item.price.toFixed(2)}</p>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
          <Link href={`/order?item=${item.id}`}>
            <ShoppingCart className="mr-2 h-4 w-4" /> Order
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
