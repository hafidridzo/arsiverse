"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ButtonTema() {
  const { setTheme } = useTheme()

  return (
    <div className="flex items-center justify-between rounded-md bg-accent h-9 group whitespace-nowrap p-1">
        <span className="text-sm font-medium text-icon overflow-hidden w-0 group-hover:px-2 group-hover:w-14 transition-all duration-300 ease-in-out items-center">
          Tema
        </span>
        <Button variant="base"  onClick={() => setTheme("light")} size="icon" className="rounded-md bg-background dark:bg-accent h-8 w-8 mr-1">
          <Sun className=""/>
        </Button>
        <Button variant="base" onClick={() => setTheme("dark")} size="icon" className="rounded-md h-8 w-8 dark:bg-background">
          <Moon className=""/>
        </Button>
    </div>
  )
}
