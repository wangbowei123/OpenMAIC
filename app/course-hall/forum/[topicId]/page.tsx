import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Eye, MessageCircle, MessagesSquare, Send } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { forumTopics } from '@/lib/course-hall-platform-data';

export function generateStaticParams() {
  return forumTopics.map((topic) => ({ topicId: topic.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ topicId: string }> }) {
  const { topicId } = await params;
  const topic = forumTopics.find((item) => item.id === topicId);
  return { title: topic ? `${topic.title} - 讨论详情` : '讨论详情' };
}

export default async function ForumDetailPage({ params }: { params: Promise<{ topicId: string }> }) {
  const { topicId } = await params;
  const topic = forumTopics.find((item) => item.id === topicId);

  if (!topic) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_8%_8%,#ffedd5_0%,transparent_28%),linear-gradient(180deg,#f8fafc_0%,#fff7ed_55%,#f8fafc_100%)] px-4 py-6 dark:bg-[radial-gradient(circle_at_8%_8%,#431407_0%,transparent_28%),linear-gradient(180deg,#020617_0%,#15100b_55%,#020617_100%)] md:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_300px]">
        <section className="space-y-6">
          <Link href="/course-hall/forum" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-white">
            <ArrowLeft className="size-4" />
            返回讨论社区
          </Link>

          <article className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/85 md:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200">{topic.category}</Badge>
              <span className="text-xs text-slate-500">{topic.time}</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 md:text-4xl">{topic.title}</h1>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
              <span className="rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-800"><MessageCircle className="mr-1 inline size-3" />{topic.replies} 回复</span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-800"><Eye className="mr-1 inline size-3" />{topic.views} 浏览</span>
            </div>
            <div className="mt-6 space-y-4">
              {topic.body.map((paragraph, index) => (
                <p key={paragraph} className="rounded-2xl bg-slate-50 p-5 text-sm leading-8 text-slate-700 dark:bg-slate-950/60 dark:text-slate-300">
                  {index + 1}. {paragraph}
                </p>
              ))}
            </div>
          </article>

          <Card className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="size-5 text-amber-600" />
                回复编辑区
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm leading-7 text-slate-500 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-400">
                此处为讨论回复输入框占位，可扩展为发帖、评论、点赞和教师置顶回复功能。
              </div>
            </CardContent>
          </Card>
        </section>

        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <Card className="rounded-[1.5rem] border-slate-200 bg-slate-950 text-white shadow-sm dark:border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <MessagesSquare className="size-5 text-amber-200" />
                相关讨论
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {forumTopics.filter((item) => item.id !== topic.id).map((item) => (
                <Link key={item.id} href={`/course-hall/forum/${item.id}`} className="block rounded-xl bg-white/10 p-3 text-sm transition hover:bg-white/15">
                  {item.title}
                </Link>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
}
