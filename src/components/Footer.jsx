import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10">

          {/* BRAND */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-yellow-400"
            >
              Urban Vada Pav
            </Link>

            <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7">
              India's Favourite Mumbai Style Vada Pav Brand serving authentic
              flavours across 20+ cities with 50+ outlets.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-gray-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/menu"
                  className="hover:text-yellow-400 transition"
                >
                  Menu
                </Link>
              </li>

              <li>
                <Link
                  to="/locations"
                  className="hover:text-yellow-400 transition"
                >
                  Locations
                </Link>
              </li>

              <li>
                <Link
                  to="/franchise"
                  className="hover:text-yellow-400 transition"
                >
                  Franchise Details
                </Link>
              </li>

              <li>
                <Link
                  to="/franchise/apply"
                  className="hover:text-yellow-400 transition"
                >
                  Franchise Apply
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-400 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Contact
            </h3>

            <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-gray-400">
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                </svg>
                <a href="tel:+919569058028" className="hover:text-yellow-400 transition">
                  +91 95690 58028
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:support@urbanvadapav.com" className="hover:text-yellow-400 transition">
                  support@urbanvadapav.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-xs sm:text-sm leading-relaxed">
                  112, Khalasi Line, Swaroop Nagar, Kanpur, UP 208002
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4 pt-2">
              <a
                href="https://www.instagram.com/urbanvadapav_official?stkn=bGFzZzVvenlmeXY5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-yellow-400 text-gray-400 hover:text-yellow-400 flex items-center justify-center transition"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/UrbanVadaPavFranchise/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-yellow-400 text-gray-400 hover:text-yellow-400 flex items-center justify-center transition"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919569058028?text=Hello%20Urban%20Vada%20Pav%20Team"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:border-green-400 text-gray-400 hover:text-green-400 flex items-center justify-center transition"
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* BRAND STATS */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              Brand
            </h3>

            <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-gray-400">
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.25A2.25 2.25 0 0 1 0 18.75V10.5m18 10.5h3.75A2.25 2.25 0 0 0 24 18.75V10.5M3 10.5l9-7.5 9 7.5M3 10.5V21h18V10.5" />
                </svg>
                <span>50+ Outlets</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>20+ Cities</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-sm">🍔</span>
                <span>127+ Menu Items</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-sm">🌱</span>
                <span>100% Pure Veg</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-zinc-800 mt-8 sm:mt-10 pt-5 sm:pt-6 text-center text-gray-500 text-xs sm:text-sm">
          © 2026 Urban Vada Pav. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;