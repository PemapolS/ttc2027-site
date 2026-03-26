'use client';

import { useI18n } from '@/lib/i18n';

export default function ComingSoon() {
  const { t } = useI18n();
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="text-6xl mb-6">🐾</div>
      <h2 className="text-2xl font-bold text-amber-400 mb-3">{t.comingSoon}</h2>
      <p className="text-indigo-200 max-w-md">{t.comingSoonDesc}</p>
    </div>
  );
}
