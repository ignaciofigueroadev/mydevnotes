"use client";

import { useState } from "react";

// Custom components
import { ArticleCard } from "@/components/ArticleCard/ArticleCard";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { SkeletonArticleCard } from "@/components/SkeletonArticleCard/SkeletonArticleCard";
import { Separator } from "@/components/ui/separator";

// Get posts
import { useArticles } from "@/utils/getArticles";

// Types
import { ScrollDown } from "@/components/ScrollDown/ScrollDown";
import { ArticleTypes } from "@/types/article.types";

export default function AllArticles() {
  const { articles, isError, isLoading } = useArticles();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="flex flex-col gap-2 py-10">
          <div className="flex flex-col gap-3 justify-center min-h-[40vh]">
            <h3 className="font-bold text-5xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
              Articles
            </h3>
            <p className="opacity-75">
              In this section you are going to find articles about tech and
              coding. Check them!
            </p>
          </div>
          <Separator />
          <SearchInput onSearch={setSearchTerm} />
          <section className="grid grid-cols-1 gap-7">
            <SkeletonArticleCard />
            <SkeletonArticleCard />
            <SkeletonArticleCard />
          </section>
          <Footer />
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
        <div className="flex flex-col justify-center items-center gap-3 min-h-[40vh] text-center">
          <h3 className="font-bold text-5xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
            Articles
          </h3>
          <p className="opacity-75">
            In this section you are going to find articles about tech and
            coding. Check them!
          </p>
          <ScrollDown />
        </div>
        <Separator />
        <div className="flex items-center gap-4">
          <SearchInput onSearch={setSearchTerm} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 py-4">
          {filteredPosts.map((article: ArticleTypes) => (
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
          ))}
        </div>
      </section>
    </>
  );
}
