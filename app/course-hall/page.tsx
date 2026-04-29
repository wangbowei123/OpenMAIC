'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Bell,
  BookMarked,
  BookOpenCheck,
  CalendarDays,
  ChevronRight,
  ClipboardCheck,
  FileQuestion,
  Flame,
  GraduationCap,
  Layers3,
  LibraryBig,
  MessageCircleQuestion,
  MessagesSquare,
  PlayCircle,
  Search,
  Sparkles,
  Star,
  Trophy,
  UsersRound,
} from 'lucide-react';
import { PortalCard } from '@/components/course-hall/portal-card';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'outline', label: '课程大纲', icon: Layers3 },
  { id: 'quiz', label: '在线测验', icon: ClipboardCheck },
  { id: 'qa', label: '线上答疑', icon: MessageCircleQuestion },
  { id: 'discussion', label: '在线讨论', icon: MessagesSquare },
] as const;

const courseCards = [
  {
    title: '离散数学',
    tag: '核心课程',
    desc: '围绕逻辑、集合、图论、组合计数和代数结构建设 AI 互动学习路径。',
    progress: 92,
    students: 100,
    chapters: 8,
    accent: 'sky',
  },
  {
    title: '算法设计与分析',
    tag: '试点课程',
    desc: '承接图论、递归与组合思想，拓展到复杂度、分治、动态规划和图算法。',
    progress: 76,
    students: 28,
    chapters: 7,
    accent: 'emerald',
  },
  {
    title: '数据结构',
    tag: '推广课程',
    desc: '建设线性表、树、图、查找排序的结构可视化和操作演示资源。',
    progress: 64,
    students: 24,
    chapters: 6,
    accent: 'amber',
  },
];

const outlineRows = [
  ['第1章 命题逻辑', '真值表、等值演算、推理规则', '6个知识点', '已开放'],
  ['第2章 集合与关系', '集合运算、关系性质、闭包、偏序', '8个知识点', '已开放'],
  ['第3章 图论基础', '路径、连通性、欧拉图、哈密顿图', '9个知识点', '已开放'],
  ['第4章 树与生成树', '树的性质、生成树、最小生成树', '5个知识点', '建设中'],
  ['第5章 组合计数', '排列组合、容斥原理、递推关系', '7个知识点', '建设中'],
  ['第6章 代数结构', '群、环、代数系统判定', '6个知识点', '待开放'],
];

