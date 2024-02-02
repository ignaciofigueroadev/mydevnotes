import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonArticleDetails() {
  const skeletonWidths = [
    "1/2",
    "3/4",
    "2/3",
    "full",
    "5/6",
    "1/3",
    "2/5",
    "3/6",
    "4/6",
    "1/2",
    "2/4",
    "3/5",
    "4/7",
    "5/8",
    "6/9",
    "7/10",
    "8/11",
    "9/12",
    "10/13",
    "11/14",
    "12/15",
    "13/16",
    "14/17",
    "15/18",
    "16/19",
    "17/20",
  ];

  return (
    <div className="flex flex-col gap-4 pt-12 ">
      {skeletonWidths.map((width, index) => (
        <Skeleton
          key={index}
          className={`h-4 w-${width} bg-gray-300 dark:bg-gray-700`}
        />
      ))}
    </div>
  );
}
