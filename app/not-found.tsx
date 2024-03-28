// Components
import { BackButton } from "@/components/BackButton";

// Utils
import { notFound } from "@/constants/site";

export default async function NotFound() {
  return (
    <section className="flex flex-col justify-center items-start gap-5 min-h-screen">
      <h2 className="font-bold text-5xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-pretty text-transparent bg-clip-text">
        {notFound.notFoundErrorCode}
      </h2>
      <p className="text-2xl">{notFound.notFoundTitle}</p>
      <p className="text-sm opacity-75">{notFound.notFoundDescription}</p>
      <div className="flex items-center justify-center gap-4">
        <BackButton title="Back Home" />
      </div>
    </section>
  );
}
