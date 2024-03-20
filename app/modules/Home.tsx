// Components
import { Header } from "@/components/Header";

// Config
import { home } from "@/constants/site";

export function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-3 justify-center min-h-[70vh]">
        <h1 className="font-bold text-7xl lg:text-8xl inline-block text-pretty">
          {home.title}
        </h1>
        <p className="text-xs lg:text-sm opacity-70">{home.description}</p>
      </section>
    </>
  );
}
