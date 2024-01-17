// Custom componenst
import { Header } from "@/components/Header/Header";
import { Button } from "@/components/ui/button";

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
        <div className="flex gap-8">
          <Link href="2asfas">
            <Button variant="ghost" className="font-bold">
              About
            </Button>
          </Link>
          <Link href="#latest-articles">
            <Button variant="ghost" className="font-bold">
              Explore
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
