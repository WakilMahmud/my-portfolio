# Wakil's Portfolio Website

## 📊 Project Overview
This is a **modern personal portfolio website** built with **Next.js 16** and **React 19**, showcasing a developer portfolio for "Wakil - Software Engineer". The project uses TypeScript and is currently in early development stages.

## 🛠️ Technology Stack

### Core Framework
- **Next.js 16.1.4** (App Router architecture)
- **React 19.2.3** with React DOM
- **TypeScript 5**

### Styling
- **Tailwind CSS 4** (using the new `@tailwindcss/postcss` setup)
- **tw-animate-css** for animations
- Custom design system with OKLCH color space for modern color management
- Google Fonts: **Inter** (sans-serif) and **Roboto Mono** (monospace)

### UI Component Library
- **shadcn/ui** components (Radix UI primitives)
- **Lucide React** icons
- Components include: Button, Input, Separator, Sheet, Sidebar, Skeleton, Tooltip

### Code Quality
- **Biome** for linting and formatting (replacing ESLint/Prettier)



## 🎨 Key Features

### 1. Design System
- Comprehensive theming with light/dark mode support
- Custom color palette using OKLCH color space
- Sidebar-specific color tokens
- Responsive design with mobile breakpoint at 768px
- Multiple border radius utilities

### 2. Sidebar Navigation
- Collapsible sidebar with multiple variants (sidebar, floating, inset)
- Multiple collapsible modes (offcanvas, icon, none)
- Mobile-responsive with separate mobile width
- Keyboard shortcut support (B key)
- Cookie-based state persistence
- Navigation items: Home, Inbox, Calendar, Search, Settings (placeholders)

### 3. Current Implementation
- Root layout with sidebar integration
- Simple home page with a button component
- Font optimization with Next.js font loading
- Custom base styles applied globally

## 🎯 Current Development Stage

The project appears to be in **early development**:
- ✅ Basic Next.js setup complete
- ✅ Design system and theming configured
- ✅ UI component library integrated
- ✅ Sidebar navigation structure in place
- ⚠️ Main content is minimal (just a button on homepage)
- ⚠️ Navigation links are placeholders (all pointing to "#")
- ⚠️ No actual portfolio content yet (projects, about, skills, etc.)
- ⚠️ Public folder is empty (no images/assets)

## 📝 Notable Configuration

- **PostCSS** configured for Tailwind CSS 4
- **Path aliases**: `@/*` maps to `./src/*`
- **TypeScript**: Strict mode enabled
- **Dev server**: Currently running on port 3000

## 🔍 Interesting Technical Choices

1. **Tailwind CSS 4**: Using the latest version with new `@import "tailwindcss"` syntax
2. **OKLCH Colors**: Modern color space for better color perception
3. **Biome**: Modern all-in-one toolchain instead of ESLint/Prettier
4. **React 19**: Using the latest React features
5. **Custom sidebar system**: Comprehensive sidebar implementation with advanced features