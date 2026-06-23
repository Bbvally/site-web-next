# Multi-Language Implementation Guide

## Overview
This guide explains how the multi-language (i18n) system works and how to integrate it into your existing pages and components.

## Supported Languages
- **en** - English (primary)
- **fr** - Français (French)
- **yo** - Yorùbá (Yoruba)
- **ha** - Hausa

## Architecture

### File Structure
```
src/
├── i18n.ts                          # i18n configuration
├── middleware.ts                    # Language routing middleware
├── messages/
│   ├── en.json                      # English translations
│   ├── fr.json                      # French translations
│   ├── yo.json                      # Yoruba translations
│   └── ha.json                      # Hausa translations
├── lib/
│   └── seo-utils.ts                 # SEO utilities for multi-language
├── components/
│   └── layout/
│       └── language-switcher.tsx    # Language switcher component
└── app/
    └── [locale]/                    # Dynamic locale segment
        ├── page.tsx
        ├── layout.tsx
        └── ... all other pages
```

## Getting Started

### 1. Install Dependencies
```bash
npm install next-intl
```

### 2. Update next.config.ts
Already done! The configuration supports i18n middleware.

### 3. Restructure App Directory
Move all pages to `src/app/[locale]/` structure:

```bash
# Before
src/app/page.tsx
src/app/about/page.tsx
src/app/services/page.tsx

# After
src/app/[locale]/page.tsx
src/app/[locale]/about/page.tsx
src/app/[locale]/services/page.tsx
```

### 4. Update Root Layout
```typescript
// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { locales } from "@/i18n";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  // ... your metadata
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <head>
        {/* hreflang tags will be generated here */}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

## Using Translations in Components

### In Server Components
```typescript
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("nav");
  
  return (
    <header>
      <nav>
        <a href="#">{t("home")}</a>
        <a href="#">{t("about")}</a>
        <a href="#">{t("services")}</a>
      </nav>
    </header>
  );
}
```

### In Client Components
```typescript
"use client";

import { useTranslations } from "next-intl";

export function LanguageSwitcher() {
  const t = useTranslations();
  
  return (
    <div>
      <button>{t("nav.home")}</button>
    </div>
  );
}
```

## Adding New Translations

### Update Translation Files
Add to `src/messages/en.json`, `fr.json`, `yo.json`, `ha.json`:

```json
{
  "services": {
    "google-reviews": "Google Reviews Service",
    "description": "Professional Google review collection..."
  }
}
```

### Use in Components
```typescript
const t = useTranslations("services");
<h1>{t("google-reviews")}</h1>
<p>{t("description")}</p>
```

## SEO Implementation

### 1. Generate hreflang Tags
```typescript
import { generateHrefLangTags } from "@/lib/seo-utils";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://buyreviewsinnigeria.com/en/",
    languages: {
      "en-NG": "https://buyreviewsinnigeria.com/en/",
      "fr-NG": "https://buyreviewsinnigeria.com/fr/",
      "yo-NG": "https://buyreviewsinnigeria.com/yo/",
      "ha-NG": "https://buyreviewsinnigeria.com/ha/",
    },
  },
};
```

### 2. Localized Metadata
```typescript
import { createLocalizedMetadata } from "@/lib/seo-utils";
import { useLocale } from "next-intl";

export const metadata: Metadata = createLocalizedMetadata("en", {
  title: "Buy Google Reviews in Nigeria",
  description: "Get authentic Google reviews...",
});
```

### 3. Language-Specific Schema
```typescript
const locale = useLocale();
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BuyReviewsInNigeria",
  inLanguage: locale,
  // ... rest of schema
};
```

## URL Structure

### Before (Single Language)
```
/
/about
/services
/services/google-reviews
```

### After (Multi-Language)
```
/en/
/en/about
/en/services
/en/services/google-reviews

/fr/
/fr/about
/fr/services
/fr/services/google-reviews

/yo/
/yo/about
/yo/services
/yo/services/google-reviews

/ha/
/ha/about
/ha/services
/ha/services/google-reviews
```

## Locale Routing Patterns

### Get Current Locale
```typescript
import { useLocale } from "next-intl";

