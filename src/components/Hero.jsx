import { Link } from "react-router-dom";
import heroImage from "../assets/images/alootikkivadapav.jpg";

function Hero() {
  return (
    <section className="min-h-[90vh] sm:min-h-screen bg-black text-white flex items-center pt-20 sm:pt-24 pb-12 sm:pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-yellow-400 uppercase tracking-[3px] sm:tracking-[5px] font-semibold text-xs sm:text-sm">
            India's Favourite Mumbai Style Vada Pav
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mt-3 sm:mt-4 leading-tight">
            Bite Into
            <span className="text-yellow-400"> Happiness</span>
          </h1>

          <p className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl">
            Experience authentic Mumbai flavours with our delicious Vada Pav,
            Burgers, Wraps, Pizza, Pasta and refreshing beverages — all made
            with premium ingredients and served with love.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">

            {/* EXPLORE MENU */}
            <Link
              to="/menu"
              className="bg-yellow-400 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:scale-105 transition duration-300 inline-block"
            >
              Explore Menu →
            </Link>

            {/* GET FRANCHISE */}
            <Link
              to="/franchise/apply"
              className="border border-yellow-400 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base hover:bg-yellow-400 hover:text-black transition duration-300 inline-block"
            >
              Get Franchise →
            </Link>

          </div>

          {/* STATS */}
          <div className="flex gap-6 sm:gap-10 mt-8 sm:mt-12 flex-wrap">

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400">
                50+
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Outlets
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400">
                70+
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Menu Items
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400">
                100%
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Pure Veg
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center">

          {/* Background Glow */}
          <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>

          <img
            src={heroImage}
            alt="Aloo Tikki Vada Pav"
            className="relative w-[280px] sm:w-[380px] md:w-[500px] max-w-full drop-shadow-[0_25px_35px_rgba(255,193,7,0.35)] hover:scale-105 transition duration-500"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;