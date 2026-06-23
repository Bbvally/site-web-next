# Quick Start Guide: Multi-Language & SEO Implementation

## ⚡ 5-Minute Setup

### Step 1: Install Package (2 min)
```bash
npm install next-intl
```

### Step 2: Structure Already In Place ✅
The following files are already created:
- ✅ `src/i18n.ts` - Configuration
- ✅ `src/middleware.ts` - Language routing
- ✅ `src/messages/en.json` - English translations
- ✅ `src/messages/fr.json` - French translations
- ✅ `src/messages/yo.json` - Yoruba translations
- ✅ `src/messages/ha.json` - Hausa translations
- ✅ `src/components/layout/language-switcher.tsx` - Language switcher
- ✅ `src/lib/seo-utils.ts` - SEO utilities
- ✅ `next.config.ts` - Already updated

### Step 3: Restructure App (5-10 min)

**Move all pages into a [locale] folder:**

```bash
# Before (current structure)
src/app/
├── page.tsx
├── about/page.tsx
├── services/page.tsx
├── blog/page.tsx
├── layout.tsx
└── globals.css

# After (new structure)
src/app/
├── [locale]/
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── blog/page.tsx
│   ├── industries/page.tsx
│   ├── locations/page.tsx
│   ├── platforms/page.tsx
│   ├── pricing/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   ├── layout.tsx
│   └── globals.css (move to src/app/globals.css)
└── api/
    └── contact/
        └── route.ts (keep outside [locale])
```

**Implementation:**
```bash
# 1. Create [locale] directory
mkdir -p src/app/\[locale\]

# 2. Move all content pages (keeping them in subdirectories)
mv src/app/page.tsx src/app/\[locale\]/
mv src/app/about src/app/\[locale\]/
mv src/app/services src/app/\[locale\]/
# ... repeat for all pages

# 3. Move layout and styles
mv src/app/layout.tsx src/app/\[locale\]/
mv src/app/globals.css src/app/\[locale\]/

# 4. Keep API routes outside [locale]
# src/app/api/contact/route.ts stays at src/app/api/...
```

## 🔧 Step-by-Step Implementation

### Phase 1: Update Root Layout (10 min)

**File: `src/app/[locale]/layout.tsx`**

Replace the current layout with:

```typescript
import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ExitIntentPopup } from "@/components/layout/exit-intent-popup";
import { locales } from "@/i18n";
import { generateHrefLangTags } from "@/lib/seo-utils";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: "Buy Google Reviews in Nigeria ⭐ Certified Local Guides | BuyReviewsInNigeria",
    template: "%s | BuyReviewsInNigeria",
  },
  description:
    "🎁 5 FREE reviews with first order! Get authentic Google Reviews from 500+ certified Local Guides in Nigeria.",
  metadataBase: new URL("https://buyreviewsinnigeria.com"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://buyreviewsinnigeria.com",
    siteName: "BuyReviewsInNigeria",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BuyReviewsInNigeria",
              url: "https://buyreviewsinnigeria.com",
              inLanguage: locale,
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} ${robotoMono.variable} font-body antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
```

### Phase 2: Add Language Switcher (5 min)

**File: `src/components/layout/header.tsx`** (or wherever your header is)

```typescript
import { LanguageSwitcher } from "./language-switcher";

export function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1>BuyReviewsInNigeria</h1>
        <div className="flex gap-4">
          {/* Navigation links */}
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
```

### Phase 3: Update Individual Pages (5 min per page)

**Example: `src/app/[locale]/page.tsx` (Homepage)**

```typescript
import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { generateHrefLangTags } from "@/lib/seo-utils";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: "Buy Google Reviews in Nigeria ⭐ 500+ Certified Local Guides",
    description: "Get authentic Google Reviews from 500+ certified Local Guides in Nigeria.",
    alternates: {
      canonical: `https://buyreviewsinnigeria.com/${locale}/`,
      languages: {
        "en-NG": "https://buyreviewsinnigeria.com/en/",
        "fr-NG": "https://buyreviewsinnigeria.com/fr/",
        "yo-NG": "https://buyreviewsinnigeria.com/yo/",
        "ha-NG": "https://buyreviewsinnigeria.com/ha/",
      },
    },
  };
}

