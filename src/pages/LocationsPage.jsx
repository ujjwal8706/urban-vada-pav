import { useState } from "react";
import { Link } from "react-router-dom";
import OutletModal from "../components/OutletModal";
import { locationsData, locationStats } from "../data/locationsData";

function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div>
      {/* HERO */}
      <section className="pt-24 sm:pt-36 pb-8 sm:pb-20 text-center px-4 sm:px-6">
        <p className="uppercase tracking-[5px] text-yellow-400 font-semibold text-xs sm:text-sm">
          Find Us
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mt-3 sm:mt-4">
          Our <span className="text-yellow-400">Locations</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed sm:leading-8">
          Find your nearest Urban Vada Pav outlet and enjoy delicious
          Mumbai-style vegetarian food.
        </p>
      </section>

      {/* STATS */}
      <section className="pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {locationStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center"
            >
              <h2 className="text-4xl sm:text-5xl font-black text-yellow-400">
                {stat.value}
              </h2>
              <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-12 sm:py-24 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm font-semibold">
              Find Your Nearest Outlet
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
              Where We Are
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mt-8 sm:mt-16">
            {locationsData.map((location) => (
              <div
                key={location.city}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:border-yellow-400 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-4 sm:mb-6 text-yellow-400">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {location.city}
                  </h3>

                  <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
                    {location.outlets}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 sm:mt-8 pt-4 border-t border-zinc-800/60">
                  <span
                    className={`font-semibold text-sm sm:text-base ${
                      location.status === "Open"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >
                    ● {location.status}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedLocation(location)}
                    className="border border-yellow-400 text-yellow-400 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-yellow-400 hover:text-black transition text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400/50 cursor-pointer"
                    aria-label={`View ${location.city} outlet details`}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-24 bg-yellow-400 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black">
            Don't Have An Outlet Near You?
          </h2>

          <p className="mt-3 sm:mt-5 text-base sm:text-lg">
            Bring Urban Vada Pav to your city and become a franchise partner.
          </p>

          <Link
            to="/franchise/apply"
            className="mt-6 sm:mt-8 bg-black text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition text-sm sm:text-base inline-block"
          >
            Apply For Franchise →
          </Link>
        </div>
      </section>

      {/* Outlet Details Modal */}
      <OutletModal
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
      />
    </div>
  );
}

export default LocationsPage;