const chapterDetails = [
  {
    id: 'logic',
    label: '第1章',
    title: '命题逻辑',
    status: '已开放',
    duration: '建议学习 2 学时',
    summary: '从命题、联结词和真值表出发，建立形式化表达与逻辑推理的基础能力。',
    objectives: ['理解命题与复合命题的构成方式', '掌握真值表、等值演算和蕴含关系', '能够使用推理规则完成简单证明'],
    keywords: ['命题', '真值表', '等值式', '蕴含式', '推理规则'],
    paragraphs: [
      '命题逻辑研究能够判断真假的陈述句。一个命题只有真、假两种取值，这种二值特征使它适合被计算机处理，也使复杂推理能够转化为清晰的符号运算。',
      '在离散数学中，常用否定、合取、析取、蕴含、等价等联结词构造复合命题。复合命题的真假不取决于句子的自然语言表达，而取决于组成命题的真值以及联结词的语义规则。',
      '真值表是判断复合命题性质的基本工具。通过列出所有可能的真值组合，可以判断一个命题公式是否为重言式、矛盾式或可满足式。对于较短公式，真值表直观可靠；对于较复杂公式，则需要进一步使用等值演算简化。',
      '等值演算强调在不改变命题真值的前提下改写公式。常用规律包括双重否定律、德摩根律、分配律、吸收律和蕴含等值式。熟练使用这些规律，可以把自然语言问题转化为可验证的形式证明。',
    ],
    example: '例：若命题 p 表示“完成章节学习”，q 表示“通过章节测验”，则 p -> q 可以表达“如果完成章节学习，那么可以通过章节测验”。判断该命题是否成立，需要结合具体学习记录和测验结果分析。',
  },
  {
    id: 'sets-relations',
    label: '第2章',
    title: '集合与关系',
    status: '已开放',
    duration: '建议学习 3 学时',
    summary: '围绕集合运算、笛卡尔积、二元关系和关系性质，理解离散对象之间的结构联系。',
    objectives: ['掌握集合的基本运算与证明方法', '理解关系的自反、对称、传递等性质', '能够判断等价关系、偏序关系并绘制哈asse图'],
    keywords: ['集合运算', '笛卡尔积', '等价关系', '偏序关系', '闭包'],
    paragraphs: [
      '集合是离散数学中描述对象范围的基本语言。一个集合由明确的元素构成，元素是否属于集合必须能够被判断。通过并、交、差、补等运算，可以描述不同对象集合之间的组合关系。',
      '关系用于刻画两个集合元素之间是否存在某种联系。若 A 和 B 是集合，则 A 到 B 的一个二元关系可以看作笛卡尔积 A x B 的子集。用集合方式表示关系，有助于把“相邻”“整除”“先修”等实际关系转化为数学对象。',
      '关系的性质是本章的核心。自反性关注每个元素是否与自身相关，对称性关注关系是否可以双向成立，传递性关注关系能否通过中间元素延伸。判断这些性质时，既可以用有序对集合，也可以用关系矩阵或关系图。',
      '等价关系和偏序关系是两类重要关系。等价关系可以把集合划分为若干等价类，偏序关系则能够描述层级、包含、先后等结构。课程先修关系、知识点依赖关系和任务流程都可以用偏序思想进行建模。',
    ],
    example: '例：在学生集合中定义“选修同一课程”为关系。该关系通常具有自反性和对称性，但是否传递需要结合具体课程选择情况判断。',
  },
  {
    id: 'graph',
    label: '第3章',
    title: '图论基础',
    status: '已开放',
    duration: '建议学习 3 学时',
    summary: '学习图的基本概念、路径、连通性、欧拉图和哈密顿图，建立网络结构分析能力。',
    objectives: ['理解图、顶点、边、度数等基本概念', '能够判断路径、回路和连通分量', '区分欧拉图与哈密顿图的判定思路'],
    keywords: ['图', '路径', '连通性', '欧拉图', '哈密顿图'],
    paragraphs: [
      '图论用顶点和边描述对象及其连接关系，是离散数学中最贴近计算机应用的内容之一。社交网络、课程先修关系、交通路线、知识图谱都可以抽象为图结构。',
      '图的基本分析通常从度数开始。无向图中，一个顶点的度表示与它相连的边数；有向图中还需要区分入度和出度。度数序列能够帮助我们快速判断图结构是否可能存在，并分析节点的重要程度。',
      '路径和连通性用于描述图中顶点之间能否到达。若任意两个顶点之间都存在路径，则图是连通的。对于有向图，还需要考虑强连通和弱连通，这些概念常用于网络可靠性、页面链接分析和任务依赖分析。',
      '欧拉图关注“能否一次性经过每条边”，哈密顿图关注“能否一次性经过每个顶点”。二者表面相似，但研究对象不同。欧拉图通常有明确的度数判定条件，而哈密顿图的判定更复杂，常需要结合充分条件或构造方法。',
    ],
    example: '例：校园快递路线规划更接近欧拉问题，因为重点是每条道路是否被经过；旅行打卡路线更接近哈密顿问题，因为重点是每个地点是否被访问。',
  },
  {
    id: 'tree',
    label: '第4章',
    title: '树与生成树',
    status: '建设中',
    duration: '建议学习 2 学时',
    summary: '从无环连通图出发，理解树的性质、生成树以及最小生成树的实际应用。',
    objectives: ['掌握树的定义和基本性质', '理解生成树与图连通性的关系', '了解最小生成树在网络建设中的应用'],
    keywords: ['树', '叶子节点', '生成树', '最小生成树', '权值'],
    paragraphs: [
      '树是一类特殊的图，它既连通又不含回路。由于结构简洁、层次清楚，树广泛用于文件目录、组织结构、表达式分析、决策过程和搜索算法。',
      '一棵含有 n 个顶点的树恰好有 n-1 条边。这个性质常用于判断一个图是否可能为树，也能帮助我们理解树在保持连通的同时为什么不包含多余路径。',
      '生成树是从连通图中选取部分边形成的一棵树，它保留所有顶点并保持连通。一个连通图通常可以有多棵生成树，不同生成树对应不同的连接方案。',
      '当边带有权值时，最小生成树用于寻找总代价最小的连接方案。通信网络铺设、道路建设、电路布线等问题，都可以通过最小生成树思想进行建模和求解。',
    ],
    example: '例：若要连接多个教学楼并尽量减少网线铺设成本，可以把教学楼看作顶点、可铺设线路看作带权边，再寻找最小生成树。',
  },
  {
    id: 'counting',
    label: '第5章',
    title: '组合计数',
    status: '建设中',
    duration: '建议学习 3 学时',
    summary: '学习排列组合、抽屉原理、容斥原理和递推关系，提升离散对象计数能力。',
    objectives: ['区分排列与组合的适用场景', '理解容斥原理处理重叠计数的方式', '能够建立简单递推关系描述计数过程'],
    keywords: ['排列', '组合', '抽屉原理', '容斥原理', '递推关系'],
    paragraphs: [
      '组合计数研究“有多少种可能”。它不一定要求列出所有结果，而是通过结构分析得到数量。密码设计、测试用例生成、概率计算和算法复杂度分析都离不开计数思想。',
      '排列强调顺序，组合不强调顺序。判断一个问题使用排列还是组合，关键是看交换对象位置后结果是否发生变化。若位置变化产生新的结果，通常使用排列；若只是选出对象集合，则使用组合。',
      '容斥原理用于处理多个条件之间存在重叠的计数问题。直接相加会重复计算交集，因此需要加减交替修正。它体现了离散数学中“先放宽条件，再逐步校正”的典型思维。',
      '递推关系通过前后项之间的联系描述数量变化。许多算法问题都可以转化为递推形式，例如斐波那契数列、汉诺塔问题、动态规划状态转移等。',
    ],
    example: '例：统计至少选修一门实践课的学生人数时，如果直接把各实践课人数相加，会重复计算选修多门课程的学生，需要使用容斥原理修正。',
  },
  {
    id: 'algebra',
    label: '第6章',
    title: '代数结构',
    status: '待开放',
    duration: '建议学习 2 学时',
    summary: '理解运算封闭性、半群、幺半群、群等概念，为抽象结构和编码理论打基础。',
    objectives: ['理解代数系统与二元运算', '能够判断封闭性、结合律、单位元和逆元', '认识群结构在计算机科学中的基础作用'],
    keywords: ['代数系统', '封闭性', '单位元', '逆元', '群'],
    paragraphs: [
      '代数结构关注集合及其上的运算。与普通计算不同，代数结构更关心运算是否满足某些性质，例如封闭性、结合律、交换律、单位元和逆元。',
      '若一个集合上的二元运算对集合封闭，并满足结合律，就可以形成半群；如果进一步存在单位元，则形成幺半群；如果每个元素还存在逆元，则可能构成群。',
      '群是重要的抽象结构，它能描述对称、变换和可逆操作。在密码学、编码理论、图像处理、自动机理论等方向中，群论思想都有基础作用。',
      '学习代数结构时，不能只记定义，更要学会按条件逐项验证。对于一个给定集合和运算，需要依次判断封闭性、结合律、单位元和逆元是否成立。',
    ],
    example: '例：整数集合在加法下构成群，因为加法封闭、满足结合律，0 是单位元，每个整数 a 都有加法逆元 -a。',
  },
];

