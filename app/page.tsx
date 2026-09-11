"use client"

import { useState } from "react"
import {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectContent,
  SelectChoose,
  SelectItems,
} from "@/app/components/select"

export default function SelectTestPage() {
  const [theme, setTheme] = useState("")

  const items = ["Light", "Dark", "System", "Dracula", "Nord", "Solarized"]

  return (
    <main className="min-w-xs mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4">Select Test</h1>
      <Select
        id="theme"
        label="Theme"
        required
        value={theme}
        onValueChange={setTheme}
        options={items}
        scrollable
        inputStyles='w-full'
      >
        <SelectLabel />
        <SelectTrigger />
        <SelectContent>
          <SelectChoose />
          <SelectItems />
        </SelectContent>
      </Select>
      <p className="mt-4 text-sm text-neutral-500">Selected: {theme || "None"}</p>
    </main>
  )
}