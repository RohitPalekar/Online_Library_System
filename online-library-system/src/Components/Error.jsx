
import { useRouteError, Link } from "react-router-dom";

// For just error handling if any error occurs this page shows up like in invalid url

export default function Error() {
  const error = useRouteError();
  console.error(error);

  const errorMessage = error?.data || "Something went wrong.";
  const statusCode = error?.status || 404;

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100 p-4">
      <div className="text-center bg-white p-4 border-2 border-red-300 rounded-lg w-full max-w-sm">
        <h1 className="text-4xl font-bold text-red-600">{statusCode}</h1>
        <p className="text-lg font-semibold text-gray-800 mt-2">
          Oops! Error occurred.
        </p>
        <p className="text-sm text-gray-600 mt-1">
          {errorMessage}
        </p>
        <Link
          to="/"
          className=" bg-[#cc0000] inline-block mt-4 text-white px-4 py-1 rounded hover:opacity-90"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
