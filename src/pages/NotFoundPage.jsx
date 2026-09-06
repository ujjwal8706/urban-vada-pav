import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md mx-auto">
        <p className="text-yellow-400 text-7xl md:text-8xl font-black tracking-wider">
          404
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold mt-4">
          Page Not Found
        </h1>

        <p className="text-gray-400 mt-4 text-base leading-7">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-yellow-400 text-black px-8 py-3.5 rounded-full font-bold hover:bg-yellow-300 transition duration-300"
        >
          Back To Home →
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
