"use client";

// Custom components
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { SkeletonArticleCard } from "@/components/SkeletonArticleCard/SkeletonArticleCard";

// Get articles
import { useArticles } from "@/utils/getArticles";

// Types
import { ArticleTypes } from "@/types/article.types";

export function LatestArticles() {
  const { articles, isError, isLoading } = useArticles();

  if (isLoading) {
    return (
      <section className="grid grid-cols-1 gap-7">
        <SkeletonArticleCard />
        <SkeletonArticleCard />
        <SkeletonArticleCard />
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
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-7">
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
            className="flex-1 flex h-full"
          />
        </div>
      ))}
    </section>
  );
}