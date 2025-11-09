# Devjobs Web App

A modern job board application built with Next.js, React, TypeScript, and Tailwind CSS.

## A challenge by [Frontend Mentor](https://www.frontendmentor.io)

![image](./preview.jpg)

[View challenge description here](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l)

## 🔄 Migration Story

This project was **completely refactored from Angular to Next.js** using GitHub Copilot's code assistant capabilities. The original Angular 12 application was modernized to use the latest web technologies while maintaining all functionality and improving performance.

### What Changed:
- ✅ **Angular 12** → **Next.js 14** with App Router
- ✅ **RxJS Observables** → **React Hooks & Context API**
- ✅ **Angular Components** → **React Server & Client Components**
- ✅ **SCSS Modules** → **Tailwind CSS 3**
- ✅ **Angular Router** → **Next.js File-based Routing**
- ✅ **TypeScript 4.2** → **TypeScript 5.6**
- ✅ **Node 12** → **Node 22**

### Migration Process:
The refactoring was completed with AI assistance, automating:
- Project structure reorganization
- Component conversion from Angular to React
- State management migration from RxJS to React Context
- Styling conversion from SCSS to Tailwind CSS
- Routing implementation using Next.js conventions
- Image optimization and asset management
- TypeScript interface modernization

## Features

- 🌓 **Dark/Light Mode** - Toggle between themes with persistent localStorage preference
- 📱 **Responsive Design** - Mobile, tablet (including iPad Pro), and desktop optimized layouts
- 🔍 **Advanced Search** - Filter jobs by title, company, expertise, location, and contract type
- 🎯 **Mobile-First Search** - Compact search bar with modal filters on mobile devices
- 💼 **Job Listings** - Browse available developer positions with pagination (12 per page)
- 📄 **Job Details** - View complete job descriptions with requirements and responsibilities
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal speed and SEO
- 🎨 **Modern UI** - Clean, professional design with Tailwind CSS
- ♿ **Accessible** - ARIA labels and semantic HTML throughout
- 🔗 **Navigation** - Clickable logo returns to home page

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.6
- **Styling:** Tailwind CSS 3.4
- **UI Library:** React 18.3
- **Font:** Kumbh Sans (Google Fonts)
- **Node Version:** 22+ (compatible with 20+)

## Getting Started

### Prerequisites

- Node.js 22+ (or 20+)
- npm or yarn

### Installation

1. Install dependencies
```bash
npm install
```

2. Run the development server
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles & Tailwind imports
│   └── jobs/[id]/         # Dynamic job details pages
│       └── page.tsx       # Job detail page
├── components/            # React components
│   ├── Header.tsx         # Header with theme toggle
│   ├── SearchBar.tsx      # Job search filters
│   ├── JobCard.tsx        # Job listing card
│   ├── JobsContainer.tsx  # Job grid with load more
│   ├── JobDetailsHeader.tsx   # Company info header
│   ├── JobDetailsContent.tsx  # Job description & details
│   ├── JobDetailsFooter.tsx   # Apply button footer
│   ├── ThemeProvider.tsx  # Dark/light mode context
│   └── ClientLayout.tsx   # Client-side layout wrapper
├── data/                  # JSON data
│   └── data.json         # Job listings data (15 jobs)
├── types/                 # TypeScript definitions
│   └── job.ts            # Job, Requirements, Role interfaces
├── public/               # Static assets
│   └── assets/           # Images, logos, and icons
│       ├── desktop/      # Desktop assets & header backgrounds
│       ├── tablet/       # Tablet assets
│       ├── mobile/       # Mobile assets
│       └── logos/        # Company logos (SVG)
├── design/               # Design reference files
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies & scripts
```

## Key Implementation Details

### Theme Management
- Uses React Context API for global theme state
- Persists preference in `localStorage`
- Handles SSR/hydration with client-side mounting
- Smooth transitions between light and dark modes

### Image Optimization
- Company logos loaded from `/public/assets/logos/`
- Paths normalized from `./assets/` to `/assets/`
- Next.js Image component with unoptimized SVGs
- Responsive background images for header

### Responsive Design
The application uses Tailwind's responsive utilities with custom breakpoints:
- Mobile-first approach with progressive enhancement
- Breakpoints: `md:` (768px), `lg:` (1367px), `xl:` (1440px)
- Flexible grid layouts (1/2/3 columns)
- Adaptive typography and spacing
- iPad Pro included in tablet range
- Rounded header corners on tablet/desktop only
- Mobile search with modal filters

## Responsive Breakpoints

- **Mobile:** < 768px (single column, no header rounded corners)
- **Tablet:** 768px - 1366px (2 columns, includes iPad, iPad Air, iPad Pro 11" & 12.9")
- **Desktop:** ≥ 1367px (3 columns, full desktop experience)
- **Desktop XL:** ≥ 1440px (optimized for large screens)

## Color Palette

### Light Mode
- Background: `hsl(210, 22%, 96%)` - Light grey
- Cards: `hsl(0, 0%, 100%)` - White
- Text: `hsl(219, 29%, 14%)` - Very dark blue

### Dark Mode
- Background: `hsl(220, 29%, 10%)` - Midnight
- Cards: `hsl(219, 29%, 14%)` - Very dark blue
- Text: `hsl(0, 0%, 100%)` - White

### Accent Colors
- Violet: `hsl(235, 69%, 61%)` - Primary CTA
- Light Violet: `hsl(235, 82%, 77%)` - Hover state
- Dark Grey: `hsl(214, 17%, 51%)` - Secondary text
- Grey: `hsl(212, 23%, 69%)` - Tertiary text

## Design Reference

Design files are located in the `/design` folder showing:
- Mobile layouts (375px width)
- Tablet layouts (768px width)
- Desktop layouts (1440px width)
- Dark and light mode variants for all screens
- Home page and job details page examples

## Known Fixes Applied

1. **Theme Provider SSR Issue** - Fixed by providing default theme during server-side rendering
2. **Image Path Resolution** - Normalized logo paths from `./assets/` to `/assets/`
3. **Toggle Icons Display** - Corrected SVG paths for sun and moon icons
4. **Hydration Warnings** - Implemented mounted state check in Header component
5. **Search Functionality** - Added filtering by title, company, expertise, location, and contract type
6. **Mobile Search UX** - Implemented modal-based filters for mobile devices
7. **Z-Index Layering** - Search bar and job details header properly stack above rounded header
8. **Responsive Spacing** - Tablet spacing adjusted to 39px for better content balance
9. **Header Corners** - Rounded bottom-left corner only on tablet and desktop
10. **Breakpoint Optimization** - Custom breakpoints to include all iPad models in tablet range

## License

This project is a Frontend Mentor challenge solution. Feel free to use it for learning purposes.

---

**Built with ❤️ using GitHub Copilot** - Refactored from Angular to modern Next.js stack
