// Components
import { GoBack } from "@/components/GoBack/GoBack";

export default async function NotFound() {
  return (
    <section className="flex flex-col justify-center items-start gap-3 min-h-screen">
      <h2 className="font-bold text-5xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-pretty text-transparent bg-clip-text">
        404
      </h2>
      <p className="text-2xl">Oops! This page could not be found.</p>
      <p className="text-sm opacity-75">
        Sorry but the page you are looking for does not exist, was not created,
        have been removed, name changed or is temporarily unavailable
      </p>
      <div className="flex items-center justify-center gap-4">
        <GoBack />
        <p className="text-xs">Back Home</p>
      </div>
    </section>
  );
}
