import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Reviews for Hotels Nigeria | Boost Bookings & Occupancy",
  description:
    "Get authentic Google reviews for your hotel in Nigeria. Increase bookings, improve ratings, and attract international guests. 500+ verified travelers.",
  alternates: {
    canonical: "https://buyreviewsinnigeria.com/industries/hotels",
  },
};

export default function HotelsPage() {
  return (
    <main className="bg-white">
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Google Reviews for Hotels in Nigeria
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Increase bookings with authentic reviews. Higher ratings = more guests = higher revenue per room.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Boost Your Hotel Now
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Hotel Reviews Matter</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✗ 87% of travelers check reviews before booking</li>
              <li>✗ Hotels with 4.5+ ratings get 40% more bookings</li>
              <li>✗ One bad review can cost you 100+ room bookings</li>
              <li>✗ OTA platforms favor highly-rated properties</li>
              <li>✗ Low ratings = lower rates = lower revenue</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✓ 50-100 verified guest reviews</li>
              <li>✓ 4.8+ average rating</li>
              <li>✓ Increase direct bookings by 35%+</li>
              <li>✓ Improve OTA rankings</li>
              <li>✓ Real travelers, real experiences</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Benefits for Hotels</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">More Direct Bookings</h3>
              <p className="text-gray-700">Higher Google reviews = more direct website bookings = higher profit margins.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">Higher Room Rates</h3>
              <p className="text-gray-700">4.8+ rated hotels charge 20-30% more per room. Reviews justify premium pricing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-3">OTA Visibility</h3>
              <p className="text-gray-700">Higher Google ratings improve visibility on Booking.com, Airbnb, and other platforms.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-semibold mb-3">Attract International Guests</h3>
              <p className="text-gray-700">International travelers trust Google ratings. More foreign guests = higher spending.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Beat Competition</h3>
              <p className="text-gray-700">Outrank competing hotels in search. Capture guests before they check others.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">Build Reputation</h3>
              <p className="text-gray-700">Strong reviews build brand trust. Become the go-to hotel in your area.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Industry-Specific Strategy</h2>
        <p className="text-lg text-gray-700 mb-6">
          Hotels are different from restaurants. Our reviewers include business travelers, tourists, couples, and families -
          just like your real guests. We understand what hotel reviews need.
        </p>
        <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-semibold mb-4">What We Target in Hotel Reviews:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Room quality & cleanliness (most important)</li>
            <li>✓ Staff friendliness & service</li>
            <li>✓ Location & accessibility</li>
            <li>✓ Breakfast quality (if included)</li>
            <li>✓ Amenities (WiFi, AC, parking, etc.)</li>
            <li>✓ Value for money</li>
            <li>✓ Would recommend to friends</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h2>
          <p className="text-gray-700 mb-8">
            View our transparent pricing and flexible packages for hotels.
          </p>
          <a href="/pricing/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            View Pricing Page
          </a>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Increase Your Occupancy Rate?</h2>
          <p className="text-xl mb-8">
            More reviews = more bookings = higher revenue. Start with 5 free reviews today.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Get 5 Free Guest Reviews
          </button>
        </div>
      </section>
    </main>
  );
}
