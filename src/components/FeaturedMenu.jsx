import { Link } from "react-router-dom";
import { featuredItems } from "../data/menuData";

function FeaturedMenu() {
  return (
    <section className="bg-black py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white">
          Our <span className="text-yellow-400">Best Sellers</span>
        </h2>

        <p className="text-center text-gray-400 mt-2.5 sm:mt-4 mb-8 sm:mb-14 text-sm sm:text-base max-w-2xl mx-auto">
          Discover our most loved Mumbai-style Vada Pav, Burgers, Wraps,
          Pizza, Pasta and refreshing beverages crafted with premium ingredients.
        </p>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">

          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition duration-500 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-yellow-400 text-lg sm:text-xl mt-1.5 sm:mt-2 font-semibold">
                  ₹{item.price}
                </p>

                {/* View Menu */}
                <Link
                  to="/menu"
                  className="mt-4 sm:mt-5 w-full bg-yellow-400 text-black py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-yellow-300 transition block text-center"
                >
                  View Menu →
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedMenu;