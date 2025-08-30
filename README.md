# WeFrameTech

A modern web application built with **Next.js 15.5**, **TypeScript**, **TailwindCSS**, and **ShadCN UI** components.  
The project demonstrates a clean component-based UI structure and utility-first styling.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Tech Stack](#tech-stack)  
- [Folder Structure](#folder-structure)  
- [Installation](#installation)  
- [Available Scripts](#available-scripts)  
- [Adding ShadCN Components](#adding-shadcn-components)  
- [TailwindCSS & Global Styles](#tailwindcss--global-styles)  
- [Troubleshooting](#troubleshooting)  
- [License](#license)  

---

## Project Overview

WeFrameTech is a **Next.js web application** using:

- **App Router (Next.js 15)** for routing and layouts  
- **TypeScript** for type safety  
- **TailwindCSS** for utility-first styling  
- **ShadCN UI** for reusable UI components like buttons, cards, avatars, tables, switches, badges, inputs, and progress bars  

This setup allows for rapid development with a consistent design system.

---

## Tech Stack

- **Next.js** 15.5.2  
- **TypeScript** 5.9  
- **React** 19.1  
- **TailwindCSS** 4.1  
- **ShadCN UI** (latest)  
- **Radix UI** (via ShadCN components)  
- **Lucide-react** (icons)  

---

## Folder Structure

```plaintext
weframetech/
│
├─ app/                     # Next.js App Router pages
│   ├─ layout.tsx           # Global layout
│   ├─ page.tsx             # Home page
│   ├─ globals.css          # Global styles
│
├─ components/              # Reusable UI components
│   └─ ui/                  # ShadCN UI components
│       ├─ avatar.tsx
│       ├─ badge.tsx
│       ├─ button.tsx
│       ├─ card.tsx
│       ├─ input.tsx
│       ├─ progress.tsx
│       ├─ switch.tsx
│       └─ table.tsx
│
├─ node_modules/
├─ package.json
├─ pnpm-lock.yaml
├─ tsconfig.json
└─ next.config.js
Installation
Clone the repository

bash
Copy code
git clone <your-repo-url>
cd weframetech
Install dependencies

bash
Copy code
pnpm install
# or
npm install
Run the development server

bash
Copy code
pnpm dev
# or
npm run dev
Visit http://localhost:3000 to view the app.

Available Scripts
dev: Runs the Next.js development server

build: Builds the app for production

start: Runs the production build

lint: Lints the code with ESLint

Adding ShadCN Components
ShadCN UI is a component library built on top of Radix UI and TailwindCSS.

Initialize ShadCN

bash
Copy code
npx shadcn@latest init
Add a component

For example, to add a Switch:

bash
Copy code
npx shadcn@latest add switch
Repeat for other components:

bash
Copy code
npx shadcn@latest add avatar
npx shadcn@latest add button
npx shadcn@latest add badge
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add progress
npx shadcn@latest add table
This will generate .tsx files inside components/ui/ for each component.

TailwindCSS & Global Styles
globals.css contains Tailwind directives and custom CSS variables for ShadCN UI:

css
Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-background text-foreground antialiased;
}
The project uses TailwindCSS v4.1, so all utility classes like bg-slate-50, text-slate-900 work out-of-the-box.

Custom variables for ShadCN UI ensure consistent design tokens (colors, radius, etc.).

Troubleshooting
Module not found errors: Make sure ShadCN components are installed using the CLI:

bash
Copy code
npx shadcn@latest add <component>
TailwindCSS class errors: Check tailwind.config.js and ensure content includes all app/ and components/ folders.

Dependency conflicts: Remove node_modules and reinstall:

bash
Copy code
pnpm exec rimraf node_modules .next
pnpm install
License
MIT License © 2025
Made with ❤️ by Madhu Ranjan

pgsql
Copy code

---

If you want, I can also create a **version with badges, icons, and a more visually engaging header** to make it look professional on GitHub.  

Do you want me to do that?

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

