'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import bgBack from '../assets/img/BG_BACK.png';
import bgMiddle from '../assets/img/BG_MIDDLE.png';
import bgFront from '../assets/img/BG_FRONT.png';
import binaryBreachColor from '../assets/icons/Binary_Breach_Color.png';

export default function Home() {
  const { t } = useI18n();

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
          className="object-cover"
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
              {/* <p className="text-3xl font-black uppercase tracking-wide lg:text-5xl">{t.heroMainDate}</p> */}
              {/* <p className="mt-2 text-xl font-bold leading-snug text-gray-200 lg:text-4xl">
                {t.heroVenue}
              </p> */}

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
    </div>
  );
}
