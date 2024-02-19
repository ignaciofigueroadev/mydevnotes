"use client";

// Custom components
import { PostCard } from "@/components/PostCard";
import { SkeletonPostCard } from "@/components/SkeletonPostCard";

// Get articles
import { usePosts } from "@/hooks/usePosts";

// Types
import { PortableText } from "@portabletext/react";

export function LatestPosts() {
  const { posts, isError, isLoading } = usePosts();

  if (isLoading) {
    return (
      <section className="py-10 flex flex-col gap-6">
        <h2 className="font-bold opacity-75 text-xl">Latest Posts</h2>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          <SkeletonPostCard className="col-span-2" />
          <SkeletonPostCard />
          <SkeletonPostCard />
          <SkeletonPostCard className="col-span-2" />
        </div>
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
    <section className="py-10 flex flex-col gap-6">
      <h2 className="font-bold opacity-75 text-xl">Latest Posts</h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
        {firstFourPosts.map((post: any, i: number) => (
          <div
            key={i}
            className={`${i === 0 || i === 3 ? "lg:col-span-2" : ""} h-full`}
          >
            <PostCard
              title={post.title}
              author={post.author}
              description={<PortableText value={post.body} />}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
