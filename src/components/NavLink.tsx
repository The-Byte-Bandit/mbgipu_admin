// components/ui/NavLink.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { LinkProps } from 'next/link';

interface NavLinkProps extends Omit<LinkProps, 'className'> {
  className?: string | ((isActive: boolean) => string);
  activeClassName?: string;
  children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href || pathname?.startsWith(href as string);

    const finalClassName =
      typeof className === 'function'
        ? className(isActive)
        : cn(className, isActive && activeClassName);

    return (
      <Link
        ref={ref}
        href={href}
        className={finalClassName}
        {...props}
      >
        {props.children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };