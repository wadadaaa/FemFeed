import { feedItems, sourceName } from '@/lib/seed';

// FemFeed MVP — daily discovery feed (stub). Renders curated seed items in a
// card grid. Personalization, auth, bookmarks and collections arrive in
// follow-up tasks; this establishes the feed surface and the data model.

export default function Home() {
  const items = [...feedItems].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">FemFeed</h1>
        <p className="mt-1 text-sm text-gray-500">
          Your daily feed of trusted women-centered and feminist resources.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-gray-200 p-5 transition hover:border-gray-300 hover:shadow-sm dark:border-gray-800"
          >
            <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
              <span className="rounded-full bg-gray-100 px-2 py-0.5 font-medium dark:bg-gray-800">
                {item.category}
              </span>
              <span>·</span>
              <span>{sourceName(item.sourceId)}</span>
              <span>·</span>
              <time dateTime={item.publishedAt}>{item.publishedAt}</time>
            </div>
            <h2 className="text-lg font-semibold">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {item.title}
              </a>
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span key={tag} className="text-xs text-gray-400">
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
