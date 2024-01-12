"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";

// Next imports
import Link from "next/link";

// Next hooks
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
      <SheetContent side="left" className="">
        <ul className="flex flex-col gap-14 pt-32 mw-screen py-10 pl-8 items-end md:w-full md:min-h-0 text-2xl">
          <li className="hover:opacity-70 duration-100 ease-out transition-opacity">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "bg-cyan-300 text-black py-3 px-4 rounded-full"
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
                  ? "bg-fuchsia-700 text-black py-3 px-4 rounded-full"
                  : ""
              }`}
            >
              Posts
            </Link>
          </li>
          <li className="hover:opacity-70 duration-100 ease-out transition-opacity">
            <Link
              href="/all-articles"
              className={`${
                pathname === "/all-articles"
                  ? "bg-pink-400 text-black py-3 px-4 rounded-full"
                  : ""
              }`}
            >
              Articles
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
