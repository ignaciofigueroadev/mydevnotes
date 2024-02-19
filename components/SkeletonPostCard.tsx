// Shadcn/ui Components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

interface SkeletonPostCardProps {
  className?: string;
}

export function SkeletonPostCard({ className }: SkeletonPostCardProps) {
  return (
    <Card className={`flex flex-col border-[.0625rem] ${className}`}>
      <div className="shadow-[10px_10px_0_rgb(209_213_219)] dark:shadow-gray-700 rounded-md">
        <CardHeader className="flex items-end">
          <Skeleton className="h-4 w-4 rounded-md bg-gray-300 dark:bg-gray-700" />
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <CardTitle>
            <Skeleton className="h-6 w-full bg-gray-300 dark:bg-gray-700" />
          </CardTitle>
        </CardContent>
        <CardFooter className="flex  justify-end items-center">
          <div>
            <Skeleton className="h-5 w-20  bg-gray-300 dark:bg-gray-700" />
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
