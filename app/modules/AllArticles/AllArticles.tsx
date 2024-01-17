"use client";

import { useState } from "react";

// Custom components
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { Header } from "@/components/Header/Header";
import { ScrollDown } from "@/components/ScrollDown/ScrollDown";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { SkeletonArticleCard } from "@/components/SkeletonArticleCard/SkeletonArticleCard";

// Get posts
import { useArticles } from "@/utils/getArticles";

// Types
import { ArticleTypes } from "@/types/article.types";

export default function AllArticles() {
  const { articles, isError, isLoading } = useArticles();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="flex flex-col gap-2 py-10">
          <div className="flex flex-col gap-3 justify-center items-center text-center min-h-[60vh]">
            <h3 className="font-bold text-6xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
              Articles
            </h3>
            <p>
              In this section you are going to find articles about tech and
              coding. Check them!
            </p>
            <ScrollDown />
          </div>
          <SearchInput onSearch={setSearchTerm} />
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            <SkeletonArticleCard />
            <SkeletonArticleCard />
            <SkeletonArticleCard />
            <SkeletonArticleCard />
          </section>
        </div>
      </>
    );
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
        <div className="flex flex-col justify-center items-center gap-3 min-h-[60vh] text-center">
          <h3 className="font-bold text-6xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
            Articles
          </h3>
          <p>
            In this section you are going to find articles about tech and
            coding. Check them!
          </p>
          <ScrollDown />
        </div>
        <div className="flex items-center gap-4">
          <SearchInput onSearch={setSearchTerm} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 py-4 justify-center items-center">
          {filteredPosts.length === 0 ? (
            <div className="col-span-4">
              <p className="text-center">
                No articles found. Please try a different search term.
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
                />
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
