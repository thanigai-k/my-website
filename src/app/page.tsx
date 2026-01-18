export default function Home() {
  return (
    <main className="py-10">
      <div className="relative">
        <div
          className="absolute border-0 border-t border-neutral-800 border-b w-full h-full opacity-50 -z-1
        "
        >
          <div className="max-w-[1080px] mx-auto inset-0 w-full h-full border-0 border-s border-e border-neutral-800 absolute">
            <div className="h-full w-px absolute left-1/4 bg-neutral-800"></div>
            <div className="h-full w-px absolute left-2/4 bg-neutral-800"></div>
            <div className="h-full w-px absolute left-3/4 bg-neutral-800"></div>
          </div>
        </div>
        <div className="max-w-[1080px] mx-auto flex">
          <h1 className="px-2 py-4 basis-1/4">Hello World</h1>
          <h1 className="px-2 py-4 basis-1/4">Javascript Developer</h1>
          <h1 className="px-2 py-4 basis-1/4">Javascript Developer</h1>
          <h1 className="px-2 py-4 basis-1/4">Javascript Developer</h1>
        </div>
      </div>
    </main>
  );
}
