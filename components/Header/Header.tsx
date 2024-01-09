"use client";

// Next hooks
import { usePathname } from "next/navigation";

// Custom components
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { ToggleThemeButton } from "../ToggleThemeButton/ToggleThemeButton";

// shadcn/ui components
import { Button } from "../ui/button";

// Next imports
import Link from "next/link";

// Icons
import { FileText, HomeIcon, MessageSquare } from "lucide-react";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between">
      <div className="flex gap-9 items-center justify-between lg:justify-normal w-screen">
        <div className="flex items-center justify-between w-full gap-6 lg:hidden">
          <MobileMenu />
          <ToggleThemeButton />
        </div>
        <nav className="hidden lg:block">
          <ul className="flex flex-col gap-6 w-screen items-center md:w-full md:flex-row md:min-h-0 border rounded-full px-2 py-2">
            <li>
              <Link href="/" className="cursor-default flex items-center gap-1">
                <Button
                  variant="ghost"
                  className={`flex gap-2 hover:bg-indigo-400 hover:text-black ${
                    pathname === "/" ? "bg-indigo-400 text-black" : ""
                  }`}
                >
                  <HomeIcon size=".75rem" />
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className="cursor-default flex items-center gap-1"
              >
                <Button
                  variant="ghost"
                  className={`flex gap-2 hover:bg-fuchsia-600 hover:text-black ${
                    pathname === "/posts" ? "bg-fuchsia-600 text-black" : ""
                  }`}
                >
                  <MessageSquare size=".75rem" />
                  Posts
                </Button>
              </Link>
            </li>
            <li>
              <Link
                href="/all-articles"
                className="cursor-default flex items-center gap-3"
              >
                <Button
                  variant="ghost"
                  className={`flex gap-1 hover:bg-pink-400 hover:text-black ${
                    pathname === "/all-articles" ? "bg-pink-400 text-black" : ""
                  }`}
                >
                  <FileText size=".75rem" />
                  Articles
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden lg:block">
        <ToggleThemeButton />
      </div>
    </header>
  );
}
