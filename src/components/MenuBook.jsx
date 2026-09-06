import { useState } from "react";
import MenuSection from "./MenuSection";
import ProductModal from "./ProductModal";
import { menuCategories, menuItems } from "../data/menuData";

const categoryFilterList = [
  "All",
  "Vada Pav",
  "Burgers",
  "Wraps",
  "Pizza",
  "Pasta",
  "Beverages",
  "Desserts",
];

function MenuBook() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter sections and items based on category selection and search query
  const filteredCategories = menuCategories
    .filter((cat) => selectedCategory === "All" || cat.name === selectedCategory)
    .map((cat) => {
      const items = menuItems.filter((item) => {
        const matchesCategory = item.category === cat.name;
        const matchesSearch =
          searchQuery.trim() === "" ||
          item.name.toLowerCase().includes(searchQuery.trim().toLowerCase());
        return matchesCategory && matchesSearch;
      });

      return {
        ...cat,
        items,
      };
    })
    .filter((cat) => cat.items.length > 0);

  const handleItemClick = (item, categoryImage) => {
    setSelectedProduct({
      ...item,
      categoryImage,
    });
  };

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
      {/* Category Navigation & Search Area */}
      <div className="mb-8 sm:mb-14 max-w-4xl mx-auto space-y-4 sm:space-y-6">
        {/* Search Input */}
        <div className="max-w-xl mx-auto">
          <label htmlFor="menu-search-input" className="sr-only">
            Search menu by product name
          </label>
          <div className="relative">
            <span
              className="absolute inset-y-0 left-0 flex items-center pl-3.5 sm:pl-4 pointer-events-none text-gray-400"
              aria-hidden="true"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>

            <input
              id="menu-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name (e.g. Vada Pav, Burger, Mojito)..."
              className="w-full bg-zinc-900 border border-zinc-700/80 rounded-full pl-10 sm:pl-12 pr-9 sm:pr-10 py-2.5 sm:py-3.5 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition duration-200 text-sm sm:text-base shadow-lg"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 sm:pr-4 text-gray-400 hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
                aria-label="Clear search query"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
            )}
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div
          role="tablist"
          aria-label="Filter menu by category"
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {categoryFilterList.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isSelected}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 cursor-pointer ${
                  isSelected
                    ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20 font-bold"
                    : "bg-zinc-900 text-gray-300 hover:text-yellow-400 hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Active Filter Status & Reset Action */}
        {(selectedCategory !== "All" || searchQuery.trim() !== "") && (
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 pt-3 border-t border-zinc-800/80 px-2">
            <span>
              Showing{" "}
              {selectedCategory !== "All" ? (
                <span>
                  in <strong className="text-yellow-400">{selectedCategory}</strong>
                </span>
              ) : (
                <span>all categories</span>
              )}
              {searchQuery.trim() && (
                <span>
                  {" "}
                  matching "<strong className="text-white">{searchQuery.trim()}</strong>"
                </span>
              )}
            </span>

            <button
              type="button"
              onClick={handleResetFilters}
              className="text-yellow-400 hover:text-yellow-300 hover:underline font-semibold focus:outline-none ml-4 flex-shrink-0"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Editorial Menu Sections */}
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category) => (
          <MenuSection
            key={category.id}
            title={category.title}
            subtitle={category.subtitle}
            description={category.description}
            image={category.image}
            reverse={category.reverse}
            items={category.items}
            onItemClick={handleItemClick}
          />
        ))
      ) : (
        /* Tasteful "No items found" State */
        <div className="text-center py-12 sm:py-20 px-4 sm:px-6 bg-zinc-900/40 rounded-2xl sm:rounded-3xl border border-zinc-800 max-w-lg mx-auto my-8 sm:my-12">
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-yellow-400/10 text-yellow-400 flex items-center justify-center"
            aria-hidden="true"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white">No Menu Items Found</h3>

          <p className="text-gray-400 mt-2 text-xs sm:text-sm leading-relaxed">
            We couldn't find any items matching{" "}
            <span className="text-yellow-400 font-semibold">"{searchQuery.trim()}"</span>
            {selectedCategory !== "All" && (
              <span>
                {" "}
                in <span className="text-yellow-400 font-semibold">{selectedCategory}</span>
              </span>
            )}
            . Try searching with a different term or view our full menu.
          </p>

          <button
            type="button"
            onClick={handleResetFilters}
            className="mt-6 bg-yellow-400 hover:bg-yellow-300 text-black px-7 py-2.5 rounded-full font-bold text-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
          >
            View Full Menu
          </button>
        </div>
      )}

      {/* Product Details Modal */}
      <ProductModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}

export default MenuBook;