import { useRouteError } from "react-router-dom";
import React from "react";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <p>Oops.. something went wrong</p>
      <p>
        {err.status} {err.statusText}
      </p>
      <p>{err.data}</p>
    </>
  );
};

export default Error;
