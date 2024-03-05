import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };
  return (
    <div className="flex items-center">
      <Button
        variant={"outline"}
        size="icon"
        onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            <span className="sr-only">Switch to light theme</span>
          </>
        ) : (
          <>
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
            <span className="sr-only">Switch to dark theme</span>
          </>
        )}
      </Button>
    </div>
  );
}