const quizRows = [
  ['章节小测', '命题逻辑基础测验', '10题', '15分钟', '已开放'],
  ['综合练习', '集合关系与偏序结构', '12题', '20分钟', '已开放'],
  ['图论专题', '欧拉图与哈密顿图辨析', '8题', '15分钟', '功能预留'],
  ['期末复盘', '离散数学综合模拟卷', '20题', '45分钟', '功能预留'],
];

const qaRows = [
  ['证明推导', '如何证明一个关系是等价关系？', '助教A', '12条回复'],
  ['图论建模', '欧拉通路和哈密顿通路有什么区别？', 'AI课程助教', '18条回复'],
  ['组合计数', '容斥原理什么时候比分类讨论更合适？', '任课教师', '9条回复'],
  ['复习规划', '期末复习应该先看图论还是组合计数？', '课程助教', '7条回复'],
];

const discussionRows = [
  ['主题研讨', '图论模型在课程排课问题中的应用', '32人参与', '进行中'],
  ['小组协作', '最小生成树算法过程可视化设计', '6组提交', '功能预留'],
  ['观点投票', 'AI问答是否能替代部分课后答疑？', '76票', '进行中'],
  ['课程反馈', '希望增加哪些章节的互动演示？', '41条建议', '进行中'],
];

const notices = [
  ['课程公告', '第3章图论基础已开放在线测验与典型问答。'],
  ['学习提醒', '组合计数章节建议完成容斥原理专项练习。'],
  ['功能规划', '课程大厅提供课程资料、题库训练、答疑协同和讨论交流的统一入口。'],
];

