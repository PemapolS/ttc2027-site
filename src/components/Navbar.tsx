'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import logoWhite from '../assets/icons/logo-white.png';

interface DropdownItem {
  href: string;
  label: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
}

interface Point {
  x: number;
  y: number;
}

function isPointInTriangle(p: Point, a: Point, b: Point, c: Point) {
  const sign = (p1: Point, p2: Point, p3: Point) => {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
  };

  const d1 = sign(p, a, b);
  const d2 = sign(p, b, c);
  const d3 = sign(p, c, a);

  const hasNeg = d1 < 0 || d2 < 0 || d3 < 0;
  const hasPos = d1 > 0 || d2 > 0 || d3 > 0;

  return !(hasNeg && hasPos);
}

function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevPointerRef = useRef<Point | null>(null);
  const pointerRef = useRef<Point | null>(null);
  const leavePointRef = useRef<Point | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const isMovingTowardSubmenu = () => {
    const menu = menuRef.current;
    const leavePoint = leavePointRef.current;
    const current = pointerRef.current;
    const previous = prevPointerRef.current;

    if (!menu || !leavePoint || !current || !previous) {
      return false;
    }

    const rect = menu.getBoundingClientRect();

    const insideMenuX = current.x >= rect.left - 4 && current.x <= rect.right + 4;
    const insideMenuY = current.y >= rect.top - 16 && current.y <= rect.bottom + 4;
    if (insideMenuX && insideMenuY) {
      return true;
    }

    const movingDownward = current.y >= previous.y - 2;
    if (!movingDownward) {
      return false;
    }

    const safeLeft: Point = { x: rect.left - 28, y: rect.top - 12 };
    const safeRight: Point = { x: rect.right + 28, y: rect.top - 12 };
    return isPointInTriangle(current, leavePoint, safeLeft, safeRight);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    const start = Date.now();

    const tick = () => {
      const dropdownHovered = dropdownRef.current?.matches(':hover') ?? false;
      const menuHovered = menuRef.current?.matches(':hover') ?? false;

      if (dropdownHovered || menuHovered) {
        clearCloseTimer();
        return;
      }

      const elapsed = Date.now() - start;
      if (isMovingTowardSubmenu() && elapsed < 420) {
        closeTimerRef.current = setTimeout(tick, 40);
        return;
      }

      setOpen(false);
    };

    closeTimerRef.current = setTimeout(tick, 80);
  };

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      prevPointerRef.current = pointerRef.current;
      pointerRef.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      clearCloseTimer();
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => {
        clearCloseTimer();
        leavePointRef.current = null;
        setOpen(true);
      }}
      onMouseLeave={() => {
        leavePointRef.current = pointerRef.current;
        scheduleClose();
      }}
    >
      <button
        className="flex items-center gap-1 px-2 py-2 text-xl font-semibold text-white/90 hover:text-white transition-colors"
        onClick={() => {
          clearCloseTimer();
          setOpen(!open);
        }}
        aria-expanded={open}
      >
        {label} v
      </button>
      {open && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 mt-1 w-56 bg-black/95 border border-white/15 rounded-md shadow-lg z-50"
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-base text-white/90 hover:bg-white/10 hover:text-white transition-colors first:rounded-t-md last:rounded-b-md"
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

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = '';
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

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
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-black">
      <div className="h-full w-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center px-4 sm:px-6 lg:px-8">
            <Image src={logoWhite} alt="Thaitails" className="h-auto w-[130px] lg:w-[150px]" priority />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
            <NavDropdown label={t.register} items={registerItems} />
            <NavDropdown label={t.venue} items={venueItems} />
            <NavDropdown label={t.events} items={eventsItems} />
            <Link href="/register/tickets" className="px-2 py-2 text-xl font-semibold text-white/90 hover:text-white">
              {t.openRegistration} v
            </Link>
            <button
              onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
              className="px-2 py-2 text-xl font-semibold text-white/90 hover:text-white"
              title={lang === 'th' ? t.switchToEnglishTitle : t.switchToThaiTitle}
            >
              {lang === 'th' ? t.switchToEnglish : t.switchToThai}
            </button>
          </div>

          {/* Right side */}
          <div className="flex h-full items-center md:w-[340px] lg:w-[380px]">
            <Link
              href="/register"
              className="hidden h-full w-full items-center justify-center bg-pink-500 px-5 text-2xl font-extrabold text-white hover:bg-pink-400 md:inline-flex lg:px-8 lg:text-3xl"
            >
              {t.registerHere}
            </Link>
            {/* Mobile menu button */}
            <button
              className="mr-4 md:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
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
        <div
          className="fixed inset-x-0 top-20 bottom-0 z-40 border-t border-white/10 bg-black/95 backdrop-blur-sm md:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="h-full overflow-y-auto overscroll-contain px-4 pb-4 pt-2 [touch-action:pan-y]">
            <div className="space-y-1">
            <div className="flex gap-2 pb-3">
              <button
                onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
                className="rounded bg-white/10 px-3 py-1.5 text-sm font-semibold text-white"
                title={lang === 'th' ? t.switchToEnglishTitle : t.switchToThaiTitle}
              >
                {lang === 'th' ? t.switchToEnglish : t.switchToThai}
              </button>
              <Link
                href="/register"
                className="rounded bg-pink-500 px-3 py-1.5 text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                {t.registerHere}
              </Link>
            </div>
            <p className="text-xs text-white/50 uppercase tracking-wider pt-2 pb-1">{t.register}</p>
            {registerItems.map(item => (
              <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm text-white/90 hover:bg-white/10 rounded-md" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
            <p className="text-xs text-white/50 uppercase tracking-wider pt-2 pb-1">{t.venue}</p>
            {venueItems.map(item => (
              <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm text-white/90 hover:bg-white/10 rounded-md" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
            <p className="text-xs text-white/50 uppercase tracking-wider pt-2 pb-1">{t.events}</p>
            {eventsItems.map(item => (
              <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm text-white/90 hover:bg-white/10 rounded-md" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
