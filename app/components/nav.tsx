import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/projects': {
    name: 'projects',
  },
  '/contact': {
    name: 'contact',
  },
};

export function Navbar() {
  return (
    <aside className="flex flex-col gap-y-1 md:flex-row md:items-center md:justify-between">
      <a href="/" className="text-3xl font-bold">
        Thanigai
      </a>
      <nav className="flex gap-3 flex-wrap">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="hover:text-blue-500 transition-colors underline"
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
