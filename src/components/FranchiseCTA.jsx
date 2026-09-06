function FranchiseCTA() {
  return (
    <section className="py-12 sm:py-24 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500">

      <div className="max-w-6xl mx-auto px-5 sm:px-6 text-center">

        <p className="uppercase tracking-[4px] sm:tracking-[6px] text-black font-semibold text-xs sm:text-sm">
          Business Opportunity
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black mt-3 sm:mt-4 leading-tight">
          Become an Urban Vada Pav Franchise Partner
        </h2>

        <p className="text-black/80 text-base sm:text-xl mt-4 sm:mt-8 max-w-3xl mx-auto leading-7 sm:leading-8">
          Join one of India's fastest-growing vegetarian QSR brands.
          Build your own successful business with complete training,
          marketing support, operations assistance and a trusted brand.
        </p>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-14">

          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-black">50+</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Successful Outlets</p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-black">100%</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Training & Support</p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-black">High ROI</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Profitable Business Model</p>
          </div>

        </div>

        <button className="mt-8 sm:mt-12 bg-black text-white px-7 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:scale-105 transition cursor-pointer">
          Apply for Franchise →
        </button>

      </div>

    </section>
  );
}

export default FranchiseCTA;