export default function HomePage() {
  const locale = useLocale();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BuyReviewsInNigeria",
    url: "https://buyreviewsinnigeria.com",
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* Your page content */}
      </main>
    </>
  );
}
```

## ✅ Testing Checklist

After implementation, test:

### URLs
- [ ] `http://localhost:3000/en/` → English version
- [ ] `http://localhost:3000/fr/` → French version
- [ ] `http://localhost:3000/yo/` → Yoruba version
- [ ] `http://localhost:3000/ha/` → Hausa version

### Language Switcher
- [ ] Switcher appears in header
- [ ] Clicking language buttons switches language
- [ ] URL updates correctly
- [ ] Page content updates (if translations exist)

### SEO
- [ ] Check hreflang tags in page source (Ctrl+U)
- [ ] Look for `<link rel="alternate" hreflang="...">`
- [ ] All 4 languages should be present

### Content
- [ ] English content displays correctly
- [ ] Page layout doesn't break on other languages
- [ ] Form submissions still work

## 📝 Translation Management

### Adding New Translations

1. **Update `src/messages/en.json`:**
```json
{
  "homepage": {
    "title": "Buy Reviews",
    "description": "Get authentic reviews"
  }
}
```

2. **Update `src/messages/fr.json`:**
```json
{
  "homepage": {
    "title": "Achetez des Avis",
    "description": "Obtenez des avis authentiques"
  }
}
```

3. **Use in Component:**
```typescript
import { useTranslations } from "next-intl";

export function HomePage() {
  const t = useTranslations("homepage");
  
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
```

## 🚀 Next Actions (Priority Order)

### Immediate (Today)
- [ ] Install next-intl: `npm install next-intl`
- [ ] Restructure app to [locale] format
- [ ] Test all 4 language URLs
- [ ] Run `npm run build` to verify

### This Week
- [ ] Add translations for all common UI elements
- [ ] Update Header/Footer components
- [ ] Add hreflang tags to all pages
- [ ] Test with Google Mobile-Friendly Tool

### Next Week
- [ ] Translate all page content (at least English & French)
- [ ] Submit sitemap to Google Search Console
- [ ] Set language preferences in GSC
- [ ] Monitor analytics by language

### Following Week
- [ ] Complete Yoruba & Hausa translations
- [ ] Create language-specific landing pages
- [ ] Start SEO content creation (blog posts)
- [ ] Build backlinks

## 🎯 Expected Timeline

- **Day 1:** Setup & structure ✅
- **Day 2-3:** Pages migrated to [locale]
- **Day 4-5:** Translations added
- **Day 6-7:** Testing & deployment
- **Week 2:** SEO optimization & content
- **Week 3-4:** Link building & promotion

## 💪 Benefits After Implementation

✅ Reach 4 languages worth of audience
✅ Improve SEO with hreflang tags
✅ Better international rankings
✅ Higher conversion potential
✅ Professional multi-language presence
✅ 3x potential reach in West Africa

## ❓ Troubleshooting

### Problem: Locale Not Changing
```bash
# Clear cache
rm -rf .next
npm run dev
```

### Problem: Translations Not Loading
- Check file names: `en.json`, `fr.json`, `yo.json`, `ha.json`
- Check path: `src/messages/`
- Check JSON syntax: No trailing commas

### Problem: hreflang Tags Missing
- Ensure `alternates.languages` in metadata
- Check for syntax errors
- Clear Next.js cache

### Problem: API Routes Broken
- Keep API routes outside `[locale]`
- Path should be: `src/app/api/contact/route.ts`
- NOT: `src/app/[locale]/api/contact/route.ts`

## 📞 Getting Help

1. **Documentation:** Read `MULTI_LANGUAGE_IMPLEMENTATION.md`
2. **SEO Plan:** Read `SEO_IMPROVEMENT_PLAN.md`
3. **Code Examples:** Check TypeScript files in `src/`
4. **Official Docs:** https://next-intl-docs.vercel.app/

---

**Ready to go!** Start with Step 1 above. 🚀
