import { useRouteError } from "react-router-dom";

const Error1 = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error1;
