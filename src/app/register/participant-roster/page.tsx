'use client';
import PageLayout from '@/components/PageLayout';
import ComingSoon from '@/components/ComingSoon';
import { useI18n } from '@/lib/i18n';
export default function ParticipantRosterPage() {
  const { t } = useI18n();
  return <PageLayout title={t.participantRoster}><ComingSoon /></PageLayout>;
}
