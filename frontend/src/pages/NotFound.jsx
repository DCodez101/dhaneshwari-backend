import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="rounded-2xl bg-white p-10 shadow-md">
        <p className="text-sm font-semibold tracking-wide text-gray-500">
          404 — Page not found
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-gray-900">
          This page doesn’t exist.
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          The link may be incorrect or the page may have moved. Use the buttons
          below to continue.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-md bg-orange-500 px-6 py-3 text-center text-sm font-medium text-white shadow hover:bg-orange-600"
          >
            Go to Home
          </Link>
          <Link
            to="/rooms"
            className="rounded-md border border-gray-300 bg-white px-6 py-3 text-center text-sm font-medium text-gray-800 shadow-sm hover:border-gray-400"
          >
            View Rooms
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

