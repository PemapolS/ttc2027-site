'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

interface DropdownItem {
  href: string;
  label: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
}

function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-indigo-100 hover:text-white hover:bg-indigo-700 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-52 bg-indigo-900 border border-indigo-700 rounded-md shadow-lg z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-700 hover:text-white transition-colors first:rounded-t-md last:rounded-b-md"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const registerItems = [
    { href: '/register/tickets', label: t.tickets },
    { href: '/register/badge-pickup', label: t.badgePickup },
    { href: '/register/participant-roster', label: t.participantRoster },
    { href: '/register/fursuit-roster', label: t.fursuitRoster },
    { href: '/register/gallery', label: t.gallery },
    { href: '/register/code-of-conduct', label: t.codeOfConduct },
    { href: '/register/terms-policy', label: t.termsPolicy },
  ];

  const venueItems = [
    { href: '/venue/hotel-reservation', label: t.hotelReservation },
    { href: '/venue/shuttle-bus-service', label: t.shuttleBusService },
    { href: '/venue/fursuit-lounge', label: t.fursuitLounge },
  ];

  const eventsItems = [
    { href: '/events/theme', label: t.theme },
    { href: '/events/schedule', label: t.schedule },
    { href: '/events/guest-of-honor', label: t.guestOfHonor },
    { href: '/events/panels', label: t.panels },
    { href: '/events/dealers-den', label: t.dealersDen },
    { href: '/events/talent-show', label: t.talentShow },
    { href: '/events/dj-party', label: t.djParty },
    { href: '/events/after-party', label: t.afterParty },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-indigo-900 shadow-md border-b border-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-amber-400 tracking-wide">TTC2027</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavDropdown label={t.register} items={registerItems} />
            <NavDropdown label={t.venue} items={venueItems} />
            <NavDropdown label={t.events} items={eventsItems} />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-1 bg-indigo-800 rounded-full px-2 py-1">
              <button
                onClick={() => setLang('th')}
                className={`text-sm px-2 py-0.5 rounded-full transition-colors ${lang === 'th' ? 'bg-amber-400 text-indigo-900 font-bold' : 'text-indigo-200 hover:text-white'}`}
                title="ภาษาไทย"
              >
                🇹🇭
              </button>
              <button
                onClick={() => setLang('en')}
                className={`text-sm px-2 py-0.5 rounded-full transition-colors ${lang === 'en' ? 'bg-amber-400 text-indigo-900 font-bold' : 'text-indigo-200 hover:text-white'}`}
                title="English"
              >
                🇺🇸
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-indigo-900 border-t border-indigo-700 px-4 pb-4">
          <div className="pt-2 space-y-1">
            <p className="text-xs text-indigo-400 uppercase tracking-wider pt-2 pb-1">{t.register}</p>
            {registerItems.map(item => (
              <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm text-indigo-100 hover:bg-indigo-700 rounded-md" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
            <p className="text-xs text-indigo-400 uppercase tracking-wider pt-2 pb-1">{t.venue}</p>
            {venueItems.map(item => (
              <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm text-indigo-100 hover:bg-indigo-700 rounded-md" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
            <p className="text-xs text-indigo-400 uppercase tracking-wider pt-2 pb-1">{t.events}</p>
            {eventsItems.map(item => (
              <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm text-indigo-100 hover:bg-indigo-700 rounded-md" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
