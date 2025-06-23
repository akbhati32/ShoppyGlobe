import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {

  // 404 Page for undefined routes
  const error = useRouteError();
  
  return (
    <>
    <div className="min-h-screen container flex flex-col justify-center items-center gap-8">
      <h1 className="text-7xl font-bold">OOPS!</h1>
      <p className="text-3xl text-gray-600 font-semibold">
        {/* Error display */}
        {error.status} : Page {error.statusText}
      </p>
      <p className="text-xl text-gray-600">
        {error.data}
      </p>
      <Link to="/">   {/* Link to back */}
        <button className="btn2">
          Back to Home
        </button>
      </Link>
    </div>
    </>
  )
}

export default NotFound;