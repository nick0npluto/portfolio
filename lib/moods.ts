export type Mood = 'hire' | 'collaborate' | 'curious'

export interface MoodConfig {
  label:     string
  accent:    string
  accentRgb: string
  headline:  string
  sub:       string
  ctaLabel:  string
  emphasis:  'skills' | 'process' | 'story'
  bio:       string
}

export const MOODS: Record<Mood, MoodConfig> = {
  hire: {
    label:     'Hire Me',
    accent:    '#E8FF4D',
    accentRgb: '232, 255, 77',
    headline:  'Full-stack. Data-ready.\nAlready in production.',
    sub:       'Python · TypeScript · React · AWS · Data Engineering — one engineer who covers the whole stack and can talk to anyone in the room.',
    ctaLabel:  'Get in touch',
    emphasis:  'skills',
    bio:       'CS grad from Georgia State (3.5 GPA, Dec 2025) with real production experience: built AWS data pipelines at Carter\'s, automated payroll systems saving 90% processing time, and shipped a full-stack booking platform from scratch. I also have a background in tech sales — I communicate clearly, I work well with non-technical stakeholders, and people genuinely enjoy working with me. I write clean code, move fast, and care about the outcome.',
  },
  collaborate: {
    label:     'Collaborate',
    accent:    '#FF8C42',
    accentRgb: '255, 140, 66',
    headline:  'You have the idea.\nI have the code, the data layer, and the deploy.',
    sub:       'From rough requirements to a working product — I speak both technical and human fluently.',
    ctaLabel:  'Share your idea',
    emphasis:  'process',
    bio:       'I\'m most useful when there\'s a real problem to solve. Give me ambiguous requirements and I\'ll figure it out — then explain it back to you in plain English. I have a background in SDR and tech sales, so I know how to listen, ask the right questions, and keep a project moving without losing anyone. Founders and small teams tend to click with me fast.',
  },
  curious: {
    label:     'Just Curious',
    accent:    '#A78BFA',
    accentRgb: '167, 139, 250',
    headline:  'Me and a computer are a team with no limits.',
    sub:       'CS grad. Founder. Engineer. The kind of person you actually want to talk to.',
    ctaLabel:  'Say hello',
    emphasis:  'story',
    bio:       'I graduated from Georgia State in December 2025, but I didn\'t wait to start shipping. I\'ve built pipelines, launched businesses, and closed deals — and somehow people always say I\'m easy to talk to. I have a background in SDR and tech sales that makes me a little different from the average engineer. Poke around and reach out if anything catches your eye.',
  },
}

export interface ProjectCard {
  id:      string
  title:   string
  tags:    string[]
  size:    'small' | 'medium' | 'large'
  year:    string
  summary: string
  href?:   string
  image?:  string
}

export const PROJECT_CARDS: ProjectCard[] = [
  {
    id:      'impearl',
    title:   'Impearl',
    tags:    ['React', 'Node.js', 'MongoDB', 'Stripe', 'n8n', 'Zapier'],
    size:    'large',
    year:    '2025',
    summary: 'Full-stack booking app for service businesses. Stripe payments, Google Sheets financial tracking, and webhook-driven invoice generation — cut manual back-office work by 95%.',
    href:    'https://impearl.netlify.app',
    image:   '/impearl-screenshot.png',
  },
  {
    id:      'spayroll',
    title:   'Spayroll+',
    tags:    ['Python', 'TypeScript', 'Pandas', 'Matplotlib'],
    size:    'medium',
    year:    '2025',
    summary: 'Payroll management tool that turns raw shift records into wage calculations, PDF reports, and labor-cost dashboards. Built to replace the spreadsheet.',
    href:    'https://spayroll.netlify.app',
    image:   '/spayroll-screenshot.png',
  },
  {
    id:      'north-pole',
    title:   'North Pole Detailing',
    tags:    ['Full-Stack', 'CRM', 'Auth', 'Payments', 'Analytics'],
    size:    'medium',
    year:    '2025',
    summary: 'Designed and deployed the entire tech stack for my own detailing business — booking platform, auth, payments, automated scheduling, and a customer analytics system tracking acquisition costs and conversion rates. Booking time down 60%. ROI up 40%.',
    href:    'https://northpoledetailing.netlify.app',
    image:   '/npd-logo.png',
  },
  {
    id:      'nps-automation',
    title:   'NPS Operations Suite',
    tags:    ['Python', 'Pandas', 'ETL', 'Automation', 'Matplotlib'],
    size:    'small',
    year:    '2025',
    summary: 'Automated operations for a multi-site parking operator: 500+ weekly transactions processed, payroll time cut by 90%, and ETL pipelines feeding live Matplotlib dashboards.',
  },
]

export const SKILLS = [
  'Python', 'TypeScript', 'React', 'Node.js', 'AWS', 'Pandas',
  'MongoDB', 'SQL', 'ETL', 'Databricks', 'Stripe', 'n8n',
  'Zapier', 'Matplotlib', 'DynamoDB', 'Vercel', 'Machine Learning', 'Automation',
]
