function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      rating: "★★★★★",
      review:
        "One of the best Vada Pavs I've ever had. Fresh, crispy and full of authentic Mumbai flavour.",
    },
    {
      name: "Priya Verma",
      rating: "★★★★★",
      review:
        "Amazing ambience and delicious food. The burgers and wraps are definitely worth trying.",
    },
    {
      name: "Aman Singh",
      rating: "★★★★★",
      review:
        "Great quality, quick service and a huge variety of vegetarian options. Highly recommended!",
    },
  ];

  return (
    <section className="bg-black py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white">
          What Our <span className="text-yellow-400">Customers Say</span>
        </h2>

        <p className="text-gray-400 text-center mt-2.5 sm:mt-5 text-sm sm:text-base max-w-2xl mx-auto">
          Loved by customers across 20+ cities for authentic taste,
          quality and unforgettable experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-16">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:border-yellow-400 transition duration-300"
            >

              <p className="text-yellow-400 text-lg sm:text-xl">
                {review.rating}
              </p>

              <p className="text-gray-300 mt-3 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-7 italic">
                "{review.review}"
              </p>

              <h3 className="text-white font-bold mt-5 sm:mt-8 text-base sm:text-lg">
                — {review.name}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;