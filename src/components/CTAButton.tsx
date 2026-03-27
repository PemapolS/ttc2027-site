import Link from 'next/link';
import { ReactNode } from 'react';

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function CTAButton({ href, children, className = '' }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center font-extrabold text-white transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
