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

interface PostCardProps {
  title: string;
  description: string;
  className: string;
  author: string;
}

export function PostCard({
  title,
  description,
  className,
  author,
}: PostCardProps) {
  return (
    <Card
      className={`w-full h-full ${className} border-[1px] border-purple-800 post-fade`}
    >
      <div className="shadow-dark-box-shadow-card rounded-md">
        <CardHeader className="flex flex-row justify-end items-center">
          <QuoteIcon />
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <CardTitle className="text-lg leading-8 font-bold opacity-75">
            {title}
          </CardTitle>
        </CardContent>
        <CardFooter>
          <CardDescription className="flex flex-col gap-3 text-black dark:text-white">
            {description}
          </CardDescription>
          <div className="w-full flex justify-end items-center text-xs">
            {author}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
