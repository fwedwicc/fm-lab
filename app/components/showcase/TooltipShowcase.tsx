import { TbInfoCircle } from "react-icons/tb"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/app/components/ui/tooltip"
import { ShowcaseSection } from "@/app/components/showcase/components/ShowcaseLayout"

export function TooltipShowcase() {
  return (
    <ShowcaseSection title="Tooltip component">
      <div className="flex items-start gap-4">
        <Tooltip position="right-center">
          <TooltipTrigger>
            <button className="rounded-lg bg-stone-200 px-4 py-2">Hover me</button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex max-w-55 items-start gap-2">
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
            <button className="rounded-lg bg-stone-200 px-4 py-2">Hover me</button>
          </TooltipTrigger>
          <TooltipContent>Add to library</TooltipContent>
        </Tooltip>

        <Tooltip position="top-center">
          <TooltipTrigger>
            <button className="rounded-lg bg-stone-200 px-4 py-2">Hover me</button>
          </TooltipTrigger>
          <TooltipContent>Add to library</TooltipContent>
        </Tooltip>

        <Tooltip position="top-center">
          <TooltipTrigger>
            <button className="rounded-lg bg-stone-200 px-4 py-2">Hover me</button>
          </TooltipTrigger>
          <TooltipContent>Add to library</TooltipContent>
        </Tooltip>

        <Tooltip position="top-center">
          <TooltipTrigger>
            <button className="rounded-lg bg-stone-200 px-4 py-2">Hover me</button>
          </TooltipTrigger>
          <TooltipContent>Add to library Add to library Add to library Add to library</TooltipContent>
        </Tooltip>
      </div>
    </ShowcaseSection>
  )
}