"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function ConsultationFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section 
      id="consultation"
      data-section="consultation-form"
      className="relative px-6 py-20 md:py-28 bg-background"
    >
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/2 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="relative max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Book Your <span className="text-gradient-gold">Free Consultation</span>
          </h2>
          <p className="text-foreground-muted text-lg">
            Tell us about your project and we&apos;ll get back to you within 24 hours with a personalized plan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 md:p-10 rounded-2xl clean-card shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
        >
          {isSubmitted ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 shadow-[0_4px_12px_rgba(214,181,109,0.2)]">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Thank You!
              </h3>
              <p className="text-foreground-muted">
                We&apos;ve received your request and will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field>
                    <FieldLabel htmlFor="firstName" className="text-foreground text-sm font-medium mb-2">
                      First Name
                    </FieldLabel>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      className="h-12 bg-background-secondary border-border text-foreground placeholder:text-foreground-muted/50 focus:border-primary focus:ring-primary/20 transition-all"
                    />
                  </Field>
                  
                  <Field>
                    <FieldLabel htmlFor="lastName" className="text-foreground text-sm font-medium mb-2">
                      Last Name
                    </FieldLabel>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Smith"
                      required
                      className="h-12 bg-background-secondary border-border text-foreground placeholder:text-foreground-muted/50 focus:border-primary focus:ring-primary/20 transition-all"
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="email" className="text-foreground text-sm font-medium mb-2">
                    Email
                  </FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="h-12 bg-background-secondary border-border text-foreground placeholder:text-foreground-muted/50 focus:border-primary focus:ring-primary/20 transition-all"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="phone" className="text-foreground text-sm font-medium mb-2">
                    Phone Number
                  </FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    required
                    className="h-12 bg-background-secondary border-border text-foreground placeholder:text-foreground-muted/50 focus:border-primary focus:ring-primary/20 transition-all"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="projectType" className="text-foreground text-sm font-medium mb-2">
                    Project Type
                  </FieldLabel>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="flex h-12 w-full rounded-lg border border-border bg-background-secondary px-4 py-2 text-base text-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" className="bg-background text-foreground-muted">Select a project type</option>
                    <option value="kitchen" className="bg-background text-foreground">Kitchen Renovation</option>
                    <option value="bathroom" className="bg-background text-foreground">Bathroom Remodel</option>
                    <option value="whole-home" className="bg-background text-foreground">Whole Home Renovation</option>
                    <option value="addition" className="bg-background text-foreground">Addition/Extension</option>
                    <option value="other" className="bg-background text-foreground">Other</option>
                  </select>
                </Field>

                <Field>
                  <FieldLabel htmlFor="message" className="text-foreground text-sm font-medium mb-2">
                    Tell Us About Your Project
                  </FieldLabel>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe your vision, timeline, and any specific requirements..."
                    rows={4}
                    className="bg-background-secondary border-border text-foreground placeholder:text-foreground-muted/50 focus:border-primary focus:ring-primary/20 transition-all resize-none"
                  />
                </Field>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-primary text-primary-foreground hover:shadow-[0_4px_12px_rgba(214,181,109,0.3)] font-semibold text-base transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  data-cta-location="form"
                  data-cta-action="submit-consultation"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Request Free Consultation
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </FieldGroup>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
