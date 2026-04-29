import Link from 'next/link';
import { ArrowLeft, BookMarked, Clock3, GraduationCap, Layers3, Search } from 'lucide-react';
import { SectionHeading } from '@/components/course-hall/section-heading';
import { StatusPill } from '@/components/course-hall/status-pill';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { platformCourses } from '@/lib/course-hall-platform-data';

export default function CourseCenterPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_10%_8%,#dff6ff_0%,transparent_28%),linear-gradient(180deg,#f8fafc_0%,#eef8f3_55%,#f8fafc_100%)] px-4 py-6 dark:bg-[radial-gradient(circle_at_10%_8%,#082f49_0%,transparent_30%),linear-gradient(180deg,#020617_0%,#06151a_55%,#020617_100%)] md:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <Link
          href="/course-hall"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-white"
        >
          <ArrowLeft className="size-4" />
          返回课程大厅
        </Link>

        <section className="flex flex-col gap-4 rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 md:p-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            icon={BookMarked}
            eyebrow="课程中心"
            title="课程资源与选修入口"
            desc="参考在线教育平台的课程中心设计，集中展示课程封面、课程简介、教师、课时、作业与学习进度。"
          />
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950">
            <Search className="size-4" />
            课程搜索与分类筛选
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {platformCourses.map((course) => (
            <Link key={course.id} href={`/course-hall/courses/${course.id}`} className="group">
              <Card className="h-full overflow-hidden rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85">
                <div className={`h-28 bg-gradient-to-br ${course.coverTone} p-5 text-white`}>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-white/20 text-white">{course.category}</Badge>
                    <GraduationCap className="size-6 opacity-80" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">{course.title}</h2>
                </div>
                <CardContent className="space-y-4 p-5">
                  <p className="min-h-[72px] text-sm leading-6 text-slate-600 dark:text-slate-300">{course.summary}</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-950/70">
                      <div className="font-semibold">{course.lessons}节</div>
                      <div className="mt-1 text-slate-500">课时</div>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-950/70">
                      <div className="font-semibold">{course.credit}分</div>
                      <div className="mt-1 text-slate-500">学分</div>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3 dark:bg-slate-950/70">
                      <div className="font-semibold">{course.students}人</div>
                      <div className="mt-1 text-slate-500">学习</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                      <span>建设进度</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div className="h-full rounded-full bg-emerald-500 transition-all group-hover:bg-sky-500" style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm dark:border-slate-800">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Clock3 className="size-4" />
                      {course.teacher}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium text-sky-700 dark:text-sky-300">
                      <Layers3 className="size-4" />
                      查看详情
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {['课程介绍', '课程大纲', '课件资料', '课程作业', '在线考试', '学习评价'].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
              <StatusPill status="功能展示" />
              <div className="mt-3 font-semibold text-slate-950 dark:text-slate-50">{item}</div>
              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">作为课程详情页中的独立功能块展示。</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
