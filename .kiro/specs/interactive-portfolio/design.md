# Design Document - Interactive Portfolio

## Overview

Website portofolio one-page yang interaktif dengan desain clean dan modern, dibangun menggunakan Next.js 16 dengan React 19, Tailwind CSS 4, GSAP untuk animasi kompleks, dan Motion (Framer Motion) untuk micro-interactions. Website ini menggunakan pendekatan component-based dengan shadcn/ui sebagai base UI library dan custom components untuk fitur-fitur spesifik.

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4 dengan CSS Variables
- **Animations**: GSAP 3.13 untuk complex animations, Motion 12 untuk micro-interactions
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Typography**: Satoshi font (already configured)

## Architecture

### Component Structure

```
src/
├── app/
│   ├── layout.tsx (root layout dengan theme provider)
│   ├── page.tsx (main portfolio page)
│   └── globals.css (existing styles + custom utilities)
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/ (shadcn components)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── badge.tsx
│   │   ├── dialog.tsx
│   │   └── progress.tsx
│   ├── navigation/
│   │   └── Navbar.tsx
│   ├── shared/
│   │   ├── SectionWrapper.tsx (untuk reveal animations)
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── SkillBar.tsx
│   │   └── SocialLinks.tsx
│   └── theme/
│       └── ThemeToggle.tsx
├── lib/
│   ├── utils.ts (existing)
│   ├── animations.ts (GSAP animation configs)
│   └── constants.ts (portfolio data)
└── hooks/
    ├── useScrollSpy.ts
    ├── useInView.ts
    └── useScrollProgress.ts
```

## Components and Interfaces

### 1. Main Page Component

**File**: `src/app/page.tsx`

```typescript
interface PortfolioPageProps {
  // Server component, no props needed
}
```

Layout one-page dengan semua sections dalam satu file, menggunakan smooth scroll behavior.

### 2. Navigation Bar

**File**: `src/components/navigation/Navbar.tsx`

```typescript
interface NavbarProps {
  sections: NavSection[];
}

interface NavSection {
  id: string;
  label: string;
  href: string;
}
```

**Features**:
- Sticky positioning dengan backdrop blur saat scroll
- Active section highlighting menggunakan Intersection Observer
- Smooth scroll ke section dengan offset
- Mobile hamburger menu dengan slide animation
- Theme toggle button integrated

**Styling**:
- Background: `bg-background/80 backdrop-blur-md`
- Border: `border-b border-border/40`
- Transition: GSAP untuk sticky state change

### 3. Hero Section

**File**: `src/components/sections/HeroSection.tsx`

```typescript
interface HeroSectionProps {
  name: string;
  tagline: string;
  description: string;
  avatar?: string;
  ctaText?: string;
}
```

**Features**:
- Large typography dengan gradient text effect
- Staggered fade-in animation untuk text elements (GSAP)
- Parallax effect pada background elements
- Animated CTA button dengan arrow icon
- Subtle particle/gradient background effect

**Styling**:
- Height: `min-h-screen`
- Text gradient: `bg-gradient-to-r from-foreground to-muted-foreground`
- Animation: GSAP Timeline untuk orchestrated entrance

### 4. About Section

**File**: `src/components/sections/AboutSection.tsx`

```typescript
interface AboutSectionProps {
  title: string;
  description: string[];
  image: string;
  highlights: string[];
}
```

**Features**:
- Two-column layout (image + content) pada desktop
- Reveal animation dari kiri untuk text (GSAP ScrollTrigger)
- Image dengan border gradient effect
- Skill highlights sebagai animated badges
- Hover effects pada badges (Motion)

**Styling**:
- Grid: `grid grid-cols-1 lg:grid-cols-2 gap-12`
- Image border: `border-2 border-primary/20 rounded-2xl`
- Badges: shadcn Badge component dengan custom hover

### 5. Projects Section

**File**: `src/components/sections/ProjectsSection.tsx`

```typescript
interface ProjectsSectionProps {
  projects: Project[];
  categories: string[];
}

interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
}
```

**Features**:
- Filter buttons untuk kategori (All, Web, Mobile, etc.)
- Grid layout dengan stagger animation (GSAP)
- Project cards dengan hover overlay
- Modal untuk detail lengkap (shadcn Dialog)
- Lazy loading untuk images

**Styling**:
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Card hover: `hover:scale-105 hover:shadow-2xl transition-all`
- Overlay: `absolute inset-0 bg-gradient-to-t from-background/90 to-transparent`

### 6. Project Card Component

**File**: `src/components/shared/ProjectCard.tsx`

```typescript
interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}
```

**Features**:
- Image dengan overlay gradient
- Technology badges
- Hover state dengan scale dan shadow
- Click handler untuk modal

