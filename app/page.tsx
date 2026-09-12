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
import { Tooltip, TooltipContent, TooltipTrigger } from "@/app/components/ui/tooltip"
import { TbInfoCircle } from "react-icons/tb"

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
          <Tooltip position="right-center">
            <TooltipTrigger>
              <button className="px-4 py-2 rounded-lg bg-stone-200">Hover me</button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex items-start gap-2 max-w-[220px]">
                <TbInfoCircle className="mt-0.5 shrink-0 text-amber-300" size={16} />
                <div className="leading-none">
                  <p className="font-medium">Auto-save enabled</p>
                  <p className="text-neutral-200/90">
                    Changes are saved every 30 seconds while you type.
                  </p>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="px-4 py-2 rounded-lg bg-stone-200">Hover me</button>
            </TooltipTrigger>
            <TooltipContent>Add to library</TooltipContent>
          </Tooltip>
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="px-4 py-2 rounded-lg bg-stone-200">Hover me</button>
            </TooltipTrigger>
            <TooltipContent>Add to library</TooltipContent>
          </Tooltip>
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="px-4 py-2 rounded-lg bg-stone-200">Hover me</button>
            </TooltipTrigger>
            <TooltipContent>Add to library</TooltipContent>
          </Tooltip>
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="px-4 py-2 rounded-lg bg-stone-200">Hover me</button>
            </TooltipTrigger>
            <TooltipContent>Add to library Add to library Add to library Add to library</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </main>
  )
}