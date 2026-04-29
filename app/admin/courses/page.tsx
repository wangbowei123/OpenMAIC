'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  BookOpenCheck,
  CheckCircle2,
  ChevronRight,
  GitBranch,
  Layers3,
  Network,
  Route,
  Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const courses = [
  {
    id: 'discrete',
    name: '离散数学',
    type: '核心课程',
    status: '已试运行',
    progress: 92,
    students: 100,
    resources: 42,
    scenes: 36,
    modules: ['命题逻辑', '集合与关系', '图论', '组合计数', '代数结构'],
    teacherUse: '课堂讲授、图论证明推导、典型错题复盘',
    studentUse: '课前预习、课后问答、章节测验、白板推导回看',
    plan: '继续补充高难度证明题和跨章节综合案例。',
  },
  {
    id: 'algorithm',
    name: '算法设计与分析',
    type: '试点课程',
    status: '试运行中',
    progress: 76,
    students: 28,
    resources: 18,
    scenes: 20,
    modules: ['复杂度分析', '分治', '动态规划', '贪心算法', '图算法'],
    teacherUse: '算法过程可视化、伪代码讲解、复杂度比较',
    studentUse: '算法追踪、测验训练、实践任务说明',
    plan: '完善动态规划与图算法专题案例。',
  },
  {
    id: 'data-structures',
    name: '数据结构',
    type: '推广课程',
    status: '资料建设',
    progress: 64,
    students: 24,
    resources: 15,
    scenes: 16,
    modules: ['线性表', '栈与队列', '树', '图', '查找排序'],
    teacherUse: '结构演示、操作过程拆解、课堂测验',
    studentUse: '结构可视化、操作练习、错题回顾',
    plan: '补充树和图结构的交互演示资源。',
  },
  {
    id: 'programming',
    name: '程序设计基础',
    type: '推广课程',
    status: '计划试点',
    progress: 48,
    students: 32,
    resources: 12,
    scenes: 10,
    modules: ['变量类型', '分支循环', '函数', '数组', '调试方法'],
    teacherUse: '代码示例讲解、常见错误归纳、实验任务布置',
    studentUse: '代码阅读、即时反馈、基础练习',
    plan: '建立错误案例库和课堂代码演示模板。',
  },
  {
    id: 'ai-intro',
    name: '人工智能导论',
    type: '推广课程',
    status: '计划试点',
    progress: 42,
    students: 18,
    resources: 10,
    scenes: 8,
    modules: ['搜索策略', '知识表示', '机器学习', '神经网络', '大模型案例'],
    teacherUse: '案例研讨、概念图谱、应用场景讲解',
    studentUse: '概念梳理、案例问答、课堂讨论',
    plan: '增加AI案例研讨与伦理讨论材料。',
  },
];

const workflow = [
  ['1', '课程资料整理', '收集大纲、课件、习题、案例和实验指导材料'],
  ['2', 'AI课堂生成', '基于课程要求生成大纲、场景、测验和互动内容'],
  ['3', '教师审核修订', '检查知识准确性、教学节奏和课堂活动设计'],
  ['4', '学生试用反馈', '记录访问、问答、测验和学习体验反馈'],
  ['5', '迭代推广', '沉淀核心课程经验并迁移到试点课程'],
];

const summary = [
  { label: '课程总数', value: '5门', note: '1门核心课程，4门试点课程', icon: BookOpenCheck },
  { label: '课程资源', value: '97份', note: '大纲、课件、习题、案例', icon: Layers3 },
  { label: '生成课堂', value: '90个场景', note: '幻灯片、测验、互动任务', icon: Sparkles },
  { label: '推广覆盖', value: '202人', note: '核心班级与试点课程学生', icon: Network },
];

const filters = ['全部', '核心课程', '试点课程', '推广课程'];

