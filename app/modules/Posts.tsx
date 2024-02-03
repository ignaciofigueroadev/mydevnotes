"use client";

// Custom components
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { ScrollDown } from "@/components/ScrollDown";
import { SkeletonPostCard } from "@/components/SkeletonPostCard";

// Get posts
import { usePosts } from "@/hooks/usePosts";

// Portable text
import { PortableText } from "@portabletext/react";

// Next
import Link from "next/link";

export default function Posts() {
  const { isError, isLoading, posts } = usePosts();

  if (isLoading) {
    return (
      <>
        <Header />
        <section className="py-10">
          <div className=" flex flex-col gap-5">
            <div className="flex flex-col gap-8 justify-center items-center min-h-[60vh] text-center">
              <div>
                <h3 className="font-bold text-5xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
                  Posts
                </h3>
                <p className="text-xs lg:text-lg">
                  In this section you are going to find quick posts as tips and
                  advices.
                </p>
              </div>
              <Link href="#posts">
                <ScrollDown />
              </Link>
            </div>
            <div className="grid gap-10 grid-cols-1 justify-center items-center pt-10">
              <SkeletonPostCard />
              <SkeletonPostCard />
              <SkeletonPostCard />
              <SkeletonPostCard />
            </div>
          </div>
        </section>
        <Footer />
      </>
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
          <div className="flex flex-col gap-8 justify-center items-center min-h-[60vh] text-center">
            <div>
              <h3 className="font-bold text-6xl lg:text-7xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
                Posts
              </h3>
              <p className="text-xs lg:text-lg">
                In this section you are going to find quick posts as tips and
                advices.
              </p>
            </div>
            <Link href="#posts">
              <ScrollDown />
            </Link>
          </div>
          <div
            className="grid gap-10 grid-cols-1 justify-center items-center pt-10"
            id="posts"
          >
            {posts.map((post: any) => (
              <div key={post._id}>
                <PostCard
                  title={post.title}
                  description={<PortableText value={post.body} />}
                  author={post.author}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}