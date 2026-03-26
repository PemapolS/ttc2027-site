'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'th';

export const translations = {
  en: {
    siteName: 'TTC2027',
    register: 'Register',
    tickets: 'Tickets',
    badgePickup: 'Badge Pickup',
    participantRoster: 'Participant Roster',
    fursuitRoster: 'Fursuit Roster',
    gallery: 'Gallery',
    codeOfConduct: 'Code of Conduct',
    termsPolicy: 'Terms & Policy',
    venue: 'Venue',
    hotelReservation: 'Hotel Reservation',
    shuttleBusService: 'Shuttle Bus Service',
    fursuitLounge: 'Fursuit Lounge',
    events: 'Events',
    theme: 'Theme',
    schedule: 'Schedule',
    guestOfHonor: 'Guest of Honor',
    panels: 'Panels',
    dealersDen: "Dealers Den",
    talentShow: 'Talent Show',
    djParty: 'DJ Party',
    afterParty: 'After Party',
    heroTagline: 'Where Furries Meet in the Land of Smiles',
    heroDate: 'August 2027 • Bangkok, Thailand',
    heroButton: 'Register Now',
    comingSoon: 'Coming Soon',
    comingSoonDesc: 'This page is under construction. Check back soon!',
    home: 'Home',
  },
  th: {
    siteName: 'TTC2027',
    register: 'ลงทะเบียน',
    tickets: 'บัตร',
    badgePickup: 'รับบัตร',
    participantRoster: 'รายชื่อผู้เข้าร่วม',
    fursuitRoster: 'รายชื่อเฟอร์สูท',
    gallery: 'แกลเลอรี่',
    codeOfConduct: 'ข้อปฏิบัติ',
    termsPolicy: 'ข้อกำหนดและนโยบาย',
    venue: 'สถานที่',
    hotelReservation: 'จองโรงแรม',
    shuttleBusService: 'บริการรถรับส่ง',
    fursuitLounge: 'เฟอร์สูทเลานจ์',
    events: 'กิจกรรม',
    theme: 'ธีม',
    schedule: 'กำหนดการ',
    guestOfHonor: 'แขกพิเศษ',
    panels: 'แพนเนล',
    dealersDen: 'ดีลเลอร์เดน',
    talentShow: 'การแสดงความสามารถ',
    djParty: 'ดีเจปาร์ตี้',
    afterParty: 'อาฟเตอร์ปาร์ตี้',
    heroTagline: 'ที่ที่เฟอร์รี่พบกันในดินแดนแห่งรอยยิ้ม',
    heroDate: 'สิงหาคม 2027 • กรุงเทพมหานคร ประเทศไทย',
    heroButton: 'ลงทะเบียนเลย',
    comingSoon: 'เร็วๆ นี้',
    comingSoonDesc: 'หน้านี้กำลังอยู่ระหว่างการพัฒนา กรุณากลับมาตรวจสอบในภายหลัง!',
    home: 'หน้าแรก',
  },
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('ttc2027-lang') as Language | null;
    if (stored === 'en' || stored === 'th') {
      setLangState(stored);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('ttc2027-lang', newLang);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
