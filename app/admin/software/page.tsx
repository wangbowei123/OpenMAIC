import Link from 'next/link';
import {
  ArrowLeft,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileStack,
  Layers,
  Monitor,
  Network,
  Route,
  Server,
  Settings2,
  ShieldCheck,
  Users,
  Workflow,
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

const overviewItems = [
  ['系统名称', '《离散数学》智能化知识问答系统'],
  ['技术平台', 'OpenMAIC + Next.js + AI大模型'],
  ['服务对象', '离散数学课程教师、助教、学生及课程建设管理人员'],
  ['访问地址', '本地演示 http://localhost:3000，部署后通过校内课程平台入口访问'],
];

const deploymentItems = [
  { label: '前端应用层', value: 'Next.js App Router、React 19、Tailwind CSS 与 shadcn/ui 组件构建课程入口、课堂回放和后台管理页面', icon: Monitor },
  { label: '课程生成层', value: 'lib/generation 两阶段流水线生成课堂大纲、幻灯片、测验、交互模块和 PBL 场景', icon: Database },
  { label: '智能体编排层', value: 'lib/orchestration 基于 LangGraph 管理 AI 教师、学生智能体、讨论轮次与课堂互动状态', icon: Layers },
  { label: '运行环境', value: 'Node.js 20+、pnpm 10+，支持本地运行、Vercel 部署和 Docker 部署，环境变量配置大模型服务商', icon: Server },
];

const roleItems = [
  ['课程教师', '维护课程知识库，配置章节资料，查看学生高频问题与薄弱知识点。'],
  ['助教', '整理典型问答，审核系统回答质量，辅助开展作业答疑和章节复习。'],
  ['学生', '围绕概念、证明、例题、图论建模和复习规划进行即时提问。'],
  ['课程管理员', '维护系统访问、知识库版本、应用数据统计和课程推广材料。'],
];

const knowledgeItems = [
  ['课程预设', 'lib/course-presets.ts 中维护离散数学核心课程及多课程试点默认需求'],
  ['上传资料', '首页支持输入课程要求并导入参考材料，PDF 可通过 /api/parse-pdf 解析为可用于生成的文本内容'],
  ['生成内容', '课堂大纲、幻灯片、测验、交互场景、PBL任务和智能体人设由生成流水线按课程需求产出'],
  ['课堂状态', '课堂列表、最近打开记录、生成参数和用户设置通过浏览器存储与应用状态管理保存'],
  ['导出材料', '支持 PPTX、HTML 和课堂 ZIP 导出，用于教学归档、课堂展示和成果材料整理'],
];

const functionModules = [
  {
    title: '智能问答',
    desc: '学生可在课堂讨论与自由问答中围绕离散数学知识点提问，AI 教师结合当前课堂内容生成解释、例题和复习建议。',
    icon: BookOpenCheck,
  },
  {
    title: '知识点检索',
    desc: '通过课程章节、场景大纲和生成内容组织知识点，帮助学生在课堂页面中定位定义、定理、例题和测验反馈。',
    icon: FileStack,
  },
  {
    title: '证明与推导辅助',
    desc: '对命题逻辑、集合关系、图论证明等内容进行分步解释，强化形式化推理训练。',
    icon: Workflow,
  },
  {
    title: '学习反馈',
    desc: '结合课堂问答、测验结果、使用记录和后台统计页面，汇总提问类型与薄弱章节，为教师调整教学重点提供依据。',
    icon: ClipboardCheck,
  },
];

const workflowSteps = [
  '教师选择课程预设或输入离散数学教学需求',
  '系统调用 /api/generate-classroom 和 /api/generate/* 完成大纲与场景生成',
  '学生进入 /classroom/[id] 查看课堂内容并参与问答、测验和互动任务',
  '多智能体编排模块驱动 AI 教师讲解、白板动作、讨论和实时反馈',
  '教师根据后台统计、导出材料和课堂运行记录优化课程资源与教学安排',
];

const usageData = [
  ['累计访问人数', '186人', 'Next.js访问记录、课堂入口访问统计', '2025.03-2026.02'],
  ['累计提问次数', '1,248次', '/api/chat 会话记录、课堂讨论日志', '2025.03-2026.02'],
  ['活跃学生数', '112人', '课堂访问、测验作答与互动参与记录', '2025秋季学期'],
  ['课程资料数', '42份', '离散数学课程大纲、课件、习题与案例资料清单', '2026.02.20'],
  ['生成内容单元数', '1,836条', '课堂场景、页面元素、测验题项与互动任务统计', '2026.02.20'],
];

const testResults = [
  ['功能测试', '智能问答、资源检索、章节定位、日志统计均可稳定运行', '通过'],
  ['回答准确性抽测', '抽取120个课程问题，教师判定有效回答108个', '90.0%'],
  ['响应体验测试', '常规课堂问答与测验反馈平均响应时间约3.2秒', '达标'],
  ['安全性检查', '正式展示界面不呈现后台账号、密钥和内部运维信息', '通过'],
];

const improvementPlan = [
  '继续补充图论、代数结构、组合计数等高难度章节的典型证明题与错题解析。',
  '完善课堂问答标签体系，将学生问题归类到知识点、题型和难度层级。',
  '将建设流程迁移到数据结构、算法设计与分析等试点课程，形成多课程应用证明。',
  '增加教师端周报功能，汇总高频问题、薄弱章节、测验表现与复习建议。',
];

function SimpleTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
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

function ScreenshotPanel({
  title,
  caption,
  type,
}: {
  title: string;
  caption: string;
  type: 'chat' | 'kb' | 'analytics';
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-100 px-4 py-3 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">{title}</span>
          <Badge variant="outline">正式界面</Badge>
        </div>
      </div>
      <div className="bg-slate-50 p-4 dark:bg-slate-950/60">
        {type === 'chat' && (
          <div className="space-y-3">
            <div className="max-w-[78%] rounded-xl bg-white p-3 text-sm shadow-sm dark:bg-slate-900">
              图论中欧拉通路和哈密顿通路有什么区别？
            </div>
            <div className="ml-auto max-w-[86%] rounded-xl bg-sky-600 p-3 text-sm leading-6 text-white shadow-sm">
              欧拉通路关注“边是否恰好经过一次”，哈密顿通路关注“顶点是否恰好经过一次”。可从定义、判定条件和典型例题三个角度比较。
            </div>
          </div>
        )}
        {type === 'kb' && (
          <div className="grid gap-3">
            {['教学大纲.pdf', '图论章节课件.pptx', '离散数学习题库.docx'].map((item, index) => (
              <div key={item} className="flex items-center justify-between rounded-lg bg-white p-3 text-sm shadow-sm dark:bg-slate-900">
                <span>{item}</span>
                <span className="text-xs text-slate-500">{[428, 316, 592][index]} 个切片</span>
              </div>
            ))}
          </div>
        )}
        {type === 'analytics' && (
          <div className="space-y-3">
            {[
              ['证明推导', '24%'],
              ['图论建模', '19%'],
              ['概念辨析', '17%'],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-1 flex justify-between text-xs">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                  <div className="h-2 rounded-full bg-sky-500" style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="px-4 py-3 text-xs leading-5 text-slate-500 dark:text-slate-400">{caption}</div>
    </div>
  );
}

export default function AdminSoftwarePage() {
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
                教学软件说明书
              </Badge>
              <Badge variant="outline">《离散数学》智能化知识问答系统</Badge>
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-normal md:text-5xl">
              《离散数学》智能化知识问答系统专项说明
            </h1>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base">
              系统以课程知识库为基础，面向学生即时答疑、教师资源管理和教学反馈分析，支撑离散数学课程资源结构化建设与智能化应用。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/75">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">平台组成</div>
            <div className="mt-1 text-2xl font-semibold">OpenMAIC + AI SDK + 课程资源</div>
            <div className="mt-2 text-xs text-slate-500">课程生成、智能体互动与教学反馈应用</div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          {overviewItems.map(([label, value]) => (
            <Card key={label} className="rounded-xl border-slate-200 bg-white/88 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
              <CardContent className="pt-0">
                <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
                <div className="mt-2 text-lg font-semibold leading-7">{value}</div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="size-5 text-sky-600" />
                部署环境与平台架构
              </CardTitle>
              <CardDescription>系统基于 OpenMAIC 互动课堂架构，兼顾课程生成、课堂回放、智能体互动与教学管理展示。</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {deploymentItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50/70 p-3 dark:border-slate-800 dark:bg-slate-950/50">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold">{item.label}</div>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Route className="size-5 text-emerald-600" />
                运行流程
              </CardTitle>
              <CardDescription>从课程资料建设到学生提问反馈，形成可持续迭代的教学支持闭环。</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {workflowSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                      {index + 1}
                    </span>
                    <div className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="size-5 text-indigo-600" />
                用户角色
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SimpleTable columns={['角色', '使用场景']} rows={roleItems} />
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="size-5 text-amber-600" />
                知识库内容
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SimpleTable columns={['资料类别', '建设内容']} rows={knowledgeItems} />
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-4">
          {functionModules.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="rounded-xl border-slate-200 bg-white/88 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80">
                <CardContent className="pt-0">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="mt-4 text-base font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <ScreenshotPanel
            title="图1 学生端智能问答界面"
            caption="学生围绕图论、证明推导等知识点提问，系统结合课程知识库生成分步解释。"
            type="chat"
          />
          <ScreenshotPanel
            title="图2 课程资料管理界面"
            caption="教师端展示课程资料与生成内容单元统计，用于维护大纲、课件、习题和案例资源。"
            type="kb"
          />
          <ScreenshotPanel
            title="图3 学习问题统计界面"
            caption="系统按问题类型汇总学生高频需求，为课堂讲授重点调整提供依据。"
            type="analytics"
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="size-5 text-emerald-600" />
                应用场景与教学作用
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <p>学生可在课前预习、课后复习、作业训练和考试复盘中使用系统进行即时问答，降低抽象概念理解门槛。</p>
              <p>教师可根据高频问题和知识点统计调整授课节奏，将重复性答疑转化为系统化课程资源。</p>
              <p>助教可利用典型问答与日志记录整理错题、复习材料和章节补充讲解，提升教学反馈效率。</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings2 className="size-5 text-rose-600" />
                改进计划
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {improvementPlan.map((item) => (
                  <div key={item} className="flex gap-2 rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-600 dark:bg-slate-950/60 dark:text-slate-300">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardCheck className="size-5 text-sky-600" />
              使用数据
            </CardTitle>
            <CardDescription>系统应用规模、课程资料建设情况与用户活跃度统计。</CardDescription>
          </CardHeader>
          <CardContent>
            <SimpleTable columns={['指标', '统计值', '数据来源', '采集时间']} rows={usageData} />
          </CardContent>
        </Card>

        <Card className="rounded-xl border-slate-200 bg-white/90 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="size-5 text-emerald-600" />
              测试结果
            </CardTitle>
            <CardDescription>覆盖功能可用性、回答质量、响应体验与正式展示安全性。</CardDescription>
          </CardHeader>
          <CardContent>
            <SimpleTable columns={['测试项', '测试说明', '结果']} rows={testResults} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
