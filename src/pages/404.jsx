import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white justify-center text-center flex flex-col min-h-screen text-2xl font-bold font-serif">
        <h1>Oops! Not Found</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p>Error Code: {error.statusText || error.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
