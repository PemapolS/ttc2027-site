import React from 'react';

interface PageLayoutProps {
  title: string;
  children?: React.ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-amber-400 mb-8">{title}</h1>
        {children}
      </main>
    </div>
  );
}
