export const PROFILE = {
  name: '김개발',
  nameEn: 'Gaebal Kim',
  role: 'Frontend Developer',
  experience: '3년차',
  email: 'gaebal.dev@gmail.com',
  github: 'https://github.com/gaebal-dev',
  blog: 'https://blog.gaebal.dev',
  phone: '010-1234-5678',
  location: '서울, 대한민국',
  summary:
    '사용자 경험을 최우선으로 생각하는 3년차 프론트엔드 개발자입니다. React와 TypeScript 기반의 모던 웹 애플리케이션을 설계하고, 성능 최적화와 접근성을 고려한 UI를 구현합니다.',
  introduction: [
    '복잡한 비즈니스 로직을 직관적인 UI로 풀어내는 것을 좋아합니다.',
    'CI/CD 파이프라인 구축부터 AWS 배포까지 프론트엔드 인프라 전반을 다룰 수 있습니다.',
    '코드 리뷰와 기술 공유를 통해 팀 전체의 개발 역량을 높이는 데 기여합니다.',
    '새로운 기술 도입 시 팀과의 합의, 문서화, 점진적 마이그레이션을 중시합니다.',
  ],
}

export interface Skill {
  name: string
  level: number // 1-5
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export const SKILLS: SkillCategory[] = [
  {
    category: 'Core',
    skills: [
      { name: 'TypeScript', level: 5 },
      { name: 'JavaScript (ES6+)', level: 5 },
      { name: 'HTML / CSS', level: 5 },
    ],
  },
  {
    category: 'Framework & Library',
    skills: [
      { name: 'React', level: 5 },
      { name: 'Next.js (App Router)', level: 4 },
      { name: 'React Hook Form', level: 4 },
      { name: 'TanStack Query', level: 4 },
      { name: 'Zustand', level: 4 },
    ],
  },
  {
    category: 'Styling',
    skills: [
      { name: 'Tailwind CSS', level: 5 },
      { name: 'Styled Components', level: 4 },
      { name: 'CSS Modules', level: 4 },
    ],
  },
  {
    category: 'Tooling & Infra',
    skills: [
      { name: 'Vite / Webpack', level: 4 },
      { name: 'Docker', level: 3 },
      { name: 'GitHub Actions', level: 4 },
      { name: 'AWS (S3, CloudFront)', level: 3 },
      { name: 'Nginx', level: 3 },
    ],
  },
  {
    category: 'Testing & Quality',
    skills: [
      { name: 'Vitest / Jest', level: 4 },
      { name: 'React Testing Library', level: 4 },
      { name: 'Storybook', level: 3 },
    ],
  },
]

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
  techStack: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    company: '(주) 테크스타트',
    role: 'Frontend Developer',
    period: '2024.03 — 현재',
    description: 'B2B SaaS 플랫폼의 프론트엔드 개발 및 디자인 시스템 구축',
    achievements: [
      'Next.js App Router 기반 대시보드 신규 개발, 초기 로딩 속도 40% 개선',
      '공통 컴포넌트 라이브러리(30+ 컴포넌트) 설계 및 Storybook 문서화',
      'React Hook Form + Zod 기반 복잡한 멀티스텝 폼 구현',
      'GitHub Actions CI/CD 파이프라인 구축, 배포 자동화',
      'AWS S3 + CloudFront 정적 배포 인프라 세팅',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'TanStack Query',
      'Zustand',
      'Tailwind CSS',
      'Storybook',
    ],
  },
  {
    company: '(주) 웹크래프트',
    role: 'Frontend Developer',
    period: '2023.01 — 2024.02',
    description: '이커머스 플랫폼 및 어드민 시스템 프론트엔드 개발',
    achievements: [
      'React + TypeScript 기반 이커머스 웹앱 개발 (MAU 50K+)',
      '상품 검색 필터 성능 최적화 (렌더링 시간 60% 감소)',
      'Webpack → Vite 마이그레이션으로 빌드 시간 70% 단축',
      '주니어 개발자 2명 온보딩 및 코드 리뷰 담당',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Styled Components',
      'Vite',
    ],
  },
]

export interface Project {
  title: string
  description: string
  period: string
  role: string
  highlights: string[]
  techStack: string[]
  links?: { label: string; url: string }[]
}

export const PROJECTS: Project[] = [
  {
    title: 'DataFlow Dashboard',
    description:
      '실시간 데이터 시각화 대시보드. 복잡한 차트와 테이블을 조합한 B2B 분석 도구.',
    period: '2024.06 — 2024.12',
    role: '프론트엔드 리드 (3인)',
    highlights: [
      'WebSocket 기반 실시간 데이터 스트리밍 구현',
      'Virtual Scroll로 10만 행 테이블 렌더링 최적화',
      'React.lazy + Suspense 코드 스플리팅 적용, 번들 크기 35% 감소',
      '다크모드 / 라이트모드 테마 시스템 구축',
    ],
    techStack: ['Next.js', 'TypeScript', 'D3.js', 'TanStack Table', 'Zustand'],
    links: [
      { label: 'GitHub', url: '#' },
      { label: 'Demo', url: '#' },
    ],
  },
  {
    title: 'ShopEase',
    description:
      '모바일 퍼스트 이커머스 플랫폼. 상품 탐색부터 결제까지 전체 구매 플로우 구현.',
    period: '2023.06 — 2024.01',
    role: '프론트엔드 개발 (2인)',
    highlights: [
      'Intersection Observer 기반 무한 스크롤 상품 목록 구현',
      'React Hook Form + Zod로 주문/결제 폼 검증 로직 구축',
      'Lighthouse 성능 점수 45 → 92점 개선 (이미지 최적화, 지연 로딩)',
      '카카오페이, 토스페이먼츠 PG 연동',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Styled Components',
      'MSW',
    ],
    links: [{ label: 'GitHub', url: '#' }],
  },
  {
    title: 'DevLog',
    description: '마크다운 기반 기술 블로그. SSG로 빌드하여 빠른 로딩 속도 제공.',
    period: '2023.03 — 2023.05',
    role: '개인 프로젝트',
    highlights: [
      'Next.js SSG + MDX로 빌드 시 정적 페이지 생성',
      'SEO 메타태그 자동 생성, Google 검색 노출 최적화',
      'AWS S3 + CloudFront + Route 53 배포 자동화',
      'Giscus 기반 댓글 시스템 통합',
    ],
    techStack: ['Next.js', 'MDX', 'Tailwind CSS', 'AWS'],
    links: [
      { label: 'GitHub', url: '#' },
      { label: 'Blog', url: '#' },
    ],
  },
]

export interface Education {
  school: string
  major: string
  period: string
  note?: string
}

export const EDUCATION: Education[] = [
  {
    school: '한국대학교',
    major: '컴퓨터공학과',
    period: '2018.03 — 2022.08',
    note: '학점 3.8/4.5',
  },
]

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const
