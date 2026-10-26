import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>The page could not be loaded.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}