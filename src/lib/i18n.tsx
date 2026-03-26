'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en, { type TranslationMessages } from '@/locales/en';
import th from '@/locales/th';

export type Language = 'en' | 'th';

const STORAGE_KEY = 'ttc2027-lang';

export const translations: Record<Language, TranslationMessages> = {
  en,
  th,
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationMessages;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === 'en' || stored === 'th') {
      setLangState(stored);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
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
