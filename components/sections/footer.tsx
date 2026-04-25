"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { COMPANY } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToConsultation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('consultation')
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer 
      data-section="footer"
      className="relative px-6 py-16 border-t border-border bg-background-secondary"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-md">
                <span className="text-lg font-bold text-primary-foreground">N</span>
              </div>
              <div>
                <span className="text-lg font-bold text-foreground">NobleNest</span>
                <span className="text-lg font-light text-primary ml-1">Renovations</span>
              </div>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed">
              Transforming homes with expert craftsmanship and transparent service since 2010.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-5 text-sm tracking-wide uppercase">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-foreground-muted hover:text-primary transition-colors text-sm group"
                >
                  <Phone className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-foreground-muted hover:text-primary transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-foreground-muted text-sm">
                  <MapPin className="w-4 h-4 text-primary/70 flex-shrink-0 mt-0.5" />
                  {COMPANY.address}
                </span>
              </li>
              <li className="pt-2">
                <a 
                  href="#consultation"
                  onClick={scrollToConsultation}
                  className="inline-flex items-center gap-2 text-primary hover:text-accent-hover transition-colors text-sm font-medium"
                >
                  Book a Consultation
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-5 text-sm tracking-wide uppercase">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-foreground-muted text-sm hover:text-primary transition-colors cursor-default">Kitchen Renovations</span>
              </li>
              <li>
                <span className="text-foreground-muted text-sm hover:text-primary transition-colors cursor-default">Bathroom Remodels</span>
              </li>
              <li>
                <span className="text-foreground-muted text-sm hover:text-primary transition-colors cursor-default">Whole Home</span>
              </li>
              <li>
                <span className="text-foreground-muted text-sm hover:text-primary transition-colors cursor-default">Additions</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-5 text-sm tracking-wide uppercase">Hours</h4>
            <ul className="space-y-3 text-sm text-foreground-muted">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-foreground">8am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-foreground">9am - 4pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-foreground">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground-muted">
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-foreground-muted hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground-muted hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
