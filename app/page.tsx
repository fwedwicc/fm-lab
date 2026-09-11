"use client"

import { useState } from "react"
import {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectContent,
  SelectChoose,
  SelectItems,
} from "@/app/components/ui/select"

export default function SelectTestPage() {
  const [theme, setTheme] = useState("")

  const items = ["Light", "Dark", "System", "Dracula", "Nord", "Solarized"]

  return (
    <main className="p-6">
      <div className='w-full p-6 rounded-2xl border border-stone-200'>
        <h1 className="text-lg font-semibold mb-6 leading-none">Select component</h1>
        <div className='flex items-start gap-4'>
          {/* Select (Default) */}
          <div className='w-full max-w-60'>
            <Select
              id="theme"
              label="Default"
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
            {/* <p className="mt-4 text-sm text-neutral-500">Selected: {theme || "None"}</p> */}
          </div>
          {/* Select (No Choose) */}
          <div className='w-full max-w-60'>
            <Select
              id="theme"
              label="No choose"
              required
              value={theme}
              onValueChange={setTheme}
              options={items}
              scrollable
              inputStyles='w-full'
              noChoose
            >
              <SelectLabel />
              <SelectTrigger />
              <SelectContent>
                <SelectChoose />
                <SelectItems />
              </SelectContent>
            </Select>
          </div>
          {/* Select (Not required) */}
          <div className='w-full max-w-60'>
            <Select
              id="theme"
              label="Not required"
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
          </div>
        </div>
      </div>
    </main>
  )
}