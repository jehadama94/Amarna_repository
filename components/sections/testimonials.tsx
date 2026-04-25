"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { TESTIMONIALS } from "@/lib/constants"

export function TestimonialsSection() {
  return (
    <section 
      data-section="testimonials"
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
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            What Our Clients Say
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from homeowners who&apos;ve experienced the NobleNest difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group relative p-6 rounded-xl clean-card transition-all duration-300"
            >
              {/* Decorative gold line at top */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <p className="text-foreground mb-6 text-pretty leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-primary/80">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
