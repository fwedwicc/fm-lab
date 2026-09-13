"use client"

import {
  TbInfoSquareRounded,
  TbAlertTriangle,
  TbUser,
} from "react-icons/tb"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/ui/tooltip"

import {
  ShowcaseDemo,
  ShowcaseGrid,
  ShowcaseSection,
} from "@/app/components/showcase/components/ShowcaseLayout"

export function TooltipShowcase() {
  return (
    <ShowcaseSection
      title="Tooltip component"
      description="A tooltip displays contextual information on hover or focus."
    >

      <ShowcaseGrid grid={false}>
        <ShowcaseDemo title="Top center">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="rounded-[10px] bg-stone-200/50 px-3.5 py-1.75 text-sm">
                Top center
              </button>
            </TooltipTrigger>
            <TooltipContent>Tooltip content</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Right center">
          <Tooltip position="right-center">
            <TooltipTrigger>
              <button className="rounded-[10px] bg-stone-200/50 px-3.5 py-1.75 text-sm">
                Right center
              </button>
            </TooltipTrigger>
            <TooltipContent>Tooltip content</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Bottom center">
          <Tooltip position="bottom-center">
            <TooltipTrigger>
              <button className="rounded-[10px] bg-stone-200/50 px-3.5 py-1.75 text-sm">
                Bottom center
              </button>
            </TooltipTrigger>
            <TooltipContent>Tooltip content</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Left center">
          <Tooltip position="left-center">
            <TooltipTrigger>
              <button className="rounded-[10px] bg-stone-200/50 px-3.5 py-1.75 text-sm">
                Left center
              </button>
            </TooltipTrigger>
            <TooltipContent>Tooltip content</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Rich content">
          <Tooltip position="right-center" styles="!rounded-xl">
            <TooltipTrigger>
              <button className="rounded-[10px] bg-stone-200/50 px-3.5 py-1.75 text-sm">
                Rich tooltip
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex max-w-55 items-start gap-2">
                <TbInfoSquareRounded
                  className="mt-0.5 shrink-0 text-blue-400"
                  size={16}
                />
                <div className="space-y-1">
                  <p className="font-medium">Auto-save enabled</p>
                  <p className="text-stone-200/90">
                    Changes are saved automatically while you type.
                  </p>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Long text">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="rounded-[10px] bg-stone-200/50 px-3.5 py-1.75 text-sm">
                Long text
              </button>
            </TooltipTrigger>
            <TooltipContent>
              Add this item to your library so you can quickly access it later.
              You can remove it at any time from your library.
            </TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="User info">
          <Tooltip position="top-center" styles="!rounded-xl">
            <TooltipTrigger>
              <button className="flex items-center gap-2 rounded-[10px] bg-stone-200/50 px-3.5 py-1.75 text-sm">
                <TbUser size={16} />
                Frederick
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-full bg-stone-500 text-[10px] font-medium text-white">
                  FM
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">Frederick Moreno</span>
                  <span className="text-xs text-stone-300">
                    Frontend Developer
                  </span>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Warning">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="flex items-center gap-1.5 rounded-[10px] bg-stone-200/50 px-3.5 py-1.75 text-sm">
                <TbAlertTriangle size={16} />
                Warning
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <div className='flex items-center gap-2'>
                <TbInfoSquareRounded className='text-amber-400 size-3.5' />
                This action may affect existing data.
              </div>
            </TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="X">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="flex size-7 items-center justify-center rounded-full text-stone-500 hover:bg-stone-100 hover:text-stone-800">
                <TbInfoSquareRounded size={17} />
              </button>
            </TooltipTrigger>
            <TooltipContent>Learn more about this setting</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

      </ShowcaseGrid>
    </ShowcaseSection>
  )
}