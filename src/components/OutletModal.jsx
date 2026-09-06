import { useEffect } from "react";
import { Link } from "react-router-dom";

function OutletModal({ location, onClose }) {
  // Support Escape key & lock body scroll
  useEffect(() => {
    if (!location) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [location, onClose]);

  if (!location) return null;

  const isOpenStatus = location.status === "Open";
  const hasOutletsList =
    Array.isArray(location.outletsList) && location.outletsList.length > 0;

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="outlet-modal-title"
      className="fixed inset-0 bg-black/85 backdrop-blur-md flex justify-center items-center z-50 p-4 sm:p-6 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-zinc-900 border border-zinc-700/80 rounded-2xl sm:rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
      >
        {/* Top Header */}
        <div className="p-6 sm:p-8 pb-4 sm:pb-5 border-b border-zinc-800/80 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold border ${
                  isOpenStatus
                    ? "bg-green-500/10 text-green-400 border-green-500/30"
                    : "bg-yellow-400/10 text-yellow-400 border-yellow-400/30"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isOpenStatus ? "bg-green-400" : "bg-yellow-400"
                  }`}
                />
                {location.status}
              </span>

              {location.state && (
                <span className="text-xs text-gray-400 font-medium">
                  {location.state}
                </span>
              )}
            </div>

            <h2
              id="outlet-modal-title"
              className="text-2xl sm:text-3xl font-extrabold text-white"
            >
              {location.city}
            </h2>

            <p className="text-yellow-400 font-medium text-xs sm:text-sm mt-1">
              {location.outlets}
            </p>
          </div>

          {/* Close Button Top Right */}
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-yellow-400 text-gray-300 hover:text-black flex items-center justify-center transition duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer flex-shrink-0"
            aria-label="Close outlet details"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {location.description && (
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {location.description}
            </p>
          )}

          {/* If real outlets list is provided */}
          {hasOutletsList ? (
            <div className="space-y-4">
              <h3 className="text-xs sm:text-sm uppercase tracking-wider text-gray-400 font-semibold">
                Available Outlets ({location.outletsList.length})
              </h3>
              <div className="space-y-3">
                {location.outletsList.map((outlet) => (
                  <div
                    key={outlet.id || outlet.name}
                    className="bg-zinc-950/70 border border-zinc-800 rounded-xl p-4 sm:p-5"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-bold text-white text-base sm:text-lg">
                          {outlet.name}
                        </h4>
                        {outlet.address && (
                          <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                            {outlet.address}
                          </p>
                        )}
                        {outlet.timing && (
                          <p className="text-gray-500 text-xs mt-2 flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span>{outlet.timing}</span>
                          </p>
                        )}
                      </div>

                      {/* Direction action ONLY when valid directionsUrl exists */}
                      {outlet.directionsUrl && (
                        <a
                          href={outlet.directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-yellow-400 hover:text-yellow-300 hover:underline mt-1 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                        >
                          Get Directions ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Honest, un-fabricated status card when exact branch address list is not yet cataloged */
            <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 text-yellow-400 mb-2 font-semibold text-sm">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>Branch Directory Status</span>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {isOpenStatus
                  ? `Specific store addresses, contact desks, and GPS directions for ${location.city} outlets are currently being updated in our digital directory. All active locations feature 100% pure vegetarian menus with strict hygiene standards.`
                  : `Urban Vada Pav is actively expanding into ${location.city} and evaluating high-footfall retail locations. If you are an entrepreneur or property owner looking to partner with us, get in touch.`}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                {isOpenStatus ? (
                  <>
                    <Link
                      to="/contact"
                      onClick={onClose}
                      className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      Enquire Nearest Store →
                    </Link>
                    <Link
                      to="/menu"
                      onClick={onClose}
                      className="inline-flex items-center justify-center border border-zinc-700 hover:border-yellow-400 text-gray-300 hover:text-yellow-400 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition duration-200 focus:outline-none"
                    >
                      Explore Menu
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/franchise/apply"
                      onClick={onClose}
                      className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      Apply For Franchise in {location.city} →
                    </Link>
                    <Link
                      to="/contact"
                      onClick={onClose}
                      className="inline-flex items-center justify-center border border-zinc-700 hover:border-yellow-400 text-gray-300 hover:text-yellow-400 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition duration-200 focus:outline-none"
                    >
                      Contact Team
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 sm:p-5 border-t border-zinc-800/80 bg-zinc-950/40 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-gray-200 font-semibold text-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default OutletModal;
