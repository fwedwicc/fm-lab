"use client"

import React, {
 createContext,
 useCallback,
 useContext,
 useEffect,
 useMemo,
 useRef,
 useState,
} from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

type TooltipPosition =
 | "bottom-center"
 | "top-center"
 | "left-center"
 | "right-center"
 | "bottom-left"
 | "bottom-right"
 | "top-left"
 | "top-right"

type TooltipContextType = {
 open: boolean
 setOpen: React.Dispatch<React.SetStateAction<boolean>>
 triggerRef: React.RefObject<HTMLDivElement | null>
 contentRef: React.RefObject<HTMLDivElement | null>
 positionState: { top: number; left: number }
 transformClass: string
 position: TooltipPosition
 offset: number
 styles?: string
 animation?: number
 updatePosition: () => void
}

const TooltipContext = createContext<TooltipContextType | null>(null)

function useTooltipCtx() {
 const ctx = useContext(TooltipContext)
 if (!ctx) throw new Error("Tooltip parts must be used within <Tooltip>")
 return ctx
}

type TooltipProps = {
 children: React.ReactNode
 styles?: string
 animation?: number
 position?: TooltipPosition
 offset?: number
}

export function Tooltip({
 children,
 styles = "",
 animation,
 position = "bottom-center",
 offset = 6,
}: TooltipProps) {
 const [open, setOpen] = useState(false)
 const [positionState, setPositionState] = useState({ top: 0, left: 0 })
 const [transformClass, setTransformClass] = useState("")
 const triggerRef = useRef<HTMLDivElement>(null)
 const contentRef = useRef<HTMLDivElement>(null)

 const updatePosition = useCallback(() => {
  if (!triggerRef.current) return

  const rect = triggerRef.current.getBoundingClientRect()
  const tooltipRect = contentRef.current?.getBoundingClientRect() || { width: 0, height: 0 }
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const padding = 12

  let rawTop = 0
  let rawLeft = 0
  let transform = ""

  switch (position) {
   case "top-center":
    rawTop = rect.top - tooltipRect.height - offset
    rawLeft = rect.left + rect.width / 2
    transform = "-translate-x-1/2"
    break
   case "top-left":
    rawTop = rect.top - tooltipRect.height - offset
    rawLeft = rect.left
    transform = ""
    break
   case "top-right":
    rawTop = rect.top - tooltipRect.height - offset
    rawLeft = rect.right
    transform = "-translate-x-full"
    break
   case "bottom-center":
    rawTop = rect.bottom + offset
    rawLeft = rect.left + rect.width / 2
    transform = "-translate-x-1/2"
    break
   case "bottom-left":
    rawTop = rect.bottom + offset
    rawLeft = rect.left
    transform = ""
    break
   case "bottom-right":
    rawTop = rect.bottom + offset
    rawLeft = rect.right
    transform = "-translate-x-full"
    break
   case "left-center":
    rawTop = rect.top + rect.height / 2
    rawLeft = rect.left - tooltipRect.width - offset
    transform = "-translate-y-1/2"
    break
   case "right-center":
    rawTop = rect.top + rect.height / 2
    rawLeft = rect.right + offset
    transform = "-translate-y-1/2"
    break
   default:
    rawTop = rect.bottom + offset
    rawLeft = rect.left + rect.width / 2
    transform = "-translate-x-1/2"
  }

  const tx = transform.includes("-translate-x-1/2")
   ? tooltipRect.width / 2
   : transform.includes("-translate-x-full")
    ? tooltipRect.width
    : 0

  const ty = transform.includes("-translate-y-1/2") ? tooltipRect.height / 2 : 0

  let finalLeft = rawLeft - tx
  let finalTop = rawTop - ty

  const minLeft = padding
  const maxLeft = Math.max(padding, viewportWidth - padding - tooltipRect.width)

  if (finalLeft < minLeft) {
   finalLeft = minLeft
   rawLeft = finalLeft + tx
  } else if (finalLeft > maxLeft) {
   finalLeft = maxLeft
   rawLeft = finalLeft + tx
  }

  const minTop = padding
  const maxTop = Math.max(padding, viewportHeight - padding - tooltipRect.height)

  if (finalTop < minTop) {
   finalTop = minTop
   rawTop = finalTop + ty
  } else if (finalTop > maxTop) {
   finalTop = maxTop
   rawTop = finalTop + ty
  }

  setPositionState({ top: rawTop, left: rawLeft })
  setTransformClass(transform)
 }, [position, offset])

 useEffect(() => {
  if (!open) return
  const id = requestAnimationFrame(updatePosition)
  window.addEventListener("scroll", updatePosition, true)
  window.addEventListener("resize", updatePosition)
  return () => {
   cancelAnimationFrame(id)
   window.removeEventListener("scroll", updatePosition, true)
   window.removeEventListener("resize", updatePosition)
  }
 }, [open, updatePosition])

 const value = useMemo(
  () => ({
   open,
   setOpen,
   triggerRef,
   contentRef,
   positionState,
   transformClass,
   position,
   offset,
   styles,
   animation,
   updatePosition,
  }),
  [open, positionState, transformClass, position, offset, styles, animation, updatePosition]
 )

 return <TooltipContext.Provider value={value}>{children}</TooltipContext.Provider>
}

