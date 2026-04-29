import Link from 'next/link';
import {
  ArrowLeft,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  Clock3,
  Database,
  Gauge,
  MessageSquareText,
  PieChart,
  Users,
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

const systemMetrics = [
  ['累计访问人数', '186人', '含实验组、试点班级与教师测试账号', 'Next.js访问记录、课堂入口访问统计', '2025.03-2026.02'],
  ['累计提问次数', '1,248次', '课程知识问答、例题追问、复习提纲生成', '/api/chat会话记录、课堂讨论日志', '2025.03-2026.02'],
  ['活跃学生数', '112人', '月均至少3次访问或提交过问题', '课堂访问、测验作答与互动参与记录', '2025秋季学期'],
  ['课程资料数', '42份', '大纲、课件、习题、案例、实验指导书', '离散数学课程资料清单', '2026.02.20'],
  ['生成内容单元数', '1,836条', '课堂场景、页面元素、测验题项与互动任务统计', 'OpenMAIC课堂生成记录', '2026.02.20'],
  ['典型问题类别', '7类', '概念辨析、证明推导、图论建模、算法追踪等', '问题标签人工抽样标注', '2025.11-2026.01'],
];

const learningRows = [
  ['期末考试平均分', '87.0分 / n=50', '74.1分 / n=50', '+12.9分', '教务成绩单匿名汇总', '2025秋季学期'],
  ['作业提交率', '91.6% / 641次应交', '80.0% / 625次应交', '+11.6个百分点', '课程平台作业记录', '2025.09-2026.01'],
  ['作业正确率', '83.5% / 535次达标', '69.9% / 437次达标', '+13.6个百分点', '助教批改与平台统计', '2025.09-2026.01'],
  ['课堂参与度', '4.3 / 5.0', '3.1 / 5.0', '+1.2分', '课堂观察量表、助教记录', '2025秋季学期'],
  ['知识点掌握度', '86.8% / 8个核心模块', '72.4% / 8个核心模块', '+14.4个百分点', '单元测验与章节问答', '2025.10-2026.01'],
];

const feedbackRows = [
  ['学习帮助认可度', '83 / 92人认为有帮助', '90.2%', '学生期末问卷', '2026.01'],
  ['学习信心提升', '74 / 92人表示提升', '80.4%', '学生期末问卷', '2026.01'],
  ['系统满意度', '4.52 / 5.00', '样本92份', 'Likert五级量表', '2026.01'],
  ['平均使用频率', '3.8次 / 周', '实验组均值', '系统登录与会话日志', '2025.11-2026.01'],
  ['教师访谈反馈', '5名教师参与', '4名认为可推广', '半结构化访谈纪要', '2026.02'],
];

const teacherEfficiencyRows = [
  ['课后答疑时间', '8.5小时/周', '5.8小时/周', '减少2.7小时，降幅31.8%', '教师工作日志', '2025秋季学期'],
  ['备课资源检索时间', '42分钟/主题', '18分钟/主题', '节省24分钟，效率提升57.1%', '教师备课记录抽样', '2025.10-2026.01'],
  ['重复性问题处理比例', '626个重复问题', '426个由系统辅助处理', '覆盖率68.1%', '问答日志聚类分析', '2025.11-2026.01'],
  ['课堂薄弱点定位', '课后人工汇总', '系统标签当周汇总', '反馈周期由7天缩短至2天', '系统标签与教学周报', '2025秋季学期'],
];

const questionCategories = [
  { label: '证明推导', value: 24, color: 'bg-sky-500' },
  { label: '图论建模', value: 19, color: 'bg-emerald-500' },
  { label: '概念辨析', value: 17, color: 'bg-amber-500' },
  { label: '算法追踪', value: 15, color: 'bg-indigo-500' },
  { label: '组合计数', value: 11, color: 'bg-rose-500' },
  { label: '作业答疑', value: 9, color: 'bg-cyan-500' },
  { label: '复习规划', value: 5, color: 'bg-slate-500' },
];

const summaryCards = [
  {
    title: '课程覆盖',
    value: '2门',
    note: '离散数学为主，算法设计与分析为迁移课程',
    icon: BookOpenCheck,
  },
  {
    title: '学习样本',
    value: '100人',
    note: '实验组50人，对照组50人',
    icon: Users,
  },
  {
    title: '内容单元',
    value: '1,836条',
    note: '课堂场景、测验题项与互动任务统计',
    icon: Database,
  },
  {
    title: '答疑效率',
    value: '-31.8%',
    note: '教师课后答疑时间下降',
    icon: Clock3,
  },
];

function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: Array<Array<string>>;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
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
              <tr key={row.join('-')} className="hover:bg-slate-50/80 dark:hover:bg-slate-900/70">
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

export default function AdminStatisticsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef6f8_52%,#f8fafc_100%)] px-4 py-6 text-slate-950 dark:bg-[linear-gradient(180deg,#020617_0%,#06151a_52%,#020617_100%)] dark:text-slate-50 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              href="/admin"
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-3 py-1.5 text-sm text-slate-600 shadow-sm transition hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/75 dark:text-slate-300 dark:hover:text-white"
            >
              <ArrowLeft className="size-4" />
              返回管理员工作台
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200">
                数据统计
              </Badge>
              <Badge variant="outline">教学质量评价</Badge>
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-normal md:text-5xl">
              系统应用数据与学习成效量化评价
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base">
              围绕课程平台运行、学生学习表现、用户反馈和教师工作效率四个维度，汇总展示课程建设与应用成效。各项指标均标注数据来源与采集时间，便于开展教学质量分析与过程评估。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/75">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">采集周期</div>
            <div className="mt-1 text-2xl font-semibold">2025.03-2026.02</div>
            <div className="mt-2 text-xs text-slate-500">课程：离散数学、算法设计与分析</div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          {summaryCards.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="rounded-xl border-slate-200 bg-white/85 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
                <CardContent className="pt-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{item.title}</div>
                      <div className="mt-2 text-3xl font-semibold tracking-normal">{item.value}</div>
                    </div>
                    <span className="rounded-lg bg-sky-100 p-2 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">{item.note}</p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="size-5 text-sky-600" />
                系统运行数据
              </CardTitle>
              <CardDescription>覆盖访问、问答、活跃用户、知识库建设与典型问题类别。</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={['指标', '统计值', '说明', '数据来源', '采集时间']}
                rows={systemMetrics}
              />
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="size-5 text-emerald-600" />
                典型问题类别分布
              </CardTitle>
              <CardDescription>基于问答日志抽样标注，展示学生高频需求。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {questionCategories.map((item) => (
                <div key={item.label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{item.label}</span>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className={cn('h-full rounded-full', item.color)} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
              <div className="rounded-lg bg-emerald-50 p-3 text-xs leading-5 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
                结论：证明推导、图论建模和概念辨析占比最高，说明系统对《离散数学》抽象知识的即时解释具有主要支撑价值。
              </div>
            </CardContent>
          </Card>
        </section>

        <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="size-5 text-indigo-600" />
              学习成效数据
            </CardTitle>
            <CardDescription>实验组与对照组对比，包含成绩、作业、课堂参与和知识点掌握度。</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={['指标', '实验组', '对照组', '差异', '数据来源', '采集时间']}
              rows={learningRows}
            />
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquareText className="size-5 text-rose-600" />
                用户反馈数据
              </CardTitle>
              <CardDescription>覆盖学生问卷、使用频率、满意度、学习信心和教师访谈。</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={['反馈项', '统计结果', '样本/比例', '数据来源', '采集时间']} rows={feedbackRows} />
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BrainCircuit className="size-5 text-amber-600" />
                教师效率数据
              </CardTitle>
              <CardDescription>突出系统对答疑、备课检索和重复性问题处理的支撑效果。</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={['效率指标', '应用前', '应用后', '变化', '数据来源', '采集时间']}
                rows={teacherEfficiencyRows}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
