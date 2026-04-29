import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  Lightbulb,
  MessageSquareText,
  Target,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const chapters = [
  {
    id: 'logic',
    label: '第1章',
    title: '命题逻辑',
    status: '已开放',
    duration: '建议学习 2 学时',
    progress: 92,
    summary: '从命题、联结词和真值表出发，建立形式化表达与逻辑推理的基础能力。',
    objectives: ['理解命题与复合命题的构成方式', '掌握真值表、等值演算和蕴含关系', '能够使用推理规则完成简单证明'],
    keywords: ['命题', '真值表', '等值式', '蕴含式', '推理规则'],
    paragraphs: [
      '命题逻辑研究能够判断真假的陈述句。一个命题只有真、假两种取值，这种二值特征使它适合被计算机处理，也使复杂推理能够转化为清晰的符号运算。',
      '在离散数学中，常用否定、合取、析取、蕴含、等价等联结词构造复合命题。复合命题的真假不取决于句子的自然语言表达，而取决于组成命题的真值以及联结词的语义规则。',
      '真值表是判断复合命题性质的基本工具。通过列出所有可能的真值组合，可以判断一个命题公式是否为重言式、矛盾式或可满足式。对于较短公式，真值表直观可靠；对于较复杂公式，则需要进一步使用等值演算简化。',
      '等值演算强调在不改变命题真值的前提下改写公式。常用规律包括双重否定律、德摩根律、分配律、吸收律和蕴含等值式。熟练使用这些规律，可以把自然语言问题转化为可验证的形式证明。',
    ],
    example: '若命题 p 表示“完成章节学习”，q 表示“通过章节测验”，则 p -> q 可以表达“如果完成章节学习，那么可以通过章节测验”。分析该命题是否成立，需要结合学习记录和测验结果进行判断。',
    quiz: ['判断 p -> q 与非 p 或 q 是否等值。', '写出“并非所有学生都通过测验”的命题逻辑表达。', '使用推理规则证明一个简单的假言三段论。'],
    discussion: '自然语言中的“如果……那么……”是否总能直接翻译为逻辑蕴含？请结合生活中的例子讨论。',
  },
  {
    id: 'sets-relations',
    label: '第2章',
    title: '集合与关系',
    status: '已开放',
    duration: '建议学习 3 学时',
    progress: 88,
    summary: '围绕集合运算、笛卡尔积、二元关系和关系性质，理解离散对象之间的结构联系。',
    objectives: ['掌握集合的基本运算与证明方法', '理解关系的自反、对称、传递等性质', '能够判断等价关系、偏序关系并绘制哈asse图'],
    keywords: ['集合运算', '笛卡尔积', '等价关系', '偏序关系', '闭包'],
    paragraphs: [
      '集合是离散数学中描述对象范围的基本语言。一个集合由明确的元素构成，元素是否属于集合必须能够被判断。通过并、交、差、补等运算，可以描述不同对象集合之间的组合关系。',
      '关系用于刻画两个集合元素之间是否存在某种联系。若 A 和 B 是集合，则 A 到 B 的一个二元关系可以看作笛卡尔积 A x B 的子集。用集合方式表示关系，有助于把“相邻”“整除”“先修”等实际关系转化为数学对象。',
      '关系的性质是本章的核心。自反性关注每个元素是否与自身相关，对称性关注关系是否可以双向成立，传递性关注关系能否通过中间元素延伸。判断这些性质时，既可以用有序对集合，也可以用关系矩阵或关系图。',
      '等价关系和偏序关系是两类重要关系。等价关系可以把集合划分为若干等价类，偏序关系则能够描述层级、包含、先后等结构。课程先修关系、知识点依赖关系和任务流程都可以用偏序思想进行建模。',
    ],
    example: '在学生集合中定义“选修同一课程”为关系。该关系通常具有自反性和对称性，但是否传递需要结合具体课程选择情况判断。',
    quiz: ['给定关系矩阵，判断关系是否具有自反性。', '说明等价关系为什么会形成集合划分。', '为课程先修关系画出一个简单偏序图。'],
    discussion: '课程知识点之间的依赖关系更接近等价关系还是偏序关系？为什么？',
  },
  {
    id: 'graph',
    label: '第3章',
    title: '图论基础',
    status: '已开放',
    duration: '建议学习 3 学时',
    progress: 84,
    summary: '学习图的基本概念、路径、连通性、欧拉图和哈密顿图，建立网络结构分析能力。',
    objectives: ['理解图、顶点、边、度数等基本概念', '能够判断路径、回路和连通分量', '区分欧拉图与哈密顿图的判定思路'],
    keywords: ['图', '路径', '连通性', '欧拉图', '哈密顿图'],
    paragraphs: [
      '图论用顶点和边描述对象及其连接关系，是离散数学中最贴近计算机应用的内容之一。社交网络、课程先修关系、交通路线、知识图谱都可以抽象为图结构。',
      '图的基本分析通常从度数开始。无向图中，一个顶点的度表示与它相连的边数；有向图中还需要区分入度和出度。度数序列能够帮助我们快速判断图结构是否可能存在，并分析节点的重要程度。',
      '路径和连通性用于描述图中顶点之间能否到达。若任意两个顶点之间都存在路径，则图是连通的。对于有向图，还需要考虑强连通和弱连通，这些概念常用于网络可靠性、页面链接分析和任务依赖分析。',
      '欧拉图关注“能否一次性经过每条边”，哈密顿图关注“能否一次性经过每个顶点”。二者表面相似，但研究对象不同。欧拉图通常有明确的度数判定条件，而哈密顿图的判定更复杂，常需要结合充分条件或构造方法。',
    ],
    example: '校园快递路线规划更接近欧拉问题，因为重点是每条道路是否被经过；旅行打卡路线更接近哈密顿问题，因为重点是每个地点是否被访问。',
    quiz: ['判断一个无向图是否连通。', '根据顶点度数判断是否可能存在欧拉回路。', '比较欧拉问题和哈密顿问题的建模差异。'],
    discussion: '如果把课程知识点看作图中的顶点，边应该表示什么关系？这种图可以帮助学习者解决什么问题？',
  },
  {
    id: 'tree',
    label: '第4章',
    title: '树与生成树',
    status: '建设中',
    duration: '建议学习 2 学时',
    progress: 67,
    summary: '从无环连通图出发，理解树的性质、生成树以及最小生成树的实际应用。',
    objectives: ['掌握树的定义和基本性质', '理解生成树与图连通性的关系', '了解最小生成树在网络建设中的应用'],
    keywords: ['树', '叶子节点', '生成树', '最小生成树', '权值'],
    paragraphs: [
      '树是一类特殊的图，它既连通又不含回路。由于结构简洁、层次清楚，树广泛用于文件目录、组织结构、表达式分析、决策过程和搜索算法。',
      '一棵含有 n 个顶点的树恰好有 n-1 条边。这个性质常用于判断一个图是否可能为树，也能帮助我们理解树在保持连通的同时为什么不包含多余路径。',
      '生成树是从连通图中选取部分边形成的一棵树，它保留所有顶点并保持连通。一个连通图通常可以有多棵生成树，不同生成树对应不同的连接方案。',
      '当边带有权值时，最小生成树用于寻找总代价最小的连接方案。通信网络铺设、道路建设、电路布线等问题，都可以通过最小生成树思想进行建模和求解。',
    ],
    example: '若要连接多个教学楼并尽量减少网线铺设成本，可以把教学楼看作顶点、可铺设线路看作带权边，再寻找最小生成树。',
    quiz: ['说明树为什么一定不存在回路。', '证明含 n 个顶点的树有 n-1 条边。', '描述最小生成树适合解决哪类优化问题。'],
    discussion: '最小生成树追求整体成本最低，它是否一定能保证任意两个点之间的路径最短？',
  },
  {
    id: 'counting',
    label: '第5章',
    title: '组合计数',
    status: '建设中',
    duration: '建议学习 3 学时',
    progress: 61,
    summary: '学习排列组合、抽屉原理、容斥原理和递推关系，提升离散对象计数能力。',
    objectives: ['区分排列与组合的适用场景', '理解容斥原理处理重叠计数的方式', '能够建立简单递推关系描述计数过程'],
    keywords: ['排列', '组合', '抽屉原理', '容斥原理', '递推关系'],
    paragraphs: [
      '组合计数研究“有多少种可能”。它不一定要求列出所有结果，而是通过结构分析得到数量。密码设计、测试用例生成、概率计算和算法复杂度分析都离不开计数思想。',
      '排列强调顺序，组合不强调顺序。判断一个问题使用排列还是组合，关键是看交换对象位置后结果是否发生变化。若位置变化产生新的结果，通常使用排列；若只是选出对象集合，则使用组合。',
      '容斥原理用于处理多个条件之间存在重叠的计数问题。直接相加会重复计算交集，因此需要加减交替修正。它体现了离散数学中“先放宽条件，再逐步校正”的典型思维。',
      '递推关系通过前后项之间的联系描述数量变化。许多算法问题都可以转化为递推形式，例如斐波那契数列、汉诺塔问题、动态规划状态转移等。',
    ],
    example: '统计至少选修一门实践课的学生人数时，如果直接把各实践课人数相加，会重复计算选修多门课程的学生，需要使用容斥原理修正。',
    quiz: ['判断一个问题应使用排列还是组合。', '用容斥原理计算至少满足一个条件的对象数量。', '为简单台阶问题建立递推关系。'],
    discussion: '为什么很多算法设计问题最终会转化为递推关系或状态转移？',
  },
  {
    id: 'algebra',
    label: '第6章',
    title: '代数结构',
    status: '待开放',
    duration: '建议学习 2 学时',
    progress: 44,
    summary: '理解运算封闭性、半群、幺半群、群等概念，为抽象结构和编码理论打基础。',
    objectives: ['理解代数系统与二元运算', '能够判断封闭性、结合律、单位元和逆元', '认识群结构在计算机科学中的基础作用'],
    keywords: ['代数系统', '封闭性', '单位元', '逆元', '群'],
    paragraphs: [
      '代数结构关注集合及其上的运算。与普通计算不同，代数结构更关心运算是否满足某些性质，例如封闭性、结合律、交换律、单位元和逆元。',
      '若一个集合上的二元运算对集合封闭，并满足结合律，就可以形成半群；如果进一步存在单位元，则形成幺半群；如果每个元素还存在逆元，则可能构成群。',
      '群是重要的抽象结构，它能描述对称、变换和可逆操作。在密码学、编码理论、图像处理、自动机理论等方向中，群论思想都有基础作用。',
      '学习代数结构时，不能只记定义，更要学会按条件逐项验证。对于一个给定集合和运算，需要依次判断封闭性、结合律、单位元和逆元是否成立。',
    ],
    example: '整数集合在加法下构成群，因为加法封闭、满足结合律，0 是单位元，每个整数 a 都有加法逆元 -a。',
    quiz: ['判断给定集合在某个运算下是否封闭。', '寻找单位元和逆元。', '说明群结构为什么要求每个元素都有逆元。'],
    discussion: '代数结构看起来抽象，它和密码学、编码理论之间可能有什么联系？',
  },
];