**Styling**:
- Card: shadcn Card component
- Aspect ratio: `aspect-video`
- Hover transform: Motion animate

### 7. Project Modal

**File**: `src/components/shared/ProjectModal.tsx`

```typescript
interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}
```

**Features**:
- Full project details dengan images
- Technology stack list
- Links ke live demo dan GitHub
- Close button dan backdrop click

**Styling**:
- Dialog: shadcn Dialog component
- Max width: `max-w-4xl`
- Scrollable content

### 8. Skills Section

**File**: `src/components/sections/SkillsSection.tsx`

```typescript
interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 0-100
  description?: string;
}
```

**Features**:
- Grouped by category dengan icons
- Animated progress bars (GSAP)
- Tooltip dengan detail saat hover
- Stagger animation untuk skill items

**Styling**:
- Grid: `grid grid-cols-1 md:grid-cols-2 gap-8`
- Progress: shadcn Progress component dengan custom animation
- Icons: Lucide icons dengan `size-6`

### 9. Skill Bar Component

**File**: `src/components/shared/SkillBar.tsx`

```typescript
interface SkillBarProps {
  skill: Skill;
  delay: number;
}
```

**Features**:
- Animated progress dari 0 ke target value
- Tooltip dengan description
- Smooth easing

**Styling**:
- Progress bar: custom gradient fill
- Animation: GSAP with ScrollTrigger

### 10. Contact Section

**File**: `src/components/sections/ContactSection.tsx`

```typescript
interface ContactSectionProps {
  email: string;
  socialLinks: SocialLink[];
}

interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
```

**Features**:
- Contact form dengan validasi
- Real-time validation feedback
- Submit dengan loading state
- Success/error messages
- Social media links dengan hover effects

**Styling**:
- Form: shadcn Input dan Textarea components
- Button: shadcn Button dengan loading spinner
- Social icons: `hover:scale-110 hover:text-primary transition-all`

### 11. Theme Toggle

**File**: `src/components/theme/ThemeToggle.tsx`

```typescript
interface ThemeToggleProps {
  // No props, uses context
}
```

**Features**:
- Toggle antara light dan dark mode
- Smooth transition untuk color changes
- Icon animation (sun/moon)
- Persisted ke localStorage

**Styling**:
- Button: shadcn Button variant ghost
- Icon transition: Motion animate

### 12. Section Wrapper

**File**: `src/components/shared/SectionWrapper.tsx`

```typescript
interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}
```

**Features**:
- Wrapper untuk reveal animations
- Intersection Observer untuk trigger
- Consistent padding dan spacing

**Styling**:
- Padding: `py-20 lg:py-32`
- Container: `container mx-auto px-4`

## Data Models

### Portfolio Data Structure

**File**: `src/lib/constants.ts`

```typescript
export const portfolioData = {
  personal: {
    name: string;
    tagline: string;
    description: string;
    avatar: string;
    email: string;
  },
  about: {
    title: string;
    description: string[];
    image: string;
    highlights: string[];
  },
  projects: Project[];
  skills: SkillCategory[];
  social: SocialLink[];
  navigation: NavSection[];
};
```

## Animation Strategy

### GSAP Animations

**File**: `src/lib/animations.ts`

```typescript
// Hero entrance animation
export const heroAnimation = (elements: HTMLElement[]) => {
  const tl = gsap.timeline();
  tl.from(elements, {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });
  return tl;
};

// Scroll-triggered reveal
export const revealAnimation = (element: HTMLElement) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });
};

// Progress bar animation
export const progressAnimation = (element: HTMLElement, target: number) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%"
    },
    width: `${target}%`,
    duration: 1.5,
    ease: "power2.out"
  });
};

// Stagger grid animation
export const staggerGridAnimation = (elements: HTMLElement[]) => {
  gsap.from(elements, {
    scrollTrigger: {
      trigger: elements[0],
      start: "top 80%"
    },
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  });
};
```

### Motion (Framer Motion) Micro-interactions

