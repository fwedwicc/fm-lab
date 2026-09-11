import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TbChevronDown } from "react-icons/tb"
import { Squircle } from "@squircle-js/react"

type SelectContextType = {
  id?: string
  label?: string
  required?: boolean
  styles?: string
  inputStyles?: string
  value?: string
  placeholder?: string
  options?: string[]
  noChoose?: boolean
  scrollable?: boolean
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onValueChange?: (value: string) => void
  selectRef: React.RefObject<HTMLFieldSetElement | null>
}

const SelectContext = createContext<SelectContextType | null>(null)

function useSelectCtx() {
  const ctx = useContext(SelectContext)
  if (!ctx) throw new Error("Select components must be used inside <Select>")
  return ctx
}

type SelectProps = {
  id?: string
  label?: string
  required?: boolean
  styles?: string
  inputStyles?: string
  children: React.ReactNode
  options?: string[]
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
  noChoose?: boolean
  scrollable?: boolean
}

export function Select({
  id,
  label,
  required,
  styles = "",
  inputStyles = "",
  children,
  options = [],
  placeholder = "Choose",
  value,
  onValueChange,
  noChoose = false,
  scrollable = false,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLFieldSetElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const ctx = useMemo(
    () => ({
      id,
      label,
      required,
      styles,
      inputStyles,
      value,
      placeholder,
      options,
      noChoose,
      scrollable,
      isOpen,
      setIsOpen,
      onValueChange,
      selectRef,
    }),
    [
      id,
      label,
      required,
      styles,
      inputStyles,
      value,
      placeholder,
      options,
      noChoose,
      scrollable,
      isOpen,
      onValueChange,
    ]
  )

  return (
    <SelectContext.Provider value={ctx}>
      <fieldset className={`relative flex flex-col ${styles}`} ref={selectRef}>
        {children}
      </fieldset>
    </SelectContext.Provider>
  )
}

export function SelectLabel() {
  const { id, label, required } = useSelectCtx()

  return (
    <div className="flex items-start">
      <label htmlFor={id} className={`${label ? "" : "sr-only"} text-sm mb-1.5`}>
        {label}
      </label>
      {required && <span className="text-red-500 ml-1">*</span>}
    </div>
  )
}

export function SelectTrigger({ children }: { children?: React.ReactNode }) {
  const { isOpen, setIsOpen, inputStyles, value, placeholder } = useSelectCtx()

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Squircle
        cornerRadius={12}
        cornerSmoothing={1}
        className={`${inputStyles} w-full flex justify-between items-center md:gap-2 gap-1.5 md:px-3.5 px-2.5 md:py-2 py-1.5 text-sm border-neutral-200/50 border bg-neutral-100/60 hover:bg-neutral-200/40 focus:outline-none focus:ring-[3px] focus:ring-amber-200/50 focus:border-amber-300/70 focus:bg-white placeholder:text-neutral-400/70 transition duration-300 ease-in-out cursor-pointer`}
      >
        <div className="flex-center gap-2">
          {children}
          <p>{value || placeholder}</p>
        </div>
        <TbChevronDown className={`transition-all ease-in-out duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </Squircle>
    </button>
  )
}

export function SelectContent({ children }: { children?: React.ReactNode }) {
  const { isOpen, label, scrollable } = useSelectCtx()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.90 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.90 }}
          transition={{ duration: 0.35, ease: [0.68, -0.4, 0.265, 1.4] }}
        >
          <div
            className={`${scrollable ? " max-h-44" : ""} overflow-y-auto mt-2 bg-white p-1.5 space-y-0.5 absolute w-full shadow-2xl shadow-neutral-400/20 rounded-2xl border border-neutral-200/50 z-50 custom-scrollbar`}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function SelectChoose() {
  const { noChoose } = useSelectCtx()
  if (noChoose) return null

  return (
    <button
      type="button"
      disabled
      className="w-full text-left px-2.5 py-1.5 text-sm cursor-pointer transition-smooth text-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      Choose
    </button>
  )
}

export function SelectItems() {
  const { options = [] } = useSelectCtx()
  return (
    <>
      {options.map((option) => (
        <SelectItem key={option} value={option}>
          {option}
        </SelectItem>
      ))}
    </>
  )
}

export function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
  const { value: selectedValue, onValueChange, setIsOpen } = useSelectCtx()

  const handleSelect = () => {
    onValueChange?.(value)
    setIsOpen(false)
  }

  return (
    <button
      type="button"
      onClick={handleSelect}
      className={`w-full text-left px-2.75 py-1.5 text-sm rounded-lg cursor-pointer transition ease-in-out duration-200 text-neutral-800
        ${selectedValue === value ? "bg-neutral-200/60" : "hover:bg-neutral-200/60"}`}
    >
      {children}
    </button>
  )
}