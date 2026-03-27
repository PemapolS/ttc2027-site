'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import bgBack from '../assets/img/BG_BACK.png';
import bgMiddle from '../assets/img/BG_MIDDLE.png';
import bgFront from '../assets/img/BG_FRONT.png';
import centaraVenue from '../assets/img/Centara-Life-Conference-Center.jpg';
import binaryBreachColor from '../assets/icons/Binary_Breach_Color.png';
import { useEffect, useState } from 'react';

export default function Home() {
  const { t } = useI18n();
    const [middleReady, setMiddleReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMiddleReady(true);
    }, 220);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white">
      <main className="relative h-[calc(100vh-5rem)] min-h-[640px] overflow-hidden">
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

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/35 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] items-end px-4 pb-10 sm:px-6 md:pb-14 lg:px-8">
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
              <div className="rounded-xl bg-black/45 p-4 backdrop-blur-[2px] shadow-[0_8px_30px_rgba(0,0,0,0.45)] md:p-6">
              <p className="mb-1 text-xl font-semibold text-lime-300 [text-shadow:0_2px_10px_rgba(0,0,0,0.65)] lg:text-2xl">{t.heroThemeName}</p>
              <h1 className="text-4xl font-extrabold leading-tight [text-shadow:0_4px_16px_rgba(0,0,0,0.75)] lg:text-6xl">
                {t.heroMainTitlePrefix} <span className="text-lime-300">{t.heroMainTitleYear}</span>
              </h1>
              <p className="text-3xl font-black uppercase tracking-wide">{t.heroMainDate}</p>
              <p className="mt-2 text-xl font-bold leading-snug text-gray-200 lg:text-2xl">
                {t.heroVenue}
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-end sm:gap-6">
                <Link
                  href="https://my.thaitails.net/"
                  className="inline-flex w-full max-w-[320px] shrink-0 items-center justify-center bg-pink-500 px-8 text-center text-3xl font-extrabold leading-[1.05] text-white hover:bg-pink-400 h-[80px] sm:w-[360px] lg:w-[420px]"
                >
                  {t.registerHere}
                </Link>
                <Link
                  href="https://my.thaitails.net/login"
                  className="inline-flex w-full max-w-[240px] shrink-0 items-center justify-center bg-black px-8 text-3xl font-extrabold leading-none text-white hover:bg-neutral-900 h-[80px] sm:w-[260px] lg:w-[300px]"
                >
                  {t.login}
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="relative overflow-hidden border-t border-white/10 bg-black py-14 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'radial-gradient(circle at 14% 12%, rgba(236,72,153,0.26), transparent 34%), radial-gradient(circle at 88% 18%, rgba(163,230,53,0.14), transparent 30%), linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(0,0,0,0.45))',
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1140px] px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-300/95">{t.venueSectionLabel}</p>
          <h2 className="mt-2 text-4xl font-extrabold uppercase leading-[1.03] text-white sm:text-5xl">{t.venueSectionTitle}</h2>
          <p className="mt-2 text-xl font-bold uppercase leading-none text-white/80 sm:text-2xl">{t.venueSectionLocation}</p>

          <div className="mt-7 rounded-2xl border border-white/15 bg-white/[0.06] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-[2px] sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_332px] lg:items-end">
              <div>
              <Image
                src={centaraVenue}
                alt={t.venueSectionTitle}
                sizes="(max-width: 1024px) 100vw, 780px"
                className="h-[220px] w-full rounded-xl border border-white/20 object-cover sm:h-[260px] lg:h-[290px]"
              />
              <p className="mt-5 max-w-[820px] text-lg leading-relaxed text-white/90 sm:text-xl">
                {t.venueSectionDescription}
              </p>
              </div>

              <aside className="w-full rounded-xl border border-white/20 bg-black/55 p-4 text-white shadow-[0_8px_30px_rgba(0,0,0,0.45)] sm:p-5">
                <h3 className="text-2xl font-extrabold uppercase leading-tight">{t.venueSectionBookingTitle}</h3>
                <p className="mt-2 text-xl font-semibold italic leading-tight text-white/80">{t.venueSectionBookingDate}</p>
                <Link
                  href="/venue/hotel-reservation"
                  className="mt-5 inline-flex h-14 w-full items-center justify-center rounded-md bg-pink-500 px-5 text-xl font-extrabold uppercase text-white transition-colors hover:bg-pink-400"
                >
                  {t.venueSectionReadMore}
                </Link>
              </aside>
            </div>
          </div>

          <div className="mt-8 border-t border-white/15 pt-8">
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              <article>
                <h3 className="text-2xl font-extrabold uppercase leading-tight text-lime-300">{t.venueSectionNearbyTitle}</h3>
                <p className="mt-3 text-lg leading-relaxed text-white/90 sm:text-xl">{t.venueSectionNearbyBody}</p>
              </article>

              <article>
                <h3 className="text-2xl font-extrabold uppercase leading-tight text-lime-300">{t.venueSectionShuttleTitle}</h3>
                <p className="mt-3 text-lg leading-relaxed text-white/90 sm:text-xl">{t.venueSectionShuttleBody}</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
