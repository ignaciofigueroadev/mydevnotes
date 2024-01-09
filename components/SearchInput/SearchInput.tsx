import { ChangeEvent } from "react";

// Shadcn/ui imports
import { Input } from "../ui/input";

// Icons

export function SearchInput({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <header className="py-10 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search"
          type="search"
          className="w-56 outline-none"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
}
