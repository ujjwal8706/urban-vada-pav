function MenuSection({
  title,
  subtitle,
  description,
  items,
  image,
  reverse = false,
  onItemClick,
}) {
  return (
    <section
      className={`grid lg:grid-cols-2 gap-8 lg:gap-20 items-center py-12 sm:py-20 lg:py-28 border-b border-zinc-800 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Content Column */}
      <div>
        <p className="text-yellow-400 uppercase tracking-[4px] font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">
          {subtitle}
        </p>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-6">
          {title}
        </h2>

        <p className="text-gray-400 text-sm sm:text-lg leading-relaxed sm:leading-8 mb-6 sm:mb-10">
          {description}
        </p>

        <div className="space-y-1">
          {items.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => onItemClick && onItemClick(item, image)}
              className="w-full flex justify-between items-center border-b border-zinc-800 py-2.5 sm:py-4 px-2.5 sm:px-3 -mx-2.5 sm:-mx-3 rounded-xl transition duration-200 text-left group hover:bg-zinc-900/60 hover:border-yellow-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 cursor-pointer"
              aria-label={`View ${item.name} details, price ₹${item.price}`}
            >
              <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                <span className="text-base sm:text-lg text-white group-hover:text-yellow-400 transition-colors font-medium">
                  {item.name}
                </span>
                {item.bestseller && (
                  <span className="bg-yellow-400/20 text-yellow-400 text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full border border-yellow-400/30">
                    Bestseller
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                <span className="text-base sm:text-xl font-bold text-yellow-400">
                  ₹{item.price}
                </span>
                <span
                  className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Image Column */}
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] sm:h-[380px] lg:h-[420px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl border border-yellow-500/20 hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  );
}

export default MenuSection;