"use client";

// Custom components
import { Header } from "@/components/Header/Header";
import { PostCard } from "@/components/PostCard/PostCard";
import { ScrollDown } from "@/components/ScrollDown/ScrollDown";
import { Spinner } from "@/components/Spinner/Spinner";
import { Separator } from "@/components/ui/separator";

// Get posts
import { usePosts } from "@/utils/getPosts";

import { PortableText } from "@portabletext/react";

export default function Posts() {
  const { isError, isLoading, posts } = usePosts();

  if (isLoading) {
    return (
      <div>
        <Header />
        <Spinner className="flex justify-center items-center min-h-screen" />
      </div>
    );
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      <Header />
      <section className="py-10">
        <div className=" flex flex-col gap-5">
          <div className="flex flex-col gap-3 justify-center items-center min-h-[40vh] text-center">
            <h3 className="font-bold text-6xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
              Posts
            </h3>
            <p>
              In this section you are going to find quick posts as tips and
              advices.
            </p>
            <ScrollDown />
          </div>
          <Separator />
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
    </>
  );
}
