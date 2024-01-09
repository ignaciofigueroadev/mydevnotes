import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Icon
import { QuoteIcon } from "lucide-react";

// Types
import { PostsTypes } from "@/types/post.types";

export function PostCard({ title, description, className }: PostsTypes) {
  return (
    <Card className={`w-full h-full p-2 ${className}`}>
      <CardHeader className="flex flex-row justify-end items-center">
        <QuoteIcon />
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <CardTitle className="text-lg leading-8 font-bold lg:text-2xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
          {title}
        </CardTitle>
      </CardContent>
      <CardFooter>
        <CardDescription className="flex flex-col gap-3 text-black dark:text-white">
          {description}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
