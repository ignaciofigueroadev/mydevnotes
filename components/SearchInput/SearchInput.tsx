// React
import { ChangeEvent } from "react";

// Shadcn/ui imports
import { Input } from "../ui/input";

export function SearchInput({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <header className="py-10">
      <Input
        placeholder="Search..."
        type="search"
        className="w-56 rounded-full"
        onChange={handleSearch}
      />
    </header>
  );
}
