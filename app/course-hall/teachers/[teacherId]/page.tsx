import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Award, BookOpenCheck, GraduationCap, UserRound } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { platformCourses, platformTeachers } from '@/lib/course-hall-platform-data';

export function generateStaticParams() {
  return platformTeachers.map((teacher) => ({ teacherId: teacher.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ teacherId: string }> }) {
  const { teacherId } = await params;
  const teacher = platformTeachers.find((item) => item.id === teacherId);
  return { title: teacher ? `${teacher.name} - 教师主页` : '教师主页' };
}

export default async function TeacherDetailPage({ params }: { params: Promise<{ teacherId: string }> }) {
  const { teacherId } = await params;
  const teacher = platformTeachers.find((item) => item.id === teacherId);

  if (!teacher) {
    notFound();
  }

  const courses = platformCourses.filter((course) => teacher.courses.includes(course.title));

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_8%_8%,#dcfce7_0%,transparent_28%),linear-gradient(180deg,#f8fafc_0%,#eef8f3_55%,#f8fafc_100%)] px-4 py-6 dark:bg-[radial-gradient(circle_at_8%_8%,#052e1b_0%,transparent_28%),linear-gradient(180deg,#020617_0%,#06151a_55%,#020617_100%)] md:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <Link href="/course-hall/teachers" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-white">
          <ArrowLeft className="size-4" />
          返回教师中心
        </Link>

        <section className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85">
          <div className="grid gap-6 p-6 md:grid-cols-[220px_1fr] md:p-8">
            <div className="flex size-40 items-center justify-center rounded-[2rem] bg-gradient-to-br from-emerald-500 to-sky-500 text-5xl font-semibold text-white shadow-xl">
              {teacher.name.slice(0, 1)}
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                <UserRound className="size-3.5" />
                教师主页
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 md:text-5xl">{teacher.name}</h1>
              <div className="mt-2 text-lg text-slate-500 dark:text-slate-400">{teacher.title}</div>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">{teacher.intro}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {teacher.stats.map((stat) => (
            <Card key={stat} className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
              <CardContent className="p-5">
                <Award className="size-5 text-emerald-600" />
                <div className="mt-3 text-xl font-semibold text-slate-950 dark:text-slate-50">{stat}</div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpenCheck className="size-5 text-sky-600" />
                研究与教学方向
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {teacher.expertise.map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">{item}</span>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="size-5 text-emerald-600" />
                承担课程
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {courses.map((course) => (
                <Link key={course.id} href={`/course-hall/courses/${course.id}`} className="block rounded-xl bg-slate-50 p-3 transition hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-sm dark:bg-slate-950/60 dark:hover:bg-emerald-950/25">
                  <div className="font-semibold text-slate-950 dark:text-slate-50">{course.title}</div>
                  <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{course.summary}</p>
                </Link>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
