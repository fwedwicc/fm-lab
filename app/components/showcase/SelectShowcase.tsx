"use client"

import { useState } from "react"
import {
  TbPalette,
  TbSun,
  TbMoon,
  TbDeviceDesktop,
  TbUser,
  TbSettings,
  TbLayoutGrid,
  TbLayoutList,
  TbBriefcase,
} from "react-icons/tb"

import {
  Select,
  SelectChoose,
  SelectContent,
  SelectItem,
  SelectItems,
  SelectLabel,
  SelectTrigger,
} from "@/app/components/ui/select"
import {
  ShowcaseDemo,
  ShowcaseGrid,
  ShowcaseSection,
} from "@/app/components/showcase/components/ShowcaseLayout"

const themeOptions = [
  "Light",
  "Dark",
  "System",
  "Dracula",
  "Nord",
  "Solarized",
]

const languageOptions = [
  "English",
  "Filipino",
  "Japanese",
  "Korean",
  "French",
  "German",
  "Spanish",
]

const countryOptions = [
  "Philippines",
  "United States",
  "Japan",
  "South Korea",
  "Singapore",
  "Canada",
  "Australia",
  "United Kingdom",
]

export function SelectShowcase() {
  const [theme, setTheme] = useState("")
  const [themeNoChoose, setThemeNoChoose] = useState("")
  const [language, setLanguage] = useState("")
  const [country, setCountry] = useState("")
  const [priority, setPriority] = useState("")
  const [user, setUser] = useState("")
  const [many, setMany] = useState("")
  const [department, setDepartment] = useState("")

  return (
    <ShowcaseSection
      title="Select component"
      description="A select component allows users to choose one option from a list of options."
    >
      <ShowcaseGrid>
        <ShowcaseDemo title="Default">
          <Select
            id="theme-default"
            label="Theme"
            required
            value={theme}
            onValueChange={setTheme}
            options={themeOptions}
            scrollable
          >
            <SelectLabel />
            <SelectTrigger />
            <SelectContent>
              <SelectChoose />
              <SelectItems />
            </SelectContent>
          </Select>
        </ShowcaseDemo>

        <ShowcaseDemo title="No choose">
          <Select
            id="theme-no-choose"
            label="Theme"
            required
            value={themeNoChoose}
            onValueChange={setThemeNoChoose}
            options={themeOptions}
            noChoose
            scrollable
          >
            <SelectLabel />
            <SelectTrigger />
            <SelectContent>
              <SelectChoose />
              <SelectItems />
            </SelectContent>
          </Select>
        </ShowcaseDemo>

        <ShowcaseDemo title="Optional">
          <Select
            id="language-optional"
            label="Language"
            value={language}
            onValueChange={setLanguage}
            options={languageOptions}
            scrollable
          >
            <SelectLabel />
            <SelectTrigger />
            <SelectContent>
              <SelectChoose />
              <SelectItems />
            </SelectContent>
          </Select>
        </ShowcaseDemo>

        <ShowcaseDemo title="Pre-selected">
          <Select
            id="country-selected"
            label="Country"
            value={country || "Philippines"}
            onValueChange={setCountry}
            options={countryOptions}
            scrollable
          >
            <SelectLabel />
            <SelectTrigger />
            <SelectContent>
              <SelectChoose />
              <SelectItems />
            </SelectContent>
          </Select>
        </ShowcaseDemo>

        <ShowcaseDemo title="Icon">
          <Select
            id="theme-icon-start"
            label="Theme"
            value={theme}
            onValueChange={setTheme}
          >
            <SelectLabel />

            <SelectTrigger>
              <TbPalette className="shrink-0" />
            </SelectTrigger>

            <SelectContent>
              <SelectChoose />

              <SelectItem value="Light">
                <div className="flex items-center gap-2">
                  <TbSun />
                  <span>Light</span>
                </div>
              </SelectItem>

              <SelectItem value="Dark">
                <div className="flex items-center gap-2">
                  <TbMoon />
                  <span>Dark</span>
                </div>
              </SelectItem>

              <SelectItem value="System">
                <div className="flex items-center gap-2">
                  <TbDeviceDesktop />
                  <span>System</span>
                </div>
              </SelectItem>

              <SelectItem value="Dracula">
                <div className="flex items-center gap-2">
                  <TbPalette />
                  <span>Dracula</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseDemo>

        <ShowcaseDemo title="User selector">
          <Select
            id="user-selector"
            label="Assignee"
            required
            value={user}
            onValueChange={setUser}
          >
            <SelectLabel />

            <SelectTrigger>
              <TbUser className="shrink-0" />
            </SelectTrigger>

            <SelectContent>
              <SelectChoose />

              <SelectItem value="Frederick Moreno">
                <div className="flex items-center gap-2">
                  <div className="flex size-7.5 shrink-0 items-center justify-center rounded-full bg-stone-500 text-stone-50 text-[10px] font-medium">
                    FM
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <span className='text-[13px] font-medium leading-none'>Frederick Moreno</span>
                    <span className="text-xs text-stone-400">
                      Frontend Developer
                    </span>
                  </div>
                </div>
              </SelectItem>

              <SelectItem value="Alex Johnson">
                <div className="flex items-center gap-2">
                  <div className="flex size-7.5 shrink-0 items-center justify-center rounded-full bg-stone-500 text-stone-50 text-[10px] font-medium">
                    AJ
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <span className='text-[13px] font-medium leading-none'>Alex Johnson</span>
                    <span className="text-xs text-stone-400">
                      Product Designer
                    </span>
                  </div>
                </div>
              </SelectItem>

              <SelectItem value="Maria Santos">
                <div className="flex items-center gap-2">
                  <div className="flex size-7.5 shrink-0 items-center justify-center rounded-full bg-stone-500 text-stone-50 text-[10px] font-medium">
                    MS
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <span className='text-[13px] font-medium leading-none'>Maria Santos</span>
                    <span className="text-xs text-stone-400">
                      Product Manager
                    </span>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseDemo>

        <ShowcaseDemo title="Long labels">
          <Select
            id="long-labels"
            label="Report"
            value={many}
            onValueChange={setMany}
            scrollable
          >
            <SelectLabel />
            <SelectTrigger />

            <SelectContent>
              <SelectChoose />

              <SelectItem value="Monthly performance report">
                Monthly performance report
              </SelectItem>

              <SelectItem value="Quarterly financial performance analysis">
                Quarterly financial performance analysis
              </SelectItem>

              <SelectItem value="Yearly user engagement and retention report">
                Yearly user engagement and retention report
              </SelectItem>

              <SelectItem value="Complete system activity and audit report">
                Complete system activity and audit report
              </SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseDemo>

        <ShowcaseDemo title="Scrollable rich items">
          <Select
            id="rich-scrollable"
            label="Department"
            value={department}
            onValueChange={setDepartment}
            scrollable
          >
            <SelectLabel />
            <SelectTrigger />

            <SelectContent>
              <SelectChoose />

              <SelectItem value="Engineering">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <TbSettings />
                    <span>Engineering</span>
                  </div>

                  <span className="text-xs text-stone-400">24</span>
                </div>
              </SelectItem>

              <SelectItem value="Design">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <TbLayoutGrid />
                    <span>Design</span>
                  </div>

                  <span className="text-xs text-stone-400">12</span>
                </div>
              </SelectItem>

              <SelectItem value="Marketing">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <TbBriefcase />
                    <span>Marketing</span>
                  </div>

                  <span className="text-xs text-stone-400">8</span>
                </div>
              </SelectItem>

              <SelectItem value="Product">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <TbLayoutList />
                    <span>Product</span>
                  </div>

                  <span className="text-xs text-stone-400">6</span>
                </div>
              </SelectItem>

              <SelectItem value="Operations">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <TbSettings />
                    <span>Operations</span>
                  </div>

                  <span className="text-xs text-stone-400">14</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseDemo>

        <ShowcaseDemo title="Label + description">
          <Select
            id="description-options"
            label="Plan"
            value={department}
            onValueChange={setDepartment}
          >
            <SelectLabel />
            <SelectTrigger />

            <SelectContent>
              <SelectChoose />

              <SelectItem value="Free">
                <div className="flex flex-col">
                  <span>Free</span>
                  <span className="text-xs text-stone-400">
                    For personal projects
                  </span>
                </div>
              </SelectItem>

              <SelectItem value="Pro">
                <div className="flex flex-col">
                  <span>Pro</span>
                  <span className="text-xs text-stone-400">
                    For professionals and teams
                  </span>
                </div>
              </SelectItem>

              <SelectItem value="Enterprise">
                <div className="flex flex-col">
                  <span>Enterprise</span>
                  <span className="text-xs text-stone-400">
                    Advanced features and support
                  </span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseDemo>

        <ShowcaseDemo title="Label + badge">
          <Select
            id="badge-options"
            label="Priority"
            value={priority}
            onValueChange={setPriority}
          >
            <SelectLabel />
            <SelectTrigger />

            <SelectContent>
              <SelectChoose />

              <SelectItem value="Low">
                <div className="flex items-center justify-between gap-3">
                  <span>Low</span>
                  <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-500">
                    LOW
                  </span>
                </div>
              </SelectItem>

              <SelectItem value="Medium">
                <div className="flex items-center justify-between gap-3">
                  <span>Medium</span>
                  <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] font-medium text-yellow-700">
                    MED
                  </span>
                </div>
              </SelectItem>

              <SelectItem value="High">
                <div className="flex items-center justify-between gap-3">
                  <span>High</span>
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-medium text-orange-700">
                    HIGH
                  </span>
                </div>
              </SelectItem>

              <SelectItem value="Critical">
                <div className="flex items-center justify-between gap-3">
                  <span>Critical</span>
                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-medium text-red-700">
                    CRITICAL
                  </span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </ShowcaseDemo>
      </ShowcaseGrid>
    </ShowcaseSection>
  )
}