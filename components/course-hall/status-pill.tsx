import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function StatusPill({ status }: { status: string }) {
  const color =
    status === '已开放' || status === '进行中'
      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200'
      : status === '建设中'
        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200'
        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300';

  return <Badge className={cn(color)}>{status}</Badge>;
}
