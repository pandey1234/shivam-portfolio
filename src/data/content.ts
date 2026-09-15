export const profile = {
  name: 'Shivam Pandey',
  role: 'Backend Developer',
  tagline: 'I build the systems behind the screen.',
  blurb:
    'Backend developer specialising in secure authentication, multi-tenant architecture and the kind of infrastructure that quietly holds everything together. Currently building internal platforms at EPIC Investment Partners.',
  email: 'shivaypandey122@gmail.com',
  phone: '+91 6388022458',
  location: 'Ghaziabad, Uttar Pradesh, India',
  github: 'https://github.com/pandey1234',
  linkedin: 'https://linkedin.com/in/pandey1234',
}

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  current?: boolean
  points: string[]
  stack: string[]
}

export const experience: Experience[] = [
  {
    company: 'EPIC Investment Partners',
    role: 'Backend Developer',
    period: 'Jun 2025 — Present',
    location: 'On-site',
    current: true,
    points: [
      'Built Role-Based Access Control (RBAC) with granular security, role and permission management across internal applications.',
      'Developed centralised authentication microservices handling login and 2FA, enabling single secure sign-on across multiple internal products.',
      'Shipped a multi-tenant ticketing system that automates email-to-ticket workflows — create, track, resolve and respond to customer requests.',
      'Designed backend services on a multi-tenant architecture, guaranteeing data isolation and scalable workflows across client organisations.',
    ],
    stack: ['Microservices', 'RBAC', '2FA', 'Multi-tenancy', 'REST APIs'],
  },
  {
    company: 'Datacorn Service LLP',
    role: 'Junior Developer',
    period: 'Jul 2024 — May 2025',
    location: 'Remote',
    points: [
      'Resolved 100+ bugs and shipped new features including a full "Add to Cart" flow and enhanced data tables with Livewire PowerGrid.',
      'Implemented multi-tenant architecture letting SuperAdmins manage organisations while Admins govern their own.',
      'Transformed the platform from static to fully dynamic, adding advanced search and complex SQL operations for product management.',
    ],
    stack: ['Laravel', 'Livewire', 'PowerGrid', 'MySQL', 'JavaScript'],
  },
  {
    company: 'Darx Technology',
    role: 'Backend Developer Intern',
    period: 'Apr 2023 — Sep 2023',
    location: 'Noida, U.P.',
    points: [
      'Rebuilt the Darx University website as a dynamic, responsive platform — a 40% lift in user engagement and 25% drop in bounce rate.',
      'Delivered full CRUD operations and database architecture for an e-commerce platform.',
    ],
    stack: ['PHP', 'MySQL', 'PhpMyAdmin', 'JavaScript'],
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
