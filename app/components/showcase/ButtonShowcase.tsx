"use client"

import {
  TbArrowRight,
  TbBell,
  TbCheck,
  TbExternalLink,
  TbHeart,
  TbInfoCircle,
  TbLoader2,
  TbPlus,
  TbSettings,
  TbTrash,
} from "react-icons/tb"

import { Button } from "@/app/components/ui/button"
import {
  ShowcaseDemo,
  ShowcaseGrid,
  ShowcaseSection,
} from "@/app/components/showcase/components/ShowcaseLayout"

export function ButtonShowcase() {
  return (
    <ShowcaseSection
      title="Button component"
      description="A button component supports multiple variants, sizes, icons, and states."
    >
      <ShowcaseGrid>

        <ShowcaseDemo title="Variants">
          <div className="flex flex-wrap gap-2">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </ShowcaseDemo>

        <ShowcaseDemo title="Custom accents / status">
          <div className="flex flex-wrap gap-2">
            <Button variant="accentPrimary">Accent Primary</Button>
            <Button variant="accentSecondary">Accent Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="info">Info</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </ShowcaseDemo>

        <ShowcaseDemo title="Sizes">
          <div className="flex flex-wrap items-center gap-2">
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button size="default">Default</Button>
            <Button size="lg">LG</Button>
          </div>
        </ShowcaseDemo>

        <ShowcaseDemo title="Icon only sizes">
          <div className="flex flex-wrap items-center gap-2">
            <Button size="icon-xs" aria-label="Add">
              <TbPlus size={14} />
            </Button>
            <Button size="icon-sm" aria-label="Settings">
              <TbSettings size={15} />
            </Button>
            <Button size="icon" aria-label="Notifications">
              <TbBell size={16} />
            </Button>
            <Button size="icon-lg" aria-label="Like">
              <TbHeart size={18} />
            </Button>
          </div>
        </ShowcaseDemo>

        <ShowcaseDemo title="With leading icon">
          <div className="flex flex-wrap gap-2">
            <Button>
              <TbPlus data-icon="inline-start" />
              Create
            </Button>
            <Button variant="secondary">
              <TbCheck data-icon="inline-start" />
              Confirm
            </Button>
            <Button variant="outline">
              <TbInfoCircle data-icon="inline-start" />
              Details
            </Button>
          </div>
        </ShowcaseDemo>

        <ShowcaseDemo title="With trailing icon">
          <div className="flex flex-wrap gap-2">
            <Button>
              Continue
              <TbArrowRight data-icon="inline-end" />
            </Button>
            <Button variant="outline">
              Visit docs
              <TbExternalLink data-icon="inline-end" />
            </Button>
          </div>
        </ShowcaseDemo>

        <ShowcaseDemo title="Rounded">
          <div className="flex flex-wrap gap-2">
            <Button className="rounded-full">Rounded</Button>
            <Button variant="secondary" className="rounded-full">
              Rounded secondary
            </Button>
            <Button size="icon" className="rounded-full" aria-label="Like">
              <TbHeart />
            </Button>
          </div>
        </ShowcaseDemo>

        <ShowcaseDemo title="Disabled">
          <div className="flex flex-wrap gap-2">
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>
              Disabled outline
            </Button>
            <Button variant="destructive" disabled>
              Disabled destructive
            </Button>
          </div>
        </ShowcaseDemo>

        <ShowcaseDemo title="Loading / spinner">
          <div className="flex flex-wrap gap-2">
            <Button disabled>
              <TbLoader2 className="animate-spin" data-icon="inline-start" />
              Loading...
            </Button>
            <Button variant="secondary" disabled>
              <TbLoader2 className="animate-spin" data-icon="inline-start" />
              Saving
            </Button>
          </div>
        </ShowcaseDemo>

        <ShowcaseDemo title="Destructive actions">
          <div className="flex flex-wrap gap-2">
            <Button variant="destructive">
              <TbTrash data-icon="inline-start" />
              Delete
            </Button>
            <Button variant="danger" size="sm">
              Remove
            </Button>
          </div>
        </ShowcaseDemo>

        <ShowcaseDemo title="As link (button style)">
          <div className="flex flex-wrap gap-2">
            <a
              href="#"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm transition duration-300 ease-in-out cursor-pointer h-9 px-3.5 rounded-[10px] gap-2 text-neutral-200 bg-neutral-900 hover:bg-neutral-950 hover:shadow-lg"
            >
              Link as button
            </a>
          </div>
        </ShowcaseDemo>
      </ShowcaseGrid>
    </ShowcaseSection>
  )
}