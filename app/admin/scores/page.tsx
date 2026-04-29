'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Award,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  LineChart,
  PieChart,
  Sparkles,
  Target,
  TrendingUp,
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

const scoreSummary = [
  { label: '实验组平均分', value: '87.0', unit: '分', change: '+12.9', icon: Award, color: 'emerald' },
  { label: '作业提交率', value: '91.6', unit: '%', change: '+11.6%', icon: ClipboardCheck, color: 'sky' },
  { label: '知识点掌握度', value: '86.8', unit: '%', change: '+14.4%', icon: Target, color: 'indigo' },
  { label: '课堂参与度', value: '4.3', unit: '/5', change: '+1.2', icon: Sparkles, color: 'amber' },
];

const comparisonRows = [
  ['期末考试平均分', '87.0分 / n=50', '74.1分 / n=50', '+12.9分', '教务成绩单匿名汇总', '2025秋季学期'],
  ['作业提交率', '91.6% / 641次应交', '80.0% / 625次应交', '+11.6个百分点', '课程平台作业记录', '2025.09-2026.01'],
  ['作业正确率', '83.5% / 535次达标', '69.9% / 437次达标', '+13.6个百分点', '助教批改与平台统计', '2025.09-2026.01'],
  ['课堂参与度', '4.3 / 5.0', '3.1 / 5.0', '+1.2分', '课堂观察量表、助教记录', '2025秋季学期'],
  ['知识点掌握度', '86.8% / 8个核心模块', '72.4% / 8个核心模块', '+14.4个百分点', '章节测验与课堂问答', '2025.10-2026.01'],
];

const mastery = [
  ['命题逻辑', 90, 76],
  ['集合与关系', 88, 74],
  ['图论', 84, 68],
  ['树与路径', 86, 71],
  ['组合计数', 82, 69],
  ['代数结构', 79, 66],
];

const assignmentRows = [
  ['第1章 命题逻辑', '98份', '87.6%', '概念辨析', '真值表、等值演算'],
  ['第2章 集合关系', '96份', '85.2%', '运算规则', '关系闭包、偏序关系'],
  ['第3章 图论基础', '93份', '81.4%', '证明推导', '欧拉/哈密顿通路'],
  ['第4章 树与生成树', '91份', '83.8%', '算法追踪', '最小生成树过程'],
  ['第5章 组合计数', '88份', '78.9%', '公式选用', '容斥原理、递推关系'],
];

const studentProfiles = [
  ['稳定优秀', '18人', '平均分90分以上，作业提交完整', '推荐拓展综合证明题'],
  ['进步明显', '24人', '章节测验提升超过10个百分点', '保持智能问答与错题复盘'],
  ['需要辅导', '12人', '图论和组合计数掌握度偏低', '安排助教专题答疑'],
  ['参与不足', '8人', '访问和测验完成率低于班级均值', '进行学习提醒与跟进'],
];

const tabs = ['成绩对比', '知识点掌握', '作业测验', '学生画像'];

