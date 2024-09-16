"use client"

import React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function TombolTema() {
  const { setTheme } = useTheme()

  return (
    <>
    <div className="inline-flex items-center justify-center rounded-md border border-gray-100 bg-gray-100 w-fit h-10 group dark:bg-background dark:border-background p-1 whitespace-nowrap font-thin">
        <p className="text-sm font-extralight overflow-hidden px-0 w-0 group-hover:px-1.5 group-hover:w-24 transition-all duration-300 ease-in-out inline-flex items-center justify-left">
        Ganti Tema
        </p>
        <Button variant="ghost"  onClick={() => setTheme("light")} size="icon" className="flex items-center bg-background hover:bg-background transition-all duration-300 ease-in-out h-[2rem] w-[2rem]">
          <Sun className="h-[1.25rem] w-[1.25rem]"/>
        </Button>
        <Button variant="ghost" onClick={() => setTheme("dark")} size="icon" className="flex items-center bg-gray-100 hover:bg-gray-100 transition-all duration-300 ease-in-out h-[2rem] w-[2rem] dark:bg-gray-900">
          <Moon className="h-[1.25rem] w-[1.25rem]"/>
        </Button>
    </div>
    </>
  )
}
