"use client";

// Components
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SkeletonAllPosts } from "./Skeletons/SkeletonAllPosts";

// Utils
import { usePosts } from "@/hooks/usePosts";
import { PortableText } from "@portabletext/react";

export default function Posts() {
  const { isError, isLoading, posts } = usePosts();

  if (isLoading) {
    return <SkeletonAllPosts />;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      <Header />
      <section className="py-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 justify-center min-h-[60vh]">
            <h3 className="font-bold text-6xl lg:text-7xl">Posts</h3>
            <p className="text-xs lg:text-sm opacity-75">
              In this section you are going to find quick posts as tips and
              advices.
            </p>
          </div>
          <div
            className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10"
            id="posts"
          >
            {posts.map((post: any, i: number) => (
              <Dialog key={i}>
                <DialogTrigger
                  className={`${
                    i === 3 || i === 6 ? "lg:col-span-2" : ""
                  } h-full w-full`}
                >
                  <PostCard title={post.title} author={post.author} />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{post.title}</DialogTitle>
                    <DialogDescription>
                      <PortableText value={post.body} />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
