import Link from 'next/link';
import {
  ArrowLeft,
  BarChart3,
  BookOpenCheck,
  ChevronRight,
  ClipboardList,
  FileText,
  GraduationCap,
  LineChart,
  ShieldCheck,
  TrendingUp,
  UserCog,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const managementModules = [
  {
    title: '课程管理',
    description: '维护《离散数学》《算法设计与分析》的课程信息、章节结构、知识库与课堂资源。',
    status: '2门课程',
    metric: '42份资源',
    action: '查看课程',
    icon: BookOpenCheck,
    accent: 'sky',
    href: '/admin/courses',
  },
  {
    title: '人员管理',
    description: '管理教师、助教、实验组学生、对照组学生与试点课程参与人员。',
    status: '107名成员',
    metric: '5名助教',
    action: '查看人员',
    icon: UserCog,
    accent: 'emerald',
    href: '/admin/people',
  },
  {
    title: '分数管理',
    description: '汇总期末成绩、作业成绩、章节测验、课堂参与和知识点掌握度。',
    status: '100份样本',
    metric: '5类指标',
    action: '查看成绩',
    icon: GraduationCap,
    accent: 'indigo',
    href: '/admin/scores',
  },
  {
    title: '资源管理',
    description: '维护课程大纲、课件、习题、实验指导书、典型问答和教学案例材料。',
    status: '1,836条切片',
    metric: '7类问题',
    action: '查看资源',
    icon: FileText,
    accent: 'amber',
    href: '/admin/resources',
  },
];

const statsTables = [
  '系统运行数据：访问人数、提问次数、活跃学生数、课程资料数、生成内容单元数、典型问题类别',
  '学习成效数据：实验组/对照组成绩、作业提交率、正确率、课堂参与、知识点掌握度',
  '用户反馈数据：学生问卷、教师访谈、满意度、学习信心、使用频率',
  '教师效率数据：答疑时间减少、备课资源检索效率、重复性问题处理比例',
];

const softwareItems = [
  '系统名称、平台组成、访问方式与部署环境',
  '用户角色、知识库内容、功能模块与运行流程',
  '应用场景、教学作用、使用数据、测试结果与改进计划',
];

const accentClass = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
  indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
};

const progressClass = {
  sky: 'bg-sky-500',
  emerald: 'bg-emerald-500',
  indigo: 'bg-indigo-500',
  amber: 'bg-amber-500',
};

const overviewItems = [
  { label: '课程覆盖', value: '2门', note: '离散数学、算法设计与分析' },
  { label: '学习样本', value: '100人', note: '实验组50人，对照组50人' },
  { label: '问答记录', value: '1,248次', note: '覆盖概念、证明、图论与算法' },
];

