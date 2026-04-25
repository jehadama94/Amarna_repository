"use client"

import { motion } from "framer-motion"
import { UtensilsCrossed, Bath, Home, Expand } from "lucide-react"
import { SERVICES } from "@/lib/constants"

const iconMap = {
  UtensilsCrossed,
  Bath,
  Home,
  Expand,
} as const

export function ServicesSection() {
  return (
    <section 
      id="services"
      data-section="services"
      className="relative px-6 py-20 md:py-28 bg-background"
    >
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Comprehensive Renovation Solutions
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            From single-room updates to complete home transformations, we handle every aspect of your renovation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="group p-6 rounded-xl clean-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 border border-primary/30 group-hover:border-primary/60 group-hover:shadow-[0_4px_12px_rgba(214,181,109,0.2)] transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
