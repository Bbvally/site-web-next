export const locales = ["en", "fr", "yo", "ha"] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  yo: "Yorùbá",
  ha: "Hausa",
};

export const languageNativeName: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  yo: "Yorùbá",
  ha: "Hausa",
};

export function generateAlternates(path: string) {
  const alternates: Record<string, string> = {};
  locales.forEach((locale) => {
    alternates[locale] = `https://buyreviewsinnigeria.com/${locale}${path}`;
  });
  return alternates;
}

export function generateHrefLangTags(locale: Locale, path: string) {
  return locales.map((l) => ({
    rel: "alternate",
    hrefLang: l === "en" ? "en-NG" : `${l}-NG`,
    href: `https://buyreviewsinnigeria.com/${l}${path}`,
  }));
}

export function getLocalizedDescription(
  locale: Locale,
  baseText: string
): string {
  const descriptions: Record<Locale, Record<string, string>> = {
    en: {
      home: "Get authentic Google Reviews from 500+ certified Local Guides in Nigeria. ⭐ 4.9/5 rating · 15 cities · 1,000+ happy businesses.",
      services: "Explore our comprehensive reputation management services.",
      industries: "Find solutions tailored to your industry.",
      locations: "Discover our services in your city.",
    },
    fr: {
      home: "Obtenez des avis Google authentiques de 500+ Guides Locaux certifiés en Afrique. ⭐ Note 4.9/5 · 15 villes · 1 000+ entreprises satisfaites.",
      services: "Explorez nos services complets de gestion de réputation.",
      industries: "Trouvez des solutions adaptées à votre secteur.",
      locations: "Découvrez nos services dans votre ville.",
    },
    yo: {
      home: "Gba awọn reviews Google ti a ri lati ọdọ 500+ Guides Alagbado ti a baje. ⭐ 4.9/5 Baba · 15 Awọn Ìlú · 1,000+ Ọdọ Iṣẹ́",
      services: "Wo awọn iṣẹ́ ṣiṣi ti iṣẹ́ ìfẹ́.",
      industries: "Wa awọn ilana ti a ṣe fun ẹ̀kó rẹ.",
      locations: "Ṣawari awọn iṣẹ́ wa ni ìlú rẹ.",
    },
    ha: {
      home: "Sami ainihin bukatu Google daga 500+ Jagajemma na Google da aka saka a Najeriya. ⭐ 4.9/5 · 15 Gida · 1,000+ Kasuwar da aka bugi.",
      services: "Binciki ayyukan malaman kirja na gida.",
      industries: "Nemi mafaka da suka dace da masana'antarku.",
      locations: "Gani ayyukanmu a gida.",
    },
  };

  return descriptions[locale][baseText] || baseText;
}

export function createLocalizedMetadata(locale: Locale, baseMetadata: any) {
  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      locale: locale === "en" ? "en_NG" : `${locale}_NG`,
    },
    alternates: {
      ...baseMetadata.alternates,
      languages: Object.fromEntries(
        locales.map((l) => [l === "en" ? "en-NG" : `${l}-NG`, ""])
      ),
    },
  };
}

export const hrefLangCanonical = (locale: Locale, path: string) => {
  return `https://buyreviewsinnigeria.com/${locale}${path}`;
};

export function getLocalizedTitle(
  locale: Locale,
  baseTitle: string
): string {
  const titles: Record<Locale, Record<string, string>> = {
    en: {
      home: "Buy Google Reviews in Nigeria ⭐ 500+ Certified Local Guides",
      services: "Reputation Management Services in Nigeria",
      industries: "Industry-Specific Solutions Nigeria",
      locations: "Google Reviews Services by City",
    },
    fr: {
      home: "Achetez des Avis Google en Afrique | 500+ Guides Locaux",
      services: "Services de Gestion de Réputation",
      industries: "Solutions Spécifiques à l'Industrie",
      locations: "Services par Ville",
    },
    yo: {
      home: "Ra Bukatu Google ni Nigeria | 500+ Guides",
      services: "Iṣẹ́ Malaman Kirja",
      industries: "Awọn Ilana fun Ẹ̀kó",
      locations: "Iṣẹ́ ni Awọn Ìlú",
    },
    ha: {
      home: "Saya Bukatu Google a Najeriya | 500+ Jagajemma",
      services: "Ayyukan Malaman Kirja",
      industries: "Mafaka don Masana'antu",
      locations: "Ayyuka ta Gida",
    },
  };

  return titles[locale][baseTitle] || baseTitle;
}
