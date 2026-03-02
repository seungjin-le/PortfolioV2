export interface Skill {
  name: string
  level: number // 1-5
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
  techStack: string[]
}

export interface Project {
  title: string
  description: string
  period: string
  role: string
  highlights: string[]
  techStack: string[]
  links?: { label: string; url: string }[]
}

export interface Education {
  school: string
  major: string
  period: string
  note?: string
}
