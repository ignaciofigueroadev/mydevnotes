"use client";

// Next hooks
import { usePathname } from "next/navigation";

// Custom components
import { MobileMenu } from "./MobileMenu";
import { ToggleThemeButton } from "./ToggleThemeButton";

// Next
import Link from "next/link";

// Icons
import { FileText, HomeIcon, MessageSquare } from "lucide-react";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between sticky top-0 left-0 z-10 pt-3">
      <div className="flex gap-9 items-center justify-between lg:justify-normal w-screen">
        <div className="flex items-center justify-between w-full gap-6 lg:hidden relative inset-0">
          <Logo />
          <MobileMenu />
        </div>
        <nav className="hidden lg:block">
          <ul className="flex flex-col bg-card p-2 gap-5 w-screen items-center md:w-full md:flex-row md:min-h-0 rounded-full">
            <li>
              <Link
                href="/"
                className={`flex gap-1 hover:bg-indigo-400 hover:text-white py-3 px-7 rounded-full justify-center items-center cursor-default duration-150 ${
                  pathname === "/" ? "bg-indigo-400 text-white" : ""
                }`}
              >
                <HomeIcon size=".75rem" />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className={`flex gap-1 hover:bg-fuchsia-600 hover:text-white py-3 px-7 rounded-full justify-center items-center cursor-default duration-150 ${
                  pathname === "/posts" ? "bg-fuchsia-600 text-white" : ""
                }`}
              >
                <MessageSquare size=".75rem" />
                Posts
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                className={`flex gap-1 hover:bg-pink-400 hover:text-white py-3 px-7 rounded-full justify-center items-center cursor-default duration-150 ${
                  pathname === "/articles" ? "bg-pink-400 text-white" : ""
                }`}
              >
                <FileText size=".75rem" />
                Articles
              </Link>
            </li>
            <li>
              <ToggleThemeButton />
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden lg:block">
        <Logo />
      </div>
    </header>
  );
}
