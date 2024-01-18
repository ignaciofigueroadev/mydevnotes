// Shadcn/ui componentes
import { Button } from "@/components/ui/button";

// Custom components
import { Header } from "@/components/Header/Header";

// Next components
import Link from "next/link";

export function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-5 justify-center items-center text-center min-h-[60vh]">
        <h1 className="font-bold text-6xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-pretty text-transparent bg-clip-text">
          My Dev Notes
        </h1>
        <p>
          A blog build by a{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-pretty text-transparent bg-clip-text">
            developer
          </span>{" "}
          for{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-pretty text-transparent bg-clip-text">
            developers
          </span>
        </p>
        <div className="flex  gap-8">
          <Link href="/about">
            <Button
              variant="outline"
              className="font-bold hover:-translate-y-1 transition-all duration-150"
            >
              About
            </Button>
          </Link>
          <Link href="#latest-articles">
            <Button
              variant="outline"
              className="font-bold hover:-translate-y-1 transition-all duration-150"
            >
              Explore
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
