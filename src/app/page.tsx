'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { useI18n } from '@/lib/i18n';

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-800/20 via-transparent to-transparent" />
          {/* Decorative circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 text-center px-4 py-16 max-w-4xl mx-auto">
            {/* Paw print decorations */}
            <div className="flex justify-center gap-2 mb-6 text-amber-400/60 text-2xl">
              <span>🐾</span><span>🌸</span><span>🐾</span>
            </div>

            {/* Convention name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
              <span className="text-white">Thaitails</span>
              <br />
              <span className="text-amber-400">Convention</span>
              <br />
              <span className="text-indigo-300">2027</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-indigo-200 mb-6 font-light italic">
              {t.heroTagline}
            </p>

            {/* Date */}
            <div className="inline-flex items-center gap-2 bg-indigo-800/50 border border-indigo-600/50 rounded-full px-6 py-2 mb-10">
              <span className="text-amber-400">📅</span>
              <span className="text-indigo-100 font-medium">{t.heroDate}</span>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-indigo-950 font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-amber-400/25"
              >
                {t.heroButton}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 bg-indigo-800/50 hover:bg-indigo-700/50 border border-indigo-600 text-indigo-100 hover:text-white font-semibold text-lg px-8 py-4 rounded-full transition-all"
              >
                {t.events}
              </Link>
            </div>
          </div>
        </section>

        {/* Quick links section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { href: '/register', label: t.register, icon: '🎫', desc: 'Register for TTC2027' },
              { href: '/venue', label: t.venue, icon: '🏨', desc: 'Venue & accommodations' },
              { href: '/events', label: t.events, icon: '🎉', desc: 'Events & activities' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col items-center text-center p-8 bg-indigo-900/30 hover:bg-indigo-800/40 border border-indigo-800/50 hover:border-indigo-600 rounded-2xl transition-all"
              >
                <span className="text-4xl mb-4">{item.icon}</span>
                <h3 className="text-xl font-bold text-amber-400 mb-2 group-hover:text-amber-300">{item.label}</h3>
                <p className="text-indigo-300 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
