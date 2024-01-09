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
    <Card
      className={`w-full h-full p-2 ${className} shadow-[15px_8px_0px_rgb(147_51_234)] border-[1px] border-purple-800`}
    >
      <CardHeader className="flex flex-row justify-end items-center">
        <QuoteIcon />
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <CardTitle className="text-lg leading-8 font-bold lg:text-2xl opacity-75">
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
