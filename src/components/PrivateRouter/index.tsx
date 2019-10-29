// http://qaru.site/questions/183141/how-to-implement-authenticated-routes-in-react-router-4
// https://tylermcginnis.com/react-router-protected-routes-authentication/

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { RootState } from "../../reducers";

export type PrivateRouterProps = {
  component: any;
  logged: boolean;
};

const PrivateRouter = ({
  component: Component,
  logged,
  ...rest
}: PrivateRouterProps) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!logged) return <Redirect to="/login" />;
        return <Component {...props} />;
      }}
    />
  );
};

const mapStateToProps = ({ loginReducer }: RootState) => {
  return {
    logged: loginReducer.logged
  };
};

export default connect(mapStateToProps)(PrivateRouter);
