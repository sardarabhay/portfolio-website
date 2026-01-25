# Components Documentation

This directory contains all reusable components for the portfolio website.

## Component Structure

### Core Components

#### 1. **ResumeModal**
- **Location**: `components/ResumeModal.tsx`
- **Purpose**: Modal dialog for displaying and downloading resume
- **Props**:
  - `open: boolean` - Controls modal visibility
  - `onClose: () => void` - Callback when modal is closed
- **Features**:
  - PDF viewer with iframe
  - Download button
  - Click outside to close
  - Accessible close button

#### 2. **HeroSection**
- **Location**: `components/HeroSection.tsx`
- **Purpose**: Main hero section with profile information
- **Props**:
  - `onViewResume: () => void` - Callback to open resume modal
  - `onCopyEmail: () => void` - Callback to copy email to clipboard
  - `copied: boolean` - State indicating if email was copied
- **Features**:
  - Profile photo
  - Title and description
  - Availability status indicator
  - View resume button
  - Copy email button with visual feedback

#### 3. **TechStack**
- **Location**: `components/TechStack.tsx`
- **Purpose**: Animated marquee showcasing technical skills
- **Props**: None (standalone component)
- **Features**:
  - Three categories: Frontend, Backend, DevOps & Tools
  - Color-coded by category (Blue, Emerald, Purple)
  - Animated marquee effect with pause on hover
  - Icons from lucide-react
  - Hover effects on skill cards

#### 4. **ProjectCard**
- **Location**: `components/ProjectCard.tsx`
- **Purpose**: Individual project showcase card
- **Props**:
  - `title: string` - Project name
  - `description: string` - Project description
  - `logoSrc: string` - Path to project logo
  - `githubUrl?: string` - Optional GitHub repository URL
  - `liveDemoUrl?: string` - Optional live demo URL
- **Features**:
  - Project logo with border
  - Title and description
  - GitHub and Live Demo links (optional)
  - Animated border beam effect
  - Responsive layout

#### 5. **ProjectsSection**
- **Location**: `components/ProjectsSection.tsx`
- **Purpose**: Container for all project cards
- **Props**: None
- **Features**:
  - Manages project data array
  - Maps through projects and renders ProjectCard components
  - Easy to add/remove projects by updating data array

#### 6. **ContactSection**
- **Location**: `components/ContactSection.tsx`
- **Purpose**: Contact call-to-action section
- **Props**:
  - `onCopyEmail: () => void` - Callback to copy email
  - `copied: boolean` - Email copied state
- **Features**:
  - Call-to-action heading
  - Hire me button
  - Copy email button with feedback

## UI Components (Reusable)

The `ui/` directory contains lower-level reusable UI components:
- `button` - Button component with variants
- `dock` - Bottom navigation dock
- `marquee` - Animated marquee/carousel
- `border-beam` - Animated border effect
- `meteors` - Decorative meteor animation

## Usage Example

```tsx
import {
  ResumeModal,
  HeroSection,
  TechStack,
  ProjectsSection,
  ContactSection
} from "@/components";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("your@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main>
      <HeroSection
        onViewResume={() => setResumeOpen(true)}
        onCopyEmail={copyEmail}
        copied={copied}
      />
      <TechStack />
      <ProjectsSection />
      <ContactSection onCopyEmail={copyEmail} copied={copied} />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </main>
  );
}
```

## Customization Guide

### Adding a New Project
Edit `components/ProjectsSection.tsx`:
```tsx
const projects = [
  {
    title: "Your Project",
    description: "Project description here",
    logoSrc: "/logo.png",
    githubUrl: "https://github.com/...",
    liveDemoUrl: "https://..."
  },
  // ... more projects
];
```

### Adding New Tech Skills
Edit `components/TechStack.tsx` and add new skill items to the appropriate category (Frontend, Backend, or DevOps).

### Changing Colors
Each section uses Tailwind CSS classes. Key color variables:
- **Frontend**: `text-blue-400`, `border-blue-500/30`
- **Backend**: `text-emerald-400`, `border-emerald-500/30`
- **DevOps**: `text-purple-400`, `border-purple-500/30`

## File Structure

```
components/
├── index.ts                 # Central export file
├── ResumeModal.tsx         # Resume modal component
├── HeroSection.tsx         # Hero/intro section
├── TechStack.tsx           # Tech skills showcase
├── ProjectCard.tsx         # Single project card
├── ProjectsSection.tsx     # Projects container
├── ContactSection.tsx      # Contact CTA section
└── ui/                     # Reusable UI primitives
    ├── button.tsx
    ├── dock.tsx
    ├── marquee.tsx
    ├── border-beam.tsx
    └── meteors.tsx
```

## Benefits of This Structure

1. **Separation of Concerns**: Each component has a single, clear responsibility
2. **Reusability**: Components can be easily reused across different pages
3. **Maintainability**: Changes to one section don't affect others
4. **Testability**: Individual components can be tested in isolation
5. **Scalability**: Easy to add new sections or modify existing ones
6. **Type Safety**: Full TypeScript support with proper prop types
7. **Clean Code**: Main page.tsx is now much cleaner and easier to read
