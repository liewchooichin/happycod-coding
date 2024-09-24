import { useRouteError } from "react-router-dom";

export function ErrorPage(){
  const error = useRouteError();
  console.error(error);

  return(
    <div id="error-page">
      <h1>An unexpected error has occured.</h1>
      <p>Status <i>{error.statusText}</i></p>
      <p>Message <i>{error.message}</i></p>
    </div>
  )
}