export default function AdminCoursesPage() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [selectedId, setSelectedId] = useState('discrete');
  const filteredCourses = activeFilter === '全部' ? courses : courses.filter((course) => course.type === activeFilter);
  const selectedCourse = courses.find((course) => course.id === selectedId) ?? courses[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_8%_10%,#dff6ff_0%,transparent_28%),radial-gradient(circle_at_92%_6%,#ecfeff_0%,transparent_24%),linear-gradient(180deg,#f8fafc_0%,#eef7fb_55%,#f8fafc_100%)] px-4 py-6 text-slate-950 dark:bg-[radial-gradient(circle_at_8%_10%,#082f49_0%,transparent_30%),radial-gradient(circle_at_92%_6%,#164e63_0%,transparent_28%),linear-gradient(180deg,#020617_0%,#06151a_55%,#020617_100%)] dark:text-slate-50 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/admin" className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/75 dark:text-slate-300 dark:hover:text-white">
              <ArrowLeft className="size-4" />
              返回管理员工作台
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200">课程管理</Badge>
              <Badge variant="outline">核心课程与多课程应用</Badge>
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-normal md:text-5xl">
              课程建设与推广应用管理
            </h1>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base">
              以《离散数学》为核心沉淀智能教学建设流程，并向算法设计、数据结构、程序设计基础和人工智能导论等课程迁移。
            </p>
          </div>
          <div className="rounded-2xl border border-sky-200 bg-white/85 p-5 shadow-sm backdrop-blur dark:border-sky-900 dark:bg-slate-900/75">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">核心课程进度</div>
            <div className="mt-1 text-3xl font-semibold">92%</div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="h-full w-[92%] rounded-full bg-sky-500" />
            </div>
            <div className="mt-2 text-xs text-slate-500">离散数学课程资源与课堂场景已完成主要建设</div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {summary.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.label} className="group rounded-xl border-slate-200 bg-white/88 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
                <CardContent className="pt-0">
                  <div className="flex items-start justify-between">
                    <span className="rounded-lg bg-sky-100 p-2 text-sky-700 transition group-hover:scale-110 dark:bg-sky-950 dark:text-sky-300">
                      <Icon className="size-5" />
                    </span>
                    <ChevronRight className="size-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-sky-500" />
                  </div>
                  <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">{item.label}</div>
                  <div className="mt-1 text-3xl font-semibold">{item.value}</div>
                  <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">{item.note}</p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpenCheck className="size-5 text-sky-600" />
                课程应用矩阵
              </CardTitle>
              <CardDescription>点击课程卡片可切换右侧建设详情，筛选按钮用于查看不同推广阶段。</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={cn(
                      'rounded-full border px-3 py-1.5 text-xs font-medium transition',
                      activeFilter === filter
                        ? 'border-sky-500 bg-sky-500 text-white shadow-sm'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300',
                    )}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className="grid gap-3">
                {filteredCourses.map((course) => (
                  <button
                    key={course.id}
                    type="button"
                    onClick={() => setSelectedId(course.id)}
                    className={cn(
                      'group rounded-xl border p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:shadow-md',
                      selectedCourse.id === course.id
                        ? 'border-sky-300 bg-sky-50 shadow-sm dark:border-sky-800 dark:bg-sky-950/35'
                        : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950/60',
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{course.name}</span>
                        <Badge variant="outline">{course.type}</Badge>
                      </div>
                      <Badge className="bg-white text-sky-800 dark:bg-slate-900 dark:text-sky-200">{course.status}</Badge>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {course.modules.slice(0, 4).map((module) => (
                        <span key={module} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                          {module}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <div className="h-full rounded-full bg-sky-500 transition-all duration-500 group-hover:bg-emerald-500" style={{ width: `${course.progress}%` }} />
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200 bg-slate-950 text-white shadow-sm dark:border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="size-5 text-sky-200" />
                {selectedCourse.name}建设详情
              </CardTitle>
              <CardDescription className="text-slate-300">课程建设内容、使用场景和后续计划。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="rounded-lg bg-white/10 p-3">
                  <div className="text-xl font-semibold">{selectedCourse.students}</div>
                  <div className="mt-1 text-slate-300">参与学生</div>
                </div>
                <div className="rounded-lg bg-white/10 p-3">
                  <div className="text-xl font-semibold">{selectedCourse.resources}</div>
                  <div className="mt-1 text-slate-300">课程资源</div>
                </div>
                <div className="rounded-lg bg-white/10 p-3">
                  <div className="text-xl font-semibold">{selectedCourse.scenes}</div>
                  <div className="mt-1 text-slate-300">课堂场景</div>
                </div>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <div className="text-sm font-semibold">教师使用场景</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{selectedCourse.teacherUse}</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <div className="text-sm font-semibold">学生使用场景</div>
                <p className="mt-2 text-sm leading-6 text-slate-300">{selectedCourse.studentUse}</p>
              </div>
              <div className="rounded-lg bg-sky-500/15 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-sky-100">
                  <CheckCircle2 className="size-4" />
                  后续计划
                </div>
                <p className="mt-2 text-sm leading-6 text-sky-50/80">{selectedCourse.plan}</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Route className="size-5 text-emerald-600" />
              课程建设流程
            </CardTitle>
            <CardDescription>从离散数学核心课程建设出发，形成可复用的多课程推广路径。</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-5">
              {workflow.map(([step, title, desc]) => (
                <div key={step} className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="flex size-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700 transition group-hover:scale-110 dark:bg-emerald-950 dark:text-emerald-300">
                    {step}
                  </div>
                  <div className="mt-4 text-sm font-semibold">{title}</div>
                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
