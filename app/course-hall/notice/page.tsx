import Link from 'next/link';
import { ArrowLeft, Bell, ClipboardList, FileText, Megaphone } from 'lucide-react';
import { SectionHeading } from '@/components/course-hall/section-heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { noticeItems, platformCourses } from '@/lib/course-hall-platform-data';

export default function NoticeCenterPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_8%_8%,#fef3c7_0%,transparent_28%),linear-gradient(180deg,#f8fafc_0%,#fff7ed_55%,#f8fafc_100%)] px-4 py-6 dark:bg-[radial-gradient(circle_at_8%_8%,#451a03_0%,transparent_28%),linear-gradient(180deg,#020617_0%,#17120a_55%,#020617_100%)] md:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <Link href="/course-hall/learn" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-white">
          <ArrowLeft className="size-4" />
          返回学习中心
        </Link>

        <section className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 md:p-8">
          <SectionHeading
            icon={Bell}
            eyebrow="通知中心"
            title="消息、作业与考试提醒"
            desc="参考通知中心页面，将课程公告、作业提醒、考试安排和资源更新统一展示。"
          />
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            ['课程消息', '3条', Megaphone],
            ['我的作业', '4项', ClipboardList],
            ['我的考试', '3场', FileText],
          ].map(([title, value, Icon]) => {
            const IconComponent = Icon as typeof Megaphone;
            return (
              <Card key={title as string} className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
                <CardContent className="p-5">
                  <IconComponent className="size-5 text-amber-600" />
                  <div className="mt-3 text-2xl font-semibold text-slate-950 dark:text-slate-50">{value as string}</div>
                  <div className="mt-1 text-sm text-slate-500">{title as string}</div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle>通知列表</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {noticeItems.map((notice) => (
                <div key={notice.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200">{notice.type}</Badge>
                    <span className="text-xs text-slate-500">{notice.date}</span>
                  </div>
                  <div className="mt-3 font-semibold text-slate-950 dark:text-slate-50">{notice.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{notice.content}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-[1.5rem] border-slate-200 bg-slate-950 text-white shadow-sm dark:border-slate-800">
            <CardHeader>
              <CardTitle>作业与考试入口</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {platformCourses.flatMap((course) => course.homework.map((item) => [course.title, ...item])).slice(0, 5).map(([courseName, type, title, scale, status]) => (
                <div key={`${courseName}-${title}`} className="rounded-xl bg-white/10 p-3 text-sm">
                  <div className="text-xs text-slate-400">{courseName} · {type}</div>
                  <div className="mt-2 font-medium">{title}</div>
                  <div className="mt-1 text-xs text-slate-400">{scale} · {status}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
