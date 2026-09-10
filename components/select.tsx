import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TbChevronDown } from "react-icons/tb"

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
            <label htmlFor={id} className={`${label ? "" : "sr-only"} mb-1.5`}>
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
            className={`${inputStyles} w-full flex justify-between items-center md:gap-2 gap-1.5 md:px-3 px-2.5 md:py-2 py-1.5 text-sm border border-neutral-200 dark:border-neutral-700 bg-neutral-100/40 dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700/60 rounded-[11px] focus:outline-none focus:ring-[3px] focus:ring-red-200/50 dark:focus:ring-red-300/20 focus:border-red-300/70 dark:focus:border-red-400 focus:bg-white dark:focus:bg-neutral-800 placeholder:text-neutral-400/70 dark:text-neutral-300 transition duration-300 ease-in-out cursor-pointer`}
        >
            <div className="flex-center gap-2">
                {children}
                <p>{value || placeholder}</p>
            </div>
            <TbChevronDown className={`transition-smooth ${isOpen ? "rotate-180" : ""}`} />
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
                    transition={{ duration: 0.3, ease: [0.68, -0.4, 0.265, 1.4] }}
                    className={`${label ? "mt-18" : "mt-11.5"} ${scrollable ? "overflow-y-auto max-h-[11rem]" : ""} space-y-0.5 absolute w-full bg-white dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700 rounded-[12px] p-1 shadow-xl shadow-neutral-400/10 dark:shadow-neutral-900/20 z-50 custom-scrollbar`}
                >
                    {children}
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
            className="w-full text-left px-2.5 py-1.5 rounded-lg text-sm font-medium cursor-pointer transition-smooth text-neutral-800 dark:text-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed"
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
            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-sm font-medium cursor-pointer transition-smooth text-neutral-800 dark:text-neutral-300
      ${selectedValue === value ? "bg-neutral-200/50 dark:bg-neutral-700/70" : "hover:bg-neutral-200/50 dark:hover:bg-neutral-700/70"}`}
        >
            {children}
        </button>
    )
}