function getStatusClass(status: string) {
  if (status === '已开放') {
    return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200';
  }
  if (status === '建设中') {
    return 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200';
  }
  return 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300';
}

export function generateStaticParams() {
  return chapters.map((chapter) => ({ chapterId: chapter.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ chapterId: string }> }) {
  const { chapterId } = await params;
  const chapter = chapters.find((item) => item.id === chapterId);
  return {
    title: chapter ? `${chapter.label} ${chapter.title} - 课程大厅` : '章节详情 - 课程大厅',
  };
}

export default async function ChapterDetailPage({ params }: { params: Promise<{ chapterId: string }> }) {
  const { chapterId } = await params;
  const chapterIndex = chapters.findIndex((item) => item.id === chapterId);
  const chapter = chapters[chapterIndex];

  if (!chapter) {
    notFound();
  }

  const previous = chapters[chapterIndex - 1];
  const next = chapters[chapterIndex + 1];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_8%_10%,#dff6ff_0%,transparent_28%),radial-gradient(circle_at_90%_4%,#dcfce7_0%,transparent_24%),linear-gradient(180deg,#f8fafc_0%,#eef8f3_52%,#f8fafc_100%)] px-4 py-6 text-slate-950 dark:bg-[radial-gradient(circle_at_8%_10%,#082f49_0%,transparent_30%),radial-gradient(circle_at_90%_4%,#052e1b_0%,transparent_26%),linear-gradient(180deg,#020617_0%,#06151a_55%,#020617_100%)] dark:text-slate-50 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1fr_320px]">
        <section className="space-y-6">
          <header className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
            <div className="relative p-6 md:p-8">
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-900/40" />
              <div className="absolute bottom-0 left-10 h-24 w-72 rounded-full bg-sky-200/50 blur-3xl dark:bg-sky-900/35" />
              <div className="relative">
                <Link
                  href="/course-hall"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:text-slate-950 dark:border-slate-800 dark:bg-slate-950/75 dark:text-slate-300 dark:hover:text-white"
                >
                  <ArrowLeft className="size-4" />
                  返回课程大厅
                </Link>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <Badge className="bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200">{chapter.label}</Badge>
                  <Badge className={getStatusClass(chapter.status)}>{chapter.status}</Badge>
                  <Badge variant="outline">{chapter.duration}</Badge>
                </div>
                <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">{chapter.title}</h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
                  {chapter.summary}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ['学习进度', `${chapter.progress}%`, BookOpenCheck],
                    ['重点概念', `${chapter.keywords.length} 个`, Brain],
                    ['检测任务', `${chapter.quiz.length} 题`, ClipboardCheck],
                  ].map(([label, value, Icon]) => {
                    const IconComponent = Icon as typeof BookOpenCheck;
                    return (
                      <div key={label as string} className="rounded-2xl bg-white/80 p-4 shadow-sm dark:bg-slate-950/70">
                        <IconComponent className="size-5 text-emerald-600 dark:text-emerald-300" />
                        <div className="mt-3 text-2xl font-semibold">{value as string}</div>
                        <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{label as string}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </header>

          <Card className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="size-5 text-emerald-600" />
                学习目标
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-3">
              {chapter.objectives.map((objective, index) => (
                <div key={objective} className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-emerald-900 dark:hover:bg-emerald-950/25">
                  <span className="flex size-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200">
                    {index + 1}
                  </span>
                  <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{objective}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <article className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="border-b border-slate-100 bg-slate-50 px-5 py-4 dark:border-slate-800 dark:bg-slate-900/70">
              <div className="flex items-center gap-2 text-base font-semibold">
                <GraduationCap className="size-5 text-sky-600" />
                在线教材正文
              </div>
            </div>
            <div className="space-y-4 p-5 md:p-7">
              {chapter.paragraphs.map((paragraph, index) => (
                <p
                  key={`${chapter.id}-${index}`}
                  className="rounded-2xl border border-slate-100 bg-slate-50/75 p-5 text-[15px] leading-8 text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/75 dark:border-slate-800 dark:bg-slate-900/55 dark:text-slate-300 dark:hover:border-sky-900 dark:hover:bg-sky-950/25"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <Card className="rounded-[1.5rem] border-emerald-200 bg-emerald-50/85 shadow-sm dark:border-emerald-900 dark:bg-emerald-950/25">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-950 dark:text-emerald-100">
                  <Lightbulb className="size-5" />
                  教材例题
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-8 text-emerald-950/85 dark:text-emerald-100/85">{chapter.example}</p>
              </CardContent>
            </Card>

            <Card className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquareText className="size-5 text-amber-600" />
                  讨论提示
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-8 text-slate-700 dark:text-slate-300">{chapter.discussion}</p>
              </CardContent>
            </Card>
          </section>

          <Card className="rounded-[1.5rem] border-slate-200 bg-slate-950 text-white shadow-sm dark:border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardCheck className="size-5 text-sky-200" />
                章节自测
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-3">
              {chapter.quiz.map((item, index) => (
                <div key={item} className="rounded-xl bg-white/10 p-4 transition hover:-translate-y-1 hover:bg-white/15">
                  <CheckCircle2 className="size-5 text-emerald-200" />
                  <div className="mt-3 text-xs text-slate-400">题目 {index + 1}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-100">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <nav className="grid gap-3 sm:grid-cols-2">
            {previous ? (
              <Link
                href={`/course-hall/chapters/${previous.id}`}
                className="group rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ChevronLeft className="size-4 transition group-hover:-translate-x-1" />
                  上一章
                </div>
                <div className="mt-2 font-semibold">{previous.label} {previous.title}</div>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/course-hall/chapters/${next.id}`}
                className="group rounded-2xl border border-slate-200 bg-white/85 p-4 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="flex items-center justify-end gap-2 text-xs text-slate-500">
                  下一章
                  <ChevronRight className="size-4 transition group-hover:translate-x-1" />
                </div>
                <div className="mt-2 font-semibold">{next.label} {next.title}</div>
              </Link>
            )}
          </nav>
        </section>

        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <Card className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="text-base">章节目录</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {chapters.map((item) => {
                const active = item.id === chapter.id;
                return (
                  <Link
                    key={item.id}
                    href={`/course-hall/chapters/${item.id}`}
                    className={cn(
                      'block rounded-xl border p-3 transition hover:-translate-y-0.5 hover:shadow-sm',
                      active
                        ? 'border-sky-300 bg-sky-50 text-sky-950 dark:border-sky-800 dark:bg-sky-950/35 dark:text-sky-50'
                        : 'border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300',
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs text-slate-500 dark:text-slate-400">{item.label}</span>
                      <Badge className={getStatusClass(item.status)}>{item.status}</Badge>
                    </div>
                    <div className="mt-2 text-sm font-semibold">{item.title}</div>
                  </Link>
                );
              })}
            </CardContent>
          </Card>

          <Card className="rounded-[1.5rem] border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="text-base">重点概念</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {chapter.keywords.map((keyword) => (
                <span key={keyword} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {keyword}
                </span>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
}
