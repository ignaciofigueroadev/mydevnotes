// Shadcn/ui components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";
import { Button } from "./ui/button";

export function ArticleFilter() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="p-2 ">
          <Filter />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Filter by category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Frontend</DropdownMenuItem>
        <DropdownMenuItem>Backend</DropdownMenuItem>
        <DropdownMenuItem>UX/UI</DropdownMenuItem>
        <DropdownMenuItem>Machine Learning</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
