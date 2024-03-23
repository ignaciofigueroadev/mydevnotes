"use client";

// Hooks
import { useState } from "react";

// Components
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleSearch } from "@/components/ArticleSearch";
import { Header } from "@/components/Header";
import { SkeletonAllArticles } from "../../components/Skeletons/SkeletonAllArticles";

// Utils
import { allArticles } from "@/constants/site";
import { useArticles } from "@/hooks/useArticles";

// Types
import { ArticleTypes } from "@/types/article.types";

// Next

export default function AllArticlesSection() {
  const { articles, isError, isLoading } = useArticles();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return <SkeletonAllArticles />;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  const filteredPosts = articles.filter((article: any) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <section className="py-10 flex flex-col gap-5">
        <div className="flex flex-col justify-center gap-3 min-h-[60vh]">
          <h3 className="font-bold text-6xl lg:text-8xl">
            {allArticles.title}
          </h3>
          <p className="text-xs lg:text-sm opacity-75">
            {allArticles.description}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <ArticleSearch onSearch={setSearchTerm} />
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 justify-center items-center"
          id="all-articles"
        >
          {filteredPosts.length === 0 ? (
            <div className="col-span-4">
              <p className="text-center">
                {allArticles.fallbackNoArticlesFound}
              </p>
            </div>
          ) : (
            filteredPosts.map((article: ArticleTypes) => (
              <div key={article._id}>
                <ArticleCard
                  title={article.title}
                  publishedAt={article.publishedAt}
                  description={article.description}
                  author={article.author}
                  author_image={article.author_image}
                  slug={article.slug}
                  alt={article.author}
                  categories={article.categories}
                />
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
