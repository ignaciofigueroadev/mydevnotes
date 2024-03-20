// Components
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkeletonPostCard } from "@/components/SkeletonPostCard";

// Next

export function SkeletonAllPosts() {
  return (
    <>
      <Header />
      <section className="py-10">
        <div className=" flex flex-col gap-5">
          <div className="flex flex-col gap-3 justify-center min-h-[60vh]">
            <h3 className="font-bold text-5xl lg:text-8xl">Posts</h3>
            <p className="text-xs lg:text-sm opacity-75">
              In this section you are going to find quick posts as tips and
              advices.
            </p>
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center pt-10">
            <SkeletonPostCard />
            <SkeletonPostCard />
            <SkeletonPostCard />
            <SkeletonPostCard className="lg:col-span-2" />
            <SkeletonPostCard />
            <SkeletonPostCard />
            <SkeletonPostCard className="lg:col-span-2" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
