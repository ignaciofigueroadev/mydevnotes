// Shadcn/ui Components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function SkeletonArticleCard() {
  return (
    <Card className="p-6 pt-8 flex flex-col gap-5 border-[.0625rem]">
      <CardHeader className="flex flex-row justify-between items-center relative">
        <Skeleton className="h-4 w-16 bg-gray-300 dark:bg-gray-700" />
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <CardTitle>
          <Skeleton className="h-6 w-full bg-gray-300 dark:bg-gray-700" />
        </CardTitle>
      </CardContent>
      <CardFooter className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700" />
          <Skeleton className="h-4 w-20 bg-gray-300 dark:bg-gray-700" />
        </div>
        {/* //TODO improve this section */}
        {/* <div className="flex flex-wrap gap-2">
          <Skeleton className="h-4 w-12 bg-gray-300 dark:bg-gray-700" />
          <Skeleton className="h-4 w-10 bg-gray-300 dark:bg-gray-700" />
          <Skeleton className="h-4 w-16 bg-gray-300 dark:bg-gray-700" />
          <Skeleton className="h-4 w-14 bg-gray-300 dark:bg-gray-700" />
        </div> */}
      </CardFooter>
    </Card>
  );
}
