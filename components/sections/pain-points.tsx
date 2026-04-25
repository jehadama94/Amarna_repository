"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"
import { PAIN_POINTS } from "@/lib/constants"

export function PainPointsSection() {
  return (
    <section 
      data-section="pain-points"
      className="relative px-6 py-20 md:py-28 bg-background-secondary"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Tired of Renovation Horror Stories?
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            We&apos;ve heard them all. Here&apos;s what we&apos;re committed to preventing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {PAIN_POINTS.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group flex gap-5 p-6 rounded-xl clean-card transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center border border-destructive/20 group-hover:border-destructive/40 transition-colors">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {point.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
