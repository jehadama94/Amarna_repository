# Implementation Kickstart: Renovation Landing Page

## Project Overview

**Goal**: Build a high-converting renovation landing page with premium dark luxury styling, featuring an FAQ section for objection handling and strategically placed CTAs throughout.

**Tech Stack**: Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui, Lucide Icons, Framer Motion

**Priority**: MVP prototype with polished premium design and mobile responsiveness

---

## Design Token System

### Color Palette (5 Colors Total)

| Token Name | Hex Value | Usage |
|------------|-----------|-------|
| `--background` | `#080808` | Primary page background |
| `--background-secondary` | `#111111` | Card backgrounds, elevated surfaces |
| `--background-tertiary` | `#181818` | Subtle section differentiation |
| `--accent` | `#D6B56D` | Champagne gold - CTAs, highlights, accents |
| `--accent-hover` | `#F0D58A` | Gold hover state |
| `--foreground` | `#FFFFFF` | Primary text, headings |
| `--foreground-muted` | `#A1A1A1` | Secondary text, descriptions |
| `--border` | `#2A2A2A` | Subtle borders, dividers |

### Typography

| Element | Font | Size (Desktop) | Size (Mobile) | Weight |
|---------|------|----------------|---------------|--------|
| H1 (Hero) | Inter | 56px / 3.5rem | 36px / 2.25rem | 700 |
| H2 (Section) | Inter | 40px / 2.5rem | 28px / 1.75rem | 700 |
| H3 (Card Title) | Inter | 24px / 1.5rem | 20px / 1.25rem | 600 |
| Body | Inter | 18px / 1.125rem | 16px / 1rem | 400 |
| Body Small | Inter | 16px / 1rem | 14px / 0.875rem | 400 |
| Button | Inter | 16px / 1rem | 16px / 1rem | 600 |

### Spacing Scale

| Name | Value | Usage |
|------|-------|-------|
| `section-y` | 96px / 6rem | Vertical padding between sections |
| `section-y-mobile` | 64px / 4rem | Mobile section padding |
| `container-x` | 24px / 1.5rem | Horizontal container padding |
| `card-padding` | 24px / 1.5rem | Internal card padding |
| `gap-lg` | 32px / 2rem | Large component gaps |
| `gap-md` | 24px / 1.5rem | Medium component gaps |
| `gap-sm` | 16px / 1rem | Small component gaps |

### Layout Constraints

| Constraint | Value |
|------------|-------|
| Max container width | 1200px |
| FAQ section max width | 900px |
| Content max width | 800px |

### Animation Specifications

| Animation | Duration | Easing | Description |
|-----------|----------|--------|-------------|
| Fade + Slide Up | 300ms | `cubic-bezier(0.22, 1, 0.36, 1)` | Section/element entrance |
| Accordion expand | 250ms | `ease-out` | Height + opacity transition |
| Button hover glow | 200ms | `ease-out` | Subtle gold glow effect |
| Card hover | 200ms | `ease-out` | Subtle lift + border glow |

---

## Page Structure & CTA Placement

### Section Order (Top to Bottom)

```
1. Hero Section
   - CTA #1: "Book a Free Consultation" (primary, prominent)

2. Pain Points Section
   - Addresses common renovation frustrations

3. Services Section
   - Overview of renovation services offered

4. Why Choose Us Section
   - CTA #2: "Start Your Project" (secondary placement)

5. Pricing Programs Section
   - Transparent pricing tiers/packages

6. Social Proof Section
   - Testimonials/reviews

7. Process Section
   - Step-by-step renovation process
   - CTA #3: "Get Started Today" (mid-page reinforcement)

8. Lead Form Section (#consultation)
   - Primary conversion point
   - Form with name, email, phone, project details

9. FAQ Section
   - 10 objection-handling Q&As
   - CTA #4: "Book a Free Renovation Consultation" (post-FAQ)

10. Final CTA Section
    - CTA #5: Last chance CTA before footer
    - "Ready to Transform Your Home?"

11. Footer
    - Contact info, links, copyright
```

### CTA Button Specifications

| Location | Text | Style | Action |
|----------|------|-------|--------|
| Hero | "Book a Free Consultation" | Primary (gold bg, dark text) | Scroll to #consultation |
| Why Choose Us | "Start Your Project" | Primary | Scroll to #consultation |
| Process | "Get Started Today" | Primary | Scroll to #consultation |
| Post-FAQ | "Book a Free Renovation Consultation" | Primary | Scroll to #consultation |
| Final CTA | "Transform Your Home" | Primary (larger) | Scroll to #consultation |

### CTA Button Styling

```
Primary CTA:
- Background: #D6B56D (accent gold)
- Text: #080808 (dark)
- Hover: #F0D58A with subtle glow
- Padding: 16px 32px
- Border-radius: 8px
- Font-weight: 600
- Min touch target: 44px height

Data Attributes (for future analytics):
- data-cta-location="hero|why-choose-us|process|faq|final"
- data-cta-action="scroll-to-consultation"
```

---

## FAQ Section Specifications

### Layout

