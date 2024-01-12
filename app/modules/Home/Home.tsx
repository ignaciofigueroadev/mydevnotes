export function Home() {
  return (
    <section className="flex flex-col justify-center items-center text-center gap-2 min-h-[40vh]">
      <h1 className="font-bold text-5xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-pretty text-transparent bg-clip-text">
        My Dev Notes
      </h1>
      <div className="opacity-75">
        <p className="text-xs md:text-sm leading-8 text-pretty">
          Welcome where tech meets curiosity 🚀
        </p>
        <p className="text-xs md:text-sm leading-8 text-pretty">
          Quick reads on web development, fun facts, history, tips, and more.
        </p>
      </div>
    </section>
  );
}
