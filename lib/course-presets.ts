export type CoursePresetId =
  | 'discrete-math'
  | 'data-structures'
  | 'algorithm-design'
  | 'programming-foundation'
  | 'ai-introduction';

export interface CoursePreset {
  id: CoursePresetId;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  defaultRequirement: string;
}

export const COURSE_PRESETS: CoursePreset[] = [
  {
    id: 'discrete-math',
    title: '离散数学',
    subtitle: '核心课程 · 智能问答与白板推导',
    description: '项目首个验证场景，围绕逻辑、集合、图论、组合计数与代数结构建设课程知识库。',
    tags: ['核心验证', '命题逻辑', '图论', '组合计数'],
    defaultRequirement:
      '请生成一门《离散数学》AI互动课程，面向计算机专业本科生，重点讲解命题逻辑、集合与关系、图论、树、组合计数和代数结构。课程需要包含概念讲解、白板推导、互动测验、典型例题、编程实践引导和学习成效反馈，并体现AI大模型驱动的课程资源建设与智能答疑场景。',
  },
  {
    id: 'data-structures',
    title: '数据结构',
    subtitle: '试点课程 · 结构可视化与操作演示',
    description: '迁移离散数学知识库建设流程，围绕线性表、树、图、查找与排序组织教学资源。',
    tags: ['试点应用', '树与图', '查找排序', '结构可视化'],
    defaultRequirement:
      '请生成一门《数据结构》AI互动课程，面向计算机专业本科生，重点讲解线性表、栈与队列、树、图、查找和排序。课程需要包含结构可视化、操作过程演示、复杂度分析、互动测验和实践任务，并说明该课程如何作为《离散数学》智能教学资源建设的迁移应用场景。',
  },
  {
    id: 'algorithm-design',
    title: '算法设计与分析',
    subtitle: '试点课程 · 算法可视化与实践任务',
    description: '承接离散数学中的图论、递归和组合思想，拓展到算法设计方法与复杂度分析。',
    tags: ['试点应用', '动态规划', '贪心算法', '图算法'],
    defaultRequirement:
      '请生成一门《算法设计与分析》AI互动课程，面向计算机专业本科生，重点讲解算法复杂度、递归与分治、动态规划、贪心算法、图算法、回溯与分支限界。课程需要包含算法可视化、伪代码讲解、复杂度分析、互动测验、典型题目讲评和实践任务，并说明该课程如何作为《离散数学》智能教学资源建设的迁移应用场景。',
  },
  {
    id: 'programming-foundation',
    title: '程序设计基础',
    subtitle: '试点课程 · 编程实践与即时反馈',
    description: '面向新生基础编程能力培养，建设语法、控制结构、函数、数组和调试案例资源。',
    tags: ['试点应用', '程序结构', '函数数组', '调试训练'],
    defaultRequirement:
      '请生成一门《程序设计基础》AI互动课程，面向计算机专业低年级学生，重点讲解变量与类型、分支循环、函数、数组、调试方法和基础程序设计思维。课程需要包含代码示例、运行过程解释、互动测验、错误诊断和实践任务，并说明该课程如何作为《离散数学》智能教学资源建设的迁移应用场景。',
  },
  {
    id: 'ai-introduction',
    title: '人工智能导论',
    subtitle: '试点课程 · 概念图谱与案例研讨',
    description: '围绕搜索、知识表示、机器学习与大模型应用，形成面向AI基础课程的教学资源试点。',
    tags: ['试点应用', '搜索策略', '知识表示', '大模型案例'],
    defaultRequirement:
      '请生成一门《人工智能导论》AI互动课程，面向计算机专业本科生，重点讲解搜索策略、知识表示、机器学习基础、神经网络概念和大模型应用。课程需要包含概念图谱、案例研讨、互动测验、实践任务和学习反馈，并说明该课程如何作为《离散数学》智能教学资源建设的迁移应用场景。',
  },
];

export const DEFAULT_COURSE_PRESET = COURSE_PRESETS[0];

export function getCoursePreset(id: string | null | undefined): CoursePreset {
  return COURSE_PRESETS.find((preset) => preset.id === id) ?? DEFAULT_COURSE_PRESET;
}
