"use client";

import { useState } from "react";
import { PricingPreview } from "./pricing-preview";
import { WebDevPricingPreview } from "./WebDevPricingPreview";
import { MobileAppPricingPreview } from "./MobileAppPricingPreview";

type PricingTab = "reviews" | "webdev" | "mobileapp";

export function PricingSectionWrapper() {
  const [activeTab, setActiveTab] = useState<PricingTab>("reviews");

  return (
    <div>
      {/* Toggle Buttons */}
      <div className="flex justify-center pb-6">
        <div className="inline-flex rounded-lg border border-border bg-white p-1 shadow-sm">
          <button
            onClick={() => setActiveTab("reviews")}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all sm:px-6 ${
              activeTab === "reviews"
                ? "bg-google-blue text-white shadow-sm"
                : "text-text-secondary hover:text-google-blue"
            }`}
          >
            Google Reviews
          </button>
          <button
            onClick={() => setActiveTab("webdev")}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all sm:px-6 ${
              activeTab === "webdev"
                ? "bg-google-blue text-white shadow-sm"
                : "text-text-secondary hover:text-google-blue"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveTab("mobileapp")}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all sm:px-6 ${
              activeTab === "mobileapp"
                ? "bg-google-blue text-white shadow-sm"
                : "text-text-secondary hover:text-google-blue"
            }`}
          >
            Mobile Apps
          </button>
        </div>
      </div>

      {/* Conditional Rendering */}
      {activeTab === "reviews" && <PricingPreview />}
      {activeTab === "webdev" && <WebDevPricingPreview />}
      {activeTab === "mobileapp" && <MobileAppPricingPreview />}
    </div>
  );
}