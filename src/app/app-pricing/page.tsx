import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { buildBreadcrumbs } from "@/lib/internal-links";
import { getColorForIndex } from "@/lib/colors";
import { mobileappPlans, mobileappAddOns } from "@/data/mobileapp-pricing";
import { CheckCircle } from "@/components/icons";

export const metadata: Metadata = {
  title: "📱 Mobile App Pricing — iOS & Android Apps from ₦1,200,000 | BuyReviewsInNigeria",
  description:
    "Get a professional mobile app for iOS and Android. Basic apps from ₦1,200,000, E-commerce from ₦3,500,000. Includes 1 year hosting & support. ✅ Free consultation.",
  alternates: { canonical: "https://buyreviewsinnigeria.com/app-pricing/" },
};

export default function AppPricingPage() {
  const breadcrumbs = buildBreadcrumbs([
    { label: "Mobile App Pricing", href: "/app-pricing/" },
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mobile App Development Services",
    description:
      "Professional iOS and Android app development services in Nigeria",
    offers: mobileappPlans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price.replace(",", ""),
      priceCurrency: "NGN",
      description: plan.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden bg-white py-20">
          <div className="pointer-events-none absolute inset-0 dot-pattern-light" />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
              Mobile <span className="gradient-text-blue">App</span> Pricing
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              Launch your app on iOS and Android. All packages include 1 year of hosting, backend server costs, and support.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {mobileappPlans.map((plan, index) => {
                const color = getColorForIndex(index);

                return (
                  <div
                    key={plan.slug}
                    className={`relative flex flex-col rounded-xl border-2 bg-white p-8 hover:-translate-y-1 transition-all duration-300 ${
                      plan.isPopular
                        ? "border-google-blue shadow-lg"
                        : `border-border border-t-4 ${color.borderTop} shadow-sm`
                    }`}
                  >
                    {plan.isPopular && (
                      <>
                        <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-xl bg-gradient-to-r from-google-blue via-google-red to-google-yellow" />
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="animate-pulse-glow shadow-md rounded-full bg-google-blue px-4 py-1 text-xs font-semibold text-white">
                            Most Popular
                          </span>
                        </div>
                      </>
                    )}

                    <h2 className="font-heading text-lg font-semibold text-text-primary">
                      {plan.name}
                    </h2>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="font-heading text-3xl font-bold text-text-primary">
                        &#8358;{plan.price}
                      </span>
                      <span className="text-sm text-text-secondary">{plan.unit}</span>
                    </div>
                    <p className="mt-4 text-sm text-text-secondary">
                      {plan.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {plan.features.slice(0, 5).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-google-green" />
                          {feature}
                        </li>
                      ))}
                      {plan.features.length > 5 && (
                        <li className="text-sm text-google-blue">
                          +{plan.features.length - 5} more features
                        </li>
                      )}
                    </ul>

                    <a
                      href={plan.ctaLink}
                      className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                        plan.isPopular
                          ? "bg-gradient-to-r from-google-blue to-google-blue/80 text-white hover:shadow-lg hover:shadow-google-blue/25"
                          : "border border-border bg-white text-text-primary hover:border-google-blue hover:text-google-blue"
                      }`}
                    >
                      {plan.ctaText}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional services */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-center font-heading text-3xl font-bold text-text-primary">
              Additional Services & Renewals
            </h2>
            <p className="mt-4 text-center text-text-secondary">
              Enhance your app with these add-on services.
            </p>
            <div className="mt-12 space-y-4">
              {mobileappAddOns.map((service, index) => {
                const color = getColorForIndex(index);
                return (
                  <div
                    key={service.name}
                    className={`flex flex-col items-start justify-between gap-4 rounded-xl border border-border p-6 sm:flex-row sm:items-center border-l-4 ${color.borderLeft} hover:bg-gray-50 transition-colors duration-200`}
                  >
                    <div>
                      <h3 className="font-heading font-semibold text-text-primary">
                        {service.name}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        {service.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="font-heading text-xl font-bold text-text-primary">
                        &#8358;{service.price}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {service.unit}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-google-blue py-16">
          <div className="pointer-events-none absolute inset-0 dot-pattern-white" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -right-12 top-0 h-36 w-36 rounded-full bg-white/5" />
          <div className="relative mx-auto max-w-2xl px-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-white">
              Ready to Launch Your App?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Let's bring your app idea to life. Schedule a free consultation today.
            </p>
            <Link
              href="/get-started/"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-google-blue hover:bg-white/90"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}