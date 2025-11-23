# Kemet Landing Page

A modern, multilingual landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **React 19** - UI library with Server Components
- **TypeScript** - Type safety (strict mode enabled)
- **Tailwind CSS v4** - Utility-first CSS framework

### Features
- **next-intl** - Internationalization (English & Arabic)
- **shadcn/ui** - Accessible, customizable UI components
- **Framer Motion** - Animation library
- **Zustand** - State management
- **TanStack Query** - Server state management
- **next-sitemap** - SEO sitemap generation

## Features

- ✅ Multi-language support (English/Arabic) with RTL support
- ✅ SEO optimized with metadata and sitemap
- ✅ Fully responsive design
- ✅ Modern UI with shadcn/ui components
- ✅ TypeScript strict mode
- ✅ Optimized performance with Turbopack

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
kemet-ai/
├── app/
│   ├── [locale]/          # Internationalized routes
│   │   ├── layout.tsx     # Locale-specific layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Layout components
│   │   ├── header.tsx     # Header with navigation
│   │   └── footer.tsx     # Footer
│   ├── ui/                # shadcn/ui components (add as needed)
│   └── language-switcher.tsx
├── i18n/
│   ├── routing.ts         # i18n routing configuration
│   └── request.ts         # Request configuration
├── messages/
│   ├── en.json           # English translations
│   └── ar.json           # Arabic translations
└── lib/
    └── utils.ts          # Utility functions
```

## Configuration

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
SITE_URL=http://localhost:3000
```

### Adding Translations

Edit `messages/en.json` and `messages/ar.json` to add or modify translations.

### Adding shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
# etc.
```

## Localization

The app supports English (en) and Arabic (ar) with:
- Automatic locale detection
- RTL layout for Arabic
- Language switcher component
- SEO-friendly URLs

Access routes:
- English (default): `/`
- Arabic: `/ar`

## SEO

- Metadata configured in layout files
- Sitemap auto-generated on build
- robots.txt included
- Multi-language hreflang tags

## Next Steps

1. Extract your Figma design files (images/assets)
2. Share the design files so I can analyze the layout
3. Implement sections based on the design
4. Add content and translations
5. Optimize images and assets

## License

Private project for Kemet.
