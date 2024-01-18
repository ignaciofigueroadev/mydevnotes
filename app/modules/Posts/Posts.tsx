"use client";

// Custom components
import { PostCard } from "@/components/PostCard/PostCard";
import { ScrollDown } from "@/components/ScrollDown/ScrollDown";
import { SkeletonPostCard } from "@/components/SkeletonPostCard/SkeletonPostCard";

// Get posts
import { usePosts } from "@/utils/getPosts";

// Portable text
import { PortableText } from "@portabletext/react";

export default function Posts() {
  const { isError, isLoading, posts } = usePosts();

  if (isLoading) {
    return (
      <section className="py-10">
        <div className=" flex flex-col gap-5">
          <div className="flex flex-col gap-3 justify-center items-center min-h-[60vh] text-center">
            <h3 className="font-bold text-6xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
              Posts
            </h3>
            <p>
              In this section you are going to find quick posts as tips and
              advices.
            </p>
            <ScrollDown />
          </div>
          <div className="grid gap-10 grid-cols-1 justify-center items-center pt-10">
            <SkeletonPostCard />
            <SkeletonPostCard />
            <SkeletonPostCard />
            <SkeletonPostCard />
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <section className="py-10">
      <div className=" flex flex-col gap-5">
        <div className="flex flex-col gap-3 justify-center items-center min-h-[60vh] text-center">
          <h3 className="font-bold text-6xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
            Posts
          </h3>
          <p>
            In this section you are going to find quick posts as tips and
            advices.
          </p>
          <ScrollDown />
        </div>
        <div className="grid gap-10 grid-cols-1 justify-center items-center pt-10">
          {posts.map((post: any) => (
            <div key={post._id}>
              <PostCard
                title={post.title}
                publishedAt={post.publishedAt}
                description={<PortableText value={post.body} />}
                author={post.author}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
