import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Reviews for Restaurants Nigeria | Increase Dining Traffic",
  description:
    "Get authentic Google reviews for your restaurant in Nigeria. Build credibility, attract hungry customers, and boost online visibility. 500+ verified reviewers.",
  alternates: {
    canonical: "https://buyreviewsinnigeria.com/industries/restaurants",
  },
};

export default function RestaurantsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Restaurant Google Reviews Service",
    description: "Professional Google review collection for restaurants in Nigeria",
    provider: {
      "@type": "Organization",
      name: "BuyReviewsInNigeria",
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-red-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Google Reviews for Your Restaurant
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Attract more customers with authentic reviews. Build your restaurant's reputation and boost online visibility.
            </p>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700">
              Get Started Free
            </button>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Reviews Matter for Restaurants
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Problem</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✗ 92% of diners check reviews before choosing a restaurant</li>
                <li>✗ Low review count signals untrusted restaurant</li>
                <li>✗ Competitors with more reviews steal your customers</li>
                <li>✗ New restaurants struggle with zero reviews</li>
                <li>✗ Missing out on customers searching online</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Solution</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ 50+ authentic reviews in 30 days</li>
                <li>✓ 4.8+ rating builds trust instantly</li>
                <li>✓ Outrank competitors on Google Maps</li>
                <li>✓ Attract hungry customers searching online</li>
                <li>✓ Real people, real accounts, real reviews</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Benefits for Restaurant Owners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-semibold mb-3">Higher Google Maps Ranking</h3>
                <p className="text-gray-700">
                  More reviews = higher visibility in Google Maps searches. Get found by hungry customers in your area.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-semibold mb-3">Increased Customer Traffic</h3>
                <p className="text-gray-700">
                  Reviews drive decisions. Customers with 4.8+ ratings visit 30% more often than low-rated competitors.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-3">More Revenue</h3>
                <p className="text-gray-700">
                  Higher reviews = more bookings = more customers = higher revenue. Simple math for restaurant growth.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold mb-3">Build Trust & Credibility</h3>
                <p className="text-gray-700">
                  New restaurants need credibility. 50+ reviews instantly establish your restaurant as popular & trusted.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Beat Local Competitors</h3>
                <p className="text-gray-700">
                  Outrank competitor restaurants in search results. Capture customers before they check your competition.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-3">Social Proof</h3>
                <p className="text-gray-700">
                  Use positive reviews on social media, website, and ads. Real customer testimonials boost credibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tell Us About Your Restaurant</h3>
                <p className="text-gray-700">
                  Share your restaurant info: cuisine type, location, price range, specialties, seating capacity.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">We Connect Real Diners</h3>
                <p className="text-gray-700">
                  Our network of 500+ verified Local Guides visit your restaurant (or dining similar places).
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Authentic Reviews Posted</h3>
                <p className="text-gray-700">
                  Real reviews posted on Google from verified accounts. Each reviewer has authentic history & activity.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Watch Your Ranking Rise</h3>
                <p className="text-gray-700">
                  Your restaurant climbs Google Maps rankings. More visibility = more customers = more revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h2>
            <p className="text-gray-700 mb-8">
              View our transparent pricing and flexible packages for restaurants.
            </p>
            <a href="/pricing/" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700">
              View Pricing Page
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Will Google detect fake reviews?</h3>
              <p className="text-gray-700">
                No. Our reviewers are verified Level 4 Local Guides with real accounts, real activity, real visit histories.
                Google can't tell the difference from natural reviews.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">How long before reviews appear?</h3>
              <p className="text-gray-700">
                Usually 3-7 days per review. Google takes time to verify new reviews. 30 days for complete package.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What if reviews get deleted?</h3>
              <p className="text-gray-700">
                We guarantee 95%+ retention. If reviews get deleted, we replace them at no extra cost. That's our promise.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Can we request specific comments?</h3>
              <p className="text-gray-700">
                Yes! You can provide talking points: "mention the ambiance", "praise the desserts", "recommend the fish pepper soup".
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Do reviews come from real visits?</h3>
              <p className="text-gray-700">
                For restaurants, yes - our reviewers visit your location. For other services, they use your service genuinely.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-600 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Fill Your Restaurant?</h2>
            <p className="text-xl mb-8">
              Get 50+ Google reviews and watch your business grow. Start today with a free consultation.
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Get 5 Free Reviews
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
