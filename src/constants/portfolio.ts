export const PROFILE = {
  name: '이승진',
  nameEn: 'Seungjin Lee',
  role: 'Frontend Developer',
  experience: '',
  email: 'dltmdwls@gmail.com',
  github: 'https://github.com/seungjin-le',
  blog: 'https://seungjin-le.github.io/',
  phone: '010-5574-2436',
  location: '대한민국',
  summary: 'React와 Next.js를 중심으로 웹 서비스와 관리자 페이지, 하이브리드 앱까지 경험하며 사용자 경험과 유지보수성을 함께 고려한 코드를 지향하는 프론트엔드 개발자입니다.',
  introduction: [
    '고등학교 3학년 때부터 반도체 업계에서 약 4년간 근무하며 빠른 적응력과 문제 해결 능력을 쌓았고, 생산관리 시스템을 개발하던 개발자들의 일을 보며 프론트엔드 개발자의 길을 선택했습니다.',
    '알고리즘 문제 풀이와 코드 리팩터링을 통해 구현 위주의 개발에서 한 단계 나아가, 구조와 성능을 의식하는 개발자로 성장하고자 노력하고 있습니다.',
    '배운 내용은 블로그에 정리해 지식을 관리하고, 비전공자로서 모르는 것을 인정하고 적극적으로 질문·학습하는 태도를 강점으로 삼고 있습니다.',
    'CI/CD 파이프라인 구축부터 단일 레포-다중 도메인 빌드 구조 설계까지, 프론트엔드 개발 전반을 다루어 보았았습니다.',
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
      { name: 'JavaScript', level: 5 },
      { name: 'TypeScript', level: 4 },
      { name: 'HTML / CSS', level: 5 },
    ],
  },
  {
    category: 'Framework & Library',
    skills: [
      { name: 'React', level: 5 },
      { name: 'Next.js', level: 4 },
      { name: 'Vue / Nuxt', level: 4 },
      { name: 'Flutter', level: 3 },
      { name: 'TanStack Query', level: 4 },
    ],
  },
  {
    category: 'State Management',
    skills: [
      { name: 'Zustand', level: 4 },
      { name: 'Redux', level: 3 },
      { name: 'Recoil', level: 3 },
    ],
  },
  {
    category: 'Styling',
    skills: [
      { name: 'Tailwind CSS', level: 4 },
      { name: 'Styled Components', level: 4 },
      { name: 'SASS / SCSS', level: 3 },
    ],
  },
  {
    category: 'Tooling & Collaboration',
    skills: [
      { name: 'Git / GitHub / GitLab', level: 4 },
      { name: 'GitHub Actions', level: 3 },
      { name: 'Storybook', level: 3 },
      { name: 'Slack / Notion', level: 4 },
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
    company: '비유바움 주식회사',
    role: '프론트엔드',
    period: '2023.10 — 2026.01',
    description: '소상공인 대상 통합 관리 서비스, 협회/교육 플랫폼, 자회사 사이트 등 다수 프론트엔드 프로젝트 개발',
    achievements: [
      'Flutter + React.js 기반 하이브리드 앱 개발 및 네이티브-WebView 양방향 통신 구현',
      'Next.js + TailwindCSS 기반 멀티 플랫폼(협회/교육 사이트 + 백오피스) 개발, 화면의 80% 이상 단독 설계·구현',
      '단일 레포-다중 도메인 빌드 구조 설계로 유지보수 시 중복 수정 파일 수 50% 이상 절감',
      'GitHub Actions CI/CD 파이프라인으로 빌드·테스트·배포 자동화',
    ],
    techStack: [
      'React.js',
      'Next.js',
      'Vue.js',
      'Nuxt.js',
      'TypeScript',
      'Flutter',
      'TailwindCSS',
      'Styled Components',
      'TanStack Query',
      'Zustand',
      'Recoil',
      'Storybook',
      'GitHub Actions',
    ],
  },
  {
    company: '(주) OKPOS',
    role: '프론트엔드',
    period: '2022.10 — 2023.04',
    description: '파트너 센터 백오피스 시스템 전반 개발',
    achievements: [
      '공통 컴포넌트 설계 및 구현을 통한 재사용성 향상',
      '회원 관리, 공지사항, 영업 대리점, 발주 신청, 제품 유지보수, 교육 관리 등 다수 관리 시스템 개발',
      'Chart.js 기반 데이터 시각화 및 그래프 구현',
      'Props 기반 컴포넌트 구조화로 유지보수성 개선',
    ],
    techStack: ['React.js', 'JavaScript', 'Chart.js'],
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
    title: '소상공인 대상 통합 관리 서비스',
    description: 'Flutter + React.js 기반 하이브리드 앱. 직원 관리, 급여·세무, 출퇴근 관리 등 소상공인 통합 관리 기능 등을 제공.',
    period: '2025.11 — 2026.01',
    role: '프론트엔드 대리 · 비유바움 주식회사',
    highlights: [
      'Message Event를 활용한 네이티브-WebView 양방향 통신 구현',
      'TanStack Query + Axios + flutter_secure_storage 조합으로 웹뷰 내 서버 상태 관리 및 보안 저장소 연동',
      'flutter_secure_storage를 활용한 토큰 및 사용자 데이터의 안전한 영구 저장',
      'Styled-components로 반응형 웹뷰 UI 구성, Flutter 네이티브와 통일된 디자인 시스템 적용',
    ],
    techStack: ['Flutter', 'React.js', 'Styled Components', 'TanStack Query', 'Axios'],
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.bubaum.sosomarket.app&pcampaignid=web_share',
      },
    ],
  },
  {
    title: '한국 외식산업협회 교육/협회/백오피스 통합 플랫폼',
    description: '협회·교육 사이트 & 백오피스 통합 개발 프로젝트. 단일 레포-다중 도메인 구조로 설계.',
    period: '2025.10 — 2026.01',
    role: '프론트엔드 대리 · 비유바움 주식회사',
    highlights: [
      '화면의 80% 이상 프론트 단독 설계·구현',
      '협회/교육 사이트를 단일 레포-다중 도메인 빌드 구조로 설계, 유지보수 시 중복 수정 파일 수 50% 이상 절감',
      'GitHub Actions CI/CD 파이프라인으로 빌드·테스트·배포 자동화',
      'TanStack Query 데이터 캐싱으로 페이지 로딩 속도 최적화 및 서버 부하 감소',
      'Storybook으로 컴포넌트 문서화 및 개발 효율성 향상',
    ],
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'TanStack Query', 'Zustand', 'Axios', 'Storybook', 'GitHub Actions'],
    links: [
      { label: '협회 사이트', url: 'https://www.kofsia.or.kr/' },
      { label: '교육 사이트', url: 'https://www.kfoodedu.or.kr/' },
    ],
  },
  {
    title: '바움 P&S 자회사 웹사이트',
    description: '자회사 소개 및 서비스 홍보를 위한 웹사이트 구축.',
    period: '2024.01 — 2024.02',
    role: '프론트엔드 주임 · 비유바움 주식회사',
    highlights: [
      'React.js 및 TailwindCSS 기반의 프론트엔드 아키텍처 설계 및 화면 개발',
      'Axios를 활용한 REST API 연동으로 동적 데이터 조회 기능 구현',
      'Recoil을 이용한 전역 상태 관리 구조 설계로 코드 일관성 개선',
      'TanStack Query를 적용해 서버 상태 캐싱 및 비동기 데이터 패칭 로직 표준화',
    ],
    techStack: ['React.js', 'TailwindCSS', 'Axios', 'Recoil', 'TanStack Query'],
    links: [{ label: '웹사이트', url: 'https://baumpns.com' }],
  },
  {
    title: '한국 정품 금거래소 프론트/백오피스',
    description: '금·다이아몬드 상품 정보 및 거래 데이터의 실시간 조회·관리 플랫폼.',
    period: '2023.10 — 2023.12',
    role: '프론트엔드 주임 · 비유바움 주식회사',
    highlights: [
      'React.js, Styled-components, SCSS를 활용해 반응형 웹 UI 설계·구현',
      'Axios 기반 REST API 연동으로 상품 정보 및 거래 데이터의 실시간 조회·관리 구현',
      'Recoil을 도입해 전역 상태 관리 구조 정비, 복잡한 상태 의존성 단순화',
      '운영/관리자를 위한 백오피스 시스템 구축으로 상품 등록, 주문 및 고객 관리 통합 처리',
    ],
    techStack: ['React.js', 'Styled Components', 'SCSS', 'Axios', 'Recoil'],
    links: [{ label: '웹사이트', url: 'http://goldkoreadia.co.kr/' }],
  },
  {
    title: 'OKPOS 파트너 센터 백오피스 시스템',
    description: '파트너 센터 운영을 위한 통합 백오피스 관리 시스템.',
    period: '2022.10 — 2023.04',
    role: '프론트엔드 개발자 · (주) OKPOS',
    highlights: [
      '공통 컴포넌트 설계 및 구현을 통한 재사용성 향상',
      '회원 관리, 공지사항, 영업 대리점, 발주 신청, 제품 유지보수, 교육 관리 등 다수 시스템 개발',
      'Chart.js 기반 데이터 시각화 및 그래프 구현',
      'Props 기반 컴포넌트 구조화 및 유지보수성 개선',
    ],
    techStack: ['React.js', 'JavaScript', 'Chart.js'],
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
    school: '대전 공업 고등학교',
    major: '전자기계 SMT 반도체과',
    period: '졸업',
  },
]

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const
