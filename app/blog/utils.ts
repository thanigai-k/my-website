import path from 'node:path';
import { getMDXData } from '../utils';

// Get all blog posts
export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'));
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();

  const normalisedDate = date.includes('T') ? date : `${date}T00:00:00`;

  const targetDate = new Date(normalisedDate);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

/**
 * Get posts by filter
 *
 * */
export function getBlogPostByFilter({
  type = 'desc',
  limit = 5,
}: {
  /**
   * Sort type
   *
   * @default "desc"
   * */
  type?: 'asc' | 'desc';
  /**
   * Limit number of posts
   *
   * @default 5
   * */
  limit?: number;
}) {
  const posts = getBlogPosts();

  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt).getTime();
    const dateB = new Date(b.metadata.publishedAt).getTime();

    return type === 'asc' ? dateA - dateB : dateB - dateA;
  });

  if (limit) {
    return sortedPosts.slice(0, limit);
  }

  return sortedPosts;
}
