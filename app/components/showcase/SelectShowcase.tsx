"use client"

import { useState } from "react"
import {
 Select,
 SelectChoose,
 SelectContent,
 SelectItems,
 SelectLabel,
 SelectTrigger,
} from "@/app/components/ui/select"

const themeOptions = ["Light", "Dark", "System", "Dracula", "Nord", "Solarized"]

export function SelectShowcase() {
 const [theme, setTheme] = useState("")

 return (
  <section className="w-full rounded-2xl border border-stone-200 p-6">
   <h1 className="mb-6 text-lg font-semibold leading-none">Select component</h1>
   <div className="flex items-start gap-4">
    <div className="w-full max-w-60">
     <Select
      id="theme-default"
      label="Default"
      required
      value={theme}
      onValueChange={setTheme}
      options={themeOptions}
      scrollable
      inputStyles="w-full"
     >
      <SelectLabel />
      <SelectTrigger />
      <SelectContent>
       <SelectChoose />
       <SelectItems />
      </SelectContent>
     </Select>
    </div>

    <div className="w-full max-w-60">
     <Select
      id="theme-no-choose"
      label="No choose"
      required
      value={theme}
      onValueChange={setTheme}
      options={themeOptions}
      scrollable
      inputStyles="w-full"
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

    <div className="w-full max-w-60">
     <Select
      id="theme-optional"
      label="Not required"
      value={theme}
      onValueChange={setTheme}
      options={themeOptions}
      scrollable
      inputStyles="w-full"
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
  </section>
 )
}