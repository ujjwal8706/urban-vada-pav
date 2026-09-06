function WhyChooseUs() {
  const features = [
    {
      title: "50+ Outlets",
      description: "Serving delicious Mumbai-style street food across India.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.25A2.25 2.25 0 0 1 0 18.75V10.5m18 10.5h3.75A2.25 2.25 0 0 0 24 18.75V10.5M3 10.5l9-7.5 9 7.5M3 10.5V21h18V10.5" />
        </svg>
      ),
    },
    {
      title: "20+ Cities",
      description: "A rapidly growing food brand trusted by thousands.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
    },
    {
      title: "127+ Menu Items",
      description: "From Vada Pav to Pizza, Wraps, Burgers & Beverages.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      title: "100% Pure Veg",
      description: "Prepared with premium ingredients and authentic flavours.",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-zinc-950 py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white">
          Why Choose <span className="text-yellow-400">Urban Vada Pav?</span>
        </h2>

        <p className="text-center text-gray-400 mt-2.5 sm:mt-5 text-sm sm:text-base max-w-2xl mx-auto">
          More than just a Vada Pav brand. We deliver authentic flavours,
          consistent quality and memorable experiences across every outlet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-10 sm:mt-16">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center border border-zinc-800 hover:border-yellow-400 hover:-translate-y-2 transition duration-300"
            >

              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-4 sm:mb-6 text-yellow-400">
                {feature.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;