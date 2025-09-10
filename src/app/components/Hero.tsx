export default function Hero() {
  return (
    <header className="relative overflow-hidden font-mono bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="container mx-auto px-6 md:px-8">
        <div className="min-h-[88vh] md:min-h-screen grid  gap-10 items-center">
          <div className="md:col-span-8 lg:col-span-7">
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
              Hi, my name is
            </p>

            <h1 className="mt-3 text-5xl md:text-7xl font-extrabold leading-[1.1] text-neutral-950 dark:text-neutral-50">
              Ahammed Nibras<span className="text-neutral-400 dark:text-neutral-500">.</span>
            </h1>

            <h2 className="mt-2 text-4xl md:text-6xl font-extrabold leading-[1.1] text-neutral-600 dark:text-neutral-400">
              I build things for the web.
            </h2>

            <p className="mt-6 max-w-2xl text-[15px] md:text-lg text-neutral-700 dark:text-neutral-300">
              Full‑stack engineer crafting dependable, fast experiences with React, Next.js, TypeScript, and Node—focused on accessibility, performance, and clean architecture for real products. Currently exploring interface systems and DX improvements in personal projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded border px-6 py-3 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-950 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-neutral-100 dark:focus-visible:ring-offset-neutral-950"
                aria-label="View selected work"
                title="View Work"
              >
                Check out my work
              </a>

              <a
                href="mailto:ahammednibras737@gmail.com"
                className="inline-flex items-center justify-center rounded px-6 py-3 text-neutral-900 hover:opacity-80 dark:text-neutral-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-whitedark:focus-visible:ring-neutral-100 dark:focus-visible:ring-offset-neutral-950"
                aria-label="Start a Conversation"
                title="Contact"
              >
                Let's talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}