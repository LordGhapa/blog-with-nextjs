"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function DarkMode() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    
    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  return (
    <>
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="transition-all duration-200 hover:bg-orange-50 hover:text-orange-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-orange-900/20 dark:hover:text-orange-400"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
