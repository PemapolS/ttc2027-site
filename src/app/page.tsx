import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faFacebookF,
  faTwitter,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import bgBack from '../assets/img/BG_BACK.png';
import binaryBreachColor from '../assets/icons/Binary_Breach_Color.png';

const socialLinks = [
  { href: 'https://www.facebook.com/thaitails', icon: faFacebookF, label: 'Facebook' },
  { href: 'https://x.com/thaitails', icon: faTwitter, label: 'Twitter' },
  { href: 'https://discord.gg/thaitails', icon: faDiscord, label: 'Discord' },
  { href: 'https://t.me/thaitailscon', icon: faTelegram, label: 'Telegram' },
];

export default function Home() {
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
        {/* <Image
          src={bgMiddle}
          alt=""
          priority
          fill
          sizes="100vw"
          className="object-cover"
        /> */}
        {/* <Image
          src={bgFront}
          alt=""
          priority
          fill
          sizes="100vw"
          className="object-cover"
        /> */}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />

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
              <p className="mb-1 text-xl font-semibold text-lime-300 lg:text-2xl">THAITAILS : BINARY BREACH</p>
              <h1 className="text-4xl font-extrabold leading-tight lg:text-6xl">
                THAITAILS <span className="text-lime-300">2027</span>
              </h1>
              <p className="mt-2 inline-flex bg-pink-500 px-6 py-2 text-3xl font-extrabold uppercase tracking-wide text-white lg:text-3xl">
                Coming Soon
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-14 w-14 lg:h-20 lg:w-20 items-center justify-center rounded-full border border-white/25 bg-black/70 text-white transition-colors hover:border-pink-400 hover:text-pink-400"
                  >
                    <FontAwesomeIcon icon={social.icon} className="h-8 w-8 lg:h-10 lg:w-10" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
