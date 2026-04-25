"use client"

import { motion } from "framer-motion"
import { CTAButton } from "@/components/cta-button"
import { CTA_TEXT } from "@/lib/constants"

export function HeroSection() {
  return (
    <section 
      data-section="hero"
      className="relative min-h-[90vh] flex items-center justify-center px-6 py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-tertiary/30" />
      
      {/* Very subtle gold accent elements */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/2 rounded-full blur-[140px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-6">
            Premium Home Renovations
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] text-balance mb-8"
        >
          Transform Your Home Into the Space{" "}
          <span className="text-gradient-gold">You&apos;ve Always Dreamed Of</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-12 text-pretty leading-relaxed"
        >
          Expert craftsmanship, transparent pricing, and a stress-free renovation experience. 
          From kitchens to whole-home transformations, we bring your vision to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <CTAButton location="hero" size="large">
            {CTA_TEXT.hero}
          </CTAButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-sm text-foreground-muted"
        >
          Free consultation &bull; No obligation &bull; Response within 24 hours
        </motion.p>
      </div>
      
      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-secondary to-transparent" />
    </section>
  )
}
