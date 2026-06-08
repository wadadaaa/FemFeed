// FemFeed MVP data model — derived from the researcher brief (task #96).
// These are the core entities for a discovery feed; the persistence layer
// (Supabase Postgres) is wired in a follow-up task. Kept dependency-free so the
// scaffold builds before any backend exists.

export type Category =
  | 'news'
  | 'femtech'
  | 'rights'
  | 'culture'
  | 'career'
  | 'tech'
  | 'startups'
  | 'design'
  | 'health'
  | 'research'
  | 'communities'
  | 'grants'
  | 'events'
  | 'opportunities';

export interface Source {
  id: string;
  name: string;
  url: string;
  /** Editorial trust state — curated sources are admin-approved before they appear. */
  trust: 'curated' | 'pending' | 'rejected';
}

export interface Tag {
  id: string;
  label: string;
}

export interface FeedItem {
  id: string;
  title: string;
  url: string;
  excerpt: string;
  category: Category;
  tags: string[];
  sourceId: string;
  /** ISO date the item was published or curated. */
  publishedAt: string;
}

export interface Collection {
  id: string;
  name: string;
  itemIds: string[];
  isPublic: boolean;
}
