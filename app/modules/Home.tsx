// Components
import { Header } from "@/components/Header";

// Config
import { homeConfig } from "@/constants/home";

export function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-3 justify-center min-h-[70vh]">
        <h1 className="font-bold text-7xl lg:text-7xl inline-block text-pretty">
          {homeConfig.title}
        </h1>
        <p className="text-xs lg:text-sm opacity-70">
          {homeConfig.description}
        </p>
      </section>
    </>
  );
}
