"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-button"
import { CTA_TEXT } from "@/lib/constants"

export function FinalCTASection() {
  return (
    <section 
      data-section="final-cta"
      className="relative px-6 py-24 md:py-32 bg-background-secondary overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/4 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-8 text-balance leading-[1.1]">
            Ready to Transform <span className="text-gradient-gold">Your Home?</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied homeowners who trusted us with their renovation dreams. 
            Your journey to a beautiful new space starts with a single conversation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <CTAButton location="final" size="large">
            {CTA_TEXT.final}
            <ArrowRight className="w-5 h-5 ml-2" />
          </CTAButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-sm text-foreground-muted"
        >
          Free consultation &bull; No commitment &bull; Expert advice
        </motion.p>
      </div>
    </section>
  )
}
