# SLY Team Landing Page

A modern landing page built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- Dark-themed design with black background
- Responsive navigation bar
- About Us section
- Crew section with character cards
- Social Links section
- Custom fonts: Pirata One (headings) and Roboto (body text)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js app directory with pages and layout
- `components/` - React components
  - `navigation.tsx` - Navigation bar component
  - `about-section.tsx` - About Us section
  - `crew-section.tsx` - Crew section with character cards
  - `social-links-section.tsx` - Social links section
  - `ui/` - shadcn/ui components
- `lib/` - Utility functions
- `public/` - Static assets (add crew member images here)

## Adding Crew Member Images

To add crew member images, place them in `public/crew/` directory with the following names:
- `lorenzo.jpg`
- `dante.jpg`
- `tyrone.jpg`
- `rian.jpg`
- `dave.jpg`
- `loud.jpg`

The images will automatically be used in the Crew section.