export default function AdminHomePage() {
  function renderManagementCard(module: (typeof managementModules)[number]) {
    const Icon = module.icon;
    const content = (
      <Card
        className="group h-full rounded-xl border-slate-200 bg-white/88 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80"
      >
        <CardContent className="pt-0">
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-3">
              <span className={cn('rounded-lg p-2 transition group-hover:scale-110', accentClass[module.accent as keyof typeof accentClass])}>
                <Icon className="size-5" />
              </span>
              <Badge variant="outline">{module.status}</Badge>
            </div>
            <h2 className="mt-4 text-base font-semibold">{module.title}</h2>
            <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600 dark:text-slate-300">
              {module.description}
            </p>
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{module.metric}</span>
                <span>76%</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div className={cn('h-full w-[76%] rounded-full transition-all duration-500 group-hover:w-[88%]', progressClass[module.accent as keyof typeof progressClass])} />
              </div>
            </div>
            <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition group-hover:translate-x-1 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white">
              {module.action}
              <ChevronRight className="size-3.5" />
            </div>
          </div>
        </CardContent>
      </Card>
    );

    if ('href' in module && module.href) {
      return (
        <Link key={module.title} href={module.href} className="block h-full">
          {content}
        </Link>
      );
    }

    return <div key={module.title}>{content}</div>;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#dff6ff_0%,transparent_28%),linear-gradient(180deg,#f8fafc_0%,#eef6f8_55%,#f8fafc_100%)] px-4 py-6 text-slate-950 dark:bg-[radial-gradient(circle_at_top_left,#073042_0%,transparent_30%),linear-gradient(180deg,#020617_0%,#06151a_55%,#020617_100%)] dark:text-slate-50 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              href="/"
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/75 dark:text-slate-300 dark:hover:text-white"
            >
              <ArrowLeft className="size-4" />
              返回课程入口
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200">
                管理员工作台
              </Badge>
              <Badge variant="outline">课程运行总览</Badge>
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-normal md:text-5xl">
              课程建设与教学成效管理中心
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base">
              统一管理课程资源、参与人员、成绩表现与教学应用数据，支撑课程运行监测、教学质量分析和阶段性成果评估。
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/75">
            <div className="absolute right-3 top-3 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              运行中
            </div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">当前项目</div>
            <div className="mt-1 text-2xl font-semibold">计算机课程智能教学平台</div>
            <div className="mt-2 text-xs text-slate-500">离散数学、算法设计与分析</div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="h-full w-[76%] rounded-full bg-sky-500" />
            </div>
            <div className="mt-2 text-xs text-slate-500">本学期数据完整度 76%</div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {managementModules.map((module) => renderManagementCard(module))}
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            <Link
              href="/admin/software"
              className="group relative overflow-hidden rounded-xl border border-emerald-200 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-emerald-900 dark:bg-slate-900/85"
            >
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-emerald-100 blur-2xl transition group-hover:scale-125 dark:bg-emerald-950" />
              <div className="relative flex items-start gap-3">
                <span className="rounded-lg bg-emerald-100 p-2 text-emerald-700 transition group-hover:scale-110 dark:bg-emerald-950 dark:text-emerald-300">
                  <FileText className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-base font-semibold">教学软件专项说明书</h2>
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                      点击进入
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    汇总《离散数学》智能化知识问答系统的平台架构、教学应用、运行数据、测试结果和改进计划，形成正式展示材料。
                  </p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {softwareItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-emerald-100 bg-emerald-50/70 px-3 py-2 text-xs leading-5 text-emerald-900 transition group-hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 transition group-hover:translate-x-1 dark:text-emerald-300">
                    查看专项说明
                    <ChevronRight className="size-3.5" />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/admin/statistics"
              className="group relative rounded-xl border border-sky-300 bg-sky-950 p-5 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-sky-700"
            >
              <div className="flex items-start gap-3">
                <span className="rounded-lg bg-white/12 p-2 text-sky-100">
                  <BarChart3 className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-base font-semibold">数据统计信息</h2>
                    <Badge className="bg-white text-sky-900">点击查看详情</Badge>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-sky-100/85">
                    查看系统运行、学习成效、用户反馈和教师效率四类统计数据，支持课程成效分析与过程监测。
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-sky-50">
                    <ClipboardList className="size-3.5" />
                    进入详细统计页
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute left-4 right-4 top-[calc(100%-0.5rem)] z-20 translate-y-3 rounded-xl border border-sky-200 bg-white p-4 text-slate-800 opacity-0 shadow-xl transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck className="size-4 text-sky-600" />
                  统计维度
                </div>
                <div className="space-y-2">
                  {statsTables.map((item) => (
                    <p key={item} className="text-xs leading-5 text-slate-600 dark:text-slate-300">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {overviewItems.map((item) => (
              <Card key={item.label} className="rounded-xl border-slate-200 bg-white/85 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80">
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{item.label}</div>
                      <div className="mt-1 text-2xl font-semibold">{item.value}</div>
                    </div>
                    <span className="rounded-lg bg-slate-100 p-2 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      <TrendingUp className="size-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">{item.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <LineChart className="size-4 text-sky-600" />
                本周运行概况
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                访问热度、知识库检索和章节测验保持稳定增长，图论与动态规划相关问题活跃度较高。
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-950/60">
                <div className="text-lg font-semibold">+18%</div>
                <div className="text-slate-500">访问增长</div>
              </div>
              <div className="rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-950/60">
                <div className="text-lg font-semibold">326</div>
                <div className="text-slate-500">新增问答</div>
              </div>
              <div className="rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-950/60">
                <div className="text-lg font-semibold">91%</div>
                <div className="text-slate-500">任务完成</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
