# Specification

## Summary
**Goal:** Build a premium, animated developer portfolio site that communicates 9+ years of experience, 100+ websites, app development, and digital services, with clear navigation and a strong contact CTA.

**Planned changes:**
- Create a single-page (or small multi-section) portfolio layout with sticky/in-page navigation to: Hero/Intro, 9+ years journey timeline, Websites experience (100+), App development, Digital marketing/SEO, Graphic design services, and Contact/CTA.
- Implement a scroll-revealed, professional timeline animation system (with smooth performance and a reduced-motion mode via prefers-reduced-motion).
- Add a Work/Projects section with category-based highlights and a tabbed/filterable UI for Websites (Schools, Real Estate, E-commerce, Other) and Apps (Fintech, Cryptocurrency, Real Estate, E-commerce, Travel), each with short English descriptions.
- Add a Services section with consistent cards for Web development, App development, Digital marketing, SEO, and Graphic design, plus a prominent CTA that navigates to Contact.
- Add a Contact section with a simple form (name, email, message), basic client-side validation, and local/mock submission success/failure states; include optional placeholders for contact methods (e.g., email/LinkedIn).
- Apply a cohesive, distinctive visual theme (consistent typography/spacing/palette) that avoids a blue+purple dominant scheme and remains responsive across devices.
- Add and reference static generated image assets (hero visual, icons, timeline accent) from `frontend/public/assets/generated` (frontend-served static files only).

**User-visible outcome:** Visitors can navigate through an animated, professional portfolio that highlights the developer’s journey and category breadth, review services, and submit a contact message via an on-page form.
