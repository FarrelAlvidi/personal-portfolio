# Implementation Plan

- [ ] 1. Setup portfolio data structure and constants
  - Create `src/lib/constants.ts` with portfolio data types and sample content
  - Define TypeScript interfaces for Project, Skill, SkillCategory, SocialLink, and NavSection
  - Populate with placeholder data for testing
  - _Requirements: 1.1, 3.3, 4.1, 5.3, 6.6_

- [ ] 2. Create custom hooks for scroll interactions
  - _Requirements: 2.4, 8.2_

- [ ] 2.1 Implement useScrollSpy hook
  - Create `src/hooks/useScrollSpy.ts` with Intersection Observer logic
  - Track active section based on viewport visibility
  - Return activeSection id for navbar highlighting
  - _Requirements: 2.4_

- [ ] 2.2 Implement useInView hook
  - Create `src/hooks/useInView.ts` for element visibility detection
  - Use Intersection Observer API with configurable options
  - Return boolean isInView state
  - _Requirements: 8.2_

- [ ] 3. Install and configure shadcn/ui components
  - _Requirements: 7.1, 7.6_

- [ ] 3.1 Add required shadcn components
  - Install button, card, input, textarea, badge, dialog, and progress components using shadcn CLI
  - Verify components are added to `src/components/ui/` directory
  - _Requirements: 7.1, 7.6_

- [ ] 4. Create GSAP animation utilities
  - Create `src/lib/animations.ts` with reusable GSAP animation functions
  - Implement heroAnimation, revealAnimation, progressAnimation, and staggerGridAnimation
  - Configure ScrollTrigger settings for reveal animations
  - _Requirements: 1.2, 3.1, 4.1, 5.1, 8.2, 8.5, 10.4_

- [ ] 5. Build theme toggle component
  - _Requirements: 7.3, 7.4_

- [ ] 5.1 Create ThemeToggle component
  - Create `src/components/theme/ThemeToggle.tsx` with light/dark mode toggle
  - Implement theme state management with localStorage persistence
  - Add sun/moon icon animation using Motion
  - Apply theme class to document root element
  - _Requirements: 7.3, 7.4_

- [ ] 6. Build SectionWrapper component
  - Create `src/components/shared/SectionWrapper.tsx` for consistent section styling
  - Add section id prop for navigation anchors
  - Apply consistent padding (py-20 lg:py-32) and container styles
  - Integrate reveal animation trigger using useInView hook
  - _Requirements: 8.2, 7.6_

- [ ] 7. Build Navbar component
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 7.1 Create Navbar structure and styling
  - Create `src/components/navigation/Navbar.tsx` with navigation items
  - Implement sticky positioning with backdrop blur effect
  - Add GSAP animation for sticky state transition
  - Style with bg-background/80 backdrop-blur-md and border
  - _Requirements: 2.1, 2.2_

- [ ] 7.2 Implement smooth scroll navigation
  - Add click handlers for menu items with smooth scroll behavior
  - Calculate scroll offset for proper section alignment
  - Integrate useScrollSpy hook for active section highlighting
  - _Requirements: 2.3, 2.4_

- [ ] 7.3 Add mobile hamburger menu
  - Implement responsive menu with hamburger icon for mobile
  - Add slide animation for mobile menu using Motion
  - Hide/show menu based on viewport width
  - Integrate ThemeToggle in navbar
  - _Requirements: 2.5, 7.3_

- [ ] 8. Build Hero Section
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 7.1, 7.2_

- [ ] 8.1 Create HeroSection component structure
  - Create `src/components/sections/HeroSection.tsx` with full-screen layout
  - Add name, tagline, and description text elements
  - Implement gradient text effect for name
  - Style with min-h-screen and large typography
  - _Requirements: 1.1, 1.4, 7.1, 7.2_

- [ ] 8.2 Add hero entrance animations
  - Implement GSAP timeline for staggered fade-in and slide-up animations
  - Animate name, tagline, and description with delays
  - Add CTA button with arrow icon and scroll functionality
  - _Requirements: 1.2, 1.5_

- [ ] 8.3 Implement parallax background effect
  - Add background gradient or particle elements
  - Implement GSAP parallax animation on scroll
  - Optimize for performance with GPU acceleration
  - _Requirements: 1.3, 10.4_

- [ ] 9. Build About Section
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 9.1 Create AboutSection component layout
  - Create `src/components/sections/AboutSection.tsx` with two-column grid
  - Add profile image with border gradient effect
  - Display description paragraphs and skill highlights
  - Style with grid grid-cols-1 lg:grid-cols-2 gap-12
  - _Requirements: 3.2, 3.3, 3.5_

