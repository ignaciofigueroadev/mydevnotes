// Shadcn/ui components
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
  title?: string;
  description?: React.ReactNode;
  className?: string;
  author?: string;
}

export function PostCard({
  title,
  description,
  className,
  author,
}: PostCardProps) {
  return (
    <Card
      className={`w-full h-full ${className} post-fade flex flex-col justify-between `}
    >
      <div className="shadow-dark-box-shadow-card rounded-sm h-full">
        <CardHeader className="flex flex-row justify-end items-center">
          <QuoteIcon className="w-7 h-7 text-purple-700" />
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <CardTitle className="text-1xl lg:text-3xl text-pretty font-bold opacity-75">
            {title}
          </CardTitle>
        </CardContent>
        <CardFooter>
          <CardDescription className="flex flex-col gap-3 text-black dark:text-white text-sm">
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
