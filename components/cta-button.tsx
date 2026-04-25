"use client"

import { cn } from "@/lib/utils"

interface CTAButtonProps {
  children: React.ReactNode
  location: "hero" | "why-choose-us" | "process" | "faq" | "final"
  size?: "default" | "large"
  className?: string
}

export function CTAButton({ 
  children, 
  location, 
  size = "default",
  className 
}: CTAButtonProps) {
  const handleClick = () => {
    const element = document.getElementById("consultation")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <button
      onClick={handleClick}
      data-cta-location={location}
      data-cta-action="scroll-to-consultation"
      data-cta-text={typeof children === "string" ? children : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold",
        "bg-primary text-primary-foreground",
        "transition-all duration-300 ease-out",
        "hover:shadow-[0_4px_12px_rgba(214,181,109,0.3)] hover:scale-[1.02]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "active:scale-[0.98]",
        "disabled:pointer-events-none disabled:opacity-50",
        size === "default" && "h-12 px-8 text-base min-w-[44px]",
        size === "large" && "h-14 px-10 text-lg min-w-[44px]",
        className
      )}
    >
      {children}
    </button>
  )
}
