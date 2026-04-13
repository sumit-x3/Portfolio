import Image from "next/image";

export default function Home() {
  const punchLine = [
    "I make websites so smooth, even bugs enjoy living there.",
    "Making pixels behave and APIs cooperate. Sometimes.",
    "I build apps users love and browsers tolerate.",
    "I write clean code and dirty console logs.",
    "Professional button aligner and part-time bug exorcist.",
  ];
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* section 1 - intro */}
        <section className="min-h-screen">
          <h1 className="text-3xl font-bold">Sumit Singh</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Frontend Developer | Next.js | TypeScript
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono pt-4">
            {punchLine[Math.floor(Math.random() * punchLine.length)]}
          </p>
        </section>
        <section className="min-h-screen">
          <h2 className="text-3xl font-bold">About me</h2>
          <article className="flex flex-col items-center gap-4 mt-4">
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">
            {" "}
            Frontend Developer with real experience building production apps and
            surviving production bugs.{" "}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">
            I work with React, Next.js, TypeScript, Tailwind CSS, and Zustand to
            create polished interfaces and maintainable systems.
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">
            Also solved 300+ LeetCode problems because apparently free time is
            overrated.
          </p>
            </article>

        </section>
      </main>
    </div>
  );
}
