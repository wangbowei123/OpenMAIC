import Link from 'next/link';
import {
  ArrowLeft,
  BookOpenCheck,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  LineChart,
  ShieldCheck,
  Sparkles,
  Tags,
  UserCheck,
  UserCog,
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

const overviewCards = [
  { label: '参与总人数', value: '107人', note: '教师、助教、学生与课程管理员', icon: Users, color: 'sky' },
  { label: '实验组学生', value: '50人', note: '使用智能课堂与问答支持', icon: GraduationCap, color: 'emerald' },
  { label: '对照组学生', value: '50人', note: '采用常规课堂与资料学习', icon: UserCheck, color: 'indigo' },
  { label: '近7日活跃', value: '86人', note: '访问、提问、测验或资料查看', icon: LineChart, color: 'amber' },
];

const roleRows = [
  ['课程负责人', '1人', '课程建设统筹、教学目标设定、应用成效审核'],
  ['任课教师', '3人', '维护课程资料、查看薄弱知识点、调整课堂教学安排'],
  ['助教', '5人', '整理典型问答、辅助批改作业、记录课堂反馈'],
  ['学生', '100人', '参与课堂学习、提交测验、进行问答互动与反馈评价'],
  ['课程管理员', '2人', '维护人员分组、课程资料、统计报表和成果材料'],
];

const groupRows = [
  ['实验组', '50人', '46人', '91.6%', '83.5%', '智能问答、互动测验、课堂回放'],
  ['对照组', '50人', '39人', '80.0%', '69.9%', '常规课堂、课件资料、线下答疑'],
];

const studentRows = [
  ['S202501', '离散数学1班', '实验组', '高频提问', '图论建模', '28次', '92%'],
  ['S202508', '离散数学1班', '实验组', '作业稳定', '证明推导', '19次', '96%'],
  ['S202517', '离散数学2班', '实验组', '参与活跃', '组合计数', '22次', '88%'],
  ['S202534', '离散数学2班', '对照组', '资料学习', '集合关系', '6次', '80%'],
  ['S202546', '离散数学3班', '对照组', '测验待提升', '命题逻辑', '4次', '76%'],
  ['S202562', '算法设计与分析', '试点组', '算法追踪', '动态规划', '15次', '90%'],
];

const teacherRows = [
  ['课程负责人', '课程目标、建设进度、成果材料审核', '每两周复核一次课程数据与教学反馈'],
  ['任课教师', '章节资料维护、课堂重点调整、典型案例补充', '根据高频问题更新讲授顺序与例题'],
  ['助教A组', '实验组问答整理、错题标签标注、作业问题归类', '形成周度典型问题清单'],
  ['助教B组', '对照组作业记录、测验情况整理、问卷回收', '支持实验组/对照组成效对比'],
];

const pilotRows = [
  ['离散数学', '核心课程', '100人', '逻辑、集合、图论、组合计数、代数结构'],
  ['算法设计与分析', '试点课程', '28人', '复杂度、分治、动态规划、贪心、图算法'],
  ['数据结构', '试点计划', '24人', '线性表、树、图、查找、排序'],
  ['程序设计基础', '试点计划', '32人', '控制结构、函数、数组、调试训练'],
  ['人工智能导论', '试点计划', '18人', '搜索、知识表示、机器学习、大模型案例'],
];

const sourceRows = [
  ['课堂访问记录', '登录、课堂进入、回放查看、资料浏览', '2025.09-2026.02'],
  ['互动学习记录', '课堂提问、测验作答、讨论参与、任务完成', '2025秋季学期'],
  ['教学管理记录', '教师维护、助教标注、作业批改、问卷回收', '2025.10-2026.02'],
];

const colorClass = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
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

export default function AdminPeoplePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_12%_8%,#dcfce7_0%,transparent_28%),radial-gradient(circle_at_88%_0%,#dbeafe_0%,transparent_26%),linear-gradient(180deg,#f8fafc_0%,#eef7f2_55%,#f8fafc_100%)] px-4 py-6 text-slate-950 dark:bg-[radial-gradient(circle_at_12%_8%,#052e1b_0%,transparent_30%),radial-gradient(circle_at_88%_0%,#082f49_0%,transparent_28%),linear-gradient(180deg,#020617_0%,#06151a_55%,#020617_100%)] dark:text-slate-50 md:px-8">
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
              <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                人员管理
              </Badge>
              <Badge variant="outline">实验组 / 对照组 / 试点课程</Badge>
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-normal md:text-5xl">
              课程参与人员与分组管理
            </h1>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base">
              围绕《离散数学》核心课程建立教师、助教、实验组、对照组和多课程试点人员台账，为学习成效评价、教学反馈和推广应用提供人员数据支撑。
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-white/85 p-5 shadow-sm backdrop-blur dark:border-emerald-900 dark:bg-slate-900/75">
            <div className="absolute -right-8 -top-8 size-24 rounded-full bg-emerald-100 blur-2xl dark:bg-emerald-950" />
            <div className="relative text-xs font-medium text-slate-500 dark:text-slate-400">当前管理范围</div>
            <div className="relative mt-1 text-2xl font-semibold">107名成员</div>
            <div className="relative mt-2 text-xs text-slate-500">覆盖核心课程与4门试点课程</div>
            <div className="relative mt-5 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-lg bg-emerald-50 px-3 py-2 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200">
                <div className="font-semibold">86</div>
                <div>近7日活跃</div>
              </div>
              <div className="rounded-lg bg-sky-50 px-3 py-2 text-sky-800 dark:bg-sky-950/60 dark:text-sky-200">
                <div className="font-semibold">55</div>
                <div>实验/试点</div>
              </div>
              <div className="rounded-lg bg-amber-50 px-3 py-2 text-amber-800 dark:bg-amber-950/60 dark:text-amber-200">
                <div className="font-semibold">12</div>
                <div>待跟进</div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {overviewCards.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.label} className="group rounded-xl border-slate-200 bg-white/88 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
                <CardContent className="pt-0">
                  <div className="flex items-start justify-between gap-3">
                    <span className={cn('rounded-lg p-2 transition group-hover:scale-110', colorClass[item.color as keyof typeof colorClass])}>
                      <Icon className="size-5" />
                    </span>
                    <Sparkles className="size-4 text-slate-300 transition group-hover:text-emerald-500" />
                  </div>
                  <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">{item.label}</div>
                  <div className="mt-1 text-3xl font-semibold">{item.value}</div>
                  <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">{item.note}</p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-emerald-600" />
                角色权限
              </CardTitle>
              <CardDescription>按课程建设职责划分人员角色，保证教学、答疑、统计和材料归档流程清晰。</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={['角色', '人数', '主要权限与职责']} rows={roleRows} />
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="size-5 text-sky-600" />
                实验组与对照组
              </CardTitle>
              <CardDescription>保留样本数量、活跃情况和核心学习过程指标，支撑教学成效对比分析。</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={['分组', '样本数', '活跃人数', '作业提交率', '作业正确率', '学习方式']} rows={groupRows} />
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tags className="size-5 text-indigo-600" />
                学生学习画像
              </CardTitle>
              <CardDescription>通过学习标签呈现学生参与状态和薄弱知识点，便于教师开展针对性辅导。</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={['学生编号', '班级/课程', '分组', '状态标签', '薄弱点', '问答次数', '测验完成率']} rows={studentRows} />
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200 bg-emerald-950 text-white shadow-sm dark:border-emerald-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="size-5 text-emerald-200" />
                跟进重点
              </CardTitle>
              <CardDescription className="text-emerald-100/75">用于人员管理页的当周关注事项。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                ['图论证明', '18名学生存在推导步骤缺漏'],
                ['组合计数', '12名学生需要补充容斥原理练习'],
                ['试点课程', '算法设计与分析已完成首轮学生导入'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-lg bg-white/10 p-3 transition hover:bg-white/15">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <CheckCircle2 className="size-4 text-emerald-200" />
                    {title}
                  </div>
                  <p className="mt-2 text-xs leading-5 text-emerald-50/80">{desc}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCog className="size-5 text-amber-600" />
                教师与助教协作
              </CardTitle>
              <CardDescription>明确教师、助教和管理员在课程运行中的分工，减少重复沟通和材料遗漏。</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={['人员类型', '负责内容', '协作产出']} rows={teacherRows} />
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpenCheck className="size-5 text-sky-600" />
                试点课程人员覆盖
              </CardTitle>
              <CardDescription>以《离散数学》为核心，记录多课程应用场景中的参与人员和建设内容。</CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={['课程名称', '应用状态', '参与人数', '建设重点']} rows={pilotRows} />
            </CardContent>
          </Card>
        </section>

        <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="size-5 text-emerald-600" />
              人员数据来源
            </CardTitle>
            <CardDescription>人员管理页面采用课程运行过程数据，确保统计口径、采集范围和时间节点明确。</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={['来源类型', '采集内容', '采集时间']} rows={sourceRows} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
