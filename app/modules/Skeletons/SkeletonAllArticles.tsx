// Custom components
import { ArticleSearch } from "@/components/ArticleSearch";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollDown } from "@/components/ScrollDown";
import { SkeletonArticleCard } from "@/components/SkeletonArticleCard";

export function SkeletonAllArticles() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-2 py-10">
        <div className="flex flex-col gap-3 justify-center items-center text-center min-h-[60vh]">
          <h3 className="font-bold text-5xl lg:text-8xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
            Articles
          </h3>
          <p className="text-xs lg:text-lg">
            In this section you are going to find articles about tech and
            coding. Check them!
          </p>
          <ScrollDown />
        </div>
        <div className="flex">
          <ArticleSearch />
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <SkeletonArticleCard />
          <SkeletonArticleCard />
          <SkeletonArticleCard />
          <SkeletonArticleCard />
        </section>
      </div>
      <Footer />
    </>
  );
}
