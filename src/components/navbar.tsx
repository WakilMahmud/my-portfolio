"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Moon, Sun } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Search } from "./Search";
import { useTheme } from "./theme-provider";

const NAVBAR_ROUTES = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/wakil-mahmud-dev/",
  },
  {
    name: "Resume",
    href: "#",
  },
];

function TimeDisplay() {
  const [time, setTime] = React.useState<string>("");

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return <div className="w-20" />; // Prevent hydration mismatch flicker

  return (
    <div className="flex items-center gap-2 font-mono text-sm text-foreground/80 border p-2 rounded-md bg-muted/30">
      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
      <span className="font-mono font-medium">{time}</span>
    </div>
  );
}

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60 dark:bg-black/50">
      <div className="flex h-14 items-center justify-between px-4 gap-30">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-foreground transition-colors hover:text-foreground/80"
          >
            <ArrowUpRight className="h-4 w-4" />
            <span>Wakil</span>
          </Link>

          <nav className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
            {NAVBAR_ROUTES.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 transition-colors hover:text-foreground"
              >
                {route.name}
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Search />

          <div className="flex items-center gap-2 border-l border-border pl-4">
            <TimeDisplay />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-muted"
              onClick={toggleTheme}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-muted"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
