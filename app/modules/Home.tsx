// Components
import { Header } from "@/components/Header";
import { ScrollDown } from "@/components/ScrollDown";

// Next
import Link from "next/link";

// Config
import { homeConfig } from "@/constants/home";

export function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-8 justify-center items-center text-center min-h-[60vh]">
        <div>
          <h1 className="font-bold text-5xl lg:text-8xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-pretty text-transparent bg-clip-text">
            {homeConfig.title}
          </h1>
          <p className="text-xs lg:text-lg">{homeConfig.description}</p>
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
