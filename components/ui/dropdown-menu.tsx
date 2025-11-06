"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface DropdownMenuProps {
  children: React.ReactNode
  trigger: React.ReactNode
  className?: string
}

const DropdownContext = React.createContext<{
  close: () => void
}>({
  close: () => {},
})

export function DropdownMenu({ children, trigger, className }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const close = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <DropdownContext.Provider value={{ close }}>
      <div 
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {trigger}
        </div>
        {isOpen && (
          <div
            className={cn(
              "absolute top-full left-0 pt-2 bg-black border border-transparent rounded-md shadow-lg z-50 min-w-[180px]",
              className
            )}
          >
            <div className="bg-black border border-white/20 rounded-md">
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                  return React.cloneElement(child, { onClose: close } as any)
                }
                return child
              })}
            </div>
          </div>
        )}
      </div>
    </DropdownContext.Provider>
  )
}

export function DropdownMenuItem({
  children,
  onClick,
  className,
  onClose,
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  onClose?: () => void
}) {
  const handleClick = () => {
    onClick?.()
    onClose?.()
  }

  return (
    <div
      className={cn(
        "px-4 py-2 text-sm font-roboto uppercase text-white hover:bg-white/10 cursor-pointer transition-colors",
        className
      )}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

