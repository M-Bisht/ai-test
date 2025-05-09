'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { UrlObject } from 'url';

type NavLinkProps = {
  href: string | UrlObject;
  children: React.ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (typeof href === 'object' && pathname === href.pathname);

  return (
    <Link
      href={href}
      className={cn(
        'text-lg font-medium transition-colors hover:text-primary',
        isActive ? 'text-primary font-semibold' : 'text-foreground/80',
        className
      )}
    >
      {children}
    </Link>
  );
}
