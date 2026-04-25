"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { CTAButton } from "@/components/cta-button"
import { WHY_CHOOSE_US, CTA_TEXT } from "@/lib/constants"

export function WhyChooseUsSection() {
  return (
    <section 
      id="about"
      data-section="why-choose-us"
      className="relative px-6 py-20 md:py-28 bg-background-secondary"
    >
      {/* Subtle gold accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            The <span className="text-gradient-gold">NobleNest</span> Difference
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            We&apos;ve built our reputation on doing things differently. Here&apos;s what sets us apart.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group flex gap-4 p-6 rounded-xl clean-card transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 group-hover:shadow-[0_4px_12px_rgba(214,181,109,0.2)] transition-all duration-300">
                  <Check className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <CTAButton location="why-choose-us">
            {CTA_TEXT.whyChooseUs}
          </CTAButton>
        </motion.div>
      </div>
    </section>
  )
}
