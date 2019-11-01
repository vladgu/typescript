// http://qaru.site/questions/183141/how-to-implement-authenticated-routes-in-react-router-4
// https://tylermcginnis.com/react-router-protected-routes-authentication/

import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

export type PrivateRouterProps = {
  component: any;
} & RouteProps;

const PrivateRouter = ({
  component: Component,
  ...rest
}: PrivateRouterProps) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!localStorage.getItem("userKey")) return <Redirect to="/login" />;
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRouter;