const locale = useLocale();
// Returns: "en", "fr", "yo", or "ha"
```

### Navigate Between Locales
```typescript
import { useRouter, usePathname } from "next/navigation";

const router = useRouter();
const pathname = usePathname();

const switchLocale = (newLocale: string) => {
  const segments = pathname.split("/");
  segments[1] = newLocale;
  router.push(segments.join("/"));
};
```

## API Routes with i18n

### Handling Locale in API Routes
```typescript
// src/app/api/[locale]/contact/route.ts
import { NextRequest } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { locale: string } }
) {
  const locale = params.locale;
  // Handle request with locale awareness
}
```

## Content Management for Locales

### Blog Posts (Example)
Create separate blog directories:
```
src/data/blog/
├── en/
│   ├── post-1.md
│   └── post-2.md
├── fr/
│   ├── post-1.md
│   └── post-2.md
└── yo/
    └── post-1.md
```

### Load Locale-Specific Content
```typescript
import { useLocale } from "next-intl";

export async function getBlogPosts() {
  const locale = useLocale();
  const posts = await import(`@/data/blog/${locale}/posts.json`);
  return posts.default;
}
```

## SEO Sitemap Generation

Update `next-sitemap` configuration:

```typescript
// next.config.ts
export async function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
    sitemap: "https://buyreviewsinnigeria.com/sitemap.xml",
  };
}
```

Create locale-specific sitemaps in `public/`:
- `sitemap-en.xml`
- `sitemap-fr.xml`
- `sitemap-yo.xml`
- `sitemap-ha.xml`
- `sitemap-index.xml` (references all locales)

## Optimization Tips

### 1. Code Splitting by Locale
```typescript
const DynamicContent = dynamic(
  () => import(`@/content/${locale}/page`),
  { loading: () => <div>Loading...</div> }
);
```

### 2. Image Localization
```typescript
<Image
  src={`/images/${locale}/banner.jpg`}
  alt={t("banner-alt")}
  width={1200}
  height={400}
/>
```

### 3. CSS-in-JS with Locale
```typescript
const styles = {
  en: css`...`,
  fr: css`...`,
  yo: css`...`,
  ha: css`...`,
};
```

## Testing Multi-Language Setup

### Test URLs
```
http://localhost:3000/en/          # English
http://localhost:3000/fr/          # French
http://localhost:3000/yo/          # Yoruba
http://localhost:3000/ha/          # Hausa
```

### Language Switcher
The language switcher component is at `<LanguageSwitcher />` in your header.

### Verify hreflang Tags
Open DevTools → Elements → Search for `hreflang`
Should show alternate links for all 4 languages.

## Deployment Considerations

### Build Time
Multi-language setup generates separate builds for each locale. This may increase build time.

### Cache Invalidation
Use headers configuration to handle cache for each locale:

```typescript
async headers() {
  return [
    {
      source: "/:locale(en|fr|yo|ha)(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      ],
    },
  ];
}
```

### SEO Performance
Monitor each locale separately in Google Search Console:
1. Add property for each language variant
2. Submit sitemaps for each locale
3. Monitor rankings per locale

## Common Issues & Solutions

### Issue: Locale Not Changing
**Solution:** Clear browser cache and cookies. The middleware may be caching the default locale.

### Issue: Translations Not Loading
**Solution:** Ensure JSON files are in `src/messages/` with exact filename matching locale code.

### Issue: hreflang Tags Missing
**Solution:** Add alternate languages to metadata:
```typescript
alternates: {
  languages: {
    "en-NG": "...",
    "fr-NG": "...",
  }
}
```

## Next Steps

1. ✅ Install dependencies: `npm install next-intl`
2. ✅ Configure next.config.ts (done)
3. ⏳ Restructure app directory with `[locale]` segment
4. ⏳ Update all page components to use `useTranslations()`
5. ⏳ Update metadata for each page with hreflang
6. ⏳ Test all language variants
7. ⏳ Submit sitemaps to Google Search Console
8. ⏳ Monitor analytics by language

## Support Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Google hreflang Documentation](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Next.js i18n Guide](https://nextjs.org/docs/app/building-your-application/internationalization)

