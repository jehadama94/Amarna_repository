"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Mail, Menu, X } from "lucide-react"
import { CTAButton } from "@/components/cta-button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#consultation" },
] as const

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-background-secondary border-b border-border py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center sm:justify-start gap-6 text-xs sm:text-sm">
          <a 
            href="tel:058-184-8328" 
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>058 184 8328</span>
          </a>
          <a 
            href="mailto:info@noblenest.com" 
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>info@noblenest.com</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-16 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-background border-b border-border shadow-md" 
            : "bg-background"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group flex-shrink-0">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-105">
                <span className="text-lg font-bold text-primary-foreground">N</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-foreground">NobleNest</span>
                <span className="text-lg font-light text-primary ml-1">Renovations</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-medium text-foreground-muted hover:text-primary transition-colors duration-200 py-2 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => {
                  const element = document.getElementById("consultation")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-[0_4px_12px_rgba(214,181,109,0.3)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden border-t border-border bg-background-secondary"
            >
              <nav className="flex flex-col px-4 py-4 max-w-6xl mx-auto">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-border last:border-0"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                  className="pt-4"
                >
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      const element = document.getElementById("consultation")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:shadow-[0_4px_12px_rgba(214,181,109,0.3)]"
                  >
                    Book Consultation
                  </button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
