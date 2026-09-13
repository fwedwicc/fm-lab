import { SelectShowcase } from "@/app/components/showcase/SelectShowcase"
import { TooltipShowcase } from "@/app/components/showcase/TooltipShowcase"
import { ButtonShowcase } from "@/app/components/showcase/ButtonShowcase"

export default function SelectTestPage() {
  return (
    <main className="space-y-1.5 p-1.5">
      <SelectShowcase />
      <TooltipShowcase />
      <ButtonShowcase />
    </main>
  )
}