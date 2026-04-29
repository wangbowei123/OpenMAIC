import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  BookOpenCheck,
  ChevronRight,
  ClipboardCheck,
  Download,
  GraduationCap,
  Layers3,
  PlayCircle,
  UserRound,
} from 'lucide-react';
import { StatusPill } from '@/components/course-hall/status-pill';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { platformCourses, platformTeachers } from '@/lib/course-hall-platform-data';

export function generateStaticParams() {
  return platformCourses.map((course) => ({ courseId: course.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = platformCourses.find((item) => item.id === courseId);
  return { title: course ? `${course.title} - 课程详情` : '课程详情' };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = platformCourses.find((item) => item.id === courseId);

  if (!course) {
    notFound();
  }

  const teacher = platformTeachers.find((item) => item.id === course.teacherId);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_12%_8%,#dff6ff_0%,transparent_28%),linear-gradient(180deg,#f8fafc_0%,#eef8f3_55%,#f8fafc_100%)] px-4 py-6 dark:bg-[radial-gradient(circle_at_12%_8%,#082f49_0%,transparent_30%),linear-gradient(180deg,#020617_0%,#06151a_55%,#020617_100%)] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_330px]">
        <section className="space-y-6">
          <header className={`overflow-hidden rounded-[2rem] bg-gradient-to-br ${course.coverTone} p-6 text-white shadow-lg md:p-8`}>
            <Link href="/course-hall/courses" className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm transition hover:bg-white/25">
              <ArrowLeft className="size-4" />
              返回课程中心
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <Badge className="bg-white/20 text-white">{course.category}</Badge>
              <Badge className="bg-white/20 text-white">{course.credit} 学分</Badge>
              <Badge className="bg-white/20 text-white">{course.lessons} 个课时</Badge>
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">{course.title}</h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 md:text-base">{course.summary}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ['学习人数', `${course.students}人`, GraduationCap],
                ['课程课时', `${course.lessons}节`, PlayCircle],
                ['建设进度', `${course.progress}%`, BookOpenCheck],
              ].map(([label, value, Icon]) => {
                const IconComponent = Icon as typeof GraduationCap;
                return (
                  <div key={label as string} className="rounded-2xl bg-white/15 p-4 backdrop-blur">
                    <IconComponent className="size-5 text-white/80" />
                    <div className="mt-3 text-2xl font-semibold">{value as string}</div>
                    <div className="mt-1 text-xs text-white/70">{label as string}</div>
                  </div>
                );
              })}
            </div>
          </header>

          <Card className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers3 className="size-5 text-sky-600" />
                课程大纲与课时学习
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {course.outline.map((lesson, index) => (
                <Link
                  key={lesson.id}
                  href={`/course-hall/courses/${course.id}/lessons/${lesson.id}`}
                  className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-sky-900 dark:hover:bg-sky-950/25 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-sky-700 shadow-sm dark:bg-slate-900 dark:text-sky-300">
                      {index + 1}
                    </span>
                    <div>
                      <div className="font-semibold text-slate-950 dark:text-slate-50">{lesson.title}</div>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{lesson.desc}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span>{lesson.duration}</span>
                        <StatusPill status={lesson.status} />
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="size-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-sky-600" />
                </Link>
              ))}
            </CardContent>
          </Card>

          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="size-5 text-emerald-600" />
                  课件资料
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {['课程教学大纲', '章节知识点清单', '典型问答资料包'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm dark:bg-slate-950/60">
                    <span>{item}</span>
                    <StatusPill status="已开放" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardCheck className="size-5 text-amber-600" />
                  课程作业与测验
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {course.homework.map(([type, title, scale, status]) => (
                  <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/60">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs text-slate-500">{type}</span>
                      <StatusPill status={status} />
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-950 dark:text-slate-50">{title}</div>
                    <div className="mt-1 text-xs text-slate-500">{scale}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </section>

        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <Card className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <UserRound className="size-5 text-emerald-600" />
                讲师介绍
              </CardTitle>
            </CardHeader>
            <CardContent>
              {teacher && (
                <Link href={`/course-hall/teachers/${teacher.id}`} className="block rounded-2xl bg-slate-50 p-4 transition hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-md dark:bg-slate-950/60 dark:hover:bg-emerald-950/25">
                  <div className="text-lg font-semibold text-slate-950 dark:text-slate-50">{teacher.name}</div>
                  <div className="mt-1 text-sm text-slate-500">{teacher.title}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{teacher.intro}</p>
                </Link>
              )}
            </CardContent>
          </Card>

          <Card className="rounded-[1.5rem] border-slate-200 bg-slate-950 text-white shadow-sm dark:border-slate-800">
            <CardHeader>
              <CardTitle className="text-base">课程标签</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-slate-200">{tag}</span>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
}