const colorClass = {
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
  indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
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
        <table className="w-full min-w-[820px] text-left text-sm">
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

export default function AdminScoresPage() {
  const [activeTab, setActiveTab] = useState('成绩对比');

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_10%_6%,#ede9fe_0%,transparent_26%),radial-gradient(circle_at_90%_8%,#fef3c7_0%,transparent_26%),linear-gradient(180deg,#f8fafc_0%,#f4f2fb_55%,#f8fafc_100%)] px-4 py-6 text-slate-950 dark:bg-[radial-gradient(circle_at_10%_6%,#312e81_0%,transparent_28%),radial-gradient(circle_at_90%_8%,#713f12_0%,transparent_24%),linear-gradient(180deg,#020617_0%,#111827_55%,#020617_100%)] dark:text-slate-50 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/admin" className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/75 dark:text-slate-300 dark:hover:text-white">
              <ArrowLeft className="size-4" />
              返回管理员工作台
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200">分数管理</Badge>
              <Badge variant="outline">实验组与对照组成效评价</Badge>
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-normal md:text-5xl">
              学习成绩与知识掌握分析
            </h1>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base">
              汇总成绩、作业、测验、课堂参与和知识点掌握情况，用于支撑《离散数学》智能教学应用的量化评价。
            </p>
          </div>
          <div className="rounded-2xl border border-indigo-200 bg-white/85 p-5 shadow-sm backdrop-blur dark:border-indigo-900 dark:bg-slate-900/75">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">综合提升指数</div>
            <div className="mt-1 text-4xl font-semibold">+14.4%</div>
            <div className="mt-3 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-300">
              <TrendingUp className="size-4" />
              知识点掌握度较对照组提升
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {scoreSummary.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.label} className="group rounded-xl border-slate-200 bg-white/88 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
                <CardContent className="pt-0">
                  <div className="flex items-start justify-between">
                    <span className={cn('rounded-lg p-2 transition group-hover:scale-110', colorClass[item.color as keyof typeof colorClass])}>
                      <Icon className="size-5" />
                    </span>
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">{item.change}</Badge>
                  </div>
                  <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">{item.label}</div>
                  <div className="mt-1 flex items-end gap-1">
                    <span className="text-3xl font-semibold">{item.value}</span>
                    <span className="pb-1 text-sm text-slate-500">{item.unit}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="size-5 text-indigo-600" />
              成绩分析工作台
            </CardTitle>
            <CardDescription>切换下方维度，查看实验组/对照组对比、知识点掌握、作业测验与学生画像。</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-5 flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-xs font-medium transition',
                    activeTab === tab
                      ? 'border-indigo-500 bg-indigo-500 text-white shadow-sm'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300',
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === '成绩对比' && (
              <DataTable
                columns={['指标', '实验组', '对照组', '差异', '数据来源', '采集时间']}
                rows={comparisonRows}
              />
            )}

            {activeTab === '知识点掌握' && (
              <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
                <div className="space-y-4">
                  {mastery.map(([name, experimental, control]) => (
                    <div key={name} className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                      <div className="mb-3 flex items-center justify-between text-sm">
                        <span className="font-semibold">{name}</span>
                        <span className="text-slate-500">实验组 {experimental}% / 对照组 {control}%</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                          <div className="h-2 rounded-full bg-indigo-500 transition-all duration-500" style={{ width: `${experimental}%` }} />
                        </div>
                        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                          <div className="h-2 rounded-full bg-amber-500 transition-all duration-500" style={{ width: `${control}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-slate-950 p-5 text-white">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <PieChart className="size-5 text-indigo-200" />
                    薄弱点提示
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    组合计数和代数结构仍是实验组中相对薄弱的两个模块，建议增加递推关系、容斥原理和代数结构判定的分层练习。
                  </p>
                  <div className="mt-5 space-y-3">
                    {['组合计数专题训练', '代数结构例题讲解', '图论证明复盘'].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-lg bg-white/10 p-3 text-sm">
                        <CheckCircle2 className="size-4 text-emerald-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === '作业测验' && (
              <DataTable
                columns={['章节', '提交数量', '正确率', '主要错因', '重点跟进内容']}
                rows={assignmentRows}
              />
            )}

            {activeTab === '学生画像' && (
              <DataTable
                columns={['画像类型', '人数', '识别依据', '建议措施']}
                rows={studentProfiles}
              />
            )}
          </CardContent>
        </Card>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            ['数据来源', '教务成绩单匿名汇总、课程平台作业记录、章节测验记录、助教批改记录'],
            ['采集时间', '成绩与作业数据覆盖2025.09-2026.01，问答与参与数据覆盖2025秋季学期'],
            ['评价口径', '实验组/对照组各50人，按同一课程目标、同一作业与测验任务进行对比'],
          ].map(([title, desc]) => (
            <Card key={title} className="rounded-xl border-slate-200 bg-white/85 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80">
              <CardContent className="pt-0">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <LineChart className="size-4 text-indigo-600" />
                  {title}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}