const ranking = [
  ['S202501', '问答贡献', '28次提问'],
  ['S202508', '测验完成', '96%完成率'],
  ['S202517', '讨论活跃', '18条观点'],
];

const accentClass = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
};

function StatusBadge({ status }: { status: string }) {
  const active = status === '已开放' || status === '进行中';
  return (
    <Badge
      className={cn(
        active
          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200'
          : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
      )}
    >
      {status}
    </Badge>
  );
}

function FeatureTable({
  columns,
  rows,
  firstColumnLinks,
}: {
  columns: string[];
  rows: string[][];
  firstColumnLinks?: Record<string, string>;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold text-slate-500 dark:bg-slate-900 dark:text-slate-400">
            <tr>
              {columns.map((column) => (
                <th key={column} className="border-b border-slate-200 px-4 py-3 dark:border-slate-800">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {rows.map((row) => (
              <tr key={row.join('-')} className="group transition hover:bg-slate-50/80 dark:hover:bg-slate-900/70">
                {row.map((cell, index) => {
                  const href = index === 0 ? firstColumnLinks?.[cell] : undefined;
                  return (
                    <td
                      key={`${cell}-${index}`}
                      className={cn(
                        'px-4 py-3 align-top text-slate-600 dark:text-slate-300',
                        index === 0 && 'font-medium text-slate-900 dark:text-slate-100',
                      )}
                    >
                      {index === row.length - 1 ? (
                        <StatusBadge status={cell} />
                      ) : href ? (
                        <Link
                          href={href}
                          className="inline-flex items-center gap-1.5 text-sky-700 transition hover:translate-x-0.5 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100"
                        >
                          {cell}
                          <ChevronRight className="size-3.5" />
                        </Link>
                      ) : (
                        cell
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function CourseHallPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('outline');
  const chapterLinks = Object.fromEntries(
    chapterDetails.map((chapter) => [`${chapter.label} ${chapter.title}`, `/course-hall/chapters/${chapter.id}`]),
  );

  const activeConfig = {
    outline: {
      title: '课程大纲中心',
      desc: '展示课程章节、知识点结构、开放状态和学习路径。',
      columns: ['章节', '核心内容', '资源规模', '状态'],
      rows: outlineRows,
    },
    quiz: {
      title: '在线测验中心',
      desc: '展示章节小测、综合练习、模拟测验和后续题库入口。',
      columns: ['测验类型', '测验名称', '题量', '建议时长', '状态'],
      rows: quizRows,
    },
    qa: {
      title: '线上答疑中心',
      desc: '展示课程问答、典型问题、教师/助教回复和 AI 助教辅助场景。',
      columns: ['问题类别', '典型问题', '答疑角色', '互动情况'],
      rows: qaRows,
    },
    discussion: {
      title: '在线讨论平台',
      desc: '展示主题研讨、小组协作、观点投票和课程反馈等讨论型学习活动。',
      columns: ['讨论类型', '讨论主题', '参与情况', '状态'],
      rows: discussionRows,
    },
  }[activeTab];

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_8%_8%,#dff6ff_0%,transparent_28%),radial-gradient(circle_at_92%_4%,#dcfce7_0%,transparent_24%),linear-gradient(180deg,#f8fafc_0%,#eef8f3_55%,#f8fafc_100%)] px-4 py-6 text-slate-950 dark:bg-[radial-gradient(circle_at_8%_8%,#082f49_0%,transparent_30%),radial-gradient(circle_at_92%_4%,#052e1b_0%,transparent_26%),linear-gradient(180deg,#020617_0%,#06151a_55%,#020617_100%)] dark:text-slate-50 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              href="/"
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/75 dark:text-slate-300 dark:hover:text-white"
            >
              <ArrowLeft className="size-4" />
              返回系统主界面
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                课程大厅
              </Badge>
              <Badge variant="outline">在线教育功能展示区</Badge>
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-normal md:text-5xl">
              计算机课程在线学习大厅
            </h1>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base">
              借鉴在线教育平台的课程中心、测验中心、答疑中心和讨论社区设计，为《离散数学》智能教学系统补充更完整的学习服务页面。
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-white/85 p-5 shadow-sm backdrop-blur dark:border-emerald-900 dark:bg-slate-900/75">
            <div className="absolute -right-8 -top-8 size-28 rounded-full bg-emerald-100 blur-2xl dark:bg-emerald-950" />
            <div className="relative text-xs font-medium text-slate-500 dark:text-slate-400">大厅模块</div>
            <div className="relative mt-1 text-3xl font-semibold">4个核心入口</div>
            <div className="relative mt-2 text-xs text-slate-500">课程大纲、在线测验、线上答疑、在线讨论</div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {courseCards.map((course) => (
            <Card
              key={course.title}
              className="group rounded-xl border-slate-200 bg-white/88 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80"
            >
              <CardContent className="pt-0">
                <div className="flex items-start justify-between gap-3">
                  <span className={cn('rounded-lg p-2 transition group-hover:scale-110', accentClass[course.accent as keyof typeof accentClass])}>
                    <GraduationCap className="size-5" />
                  </span>
                  <Badge variant="outline">{course.tag}</Badge>
                </div>
                <h2 className="mt-4 text-lg font-semibold">{course.title}</h2>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {course.desc}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-950/60">
                    <div className="font-semibold">{course.students}人</div>
                    <div className="mt-1 text-slate-500">学习人数</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-950/60">
                    <div className="font-semibold">{course.chapters}章</div>
                    <div className="mt-1 text-slate-500">课程章节</div>
                  </div>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <div className="h-full rounded-full bg-emerald-500 transition-all duration-500 group-hover:bg-sky-500" style={{ width: `${course.progress}%` }} />
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <PortalCard
            href="/course-hall/courses"
            icon={BookMarked}
            title="课程中心"
            desc="进入课程列表、课程详情、课程大纲、课时学习和课程作业页面。"
            meta="课程列表 -> 课程详情 -> 课时页面"
            tone="from-sky-500 to-cyan-400"
          />
          <PortalCard
            href="/course-hall/learn"
            icon={GraduationCap}
            title="学习中心"
            desc="汇总在学课程、待办作业、待参加测验和近期学习时间线。"
            meta="学习首页 -> 作业/测验待办"
            tone="from-emerald-500 to-teal-400"
          />
          <PortalCard
            href="/course-hall/forum"
            icon={MessagesSquare}
            title="讨论社区"
            desc="查看主题研讨、答疑讨论和课程迁移交流帖子。"
            meta="论坛列表 -> 帖子详情"
            tone="from-amber-500 to-orange-400"
          />
          <PortalCard
            href="/course-hall/teachers"
            icon={UsersRound}
            title="教师团队"
            desc="展示课程负责人、试点教师和多课程推广教师信息。"
            meta="教师列表 -> 教师主页"
            tone="from-rose-500 to-pink-400"
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.74fr_1.26fr]">
          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LibraryBig className="size-5 text-emerald-600" />
                学习服务导航
              </CardTitle>
              <CardDescription>切换模块查看不同在线教育功能区域。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'group flex w-full items-center justify-between rounded-xl border p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:shadow-md',
                      active
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/35 dark:text-emerald-50'
                        : 'border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300',
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className={cn('rounded-lg p-2 transition group-hover:scale-110', active ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200' : 'bg-slate-100 text-slate-500 dark:bg-slate-900 dark:text-slate-300')}>
                        <Icon className="size-4" />
                      </span>
                      <span className="text-sm font-semibold">{tab.label}</span>
                    </span>
                    <ChevronRight className={cn('size-4 transition', active && 'translate-x-1 text-emerald-600')} />
                  </button>
                );
              })}

              <div className="rounded-xl bg-slate-950 p-4 text-white">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="size-4 text-emerald-200" />
                  功能建设说明
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-300">
                  平台围绕课程学习全过程预留资料研读、题库训练、答疑协同和讨论交流入口，便于形成统一的线上教学支持空间。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpenCheck className="size-5 text-sky-600" />
                    {activeConfig.title}
                  </CardTitle>
                  <CardDescription className="mt-2">{activeConfig.desc}</CardDescription>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950">
                  <Search className="size-3.5" />
                  搜索与筛选入口预留
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <FeatureTable
                columns={activeConfig.columns}
                rows={activeConfig.rows}
                firstColumnLinks={activeTab === 'outline' ? chapterLinks : undefined}
              />
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="size-5 text-amber-600" />
                课程公告
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {notices.map(([title, desc]) => (
                <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-0.5 hover:shadow-sm dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="text-sm font-semibold">{title}</div>
                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{desc}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="size-5 text-emerald-600" />
                学习榜单
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {ranking.map(([name, type, value], index) => (
                <div key={name} className="flex items-center justify-between rounded-lg bg-slate-50 p-3 text-sm transition hover:bg-emerald-50 dark:bg-slate-950/60 dark:hover:bg-emerald-950/30">
                  <div className="flex items-center gap-3">
                    <span className="flex size-7 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                      {index + 1}
                    </span>
                    <div>
                      <div className="font-semibold">{name}</div>
                      <div className="text-xs text-slate-500">{type}</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500">{value}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200 bg-slate-950 text-white shadow-sm dark:border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="size-5 text-sky-200" />
                学习日程
              </CardTitle>
              <CardDescription className="text-slate-300">展示课程活动安排与后续功能规划。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                ['周一', '离散数学图论章节直播答疑', PlayCircle],
                ['周三', '命题逻辑章节测验开放', FileQuestion],
                ['周五', '算法设计试点课程讨论', UsersRound],
              ].map(([day, title, Icon]) => {
                const IconComponent = Icon as typeof PlayCircle;
                return (
                  <div key={day as string} className="flex items-center gap-3 rounded-lg bg-white/10 p-3 transition hover:bg-white/15">
                    <IconComponent className="size-4 text-sky-200" />
                    <div>
                      <div className="text-xs text-slate-400">{day as string}</div>
                      <div className="text-sm font-medium">{title as string}</div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white/75 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/75">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Flame className="size-4 text-rose-500" />
                功能扩展方向
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                课程大厅支持与课程资料库、题库系统、答疑工单、讨论社区、学习记录和用户权限体系协同，形成面向多课程推广的线上教学服务入口。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {['课程收藏', '学习记录', '题库接口', '答疑工单', '讨论发帖', '课程评价'].map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  <Star className="mr-1 inline size-3" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
