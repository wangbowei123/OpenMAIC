import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function PortalCard({
  href,
  icon: Icon,
  title,
  desc,
  meta,
  tone = 'from-sky-500 to-cyan-400',
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  meta: string;
  tone?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85"
    >
      <div className={cn('absolute -right-10 -top-10 size-28 rounded-full bg-gradient-to-br opacity-25 blur-xl transition group-hover:scale-125', tone)} />
      <div className="relative flex items-start justify-between gap-3">
        <span className={cn('rounded-xl bg-gradient-to-br p-3 text-white shadow-sm transition group-hover:scale-110', tone)}>
          <Icon className="size-5" />
        </span>
        <ArrowRight className="size-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-700 dark:group-hover:text-slate-100" />
      </div>
      <div className="relative mt-5 text-lg font-semibold text-slate-950 dark:text-slate-50">{title}</div>
      <p className="relative mt-2 min-h-[48px] text-sm leading-6 text-slate-600 dark:text-slate-300">{desc}</p>
      <div className="relative mt-4 rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-300">
        {meta}
      </div>
    </Link>
  );
}
