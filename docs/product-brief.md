# FemFeed MVP Product Brief

Status: draft for human review
Linear issue: BIM-66
Last updated: 2026-06-07

## Product one-liner

FemFeed is a daily discovery platform for women-centered and feminist resources, helping readers find trusted articles, reports, opportunities, communities, events, and tools without becoming another social network.

## Product context

FemFeed is inspired by daily.dev and Muzli: a curated, feed-first product that gives people a focused place to discover useful resources every day. The first MVP should prove that a trusted, women-centered discovery experience is valuable before investing in broader community or social features.

Initial content areas may include rights, femtech, health, career, tech, startups, design, research, culture, communities, grants, events, opportunities, tools, and practical resources.

## MVP goals

1. Provide a high-trust daily feed of women-centered and feminist resources.
2. Let users personalize discovery through simple interests, tags, and categories.
3. Make source quality visible through curated source records and clear attribution.
4. Let users save resources and organize them into private collections.
5. Support source discovery so users can browse trusted sources without following people or accounts.
6. Produce enough product clarity for design and engineering review before implementation begins.

## MVP non-goals and no-social boundaries

FemFeed MVP is not a social network. The MVP must not include:

- Social graph mechanics such as follows, followers, friend requests, or connection lists.
- User posting, creator profiles, public timelines, or user-generated feed posts.
- Comments, replies, DMs, group chats, or discussion threads.
- Likes, reactions, reposts, quote posts, or engagement-driven ranking.
- Public user profiles or public collection pages unless explicitly approved later.
- Viral loops that prioritize popularity over source trust and discovery quality.

Allowed MVP interactions are discovery-oriented:

- Open a resource.
- Save or unsave a resource.
- Add a saved resource to a private collection.
- Browse categories, tags, sources, and source detail pages.
- Edit personal discovery preferences.

If a future feature resembles social networking, it should be treated as post-MVP and require a separate human product decision.

## First target audience assumptions

These assumptions are intentionally draft-level and require human validation:

- Primary launch user: people who regularly look for women-centered and feminist resources but do not have one trusted daily place to find them.
- Likely early adopters: feminist technologists, femtech operators, researchers, designers, founders, students, activists, career switchers, journalists, and community builders.
- Initial user need: quickly find credible, useful resources without scanning many newsletters, social feeds, websites, and search results.
- Initial usage pattern: check a personalized daily feed, open relevant links, save items for later, and organize important resources into private collections.
- Launch surface: web-first, with anonymous browsing possible if feasible and account-based saves/collections when persistence is needed.
- Geographic/language scope: start with English-language sources unless a human reviewer chooses a narrower or broader first market.
- Curation model: start with human-curated or admin-managed trusted sources before investing in automated ingestion and ranking.

## MVP experience outline

### 1. Daily feed

Users see a daily feed of resource cards drawn from trusted sources. Each card should include a title, source, resource type, category, tags, short summary or excerpt, publication date when available, and outbound link.

Feed ranking should begin with simple deterministic rules: match selected interests first, balance categories, prefer recent resources, avoid duplicate sources dominating the feed, and include fallback recommendations for new users.

### 2. Tags and categories

FemFeed should use a clear taxonomy to power browsing, filtering, personalization, and source discovery. Starter top-level categories may include Rights, Femtech, Health, Career, Startups, Tech, Design, Research, Culture, Communities, Grants, Events, Opportunities, Tools, and Guides.

### 3. Trusted sources

Sources should be curated records, not followable social accounts. A source record may include name, URL, description, source type, covered categories, region, language, trust status, review notes, and last reviewed date.

### 4. Saves and private collections

Users can save resources for later and organize them into private collections. Collections are assumed private by default in MVP. Shareable collections should remain out of scope unless explicitly approved.

### 5. Source discovery

Users can browse trusted sources by category, type, region, or language and open the original source website. Source discovery should avoid language such as "follow" that implies a social graph.

## First 3 backlog tasks

1. Define initial FemFeed taxonomy
   - Draft 10-15 top-level categories with descriptions and starter tags.
   - Ensure categories support personalization, filtering, and source discovery.
   - Acceptance check: taxonomy includes women-centered/feminist domains and avoids unnecessary overlap.

2. Define resource/content item data model
   - Specify required and optional fields for feed resources.
   - Include relationships to source, tags, categories, saves, collections, and users.
   - Acceptance check: model supports articles, reports, tools, opportunities, grants, events, communities, and guides.

3. Define trusted source model and curation criteria
   - Specify source fields, trust statuses, and review criteria.
   - Draft starter curation rules and examples for human review.
   - Acceptance check: source discovery is clearly distinct from following or social networking.

## Open product questions

- Who is the first target user to optimize for: general readers, technologists, researchers, students, activists, founders, designers, femtech operators, or another segment?
- Should the MVP allow anonymous feed browsing, or should all users create an account first?
- Are saves and collections strictly private in MVP?
- Should users be able to suggest sources in MVP, or should source intake remain internal/admin-only first?
- Should content ingestion start manual, RSS-based, API-based, newsletter-based, or hybrid?
- What source regions and languages should the first curated set cover?
- What is the desired feed cadence: continuously refreshed, once-daily digest, or both?
- What is the minimum number of trusted sources needed before beta launch?
- What analytics are acceptable for personalization without sensitive inference or invasive tracking?
- What beta success metric should determine whether the discovery experience is working?

## Human review checklist before implementation

- Confirm the product one-liner and initial positioning.
- Confirm the first target audience and launch scope.
- Confirm no-social boundaries and post-MVP social/community decision gates.
- Confirm the first 3 backlog tasks and whether they should become Linear issues.
- Confirm whether the repo should proceed to implementation planning after this docs-only brief.
