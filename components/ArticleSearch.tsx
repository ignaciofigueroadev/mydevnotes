// React
import { ChangeEvent } from "react";

// Shadcn/ui imports
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
import { Input } from "./ui/input";

export function ArticleSearch({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="py-10">
      <Input
        placeholder="Search..."
        type="search"
        className="w-56 rounded-full"
        onChange={handleSearch}
      />
    </div>
  );
}
