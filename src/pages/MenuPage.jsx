import MenuBook from "../components/MenuBook";

function MenuPage() {
  return (
    <div>

      {/* Hero */}

      <section className="pt-24 sm:pt-36 pb-8 sm:pb-20 text-center px-4 sm:px-6">

        <p className="uppercase tracking-[5px] text-yellow-400 font-semibold text-xs sm:text-sm">
          Urban Vada Pav
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mt-3 sm:mt-4">
          Our Menu
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed">
          From authentic Mumbai Style Vada Pav to Burgers, Wraps,
          Sandwiches, Pizza, Pasta, Brownies, Mojitos and much more.
        </p>

      </section>

      <MenuBook />

    </div>
  );
}

export default MenuPage;