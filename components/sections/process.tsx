"use client"

import { motion } from "framer-motion"
import { CTAButton } from "@/components/cta-button"
import { PROCESS_STEPS, CTA_TEXT } from "@/lib/constants"

export function ProcessSection() {
  return (
    <section 
      data-section="process"
      className="relative px-6 py-20 md:py-28 bg-background-secondary"
    >
      {/* Subtle gradient orb */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            From Vision to Reality in <span className="text-gradient-gold">5 Steps</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            A clear, structured approach that keeps your project on track and stress-free.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-6 md:left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-primary/50 md:-translate-x-px hidden sm:block" />
          
          <div className="flex flex-col gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-[0_4px_12px_rgba(214,181,109,0.3)]">
                  <span className="text-primary-foreground font-bold text-lg">
                    {step.step}
                  </span>
                </div>
                
                {/* Content */}
                <div className={`flex-1 p-6 rounded-xl clean-card transition-all duration-300 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-14"
        >
          <CTAButton location="process">
            {CTA_TEXT.process}
          </CTAButton>
        </motion.div>
      </div>
    </section>
  )
}
