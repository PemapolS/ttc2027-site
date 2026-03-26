import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <PageLayout title="Registration">
      <div className="space-y-8 text-slate-200">
        <p>
          Your journey begins here. Registration, badge pickup, roster listings, and policy references are
          organized in this section.
        </p>

        <section className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Ticket Tiers (2026 reference)</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Traveler (Attendee): 1,090 THB</li>
            <li>Pathfinder (Sponsor): 2,890 THB</li>
            <li>Starchaser (Super Sponsor): 5,190 THB</li>
            <li>Starchaser (Super Sponsor): 5,190 THB</li>
ket Tiers (2026 reference)</h2>
 refere   refere   refere   refere   refere   refere   refere   refere   refexl refere   refxt refere   refere io refere   r>
 refere   referela reame="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/register/tickets" className="rounded border border-white/20 px-4 py-3 hover:bg-white/5">Tickets</Link>
            <Link href="/register/badge-pickup" className="rounded border border-white/20 px-4 py-3 hover:bg-white/5">Badge Pickup</Link>
            <Link href="/register/participant-roster" className="rounded border border-white/20 px-4 py-3 hover:bg-white/5">Participant Roster</Link>
            <Link href="/register/fursuit-roster" className="rounded border border-white/20 px-4 py-3 hover:bg-white/5">Fursuit Roster</Link>
            <Link href="/register/gallery" className="rounded border border-white/20 px-4 py-3 hover:bg-white/5">Gallery</Link>
            <Link href="/register/code-of-conduct" className="rounded border border-white/20 px-4 py-3 hover:bg-white/5">Code of Conduct</Link>
            <Link href="/register/terms-policy" className="rounded border border-white/20 px-4 py-3 hover:bg-white/5">Terms and Policy</Link>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
