import ComingSoon from '@/components/ComingSoon';
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <PageLayout title={t.venue}><ComingSoon /></PageLayout>;
  );
}
