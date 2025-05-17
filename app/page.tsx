import { BlogPosts } from "app/components/posts";
import Link from "next/link";
import { ArrowIcon } from "./components/ArrowIcon";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { getBlogPostByFilter, getBlogPosts } from "./blog/utils";
import { WORK_EXPERIENCE_CONTENT } from "./content";

export default function Page() {
  const recentPosts = getBlogPostByFilter({
    limit: 2,
  });
  return (
    <>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">About me</h2>
        <div>
          <p className="mb-4">
            I'm a Sr. Frontend Engineer. I'm a huge fan of Next.js and
            TypeScript. I'm also a huge fan of React and Tailwind CSS. I'm also
            a huge fan of Vercel,
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-y-1 md:flex-row md:items-center md:justify-between">
          <h2 className="text-xl font-semibold">Projects</h2>
          <Link
            href="/projects"
            className="text-sm flex items-center gap-1 text-secondary group underline"
          >
            <span>All projects</span>
            <ArrowRightIcon
              width={12}
              height={12}
              className="group-hover:translate-x-3 transition-transform group-hover:animate-ping"
            />
          </Link>
        </div>
        <div className="space-y-4">
          {recentPosts.map(({ metadata, slug }) => (
            <article key={slug} className="group">
              <Link href={`/blog/${slug}`}>
                <h3 className="text-lg underline group-hover:text-blue-500">
                  {metadata.title}
                </h3>
                <p className="text-secondary">{metadata.summary}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-y-1 md:flex-row md:items-center md:justify-between">
          <h2 className="text-xl font-semibold">Blog</h2>
          <Link
            href="/blog"
            className="text-sm flex items-center gap-1 text-secondary group underline"
          >
            <span>All writings</span>
            <ArrowRightIcon
              width={12}
              height={12}
              className="group-hover:translate-x-3 transition-transform group-hover:animate-ping"
            />
          </Link>
        </div>
        <div className="space-y-4">
          {recentPosts.map(({ metadata, slug }) => (
            <article key={slug} className="group">
              <Link href={`/blog/${slug}`}>
                <h3 className="text-lg underline group-hover:text-blue-500">
                  {metadata.title}
                </h3>
                <p className="text-secondary">{metadata.summary}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <ul className="space-y-4">
          {WORK_EXPERIENCE_CONTENT.map(({ title, company, date }) => (
            <li
              key={title}
              className="
                border border-tertiary p-4 rounded-2xl flex flex-col
                gap-y-3 sm: sm:flex-row sm:items-center sm:justify-between
                "
            >
              <div>
                <h3 className="text-lg">{title}</h3>
                <p className="text-secondary">{company}</p>
              </div>
              <p className="text-secondary text-sm">{date}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">More</h2>
        <div>
          <article>
            You can explore my projects here where I do expereiment with
            interfaces. I curate a lot of <a href="/tools">tools</a> to make my
            life easier.
          </article>
        </div>
      </section>
    </>
  );
}

// <div className="my-8">
// <BlogPosts />
// </div>
