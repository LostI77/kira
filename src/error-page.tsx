import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="w-screen h-screen grid place-content-center gap-2"
      id="error-page"
    >
      <p>Oops!</p>
      <h1 className="font-medium text-2xl">
        Sorry, an unexpected error has occurred.
      </h1>
      <p>Not Found</p>
    </div>
  );
}
