import { Feed } from 'feed';
import { setResponseHeader } from 'h3';

export default defineEventHandler(async (event) => {
  const { public: { siteUrl } } = useRuntimeConfig();

  const feed = new Feed({
    title: 'My Articles',
    description: 'Latest articles',
    id: siteUrl,
    link: siteUrl,
    language: 'zh-Hant',
    copyright: `© ${new Date().getFullYear()} My Articles`,
    feedLinks: {
      rss2: new URL('/rss.xml', siteUrl).toString(),
    },
  });

  const posts = await queryCollection(event, 'articles')
    .order('date', 'DESC')
    .select('title', 'description', 'date', 'path', 'tags')
    .all();

  for (const post of posts) {
    const url = new URL(post.path, siteUrl).toString();

    const publishedAt = post.date instanceof Date ? post.date : new Date(post.date);

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      date: publishedAt,
      category: (post.tags || []).map((t: string) => ({ name: t })),
    });
  }

  setResponseHeader(event, 'content-type', 'application/xml; charset=utf-8');
  return feed.rss2();
});
