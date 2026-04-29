import Link from 'next/link';
import { ArrowLeft, Bell, BookOpenCheck, ClipboardCheck, GraduationCap, MessageSquareText } from 'lucide-react';
import { SectionHeading } from '@/components/course-hall/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { learningDashboard, platformCourses } from '@/lib/course-hall-platform-data';

const icons = [BookOpenCheck, ClipboardCheck, GraduationCap, MessageSquareText];

export default function LearnCenterPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_8%_8%,#dff6ff_0%,transparent_28%),linear-gradient(180deg,#f8fafc_0%,#eef8f3_55%,#f8fafc_100%)] px-4 py-6 dark:bg-[radial-gradient(circle_at_8%_8%,#082f49_0%,transparent_28%),linear-gradient(180deg,#020617_0%,#06151a_55%,#020617_100%)] md:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/course-hall" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-white">
            <ArrowLeft className="size-4" />
            返回课程大厅
          </Link>
          <Link href="/course-hall/notice" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm text-white shadow-sm transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950">
            <Bell className="size-4" />
            查看通知
          </Link>
        </div>

        <section className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 md:p-8">
          <SectionHeading
            icon={GraduationCap}
            eyebrow={learningDashboard.profile.semester}
            title="个人学习中心"
            desc="融合参考平台中的学习中心、我的课程、我的作业和我的考试设计，展示学习状态与待办任务。"
          />
        </section>

        <section className="grid gap-4 md:grid-cols-4">
          {learningDashboard.cards.map(([title, value, desc], index) => {
            const Icon = icons[index] ?? BookOpenCheck;
            return (
              <Card key={title} className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85">
                <CardContent className="p-5">
                  <Icon className="size-5 text-emerald-600" />
                  <div className="mt-3 text-2xl font-semibold text-slate-950 dark:text-slate-50">{value}</div>
                  <div className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">{title}</div>
                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle>在学课程</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {platformCourses.map((course) => (
                <Link key={course.id} href={`/course-hall/courses/${course.id}`} className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-emerald-900 dark:hover:bg-emerald-950/25">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-semibold text-slate-950 dark:text-slate-50">{course.title}</div>
                      <p className="mt-1 text-sm text-slate-500">{course.teacher} · {course.lessons} 个课时</p>
                    </div>
                    <div className="text-sm font-semibold text-emerald-600">{course.progress}%</div>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: `${course.progress}%` }} />
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-[1.5rem] border-slate-200 bg-slate-950 text-white shadow-sm dark:border-slate-800">
            <CardHeader>
              <CardTitle>学习时间线</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {learningDashboard.timeline.map(([time, task]) => (
                <div key={time} className="rounded-xl bg-white/10 p-4">
                  <div className="text-xs text-slate-400">{time}</div>
                  <div className="mt-2 text-sm font-medium">{task}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
