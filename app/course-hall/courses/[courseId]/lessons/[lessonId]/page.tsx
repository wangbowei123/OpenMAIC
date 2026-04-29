import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen, CheckCircle2, MessageCircleQuestion, PlayCircle, Timer } from 'lucide-react';
import { StatusPill } from '@/components/course-hall/status-pill';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { platformCourses } from '@/lib/course-hall-platform-data';

export function generateStaticParams() {
  return platformCourses.flatMap((course) =>
    course.outline.map((lesson) => ({
      courseId: course.id,
      lessonId: lesson.id,
    })),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ courseId: string; lessonId: string }> }) {
  const { courseId, lessonId } = await params;
  const course = platformCourses.find((item) => item.id === courseId);
  const lesson = course?.outline.find((item) => item.id === lessonId);
  return { title: lesson ? `${lesson.title} - 课时学习` : '课时学习' };
}

export default async function LessonPage({ params }: { params: Promise<{ courseId: string; lessonId: string }> }) {
  const { courseId, lessonId } = await params;
  const course = platformCourses.find((item) => item.id === courseId);
  const lesson = course?.outline.find((item) => item.id === lessonId);

  if (!course || !lesson) {
    notFound();
  }

  const lessonIndex = course.outline.findIndex((item) => item.id === lesson.id);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_340px]">
        <section className="space-y-6">
          <Link href={`/course-hall/courses/${course.id}`} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-slate-200 transition hover:bg-white/15">
            <ArrowLeft className="size-4" />
            返回课程详情
          </Link>

          <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl">
            <div className={`relative flex min-h-[360px] items-center justify-center bg-gradient-to-br ${course.coverTone}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.24),transparent_28%)]" />
              <div className="relative text-center">
                <span className="inline-flex size-20 items-center justify-center rounded-full bg-white/20 backdrop-blur transition hover:scale-110">
                  <PlayCircle className="size-10" />
                </span>
                <h1 className="mt-6 text-3xl font-semibold md:text-5xl">{lesson.title}</h1>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85">{lesson.desc}</p>
              </div>
            </div>
            <div className="grid gap-3 bg-slate-900 p-5 md:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-4">
                <Timer className="size-5 text-sky-200" />
                <div className="mt-3 text-xl font-semibold">{lesson.duration}</div>
                <div className="mt-1 text-xs text-slate-400">建议学习时长</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <BookOpen className="size-5 text-emerald-200" />
                <div className="mt-3 text-xl font-semibold">第 {lessonIndex + 1} 课时</div>
                <div className="mt-1 text-xs text-slate-400">{course.title}</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <CheckCircle2 className="size-5 text-amber-200" />
                <div className="mt-3">
                  <StatusPill status={lesson.status} />
                </div>
                <div className="mt-2 text-xs text-slate-400">学习资源状态</div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-[1.5rem] border-white/10 bg-white/10 text-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="size-5 text-sky-200" />
                  本课学习说明
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-7 text-slate-300">
                <p>该页面模拟在线教育平台中的视频学习页，用于展示课时标题、课程归属、学习时长、资源状态和学习任务。</p>
                <p>当前不接入真实视频服务，后续可与本地课件、课堂生成内容或外部视频资源进行关联。</p>
              </CardContent>
            </Card>

            <Card className="rounded-[1.5rem] border-white/10 bg-white/10 text-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircleQuestion className="size-5 text-emerald-200" />
                  课时互动
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {['课前导学问题', '课中暂停思考', '课后答疑入口'].map((item) => (
                  <div key={item} className="rounded-xl bg-white/5 p-3 text-sm text-slate-200 transition hover:bg-white/10">{item}</div>
                ))}
              </CardContent>
            </Card>
          </section>
        </section>

        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <Card className="rounded-[1.5rem] border-white/10 bg-white/10 text-white">
            <CardHeader>
              <CardTitle className="text-base">课程目录</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {course.outline.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/course-hall/courses/${course.id}/lessons/${item.id}`}
                  className={`block rounded-xl border p-3 text-sm transition hover:-translate-y-0.5 ${
                    item.id === lesson.id ? 'border-sky-300 bg-sky-400/15' : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="text-xs text-slate-400">课时 {index + 1}</div>
                  <div className="mt-1 font-semibold">{item.title}</div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
}