- Centered within page, max-width: 900px
- Section padding: 96px vertical (64px mobile)
- Dark background (#080808) with subtle gold accents
- Section title + intro text above accordion

### Accordion Behavior

- Single item open at a time (exclusive)
- First item open by default
- Smooth height + opacity animation (250ms, ease-out)
- Keyboard accessible (Enter/Space to toggle, Arrow keys to navigate)
- ARIA attributes for accessibility

### Accordion Item Styling

```
Closed State:
- Background: #111111
- Border: 1px solid #2A2A2A
- Question text: white, 18px, font-weight 500
- Chevron icon: gold (#D6B56D), rotates on open

Open State:
- Background: #111111
- Border: 1px solid #D6B56D (gold highlight)
- Answer text: #A1A1A1, 16px, font-weight 400
- Expanded with fade + slide animation

Hover State:
- Border: 1px solid #3A3A3A
- Subtle lift (translateY -2px)
```

### FAQ Content (10 Items)

1. How long does a typical renovation take?
2. What is your pricing structure?
3. Do you handle permits and inspections?
4. What warranty do you offer?
5. Can I stay in my home during renovation?
6. How do you handle unexpected issues?
7. What materials do you use?
8. Do you provide design services?
9. How do I get started?
10. What sets you apart from other contractors?

---

## Component Architecture

```
/app
  /page.tsx                    # Main landing page (assembles all sections)
  /layout.tsx                  # Root layout with Inter font + dark theme
  /globals.css                 # Design tokens + global styles

/components
  /sections
    /hero.tsx                  # Hero section with CTA #1
    /pain-points.tsx           # Pain points section
    /services.tsx              # Services overview
    /why-choose-us.tsx         # Benefits + CTA #2
    /pricing.tsx               # Pricing programs
    /social-proof.tsx          # Testimonials
    /process.tsx               # Process steps + CTA #3
    /consultation-form.tsx     # Lead form (#consultation)
    /faq.tsx                   # FAQ accordion + CTA #4
    /final-cta.tsx             # Final CTA section
    /footer.tsx                # Footer

  /ui
    /cta-button.tsx            # Reusable CTA button with data attributes
    /section-wrapper.tsx       # Consistent section padding/max-width
    /accordion.tsx             # Custom accordion (or extend shadcn)
    /heading.tsx               # Consistent heading styles

/lib
  /constants.ts                # FAQ data array, CTA text constants
  /utils.ts                    # Utility functions (cn, smooth scroll)
```

---

## Accessibility Checklist (WCAG AA)

- [ ] Color contrast ratio minimum 4.5:1 for body text
- [ ] Color contrast ratio minimum 3:1 for large text
- [ ] All interactive elements keyboard accessible
- [ ] Visible focus states (gold outline)
- [ ] Semantic HTML (section, article, nav, main)
- [ ] ARIA labels on accordion (aria-expanded, aria-controls)
- [ ] Skip link to main content
- [ ] Touch targets minimum 44x44px on mobile
- [ ] Reduced motion support (@media prefers-reduced-motion)

---

## Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Mobile | < 640px | Single column, reduced spacing, smaller text |
| Tablet | 640px - 1024px | Two columns where appropriate |
| Desktop | > 1024px | Full layout, max-width constraints |

---

## Implementation Order

### Phase 1: Foundation
1. Update `globals.css` with design tokens
2. Update `tailwind.config.ts` with custom theme
3. Update `layout.tsx` with Inter font + dark HTML background
4. Create `section-wrapper.tsx` component
5. Create `cta-button.tsx` component

### Phase 2: Core Sections
6. Build Hero section with CTA #1
7. Build Lead Form section (#consultation)
8. Build FAQ section with accordion + CTA #4

### Phase 3: Supporting Sections
9. Build Pain Points section
10. Build Services section
11. Build Why Choose Us + CTA #2
12. Build Pricing section
13. Build Social Proof section
14. Build Process section + CTA #3

### Phase 4: Final Elements
15. Build Final CTA section
16. Build Footer
17. Assemble all sections in page.tsx

### Phase 5: Polish
18. Add Framer Motion animations
19. Test keyboard accessibility
20. Test mobile responsiveness
21. Verify all CTA scroll behavior

---

## Data Attributes for Future Analytics

```html
<!-- CTA Buttons -->
<button 
  data-cta-location="hero"
  data-cta-action="scroll-to-consultation"
  data-cta-text="Book a Free Consultation"
>

<!-- FAQ Items -->
<div 
  data-faq-item="1"
  data-faq-question="How long does a typical renovation take?"
>

<!-- Sections -->
<section 
  data-section="faq"
  data-section-index="9"
>
```

---

## Success Criteria

- [ ] All 5 CTAs visible and functional
- [ ] Smooth scroll to #consultation works
- [ ] FAQ accordion opens/closes smoothly
- [ ] Only one FAQ item open at a time
- [ ] First FAQ item open by default
- [ ] Mobile responsive (tested on 375px width)
- [ ] Keyboard navigation works throughout
- [ ] Premium dark aesthetic achieved
- [ ] Gold accent used consistently
- [ ] Page loads without layout shift

---

## Notes & Decisions

1. **No external dependencies for booking** - CTA scrolls to on-page form
2. **Hardcoded FAQ content** - Stored in constants file for easy editing
3. **Framer Motion for animations** - Already in tech stack
4. **shadcn/ui accordion** - Extend/customize for premium styling
5. **Inter font** - Via next/font/google for optimization

---

*Document created for MVP implementation. Review and approve before proceeding with code.*
