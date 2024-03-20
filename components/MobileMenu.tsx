"use client";

// Components
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ToggleThemeButton } from "./ToggleThemeButton";

// Icons
import { Menu } from "lucide-react";

// Next
import { navItems } from "@/constants/site";
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
        <ul className="flex flex-col gap-7 pt-32 py-10 pl-8 items-end md:w-full md:min-h-0 text-2xl">
          {navItems.map((navItem, index) => {
            return (
              <li key={index}>
                <Button asChild variant="navItem" title={navItem.title}>
                  <Link
                    href={navItem.href}
                    className={`flex gap-1 ${
                      pathname === `${navItem.href}`
                        ? "dark:bg-gray-600 dark:bg-opacity-30 bg-gray-300 bg-opacity-50"
                        : ""
                    }`}
                  >
                    {navItem.title}
                  </Link>
                </Button>
              </li>
            );
          })}
          <li>
            <ToggleThemeButton />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
