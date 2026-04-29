'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Archive,
  ArrowLeft,
  BookMarked,
  Boxes,
  CheckCircle2,
  Download,
  FileArchive,
  FileText,
  FolderKanban,
  Library,
  MousePointerClick,
  RefreshCcw,
  Search,
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

const resourceSummary = [
  { label: '课程资料', value: '97份', note: '大纲、课件、习题、案例', icon: Library, color: 'amber' },
  { label: '生成内容单元', value: '1,836条', note: '课堂场景、测验、互动任务', icon: Sparkles, color: 'sky' },
  { label: '可导出材料', value: '58份', note: 'PPTX、HTML、课堂ZIP', icon: Download, color: 'emerald' },
  { label: '已审核资源', value: '84%', note: '教师与助教复核完成', icon: CheckCircle2, color: 'indigo' },
];

const resourceTypes = [
  ['课程大纲', '5份', '教学目标、章节安排、考核方式', '已归档'],
  ['课件资料', '31份', 'PPTX、PDF、课堂讲义', '已审核'],
  ['习题与测验', '28份', '章节习题、测验题、错题集', '持续更新'],
  ['实验指导书', '9份', 'Python图算法、逻辑推理练习', '已审核'],
  ['典型问答', '17份', '高频问题、概念辨析、证明推导', '持续更新'],
  ['教学案例', '7份', '图论建模、组合计数、算法迁移案例', '待补充'],
];

const chapterResources = [
  ['命题逻辑', 18, 256, 92, '等值演算、推理规则'],
  ['集合与关系', 16, 238, 88, '关系性质、闭包、偏序'],
  ['图论', 24, 412, 94, '路径、连通性、欧拉图'],
  ['树与生成树', 12, 196, 84, '生成树、最小生成树'],
  ['组合计数', 15, 221, 79, '排列组合、容斥、递推'],
  ['代数结构', 12, 173, 72, '群、环、代数系统判定'],
];

const generatedContent = [
  ['课堂幻灯片', '486页', '离散数学核心章节与试点课程', 'PPTX导出'],
  ['互动测验', '164题', '单选、多选、简答与反馈解释', '课堂嵌入'],
  ['白板推导', '93段', '证明过程、图论路径、算法追踪', '课堂回放'],
  ['交互场景', '28个', '图结构演示、算法流程、概念图谱', 'HTML导出'],
  ['PBL任务', '12项', '建模任务、算法实践、案例研讨', '项目制学习'],
];

const usageRows = [
  ['图论章节课件', '课件资料', '326次', '教师课堂引用、学生课后回看', '已审核'],
  ['欧拉通路典型问答', '典型问答', '214次', '学生高频检索与答疑', '持续更新'],
  ['组合计数错题集', '习题与测验', '187次', '章节复习与测验反馈', '待补充'],
  ['最小生成树交互演示', '交互场景', '156次', '算法过程可视化', '已审核'],
  ['代数结构判定案例', '教学案例', '98次', '综合例题讲评', '待补充'],
];

const migrationRows = [
  ['算法设计与分析', '复用图论、递推与复杂度分析资料', '动态规划、贪心算法、图算法可视化', '试运行中'],
  ['数据结构', '复用树、图与关系结构的教学表达', '树图操作演示、查找排序案例', '资料建设'],
  ['程序设计基础', '复用实践任务与即时反馈流程', '语法练习、调试案例、代码讲解', '计划试点'],
  ['人工智能导论', '复用概念图谱与案例研讨组织方式', '搜索策略、知识表示、大模型案例', '计划试点'],
];

const categories = ['全部', '已审核', '持续更新', '待补充', '已归档'];

const colorClass = {
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
  indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
};

