"use client"

import {
  TbInfoSquareRounded,
  TbHelp,
  TbSettings,
  TbCopy,
  TbTrash,
  TbDownload,
  TbHeart,
  TbStar,
  TbLock,
  TbEye,
  TbEyeOff,
  TbCheck,
  TbAlertTriangle,
  TbCircleX,
  TbUser,
  TbMail,
  TbCalendar,
  TbClock,
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
        {/* Position variants */}
        <ShowcaseDemo title="Top center">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
                Top center
              </button>
            </TooltipTrigger>

            <TooltipContent>Add to library</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Right center">
          <Tooltip position="right-center">
            <TooltipTrigger>
              <button className="rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
                Right center
              </button>
            </TooltipTrigger>

            <TooltipContent>Add to library</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Bottom center">
          <Tooltip position="bottom-center">
            <TooltipTrigger>
              <button className="rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
                Bottom center
              </button>
            </TooltipTrigger>

            <TooltipContent>Add to library</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Left center">
          <Tooltip position="left-center">
            <TooltipTrigger>
              <button className="rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
                Left center
              </button>
            </TooltipTrigger>

            <TooltipContent>Add to library</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        {/* Icon triggers */}
        <ShowcaseDemo title="Icon button">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="flex size-9 items-center justify-center rounded-lg bg-stone-200 hover:bg-stone-300">
                <TbSettings size={18} />
              </button>
            </TooltipTrigger>

            <TooltipContent>Settings</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Icon — help">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="flex size-7 items-center justify-center rounded-full text-stone-500 hover:bg-stone-100 hover:text-stone-800">
                <TbHelp size={17} />
              </button>
            </TooltipTrigger>

            <TooltipContent>Learn more about this setting</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Icon — information">
          <Tooltip position="right-center">
            <TooltipTrigger>
              <button className="flex size-7 items-center justify-center rounded-full text-stone-500">
                <TbInfoSquareRounded size={17} />
              </button>
            </TooltipTrigger>

            <TooltipContent>
              This value is calculated automatically.
            </TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        {/* Action buttons */}
        <ShowcaseDemo title="Copy action">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="flex size-9 items-center justify-center rounded-lg bg-stone-200 hover:bg-stone-300">
                <TbCopy size={17} />
              </button>
            </TooltipTrigger>

            <TooltipContent>Copy to clipboard</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Delete action">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="flex size-9 items-center justify-center rounded-lg bg-stone-200 hover:bg-stone-300">
                <TbTrash size={17} />
              </button>
            </TooltipTrigger>

            <TooltipContent>Delete item</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Download action">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="flex size-9 items-center justify-center rounded-lg bg-stone-200 hover:bg-stone-300">
                <TbDownload size={17} />
              </button>
            </TooltipTrigger>

            <TooltipContent>Download file</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        {/* Rich content */}
        <ShowcaseDemo title="Rich content">
          <Tooltip position="right-center" styles="!rounded-xl">
            <TooltipTrigger>
              <button className="rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
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

        <ShowcaseDemo title="Rich status">
          <Tooltip position="top-center" styles="!rounded-xl">
            <TooltipTrigger>
              <button className="flex items-center gap-1.5 rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
                <TbCheck className="text-green-600" size={15} />
                Verified
              </button>
            </TooltipTrigger>

            <TooltipContent>
              <div className="flex max-w-55 items-start gap-2">
                <TbCheck
                  className="mt-0.5 shrink-0 text-green-400"
                  size={16}
                />

                <div className="space-y-1">
                  <p className="font-medium">Verified account</p>

                  <p className="text-stone-200/90">
                    This account has completed verification.
                  </p>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        {/* Text variations */}
        <ShowcaseDemo title="Short text">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
                Short
              </button>
            </TooltipTrigger>

            <TooltipContent>Save</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Long text">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
                Long text
              </button>
            </TooltipTrigger>

            <TooltipContent>
              Add this item to your library so you can quickly access it later.
              You can remove it at any time from your library.
            </TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Multi-line content">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
                Multi-line
              </button>
            </TooltipTrigger>

            <TooltipContent>
              <div className="max-w-55 space-y-1">
                <p className="font-medium">Keyboard shortcut</p>

                <p className="text-stone-200/90">
                  Press ⌘ K to open the command menu.
                </p>
              </div>
            </TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        {/* Contextual information */}
        <ShowcaseDemo title="User information">
          <Tooltip position="top-center" styles="!rounded-xl">
            <TooltipTrigger>
              <button className="flex items-center gap-2 rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
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

        <ShowcaseDemo title="Email information">
          <Tooltip position="right-center">
            <TooltipTrigger>
              <button className="flex items-center gap-1.5 rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
                <TbMail size={16} />
                Email
              </button>
            </TooltipTrigger>

            <TooltipContent>Send an email to the user</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Date information">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="flex items-center gap-1.5 rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
                <TbCalendar size={16} />
                Updated
              </button>
            </TooltipTrigger>

            <TooltipContent>
              Last updated September 12, 2026 at 4:30 PM
            </TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        {/* Semantic tooltips */}
        <ShowcaseDemo title="Warning">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="flex items-center gap-1.5 rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
                <TbAlertTriangle size={16} />
                Warning
              </button>
            </TooltipTrigger>

            <TooltipContent>
              This action may affect existing data.
            </TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Restricted">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="flex items-center gap-1.5 rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
                <TbLock size={16} />
                Restricted
              </button>
            </TooltipTrigger>

            <TooltipContent>
              You don't have permission to access this feature.
            </TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Visibility">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="flex items-center gap-1.5 rounded-lg bg-stone-200 px-3 py-1.5 text-sm">
                <TbEyeOff size={16} />
                Private
              </button>
            </TooltipTrigger>

            <TooltipContent>
              Only you can see this content.
            </TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        {/* Styled trigger examples */}
        <ShowcaseDemo title="Favorite">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="flex size-9 items-center justify-center rounded-full bg-stone-200 hover:bg-stone-300">
                <TbStar size={17} />
              </button>
            </TooltipTrigger>

            <TooltipContent>Add to favorites</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Like">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="flex size-9 items-center justify-center rounded-full bg-stone-200 hover:bg-stone-300">
                <TbHeart size={17} />
              </button>
            </TooltipTrigger>

            <TooltipContent>Like this item</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>

        <ShowcaseDemo title="Time">
          <Tooltip position="top-center">
            <TooltipTrigger>
              <button className="flex size-9 items-center justify-center rounded-full bg-stone-200 hover:bg-stone-300">
                <TbClock size={17} />
              </button>
            </TooltipTrigger>

            <TooltipContent>View activity history</TooltipContent>
          </Tooltip>
        </ShowcaseDemo>
      </ShowcaseGrid>
    </ShowcaseSection>
  )
}