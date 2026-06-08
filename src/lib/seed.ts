import type { FeedItem, Source } from './types';

// Seed content for the MVP daily feed. Hand-curated placeholders so the feed
// renders before source ingestion exists. Replaced by Supabase-backed queries
// in a follow-up task.

export const sources: Source[] = [
  { id: 's-femstreet', name: 'Femstreet', url: 'https://femstreet.com', trust: 'curated' },
  { id: 's-elpha', name: 'Elpha', url: 'https://elpha.com', trust: 'curated' },
  { id: 's-womenwhocode', name: 'Women Who Code', url: 'https://womenwhocode.com', trust: 'curated' },
  { id: 's-femtechinsider', name: 'FemTech Insider', url: 'https://femtechinsider.com', trust: 'curated' },
];

export const feedItems: FeedItem[] = [
  {
    id: 'f-1',
    title: 'How women-led startups are reshaping femtech funding',
    url: 'https://femtechinsider.com/',
    excerpt: 'A look at the funding landscape for women-centered health technology and where the gaps remain.',
    category: 'femtech',
    tags: ['funding', 'health', 'startups'],
    sourceId: 's-femtechinsider',
    publishedAt: '2026-06-06',
  },
  {
    id: 'f-2',
    title: 'Negotiating your next tech role: a practical playbook',
    url: 'https://elpha.com/',
    excerpt: 'Concrete scripts and benchmarks for compensation conversations, from women in the industry.',
    category: 'career',
    tags: ['negotiation', 'career', 'tech'],
    sourceId: 's-elpha',
    publishedAt: '2026-06-05',
  },
  {
    id: 'f-3',
    title: 'Grants and fellowships open this month for women founders',
    url: 'https://femstreet.com/',
    excerpt: 'A curated roundup of non-dilutive funding and fellowship opportunities closing soon.',
    category: 'grants',
    tags: ['grants', 'founders', 'opportunities'],
    sourceId: 's-femstreet',
    publishedAt: '2026-06-04',
  },
  {
    id: 'f-4',
    title: 'Open-source communities welcoming women contributors',
    url: 'https://womenwhocode.com/',
    excerpt: 'Where to start contributing, find mentorship, and build a public track record in tech.',
    category: 'communities',
    tags: ['open-source', 'community', 'mentorship'],
    sourceId: 's-womenwhocode',
    publishedAt: '2026-06-03',
  },
];

export function sourceName(sourceId: string): string {
  return sources.find((s) => s.id === sourceId)?.name ?? 'Unknown source';
}
