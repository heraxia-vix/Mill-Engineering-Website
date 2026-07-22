# Mill Engineering Website V3

Production-ready website for Mill Engineering — an Engineering Solutions Company serving Steel & Metals, Hydropower, Cement, Automotive, Infrastructure and Manufacturing industries.

## Architecture

```
├── index.html              # Homepage
├── about.html              # Company overview
├── capabilities.html       # 10 engineering capabilities
├── technology-partners.html# International partnerships
├── resources.html          # Knowledge centre
├── contact.html            # Enquiry form + office details
├── 404.html                # Error page
├── thank-you.html          # Form submission confirmation
├── privacy-policy.html     # Privacy policy (draft)
├── terms-of-service.html   # Terms of service (draft)
├── css/
│   ├── tokens.css          # Design tokens (colors, spacing, typography, motion)
│   └── components.css      # Component library (cards, grids, nav, footer, etc.)
├── js/
│   ├── main.js             # Core JS (nav, scroll, forms, reveals)
│   └── animations.js       # GSAP ScrollTrigger animations
├── assets/                 # Images, icons, favicon (add before launch)
├── robots.txt              # Crawler directives
└── sitemap.xml             # XML sitemap
```

## Design System

- **Colors**: Deep industrial navy primary, cyan secondary, dark surfaces
- **Typography**: Manrope (headings) + IBM Plex Sans (body)
- **Spacing**: 4px base scale with fluid section padding
- **Motion**: GSAP 3.12 with ScrollTrigger, 60fps target
- **Accessibility**: WCAG AA+, skip links, ARIA, reduced motion support
- **Responsive**: Mobile-first, 5 breakpoints (mobile → ultra-wide)

## Build Book Compliance

Implements specifications from Mill Engineering Codex Master Build Book Volumes 1-12 covering design system, motion engineering, content strategy, SEO architecture, accessibility, performance targets, and quality assurance matrix.

## Pre-Launch Checklist

- [ ] Replace image placeholders with authentic industrial photography
- [ ] Replace SVG text logos with actual logo files
- [ ] Connect enquiry form to backend (Formspree/serverless function)
- [ ] Add Google Analytics / Tag Manager
- [ ] Legal review of Privacy Policy and Terms of Service
- [ ] Add real Technology Partner logos when agreements confirm
- [ ] Final Lighthouse audit
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
