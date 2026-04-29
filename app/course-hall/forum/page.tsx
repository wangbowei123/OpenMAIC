import Link from 'next/link';
import { ArrowLeft, Eye, MessageCircle, MessagesSquare, PlusCircle } from 'lucide-react';
import { SectionHeading } from '@/components/course-hall/section-heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { forumTopics } from '@/lib/course-hall-platform-data';

export default function ForumPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_8%_8%,#ffedd5_0%,transparent_28%),linear-gradient(180deg,#f8fafc_0%,#fff7ed_55%,#f8fafc_100%)] px-4 py-6 dark:bg-[radial-gradient(circle_at_8%_8%,#431407_0%,transparent_28%),linear-gradient(180deg,#020617_0%,#15100b_55%,#020617_100%)] md:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <Link href="/course-hall" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-white">
          <ArrowLeft className="size-4" />
          返回课程大厅
        </Link>

        <section className="flex flex-col gap-4 rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 md:p-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            icon={MessagesSquare}
            eyebrow="讨论社区"
            title="课程问答与主题研讨"
            desc="参考论坛中心设计，为课程学习提供主题讨论、答疑交流和多课程迁移经验沉淀页面。"
          />
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm text-white dark:bg-white dark:text-slate-950">
            <PlusCircle className="size-4" />
            发布讨论
          </div>
        </section>

        <section className="grid gap-4">
          {forumTopics.map((topic) => (
            <Link key={topic.id} href={`/course-hall/forum/${topic.id}`} className="group">
              <Card className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85">
                <CardContent className="p-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200">{topic.category}</Badge>
                        <span className="text-xs text-slate-500">{topic.time}</span>
                      </div>
                      <h2 className="mt-3 text-xl font-semibold text-slate-950 transition group-hover:text-amber-700 dark:text-slate-50 dark:group-hover:text-amber-300">{topic.title}</h2>
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">{topic.excerpt}</p>
                    </div>
                    <div className="flex gap-2 text-xs text-slate-500">
                      <span className="rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-800"><MessageCircle className="mr-1 inline size-3" />{topic.replies}回复</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-800"><Eye className="mr-1 inline size-3" />{topic.views}浏览</span>
                    </div>
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
