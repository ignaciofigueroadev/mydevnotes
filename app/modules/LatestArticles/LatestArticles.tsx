"use client";

// Custom components
import { ArticleCard } from "@/components/ArticleCard";
import { SkeletonArticleCard } from "@/components/SkeletonArticleCard";

// Get articles
import { useArticles } from "@/hooks/useArticles";

// Types
import { ArticleTypes } from "@/types/article.types";

export function LatestArticles() {
  const { articles, isError, isLoading } = useArticles();

  if (isLoading) {
    return (
      <section className="py-10 flex flex-col gap-6">
        <h2 className="font-bold opacity-75">Latest Articles</h2>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SkeletonArticleCard />
          <SkeletonArticleCard />
          <SkeletonArticleCard />
          <SkeletonArticleCard />
        </section>
      </section>
    );
  }

  if (isError) {
    return <p>Error</p>;
  }

  const sortedArticles = articles.sort(
    (
      a: { publishedAt: string | number | Date },
      b: { publishedAt: string | number | Date }
    ) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const firstFourArticles = sortedArticles.slice(0, 4);

  return (
    <section className="py-10 flex flex-col gap-6" id="latest-articles">
      <h2 className="font-bold opacity-75 text-xl">Latest Articles</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {firstFourArticles.map((article: ArticleTypes) => (
          <div key={article._id}>
            <ArticleCard
              publishedAt={article.publishedAt}
              slug={article.slug}
              title={article.title}
              description={article.description}
              author={article.author}
              author_image={article.author_image}
              alt={article.author}
              categories={article.categories}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
