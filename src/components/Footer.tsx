'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons';
import logoWhite from '../assets/icons/logo-white.png';

const socialLinks = [
  { href: 'https://www.facebook.com/thaitails', label: 'Facebook', icon: faFacebookF },
  { href: 'https://twitter.com/thaitails', label: 'Twitter', icon: faTwitter },
  { href: 'https://discord.gg/haXx46kRNn', label: 'Discord', icon: faDiscord },
  { href: 'https://t.me/thaitailscon', label: 'Telegram', icon: faTelegram },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/90">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-6 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Thaitails home">
          <Image src={logoWhite} alt="Thaitails" className="h-auto w-[140px]" />
        </Link>

        <div className="flex items-center gap-3">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/85 transition-colors hover:border-white/50 hover:bg-white/10 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
