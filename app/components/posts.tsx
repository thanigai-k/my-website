import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/blog/utils';

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div className="space-y-2">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.metadata.title}</Link>
            <p className="text-tertiary">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
          </article>
        ))}
    </div>
  );
}
