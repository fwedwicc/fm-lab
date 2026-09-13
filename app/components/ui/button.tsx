"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/app/lib/utils"

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm transition duration-300 ease-in-out disabled:opacity-40 disabled:pointer-events-none cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "text-neutral-200 bg-neutral-900 hover:bg-neutral-950 hover:shadow-lg",
        outline:
          "text-neutral-900 dark:text-neutral-200 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/70 border border-neutral-300 dark:border-neutral-700",
        secondary:
          "text-neutral-900 dark:text-neutral-200 hover:bg-neutral-300/50 dark:hover:bg-neutral-700 bg-neutral-200/50 dark:bg-neutral-800",
        ghost:
          "text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/70",
        destructive:
          "text-red-700 dark:text-red-400 hover:bg-red-300/30 dark:hover:bg-red-400/20 bg-red-200/30 dark:bg-red-400/10",
        link: "text-neutral-900 dark:text-neutral-100 underline-offset-4 hover:underline bg-transparent px-0 h-auto rounded-none",

        // your custom accents/status variants
        accentPrimary:
          "text-white hover:bg-red-700 dark:hover:bg-red-600 bg-red-800 dark:bg-red-500",
        accentSecondary:
          "text-red-800 dark:text-red-400 hover:bg-red-200/50 dark:hover:bg-red-400/20 dark:bg-red-400/10 bg-red-200/40 font-medium",
        success:
          "text-green-700 dark:text-green-400 hover:bg-green-300/30 dark:hover:bg-green-400/10 bg-green-200/30 dark:bg-green-400/10",
        info: "text-blue-700 hover:bg-blue-300/30 bg-blue-200/30",
        warning: "text-yellow-700 hover:bg-yellow-300/30 bg-yellow-200/30",
        danger:
          "text-red-700 dark:text-red-400 hover:bg-red-300/30 dark:hover:bg-red-400/20 bg-red-200/30 dark:bg-red-400/10",
      },
      size: {
        xs: "h-6 px-2 rounded-[7px] gap-1 text-xs",
        sm: "h-7 px-2.5 rounded-[8px] gap-1",
        default: "h-8 px-3 rounded-[9px] gap-1.5",
        lg: "h-9 px-3.5 rounded-[10px] gap-2",
        icon: "h-9 w-9 rounded-[10px]",
        "icon-xs": "h-6 w-6 rounded-[7px]",
        "icon-sm": "h-7 w-7 rounded-[8px]",
        "icon-lg": "h-10 w-10 rounded-[11px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }