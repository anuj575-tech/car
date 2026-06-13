---
name: Clean Muscle
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e3bfb1'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#aa8a7d'
  outline-variant: '#5a4136'
  surface-tint: '#ffb596'
  primary: '#ffb596'
  on-primary: '#581e00'
  primary-container: '#ff6600'
  on-primary-container: '#561d00'
  inverse-primary: '#a33e00'
  secondary: '#9fcaff'
  on-secondary: '#003259'
  secondary-container: '#0e9aff'
  on-secondary-container: '#003055'
  tertiary: '#9ccaff'
  on-tertiary: '#003256'
  tertiary-container: '#009cfc'
  on-tertiary-container: '#003155'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb596'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#7c2e00'
  secondary-fixed: '#d2e4ff'
  secondary-fixed-dim: '#9fcaff'
  on-secondary-fixed: '#001d36'
  on-secondary-fixed-variant: '#00497e'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#9ccaff'
  on-tertiary-fixed: '#001d35'
  on-tertiary-fixed-variant: '#00497b'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Anybody
    fontSize: 96px
    fontWeight: '800'
    lineHeight: 100%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Anybody
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 110%
  headline-md:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 120%
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: 0.1em
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 160px
---

## Brand & Style

This design system embodies the "Clean Muscle" philosophy—a fusion of raw automotive power and sophisticated digital minimalism. The target audience is performance enthusiasts who value engineering excellence and heritage as much as modern technology. 

The aesthetic is heavily influenced by **High-Contrast / Bold** and **Minimalist** movements. It prioritizes high-impact imagery of the vehicle while using a "less but better" approach to interface elements. The emotional response is one of adrenaline, precision, and authority. Visuals should feel heavy and grounded, like the vehicle’s stance, but move with the speed and fluidity of a high-performance engine through sharp transitions and deliberate whitespace.

## Colors

The palette is rooted in the "Midnight" spectrum. The base is an absolute black (`#0A0A0A`), providing a cinematic backdrop that allows the car’s silhouette to disappear into shadows. Charcoal accents (`#1C1C1C`) define containers without breaking the dark immersion.

- **Primary (Hemi Orange):** Used for critical calls to action, performance stats, and active states. It represents the heat of the engine.
- **Secondary (Electric Blue):** Used for technical specifications, EV-hybrid data points, and secondary highlights.
- **Neutrals:** A range of deep grays to create subtle depth. Pure white is reserved strictly for primary typography to ensure maximum legibility against the dark void.

## Typography

Typography is used as a structural element. **Anybody** provides the "wide and authoritative" feel required for a muscle car brand—its variable width allows for aggressive, compressed headlines that feel like a speedometer redlining.

**Hanken Grotesk** serves as the workhorse for technical data and body copy. It is clean, modern, and highly legible, providing a professional contrast to the expressive display type. 

- **Display Text:** Always use tight tracking and heavy weights.
- **Labels:** Use uppercase with generous letter spacing to evoke the feeling of chassis stamping and badging.
- **Hierarchy:** Focus on extreme scale differences (e.g., a massive 96px headline paired with a small, precise 14px caption) to create a high-performance editorial feel.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a 12-column structure for desktop. To maintain the "Clean" part of "Clean Muscle," whitespace (negative space) is used aggressively. 

- **Vertical Rhythm:** Sections are separated by large gaps (`160px+`) to allow the car’s photography to breathe and command attention.
- **Margins:** Desktop margins are wide (`80px`) to center-align the focus on the product. 
- **Transitions:** Layout shifts should be horizontal and fast. Use "staggered" entry animations for content blocks to mimic the sequential lighting of drag strip lights (the "Christmas Tree").

## Elevation & Depth

This system avoids traditional shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Tiers:** Backgrounds use `#0A0A0A`, while interactive cards or sections use `#121212` or `#1C1C1C`. This "black-on-black" depth is reminiscent of automotive interior textures (leather, carbon fiber, plastic).
- **Outlines:** Instead of shadows, use 1px solid borders in `#2A2A2A` for cards and inputs. This keeps the design "sharp" and "machined."
- **Active States:** Depth is achieved through "glow" effects—subtle, primary-colored outer blurs (Hemi Orange) that suggest energy or instrumentation lights.

## Shapes

The shape language is strictly **Sharp (0)**. There are no rounded corners in this design system. Every button, input, image container, and card must have 90-degree angles. This reflects the aggressive, boxy heritage of the Challenger’s silhouette and suggests structural rigidity and "muscle." 

Angled cuts (45-degree chamfers) can be used sparingly on decorative elements or button corners to mimic aerodynamic components or performance trim.

## Components

### Buttons
- **Primary:** Solid Hemi Orange, black text, sharp corners. No border. On hover, the button scales up slightly (1.02x) with a subtle orange glow.
- **Secondary:** Transparent background, 2px white border, white text. Sharp corners. 

### Input Fields
- Underline style only or fully enclosed with a 1px dark gray border. Background should be slightly darker than the surface. Labels use `label-caps`.

### Cards
- No shadows. Use a subtle `#1C1C1C` background and a 1px border. Full-bleed imagery is preferred for vehicle feature cards.

### Chips/Badges
- Small, rectangular, with technical data (e.g., "0-60 MPH", "797 HP"). Use the `label-caps` typography style.

### Performance Gauges
- Custom component: A horizontal or circular progress bar using the Primary/Secondary colors to visualize vehicle stats, utilizing a "rev-counter" animation style.

### Lists
- Border-bottom only, using a very faint gray. High contrast between the list item title and the value (e.g., "Engine" in gray, "6.2L HEMI V8" in white).