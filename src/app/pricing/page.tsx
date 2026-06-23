"use client";

import { useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { buildBreadcrumbs } from "@/lib/internal-links";
import { getColorForIndex } from "@/lib/colors";
import { pricingPlans, additionalServices } from "@/data/pricing";
import { webdevPlans, webdevAddOns } from "@/data/webdev-pricing";
import { mobileappPlans, mobileappAddOns } from "@/data/mobileapp-pricing";
import { CheckCircle } from "@/components/icons";

export default function PricingPage() {
  const [activeService, setActiveService] = useState<"reviews" | "web" | "app">("reviews");

  const breadcrumbs = buildBreadcrumbs([
    { label: "Pricing", href: "/pricing/" },
  ]);

  const getServiceConfig = () => {
    switch (activeService) {
      case "web":
        return {
          title: "Web Development Pricing",
          subtitle: "Professional websites and web applications built for your business.",
          plans: webdevPlans,
          addOns: webdevAddOns,
        };
      case "app":
        return {
          title: "Mobile App Pricing",
          subtitle: "Custom iOS and Android apps to reach your customers on mobile.",
          plans: mobileappPlans,
          addOns: mobileappAddOns,
        };
      default:
        return {
          title: "Google Reviews Pricing",
          subtitle:
            "Monthly subscription plans for consistent reputation growth. Authentic Google Reviews from certified Local Guides, delivered every month.",
          plans: pricingPlans,
          addOns: additionalServices,
        };
    }
  };

  const config = getServiceConfig();

  return (
    <main className="bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="pointer-events-none absolute inset-0 dot-pattern-light" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Simple, <span className="gradient-text-blue">Transparent</span> Pricing
          </h1>
          <p className="mt-6 text-lg text-text-secondary">{config.subtitle}</p>
        </div>
      </section>

      {/* Service Toggle */}
      <section className="py-8">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="inline-flex rounded-lg border border-border bg-white p-1">
            <button
              onClick={() => setActiveService("reviews")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeService === "reviews"
                  ? "bg-google-blue text-white"
                  : "text-text-primary hover:text-google-blue"
              }`}
            >
              Google Reviews
            </button>
            <button
              onClick={() => setActiveService("web")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeService === "web"
                  ? "bg-google-blue text-white"
                  : "text-text-primary hover:text-google-blue"
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveService("app")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeService === "app"
                  ? "bg-google-blue text-white"
                  : "text-text-primary hover:text-google-blue"
              }`}
            >
              Mobile App
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {config.plans.map((plan, index) => {
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
                      <span className="text-sm text-text-secondary">{activeService === "reviews" ? "/mo" : ""}</span>
                    </div>
                    <p className="mt-1 text-sm text-text-secondary">
                      {plan.unit}
                    </p>
                    <p className="mt-4 text-sm text-text-secondary">
                      {plan.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-google-green" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={plan.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
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
              {activeService === "reviews" ? "Additional Services" : "Add-ons"}
            </h2>
            <p className="mt-4 text-center text-text-secondary">
              {activeService === "reviews"
                ? "Complement your review strategy with these add-on services."
                : "Enhance your package with these optional add-ons."}
            </p>
            <div className="mt-12 space-y-4">
              {config.addOns.map((service, index) => {
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
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              {activeService === "reviews"
                ? "Choose your plan and start growing your online reputation today."
                : activeService === "web"
                ? "Build your professional web presence today."
                : "Launch your app and reach customers on mobile."}
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
    );
}
