import Link from 'next/link';
import { ArrowLeft, Search, UserRound, UsersRound } from 'lucide-react';
import { SectionHeading } from '@/components/course-hall/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { platformTeachers } from '@/lib/course-hall-platform-data';

export default function TeacherCenterPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_8%_8%,#dcfce7_0%,transparent_28%),linear-gradient(180deg,#f8fafc_0%,#eef8f3_55%,#f8fafc_100%)] px-4 py-6 dark:bg-[radial-gradient(circle_at_8%_8%,#052e1b_0%,transparent_28%),linear-gradient(180deg,#020617_0%,#06151a_55%,#020617_100%)] md:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <Link href="/course-hall" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-white">
          <ArrowLeft className="size-4" />
          返回课程大厅
        </Link>
        <section className="flex flex-col gap-4 rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 md:p-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            icon={UsersRound}
            eyebrow="教师中心"
            title="课程团队与试点教师"
            desc="借鉴教师中心页面，展示课程负责人、试点课程教师、推广课程教师及其承担的教学模块。"
          />
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950">
            <Search className="size-4" />
            教师搜索
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {platformTeachers.map((teacher, index) => (
            <Link key={teacher.id} href={`/course-hall/teachers/${teacher.id}`} className="group">
              <Card className="h-full rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-500 text-xl font-semibold text-white shadow-sm">
                      {teacher.name.slice(0, 1)}
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-slate-950 dark:text-slate-50">{teacher.name}</div>
                      <div className="mt-1 text-sm text-slate-500">{teacher.title}</div>
                    </div>
                  </div>
                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-600 dark:text-slate-300">{teacher.intro}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {teacher.expertise.map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">{item}</span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl bg-slate-50 p-3 text-xs text-slate-500 dark:bg-slate-950/60">
                    <UserRound className="mr-1 inline size-3.5" />
                    团队序号 {index + 1} · 点击查看教师主页
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
