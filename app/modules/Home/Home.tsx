// Shadcn/ui componentes

// Custom components
import { Header } from "@/components/Header/Header";

// Next components
import { ScrollDown } from "@/components/ScrollDown/ScrollDown";
import Link from "next/link";

export function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-8 justify-center items-center text-center min-h-[60vh] animate-fade animate-once animate-duration-1000 animate-ease-in-out">
        <div>
          <h1 className="font-bold text-6xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-pretty text-transparent bg-clip-text">
            My Dev Notes
          </h1>
          <p>
            A blog built by a{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-pretty text-transparent bg-clip-text">
              developer
            </span>{" "}
            for{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-pretty text-transparent bg-clip-text">
              developers
            </span>
          </p>
        </div>
        <div>
          <Link href="#latest-articles">
            <ScrollDown />
          </Link>
        </div>
      </section>
    </>
  );
}
