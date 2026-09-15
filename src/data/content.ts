export const profile = {
  name: 'Shivam Pandey',
  role: 'Backend Developer',
  tagline: 'I build the systems behind the screen.',
  blurb:
    'Backend developer specialising in secure authentication, multi-tenant architecture and the kind of infrastructure that quietly holds everything together. Currently building internal platforms at EPIC Investment Partners.',
  email: 'shivaypandey122@gmail.com',
  phone: '+91 6388022458',
  location: 'Noida, India',
  github: 'https://github.com/pandey1234',
  linkedin: 'https://linkedin.com/in/pandey1234',
}

export type Experience = {
  company: string
  role: string
  /** Short marker shown on the timeline rail. */
  year: string
  period: string
  location: string
  current?: boolean
  /** One-paragraph summary for the timeline. */
  summary: string
  points: string[]
  stack: string[]
}

/** Oldest first — the timeline reads top to bottom, earliest to now. */
export const experience: Experience[] = [
  {
    company: 'Darx Technology',
    role: 'Backend Developer Intern',
    year: '2023',
    period: 'Apr 2023 — Sep 2023',
    location: 'Noida, U.P.',
    summary:
      'Rebuilt the Darx University site as a dynamic, responsive platform — engagement up 40%, bounce rate down 25% — and delivered full CRUD operations and database architecture for an e-commerce build.',
    points: [
      'Rebuilt the Darx University website as a dynamic, responsive platform — a 40% lift in user engagement and 25% drop in bounce rate.',
      'Delivered full CRUD operations and database architecture for an e-commerce platform.',
    ],
    stack: ['PHP', 'MySQL', 'PhpMyAdmin', 'JavaScript'],
  },
  {
    company: 'Datacorn Service LLP',
    role: 'Junior Developer',
    year: '2024',
    period: 'Jul 2024 — May 2025',
    location: 'Remote',
    summary:
      'Closed 100+ bugs and shipped features across a Laravel platform — cart flows, PowerGrid data tables, advanced search — while implementing the multi-tenant layer that lets SuperAdmins manage organisations and Admins govern their own.',
    points: [
      'Resolved 100+ bugs and shipped new features including a full "Add to Cart" flow and enhanced data tables with Livewire PowerGrid.',
      'Implemented multi-tenant architecture letting SuperAdmins manage organisations while Admins govern their own.',
      'Transformed the platform from static to fully dynamic, adding advanced search and complex SQL operations for product management.',
    ],
    stack: ['Laravel', 'Livewire', 'PowerGrid', 'MySQL', 'JavaScript'],
  },
  {
    company: 'EPIC Investment Partners',
    role: 'Backend Developer',
    year: 'NOW',
    period: 'Jun 2025 — Present',
    location: 'On-site',
    current: true,
    summary:
      'Building the internal platform: centralised authentication microservices with login and 2FA across products, a granular RBAC layer, and a multi-tenant ticketing system that turns inbound email into tracked, resolvable work — all on an architecture that guarantees data isolation between client organisations.',
    points: [
      'Built Role-Based Access Control (RBAC) with granular security, role and permission management across internal applications.',
      'Developed centralised authentication microservices handling login and 2FA, enabling single secure sign-on across multiple internal products.',
      'Shipped a multi-tenant ticketing system that automates email-to-ticket workflows — create, track, resolve and respond to customer requests.',
      'Designed backend services on a multi-tenant architecture, guaranteeing data isolation and scalable workflows across client organisations.',
    ],
    stack: ['Microservices', 'RBAC', '2FA', 'Multi-tenancy', 'REST APIs'],
  },
]

export type Project = {
  title: string
  summary: string
  points: string[]
  stack: string[]
  link?: string
  index: string
}

export const projects: Project[] = [
  {
    index: '01',
    title: 'Vision E-commerce',
    summary: 'A full-stack commerce platform, backend to interface.',
    points: [
      'Built an interactive, responsive storefront from the ground up.',
      'Implemented backend logic in Laravel handling API integration and database operations.',
      'Managed product and user data across a normalised MySQL schema.',
    ],
    stack: ['Laravel', 'MySQL', 'JavaScript', 'HTML/CSS'],
    link: 'https://github.com/pandey1234',
  },
  {
    index: '02',
    title: 'Fire & Smoke Detection',
    summary: 'A machine learning system that knows the difference between smoke and steam.',
    points: [
      'Built a web interface in Python for live inference on user input.',
      'Collaborated cross-functionally to define detection requirements and thresholds.',
      'Cut false alarms substantially, reaching 95–98% classification accuracy.',
    ],
    stack: ['Python', 'Jupyter', 'Machine Learning'],
    link: 'https://github.com/pandey1234/Fire-and-smoke-detection-system-using-ML-model',
  },
]

export const skillGroups = [
  { label: 'Languages', items: ['PHP', 'JavaScript', 'Python', 'SQL'] },
  { label: 'Frameworks', items: ['Laravel', 'Livewire', 'PowerGrid'] },
  {
    label: 'Backend',
    items: ['REST APIs', 'Microservices', 'RBAC', 'OAuth / JWT', '2FA', 'Multi-tenancy'],
  },
  { label: 'Data', items: ['MySQL', 'MySQL Workbench', 'PhpMyAdmin'] },
  { label: 'Tools', items: ['Git', 'VS Code'] },
]

export const marqueeItems = [
  'Laravel', 'PHP', 'Microservices', 'MySQL', 'REST APIs', 'Python',
  'RBAC', 'JavaScript', 'OAuth / JWT', 'Multi-tenancy', '2FA', 'Livewire',
]

export const education = [
  {
    school: 'Ajay Kumar Garg Engineering College',
    detail: 'B.Tech, Computer Science & Engineering',
    score: 'CGPA 7.66',
    period: '2020 — 2024',
  },
  {
    school: 'Jeevandeep Public School',
    detail: 'Class XII',
    score: '91%',
    period: '2017 — 2019',
  },
  {
    school: 'Little Flower Children School',
    detail: 'Class X',
    score: '95%',
    period: '2015 — 2017',
  },
]

export const achievements = [
  { value: '5★', label: 'HackerRank badges' },
  { value: '100+', label: 'LeetCode & GFG problems solved' },
  { value: '3', label: 'Years building backends' },
]
