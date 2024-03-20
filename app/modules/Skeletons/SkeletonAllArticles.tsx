// Components
import { ArticleSearch } from "@/components/ArticleSearch";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkeletonArticleCard } from "@/components/SkeletonArticleCard";

export function SkeletonAllArticles() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-2 py-10">
        <div className="flex flex-col gap-3 justify-center min-h-[60vh]">
          <h3 className="font-bold text-5xl lg:text-8xl">Articles</h3>
          <p className="text-xs lg:text-sm opacity-75">
            In this section you are going to find articles about tech and
            coding. Check them!
          </p>
        </div>
        <div className="flex">
          <ArticleSearch />
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
