import { SelectShowcase } from "@/app/components/showcase/SelectShowcase"
import { TooltipShowcase } from "@/app/components/showcase/TooltipShowcase"

export default function SelectTestPage() {
  return (
    <main className="space-y-2 p-4">
      <SelectShowcase />
      <TooltipShowcase />
    </main>
  )
}