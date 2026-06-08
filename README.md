# FemFeed

FemFeed is a daily discovery platform for women-centered and feminist resources.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS — recommended by the Agent HQ
researcher role (see `docs/`). Data layer (Supabase Postgres) and auth land in
follow-up tasks; this scaffold ships the feed surface and the core data model.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit (verification gate)
npm run build      # production build (verification gate)
```

## Structure

- `src/app/page.tsx` — daily feed (renders curated seed items)
- `src/lib/types.ts` — core data model (Source, FeedItem, Tag, Category, Collection)
- `src/lib/seed.ts` — placeholder curated content until source ingestion exists
- `docs/` — product brief, roadmap, and research briefs
