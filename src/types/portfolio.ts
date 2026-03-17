/**
 * @description Skill
 * @property name - 기술 이름
 * @property level - 기술 수준 (1-5)
 */
export interface Skill {
  name: string
  level: number
}

/**
 * @description SkillCategory
 * @property category - 기술 카테고리
 * @property skills - 기술 목록
 */
export interface SkillCategory {
  category: string
  skills: Skill[]
}

/**
 * @description Experience
 * @property company - 회사 이름
 * @property role - 직무
 * @property period - 기간
 * @property description - 설명
 * @property achievements - 성과
 * @property techStack - 기술 스택
 */
export interface Experience {
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
  techStack: string[]
}

/**
 * @description Project
 * @property title - 프로젝트 이름
 * @property description - 설명
 * @property period - 기간
 * @property role - 직무
 * @property highlights - 주요 기능
 * @property techStack - 기술 스택
 */
export interface Project {
  title: string
  description: string
  period: string
  role: string
  highlights: string[]
  techStack: string[]
  links?: { label: string; url: string }[]
}

/**
 * @description Education
 * @property school - 학교 이름
 * @property major - 전공
 * @property period - 기간
 * @property note - 비고
 */
export interface Education {
  school: string
  major: string
  period: string
  note?: string
}
