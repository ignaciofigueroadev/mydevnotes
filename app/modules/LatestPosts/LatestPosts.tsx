"use client";

// Custom components
import { PostCard } from "@/components/PostCard/PostCard";
import { SkeletonPostCard } from "@/components/SkeletonPostCard/SkeletonPostCard";

// Get articles
import { usePosts } from "@/utils/getPosts";

// Types
import { PortableText } from "@portabletext/react";

export function LatestPosts() {
  const { posts, isError, isLoading } = usePosts();

  if (isLoading) {
    return (
      <section className="py-10 flex flex-col gap-6">
        <h2 className="font-bold opacity-75 text-xl">Latest Posts</h2>
        <div className="grid grid-cols-1 gap-12">
          <SkeletonPostCard />
          <SkeletonPostCard />
          <SkeletonPostCard />
          <SkeletonPostCard />
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
      <div className="grid grid-cols-1 gap-12">
        {firstFourPosts.map((post: any) => (
          <div key={post._id}>
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
