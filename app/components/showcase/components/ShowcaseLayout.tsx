import type { ReactNode } from "react"

type ShowcaseSectionProps = {
  title: string
  description?: string
  children: ReactNode
}

export function ShowcaseSection({
  title,
  description,
  children,
}: ShowcaseSectionProps) {
  return (
    <section className="w-full rounded-2xl border border-stone-200 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold leading-none">{title}</h2>
        {description && (
          <p className="mt-1 text-xs text-stone-500">{description}</p>
        )}
      </div>
      {children}
    </section>
  )
}

export function ShowcaseGrid({ children, grid = true }: { children: ReactNode; grid?: boolean }) {
  return (
    <div className={`${grid ? 'grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5' : 'flex flex-wrap items-start gap-4'}`}>
      {children}
    </div>
  )
}

export function ShowcaseDemo({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-wide text-stone-400">
        {title}
      </p>
      {children}
    </div>
  )
}