/**
 * Single source of truth for homepage copy.
 *
 * Sections read from here so wording, ordering and project images can be
 * updated without touching layout code.
 */

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export type Service = {
  number: string;
  title: string;
  items: string[];
  icon: 'crown' | 'camera' | 'chart' | 'chip';
  tone: 'light' | 'blue';
};

export const services: Service[] = [
  {
    number: '01',
    title: 'Brand',
    items: ['Brand Strategy', 'Brand Identity', 'Positioning', 'Guidelines'],
    icon: 'crown',
    tone: 'light',
  },
  {
    number: '02',
    title: 'Content',
    items: ['Social Media', 'Reels & Video', 'Cinematic Content', 'Creatives at Scale'],
    icon: 'camera',
    tone: 'blue',
  },
  {
    number: '03',
    title: 'Growth',
    items: ['Performance Marketing', 'SEO', 'Influencer Marketing', 'Lead Generation'],
    icon: 'chart',
    tone: 'light',
  },
  {
    number: '04',
    title: 'Tech & AI',
    items: ['Web Development', 'Automation', 'AI Systems', 'Analytics & Reporting'],
    icon: 'chip',
    tone: 'blue',
  },
];

export type Project = {
  slug: string;
  client: string;
  description: string;
  tags: string[];
  /** Swap for a real photograph at the same path when assets are supplied. */
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: 'ddis',
    client: 'DDIS',
    description: 'School Branding & Digital Growth',
    tags: ['Identity', 'Campaigns', 'Admissions'],
    image: '/work/ddis.svg',
    imageAlt: 'DDIS school campus branding project',
  },
  {
    slug: 'eta-education',
    client: 'ETA Education',
    description: 'Brand Identity & Campaigns',
    tags: ['Identity', 'Content', 'Video'],
    image: '/work/eta-education.svg',
    imageAlt: 'ETA Education brand identity project',
  },
  {
    slug: 'rudraksh-ayurveda',
    client: 'Rudraksh Ayurveda',
    description: 'Digital Presence & Leads',
    tags: ['Performance', 'SEO', 'Leads'],
    image: '/work/rudraksh-ayurveda.svg',
    imageAlt: 'Rudraksh Ayurveda product range project',
  },
  {
    slug: 'swastik-ayurveda',
    client: 'Swastik Ayurveda',
    description: 'Social Media & Performance',
    tags: ['Social', 'Creative', 'Ads'],
    image: '/work/swastik-ayurveda.svg',
    imageAlt: 'Swastik Ayurveda packaging and social project',
  },
];

export type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const metrics: Metric[] = [
  { value: 100, suffix: '+', label: 'Brands Empowered' },
  { value: 3, suffix: 'X', label: 'Average Growth' },
  { value: 10, suffix: 'M+', label: 'People Reached' },
  { value: 98, suffix: '%', label: 'Client Retention' },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: 'search' | 'bulb' | 'gear' | 'bars';
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your brand, goals and audience.',
    icon: 'search',
  },
  {
    number: '02',
    title: 'Strategize',
    description: 'Create a tailored plan for real impact.',
    icon: 'bulb',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Bring ideas to life across every channel.',
    icon: 'gear',
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'Track, analyze and scale what works.',
    icon: 'bars',
  },
];

export type Testimonial = { quote: string; author: string };

export const testimonials: Testimonial[] = [
  {
    quote: 'Technobuzzle understood our vision and turned it into a brand people trust.',
    author: 'DDIS',
  },
  {
    quote: 'Creative, strategic and result-driven. A true growth partner.',
    author: 'ETA Education',
  },
  {
    quote: 'Professional, responsive and full of fresh ideas. Highly recommended.',
    author: 'Rudraksh Ayurveda',
  },
];

export type Social = { label: string; href: string; icon: 'instagram' | 'linkedin' | 'youtube' };

export const socials: Social[] = [
  { label: 'Instagram', href: 'https://instagram.com/technobuzzle', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/technobuzzle', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://youtube.com/@technobuzzle', icon: 'youtube' },
];
