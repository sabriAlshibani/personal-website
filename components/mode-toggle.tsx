"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  if (!mounted) {
    return (
      <div className="h-7 w-13 rounded-full border border-border bg-muted/40 p-0.5" />
    )
  }

  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex h-7 w-13 items-center rounded-full border border-border bg-muted/60 p-0.5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="sr-only">Toggle theme</span>
      <div className="flex w-full justify-between items-center px-1 text-muted-foreground pointer-events-none">
        <Sun className="h-3.5 w-3.5" />
        <Moon className="h-3.5 w-3.5" />
      </div>
      <div
        className={`absolute top-0.5 left-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-background shadow-xs border border-border/80 transition-transform duration-200 ease-in-out ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-foreground" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-foreground" />
        )}
      </div>
    </button>
  )
}