export function TooltipTrigger({
 children,
 asChild = false,
}: {
 children: React.ReactNode
 asChild?: boolean
}) {
 const { setOpen, triggerRef } = useTooltipCtx()

 const triggerProps = {
  ref: triggerRef,
  className: "relative",
  onMouseEnter: () => setOpen(true),
  onMouseLeave: () => setOpen(false),
  onFocus: () => setOpen(true),
  onBlur: () => setOpen(false),
 }

 if (asChild && React.isValidElement(children)) {
  return React.cloneElement(children as React.ReactElement, {
   ...triggerProps,
   ...(children.props as Record<string, unknown>),
  })
 }

 return <div {...triggerProps}>{children}</div>
}

function getArrowPlacement(position: TooltipPosition) {
 if (position.startsWith("top")) {
  return "bottom-[-4px] left-1/2 -translate-x-1/2 rotate-45"
 }
 if (position.startsWith("bottom")) {
  return "top-[-4px] left-1/2 -translate-x-1/2 rotate-45"
 }
 if (position.startsWith("left")) {
  return "right-[-4px] top-1/2 -translate-y-1/2 rotate-45"
 }
 return "left-[-4px] top-1/2 -translate-y-1/2 rotate-45"
}

export function TooltipArrow({ className = "" }: { className?: string }) {
 const { position } = useTooltipCtx()
 const placement = getArrowPlacement(position)

 return (
  <span
   aria-hidden
   className={`absolute size-3 bg-stone-900 rounded-sm ${placement} ${className}`}
  />
 )
}

export function TooltipContent({
 children,
 showArrow = true,
}: {
 children: React.ReactNode
 showArrow?: boolean
}) {
 const { open, contentRef, positionState, transformClass, styles, animation, position } = useTooltipCtx()

 const getAnimationValue = () => {
  if (animation !== undefined) return animation
  switch (position) {
   case "top-center":
   case "top-left":
   case "top-right":
    return 6
   case "bottom-center":
   case "bottom-left":
   case "bottom-right":
    return -6
   case "left-center":
    return 6
   case "right-center":
    return -6
   default:
    return -6
  }
 }

 if (typeof window === "undefined") return null

 return createPortal(
  <AnimatePresence>
   {open && (
    <motion.div
     ref={contentRef}
     key="tooltip"
     initial={{
      opacity: 0,
      y: ["left-center", "right-center"].includes(position) ? 0 : getAnimationValue(),
      x: ["left-center", "right-center"].includes(position) ? getAnimationValue() : 0,
      scale: 0.95,
     }}
     animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
     exit={{
      opacity: 0,
      y: ["left-center", "right-center"].includes(position) ? 0 : getAnimationValue(),
      x: ["left-center", "right-center"].includes(position) ? getAnimationValue() : 0,
      scale: 0.95,
     }}
     transition={{
      opacity: { duration: 0.10, ease: "easeOut" },
      x: { type: "spring", stiffness: 230, damping: 18, bounce: 0.25 },
      y: { type: "spring", stiffness: 230, damping: 18, bounce: 0.25 },
      scale: { type: "spring", stiffness: 230, damping: 18, bounce: 0.2 },
     }}
     style={{
      position: "fixed",
      top: `${positionState.top}px`,
      left: `${positionState.left}px`,
      zIndex: 999999,
     }}
     className={`${transformClass} ${styles} relative md:text-sm text-xs md:rounded-[10px] rounded-lg md:px-2.75 px-2 md:py-2.5 py-1.5 text-white bg-stone-900 border border-stone-700/90 shadow-lg shadow-stone-900/20 pointer-events-none`}
    >
     {showArrow && <TooltipArrow />}
     {typeof children === "string" ? <p className="text-white leading-4 text-nowrap">{children}</p> : children}
    </motion.div>
   )}
  </AnimatePresence>,
  document.body
 )
}

export function TooltipProvider({ children }: { children: React.ReactNode }) {
 return <>{children}</>
}