```typescript
// Hover scale effect
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
};

// Fade in up
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Stagger children
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

## Custom Hooks

### useScrollSpy

**File**: `src/hooks/useScrollSpy.ts`

```typescript
export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>("");
  
  // Implementation menggunakan Intersection Observer
  // Returns: activeSection id
}
```

### useInView

**File**: `src/hooks/useInView.ts`

```typescript
export function useInView(ref: RefObject<HTMLElement>, options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);
  
  // Implementation menggunakan Intersection Observer
  // Returns: boolean isInView
}
```

### useScrollProgress

**File**: `src/hooks/useScrollProgress.ts`

```typescript
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  
  // Implementation tracking scroll percentage
  // Returns: number 0-100
}
```

## Styling System

### Color Palette (Clean Theme)

Menggunakan existing CSS variables dari globals.css dengan penyesuaian:

**Light Mode**:
- Background: `oklch(1 0 0)` - Pure white
- Foreground: `oklch(0.145 0 0)` - Almost black
- Primary: `oklch(0.488 0.243 264.376)` - Soft blue/purple (accent color)
- Muted: `oklch(0.97 0 0)` - Light gray
- Border: `oklch(0.922 0 0)` - Subtle gray

**Dark Mode**:
- Background: `oklch(0.145 0 0)` - Deep dark
- Foreground: `oklch(0.985 0 0)` - Off white
- Primary: `oklch(0.922 0 0)` - Light accent
- Muted: `oklch(0.269 0 0)` - Dark gray

### Typography Scale

```css
/* Already using Satoshi font */
- Heading 1: text-6xl lg:text-8xl font-bold
- Heading 2: text-4xl lg:text-6xl font-bold
- Heading 3: text-3xl lg:text-4xl font-bold
- Body Large: text-lg lg:text-xl
- Body: text-base
- Small: text-sm
```

### Spacing System

```css
- Section padding: py-20 lg:py-32
- Container: container mx-auto px-4 max-w-7xl
- Gap small: gap-4
- Gap medium: gap-8
- Gap large: gap-12
```

### Border Radius

```css
- Small: rounded-lg (0.5rem)
- Medium: rounded-xl (0.75rem)
- Large: rounded-2xl (1rem)
- Full: rounded-full
```

## Error Handling

### Form Validation

```typescript
interface ValidationError {
  field: string;
  message: string;
}

// Client-side validation
const validateContactForm = (data: ContactFormData): ValidationError[] => {
  const errors: ValidationError[] = [];
  
  if (!data.name.trim()) {
    errors.push({ field: 'name', message: 'Name is required' });
  }
  
  if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }
  
  if (data.message.length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  }
  
  return errors;
};
```

### Image Loading

```typescript
// Skeleton loader untuk images
<div className="animate-pulse bg-muted aspect-video rounded-xl" />

// Error fallback
<div className="flex items-center justify-center aspect-video bg-muted rounded-xl">
  <ImageOff className="size-12 text-muted-foreground" />
</div>
```

## Performance Optimizations

### Image Optimization

```typescript
import Image from 'next/image';

// Menggunakan Next.js Image component
<Image
  src={project.image}
  alt={project.title}
  width={800}
  height={600}
  className="object-cover"
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

### Code Splitting

```typescript
// Dynamic imports untuk modal
const ProjectModal = dynamic(() => import('@/components/shared/ProjectModal'), {
  loading: () => <div>Loading...</div>
});
```

### Animation Performance

```typescript
// Menggunakan will-change untuk GPU acceleration
.animated-element {
  will-change: transform, opacity;
}

// GSAP force3D
gsap.set(element, { force3D: true });
```

## Testing Strategy

### Component Testing

- Unit tests untuk utility functions (validation, animations)
- Component tests untuk isolated components (Button, Card, etc.)
- Integration tests untuk sections dengan user interactions

### Visual Testing

- Responsive design testing di berbagai breakpoints
- Cross-browser testing (Chrome, Firefox, Safari)
- Dark mode consistency testing

### Performance Testing

- Lighthouse score target: 90+ untuk semua metrics
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Cumulative Layout Shift < 0.1

### Accessibility Testing

- Keyboard navigation testing
- Screen reader compatibility
- Color contrast ratio > 4.5:1
- Focus indicators visible
- ARIA labels untuk interactive elements

## Responsive Breakpoints

```typescript
// Tailwind breakpoints
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
2xl: 1536px // Extra large
```

### Mobile-First Approach

- Base styles untuk mobile
- Progressive enhancement untuk larger screens
- Touch-friendly targets (min 44x44px)
- Simplified navigation untuk mobile
- Reduced animations pada mobile untuk performance

## Implementation Notes

1. **Start with Layout**: Setup page.tsx dengan semua sections
2. **Build Components Bottom-Up**: Mulai dari UI components, lalu shared components, lalu sections
3. **Add Animations Last**: Implement functionality dulu, animasi belakangan
4. **Test Incrementally**: Test setiap component sebelum lanjut
5. **Optimize Images**: Prepare dan optimize semua images sebelum integration
6. **Content First**: Populate dengan real content untuk testing layout
7. **Dark Mode**: Implement theme toggle early untuk consistent testing

## Dependencies to Add

Semua dependencies sudah tersedia di package.json:
- ✅ GSAP 3.13
- ✅ Motion 12
- ✅ Lucide React
- ✅ Tailwind CSS 4
- ✅ shadcn/ui configured

No additional dependencies needed.
