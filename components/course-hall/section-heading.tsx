import type { LucideIcon } from 'lucide-react';

export function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  desc,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-500 shadow-sm dark:bg-slate-900/80 dark:text-slate-400">
        <Icon className="size-3.5 text-emerald-600" />
        {eyebrow}
      </div>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 md:text-5xl">{title}</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">{desc}</p>
    </div>
  );
}
