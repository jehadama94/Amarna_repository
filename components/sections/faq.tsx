"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CTAButton } from "@/components/cta-button"
import { FAQ_ITEMS, CTA_TEXT } from "@/lib/constants"

export function FAQSection() {
  return (
    <section 
      data-section="faq"
      className="relative px-6 py-20 md:py-28 bg-background-secondary"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Common Questions, <span className="text-gradient-gold">Clear Answers</span>
          </h2>
          <p className="text-foreground-muted text-lg">
            Everything you need to know before starting your renovation journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Accordion 
            type="single" 
            collapsible 
            defaultValue="faq-1"
            className="flex flex-col gap-3"
          >
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                data-faq-item={index + 1}
                data-faq-question={item.question}
                className="rounded-xl border border-border bg-background data-[state=open]:border-primary/60 data-[state=open]:bg-background data-[state=open]:shadow-[0_4px_12px_rgba(214,181,109,0.1)] transition-all duration-300 px-6"
              >
                <AccordionTrigger className="py-5 text-left text-base md:text-lg font-medium text-foreground hover:no-underline hover:text-primary [&>svg]:text-primary [&>svg]:w-5 [&>svg]:h-5 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted text-base pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-14"
        >
          <p className="text-foreground-muted mb-5">
            Still have questions? We&apos;d love to hear from you.
          </p>
          <CTAButton location="faq">
            {CTA_TEXT.faq}
          </CTAButton>
        </motion.div>
      </div>
    </section>
  )
}
