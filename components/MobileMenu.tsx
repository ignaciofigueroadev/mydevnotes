"use client";

// Components
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ToggleThemeButton } from "./ToggleThemeButton";

// Icons
import { Menu } from "lucide-react";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileMenu() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <ul className="flex flex-col gap-14 pt-32 py-10 pl-8 items-end md:w-full md:min-h-0 text-2xl">
          <li className="hover:opacity-70 duration-100">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-pretty text-transparent bg-clip-text font-bold"
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="hover:opacity-70 duration-100 ease-out transition-opacity">
            <Link
              href="/posts"
              className={`${
                pathname === "/posts"
                  ? "bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-pretty text-transparent bg-clip-text font-bold"
                  : ""
              }`}
            >
              Posts
            </Link>
          </li>
          <li className="hover:opacity-70 duration-100 ease-out transition-opacity">
            <Link
              href="/articles"
              className={`${
                pathname === "/articles"
                  ? "bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-pretty text-transparent bg-clip-text font-bold"
                  : ""
              }`}
            >
              Articles
            </Link>
          </li>
          <li>
            <ToggleThemeButton />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
