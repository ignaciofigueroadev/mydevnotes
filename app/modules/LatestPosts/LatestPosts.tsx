"use client";

// Custom components
import { PostCard } from "@/components/PostCard/PostCard";
import { SkeletonArticleCard } from "@/components/SkeletonArticleCard/SkeletonArticleCard";

// Get articles
import { usePosts } from "@/utils/getPosts";

// Types
import { PortableText } from "@portabletext/react";

export function LatestPosts() {
  const { posts, isError, isLoading } = usePosts();

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

  const sortedPosts = posts.sort(
    (
      a: { publishedAt: string | number | Date },
      b: { publishedAt: string | number | Date }
    ) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const firstFourPosts = sortedPosts.slice(0, 4);

  return (
    <section className="grid grid-cols-1 gap-12">
      {firstFourPosts.map((post: any) => (
        <div key={post._id}>
          <PostCard
            publishedAt={post.publishedAt}
            title={post.title}
            description={<PortableText value={post.body} />}
            className="min-h-auto"
          />
        </div>
      ))}
    </section>
  );
}
