"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faFacebookF,
  faTwitter,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { useI18n } from '@/lib/i18n';
import bgMiddle from '../assets/img/BG_MIDDLE.png';
import bgBack from '../assets/img/BG_BACK.png';
import binaryBreachColor from '../assets/icons/Binary_Breach_Color.png';

const socialLinks = [
  { href: 'https://www.facebook.com/thaitails', icon: faFacebookF, label: 'Facebook' },
  { href: 'https://x.com/thaitails', icon: faTwitter, label: 'Twitter' },
  { href: 'https://discord.gg/haXx46kRNn', icon: faDiscord, label: 'Discord' },
  { href: 'https://t.me/thaitailscon', icon: faTelegram, label: 'Telegram' },
];

export default function Home() {
  const { lang, setLang } = useI18n();
  const [middleReady, setMiddleReady] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMiddleReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="relative min-h-screen overflow-hidden">
        <Image
          src={bgBack}
          alt=""
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />
        <Image
          src={bgMiddle}
          alt=""
          priority
          fill
          sizes="100vw"
          className={`object-cover will-change-transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${middleReady ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-[1.45] blur-md'}`}
        />
        {/* <Image
          src={bgFront}
          alt=""
          priority
          fill
          sizes="100vw"
          className="object-cover"
        /> */}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/60" />

        <div className="absolute right-4 top-4 z-20 inline-flex items-center rounded-full border border-white/20 bg-black/60 p-1 backdrop-blur-sm sm:right-6 sm:top-6">
          <button
            onClick={() => setLang('th')}
            className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${lang === 'th' ? 'bg-pink-500 text-white' : 'text-white/80 hover:text-white'}`}
            aria-label="Switch to Thai"
          >
            TH
          </button>
          <button
            onClick={() => setLang('en')}
            className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${lang === 'en' ? 'bg-pink-500 text-white' : 'text-white/80 hover:text-white'}`}
            aria-label="Switch to English"
          >
            EN
          </button>
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-end px-4 pb-10 sm:px-6 md:pb-14 lg:px-8">
          <div className="grid w-full items-end gap-8 md:grid-cols-[1.2fr_1fr]">
            <div className="max-w-[760px]">
              <Image
                src={binaryBreachColor}
                alt="Binary Breach"
                priority
                className="h-auto w-full"
              />
            </div>

            <div className="pb-2 text-left md:pb-6">
              <div className="inline-block rounded-2xl border border-white/10 bg-black/45 px-5 py-4 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.45)] md:px-6 md:py-5">
              <p className="mb-1 text-xl font-semibold text-lime-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.65)] lg:text-2xl">{lang === 'th' ? 'ไทยเทลส์ : ไบนารี่ บรีช' : 'THAITAILS : BINARY BREACH'}</p>
              <p className="text-4xl font-extrabold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] lg:text-6xl">
                {lang === 'th' ? 'ไทยเทลส์' : 'THAITAILS'} <span className="text-lime-300">2027</span>
              </p>
              <p className="mt-3 inline-flex bg-pink-500 px-6 py-2 text-2xl font-extrabold uppercase tracking-wide text-white shadow-[0_6px_20px_rgba(0,0,0,0.35)] lg:text-3xl">
                {lang === 'th' ? 'ข้อมูลเพิ่มเติมเร็ว ๆ นี้' : 'Coming Soon'}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-14 w-14 lg:h-20 lg:w-20 items-center justify-center rounded-full border border-white/25 bg-black/80 text-white transition-colors hover:border-pink-400 hover:text-pink-400"
                  >
                    <FontAwesomeIcon icon={social.icon} className="h-8 w-8 lg:h-10 lg:w-10" />
                  </Link>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