function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
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
              <tr key={row.join('-')} className="transition hover:bg-slate-50/80 dark:hover:bg-slate-900/70">
                {row.map((cell, index) => (
                  <td
                    key={`${cell}-${index}`}
                    className={cn(
                      'px-4 py-3 align-top text-slate-600 dark:text-slate-300',
                      index === 0 && 'font-medium text-slate-900 dark:text-slate-100',
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AdminResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const filteredTypes = activeCategory === '全部'
    ? resourceTypes
    : resourceTypes.filter((row) => row[3] === activeCategory);

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_10%_8%,#fef3c7_0%,transparent_28%),radial-gradient(circle_at_92%_10%,#cffafe_0%,transparent_24%),linear-gradient(180deg,#f8fafc_0%,#f7f3e8_55%,#f8fafc_100%)] px-4 py-6 text-slate-950 dark:bg-[radial-gradient(circle_at_10%_8%,#713f12_0%,transparent_28%),radial-gradient(circle_at_92%_10%,#164e63_0%,transparent_25%),linear-gradient(180deg,#020617_0%,#15120a_55%,#020617_100%)] dark:text-slate-50 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/admin" className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/75 dark:text-slate-300 dark:hover:text-white">
              <ArrowLeft className="size-4" />
              返回管理员工作台
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200">资源管理</Badge>
              <Badge variant="outline">课程资料与生成内容管理</Badge>
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-normal md:text-5xl">
              教学资源库与生成内容管理
            </h1>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base">
              管理离散数学课程资料、AI生成课堂内容、导出材料和多课程迁移资源，形成可追踪、可复核、可推广的教学资源体系。
            </p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-white/85 p-5 shadow-sm backdrop-blur dark:border-amber-900 dark:bg-slate-900/75">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">资源审核进度</div>
            <div className="mt-1 text-4xl font-semibold">84%</div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="h-full w-[84%] rounded-full bg-amber-500" />
            </div>
            <div className="mt-2 text-xs text-slate-500">教师与助教已完成主要资源复核</div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {resourceSummary.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.label} className="group rounded-xl border-slate-200 bg-white/88 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
                <CardContent className="pt-0">
                  <div className="flex items-start justify-between">
                    <span className={cn('rounded-lg p-2 transition group-hover:scale-110', colorClass[item.color as keyof typeof colorClass])}>
                      <Icon className="size-5" />
                    </span>
                    <MousePointerClick className="size-4 text-slate-300 transition group-hover:text-amber-500" />
                  </div>
                  <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">{item.label}</div>
                  <div className="mt-1 text-3xl font-semibold">{item.value}</div>
                  <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">{item.note}</p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderKanban className="size-5 text-amber-600" />
                资源类型管理
              </CardTitle>
              <CardDescription>按状态筛选课程资料，便于查看已审核、持续更新和待补充资源。</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      'rounded-full border px-3 py-1.5 text-xs font-medium transition',
                      activeCategory === category
                        ? 'border-amber-500 bg-amber-500 text-white shadow-sm'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-amber-300 hover:text-amber-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300',
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <DataTable columns={['资源类型', '数量', '内容范围', '状态']} rows={filteredTypes} />
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200 bg-slate-950 text-white shadow-sm dark:border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookMarked className="size-5 text-amber-200" />
                离散数学章节资源
              </CardTitle>
              <CardDescription className="text-slate-300">展示各章节资源数量、生成内容单元与审核完成度。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {chapterResources.map(([chapter, files, units, progress, focus]) => (
                <div key={chapter} className="rounded-lg bg-white/10 p-4 transition hover:bg-white/15">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                    <span className="font-semibold">{chapter}</span>
                    <span className="text-slate-300">{files}份资料 · {units}个内容单元</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-amber-400" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="mt-2 text-xs text-slate-300">建设重点：{focus}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Boxes className="size-5 text-sky-600" />
                AI生成内容
              </CardTitle>
              <CardDescription>统计课堂生成后形成的幻灯片、测验、白板推导、交互场景和PBL任务。</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={['内容类型', '数量', '覆盖范围', '使用方式']} rows={generatedContent} />
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="size-5 text-emerald-600" />
                高频使用资源
              </CardTitle>
              <CardDescription>统计学生访问和教师引用频率较高的资源，辅助后续重点维护。</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={['资源名称', '类型', '使用次数', '主要用途', '质量状态']} rows={usageRows} />
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCcw className="size-5 text-indigo-600" />
                多课程资源迁移
              </CardTitle>
              <CardDescription>记录离散数学资源建设方法向其他课程迁移的内容和状态。</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={['课程名称', '迁移基础', '新增建设内容', '应用状态']} rows={migrationRows} />
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {[
              ['导出归档', 'PPTX、HTML、课堂ZIP用于课堂展示、材料提交和项目归档。', FileArchive],
              ['质量复核', '教师负责知识准确性，助教负责题项、标签和典型问答整理。', Archive],
              ['数据来源', '上传资料清单、课堂生成记录、导出记录和访问记录。', FileText],
            ].map(([title, desc, Icon]) => {
              const IconComponent = Icon as typeof FileText;
              return (
                <Card key={title as string} className="rounded-xl border-slate-200 bg-white/85 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80">
                  <CardContent className="pt-0">
                    <div className="flex gap-3">
                      <span className="rounded-lg bg-amber-100 p-2 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                        <IconComponent className="size-5" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold">{title as string}</div>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{desc as string}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
