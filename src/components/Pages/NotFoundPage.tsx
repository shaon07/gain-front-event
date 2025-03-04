import { Link } from "react-router-dom";

export default function NotFoundPageContainer() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-xl text-gray-700">
          Oops! The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
