// Custom components
import { Header } from "@/components/Header";

// Next components
import { ScrollDown } from "@/components/ScrollDown";
import Link from "next/link";

export function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-8 justify-center items-center text-center min-h-[60vh]">
        <div>
          <h1 className="font-bold text-5xl lg:text-8xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-pretty text-transparent bg-clip-text">
            My Dev Notes
          </h1>
          <p className="text-xs lg:text-lg">
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
