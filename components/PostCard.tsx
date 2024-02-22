// Shadcn/ui components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

// Icon

interface PostCardProps {
  title?: string;
  className?: string;
  author?: string;
}

export function PostCard({ title, className, author }: PostCardProps) {
  return (
    <Card
      className={`h-full w-full ${className} post-fade hover:backdrop-brightness-150 transition-all duration-150 ease-in-out`}
    >
      <div className="shadow-dark-box-shadow-card rounded-sm h-full flex flex-col justify-between">
        <CardHeader className="flex flex-row justify-end items-center">
          <QuoteIcon className="w-4 h-4" />
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <CardTitle className="text-1xl text-pretty  font-bold opacity-75">
            {title}
          </CardTitle>
        </CardContent>
        <CardFooter className="text-xs flex justify-end">
          <span>2019-12-21</span>
        </CardFooter>
      </div>
    </Card>
  );
}
