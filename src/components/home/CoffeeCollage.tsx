import Image from 'next/image';
import { cn } from '@/lib/utils';

const collageItems = [
  { src: 'https://picsum.photos/seed/coffee1/600/400', alt: 'Espresso shot', hint: 'espresso shot', className: 'md:col-span-2' },
  { src: 'https://picsum.photos/seed/coffee2/400/600', alt: 'Latte art', hint: 'latte art', className: 'md:row-span-2' },
  { src: 'https://picsum.photos/seed/coffee3/400/300', alt: 'Pour over coffee', hint: 'pour over' },
  { src: 'https://picsum.photos/seed/coffee4/400/300', alt: 'Cold brew coffee', hint: 'cold brew' },
  { src: 'https://picsum.photos/seed/coffee5/600/400', alt: 'Cityscape or Coffee beans', hint: 'cityscape beans', className: 'col-span-2 md:col-span-3' },
];

export default function CoffeeCollage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
      {collageItems.map((item, index) => (
        <div key={index} className={cn("relative rounded-lg overflow-hidden shadow-lg group", item.className)}>
          <Image
            src={item.src}
            alt={item.alt}
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            data-ai-hint={item.hint}
            quality={75}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>
      ))}
    </div>
  );
}

