import { useEffect } from "react";

function ProductModal({ item, onClose }) {
  // Support Escape key & prevent background scroll
  useEffect(() => {
    if (!item) return;

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
  }, [item, onClose]);

  if (!item) return null;

  const displayImage = item.image || item.categoryImage;

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 bg-black/85 backdrop-blur-md flex justify-center items-center z-50 p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-zinc-900 border border-zinc-700/80 rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col md:grid md:grid-cols-2 shadow-2xl animate-fadeIn"
      >
        {/* Close Button Top Right */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-yellow-400 text-white hover:text-black flex items-center justify-center transition duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          aria-label="Close details modal"
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

        {/* Product Image */}
        {displayImage ? (
          <div className="w-full h-56 sm:h-64 md:h-full bg-zinc-950 overflow-hidden flex-shrink-0">
            <img
              src={displayImage}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}

        {/* Product Details Content */}
        <div
          className={`p-6 sm:p-8 flex flex-col justify-between overflow-y-auto ${
            !displayImage ? "md:col-span-2" : ""
          }`}
        >
          <div>
            {item.bestseller && (
              <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                ⭐ Bestseller
              </span>
            )}

            {item.category && (
              <p className="text-yellow-400 uppercase text-xs tracking-widest font-semibold">
                {item.category}
              </p>
            )}

            <h2
              id="product-modal-title"
              className="text-2xl sm:text-3xl font-extrabold text-white mt-1"
            >
              {item.name}
            </h2>

            {item.description ? (
              <p className="text-gray-300 mt-4 leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            ) : null}
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-800">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Price</p>
              <span className="text-3xl font-black text-yellow-400">
                ₹{item.price}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2.5 rounded-full font-bold text-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;