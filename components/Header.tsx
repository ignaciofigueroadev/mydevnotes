"use client";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { Button } from "./ui/button";

// Icons
import { HomeIcon, MessageSquare, SheetIcon } from "lucide-react";

// Utils
import { navItems } from "@/constants/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between pt-3">
      <div className="flex gap-9 items-center justify-between lg:justify-normal w-screen">
        <div className="flex items-center justify-between w-full gap-6 lg:hidden relative inset-0">
          <MobileMenu />
          <Logo />
        </div>
        <nav className="hidden lg:block">
          <ul className="flex flex-col p-2 gap-5 w-screen items-center md:w-full md:flex-row md:min-h-0">
            {navItems.map((navItem, index) => {
              let IconComponent;
              switch (navItem.icon) {
                case "home":
                  IconComponent = <HomeIcon size=".75rem" />;
                  break;
                case "post":
                  IconComponent = <MessageSquare size=".75rem" />;
                  break;
                case "article":
                  IconComponent = <SheetIcon size=".75rem" />;
                  break;
                default:
                  IconComponent = null;
              }
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
                      {IconComponent}
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
        </nav>
      </div>
      <div className="hidden lg:block">
        <Logo />
      </div>
    </header>
  );
}