- [ ] 9.2 Add reveal animations
  - Implement GSAP ScrollTrigger for text reveal from left
  - Add stagger animation for skill highlight badges
  - Implement hover scale effect on badges using Motion
  - _Requirements: 3.1, 3.4_

- [ ] 10. Build Projects Section components
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7_

- [ ] 10.1 Create ProjectCard component
  - Create `src/components/shared/ProjectCard.tsx` with image and overlay
  - Display project title, short description, and technology badges
  - Implement hover effects with scale and shadow using Motion
  - Add click handler to open modal
  - Style with aspect-video and gradient overlay
  - _Requirements: 4.2, 4.3, 4.4_

- [ ] 10.2 Create ProjectModal component
  - Create `src/components/shared/ProjectModal.tsx` using shadcn Dialog
  - Display full project details, images, and technology stack
  - Add links to live demo and GitHub repository
  - Implement close functionality with backdrop click
  - Style with max-w-4xl and scrollable content
  - _Requirements: 4.4, 4.5_

- [ ] 10.3 Create ProjectsSection component
  - Create `src/components/sections/ProjectsSection.tsx` with filter buttons
  - Implement category filtering logic (All, Web, Mobile, etc.)
  - Display projects in responsive grid layout
  - Add stagger animation for grid items using GSAP
  - Integrate ProjectCard and ProjectModal components
  - Handle responsive layout (single column on mobile)
  - _Requirements: 4.1, 4.6, 4.7_

- [ ] 11. Build Skills Section components
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 11.1 Create SkillBar component
  - Create `src/components/shared/SkillBar.tsx` with progress bar
  - Implement GSAP animation from 0 to target value
  - Add tooltip with skill description on hover
  - Style with custom gradient fill
  - _Requirements: 5.1, 5.2, 5.4_

- [ ] 11.2 Create SkillsSection component
  - Create `src/components/sections/SkillsSection.tsx` with category groups
  - Display skill categories with Lucide icons
  - Integrate SkillBar components with stagger delays
  - Style with grid grid-cols-1 md:grid-cols-2 gap-8
  - _Requirements: 5.3, 5.5_

- [ ] 12. Build Contact Section
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7_

- [ ] 12.1 Create SocialLinks component
  - Create `src/components/shared/SocialLinks.tsx` with social media icons
  - Implement hover effects with scale and color transition using Motion
  - Style icons with hover:scale-110 hover:text-primary
  - _Requirements: 6.6, 6.7_

- [ ] 12.2 Create ContactSection component
  - Create `src/components/sections/ContactSection.tsx` with form and social links
  - Build contact form with name, email, and message fields using shadcn Input/Textarea
  - Implement real-time validation with error messages
  - Add submit handler with loading state on button
  - Display success/error messages after submission
  - Add fade-in animation for form using GSAP
  - Integrate SocialLinks component
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ] 13. Update main page with all sections
  - Update `src/app/page.tsx` to import and render all section components
  - Pass portfolio data from constants to each section
  - Wrap sections with SectionWrapper for consistent styling
  - Ensure proper section IDs for navigation
  - _Requirements: 1.1, 2.1, 3.1, 4.1, 5.1, 6.1_

- [ ] 14. Update root layout with theme provider
  - Update `src/app/layout.tsx` to add theme provider context
  - Ensure smooth scroll behavior is enabled globally
  - Add Navbar component to layout
  - Verify Satoshi font is loaded correctly
  - _Requirements: 7.3, 8.1_

- [ ] 15. Update global styles for clean theme
  - Update `src/app/globals.css` to adjust color variables for clean theme
  - Ensure light mode uses pure white background and soft accent colors
  - Verify dark mode colors are properly configured
  - Add utility classes for common patterns
  - Test color contrast ratios for accessibility
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [ ] 16. Optimize images and performance
  - Add placeholder images to `public/images/` directory
  - Implement Next.js Image component with lazy loading in all sections
  - Add skeleton loaders for images using animate-pulse
  - Configure blur placeholders for images
  - Verify GPU acceleration for animations (will-change, force3D)
  - _Requirements: 9.5, 10.1, 10.2, 10.3, 10.4_

- [ ] 17. Implement responsive design adjustments
  - Test all sections at mobile, tablet, and desktop breakpoints
  - Adjust grid layouts for mobile (single column)
  - Ensure touch targets are minimum 44x44px
  - Verify hamburger menu works on mobile
  - Test orientation changes
  - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [ ] 18. Add final polish and micro-interactions
  - Verify all hover effects work correctly
  - Test smooth scrolling behavior across all browsers
  - Ensure cursor changes on interactive elements
  - Add visual feedback for all interactions
  - Test theme toggle transitions
  - Verify all animations use smooth easing functions
  - _Requirements: 8.1, 8.3, 8.4, 8.5, 8.6_
