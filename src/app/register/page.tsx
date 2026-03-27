'use client';

import ComingSoon from '@/components/ComingSoon';
import PageLayout from '@/components/PageLayout';
import { useI18n } from '@/lib/i18n';

export default function RegisterPage() {
  const { t } = useI18n();
  return (
    <PageLayout title={t.register}>
      <ComingSoon />
    </PageLayout>
  );
}
