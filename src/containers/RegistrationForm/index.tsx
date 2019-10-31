import React, { useEffect } from "react";
import { connect } from "react-redux";

import { facebookLogin } from "../../actions";
import Loader from "../../components/Loader";
import { RootState } from "../../reducers";

import "./registrationForm.css";

type RegformTypes = {
  logged: boolean;
  isFetching: boolean;
  facebookLogin: () => void;
  history: any;
};

const Regform = ({
  logged,
  isFetching,
  facebookLogin,
  ...rest
}: RegformTypes) => {
  useEffect(() => {
    if (logged && rest.history.location.pathname === "/login") {
      rest.history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  const toRegistrate = (event: any) => {
    event.preventDefault();
    facebookLogin();
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      {!isFetching ? (
        <form className="form p-4">
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail2"
              placeholder="email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormPassword2">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword2"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-group-btn ">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="form-group form-group-btn">
            <button className="btn btn-primary facebook" onClick={toRegistrate}>
              Login with <i className="fab fa-facebook-square"></i>
            </button>
          </div>
        </form>
      ) : (
        <Loader />
      )}
    </div>
  );
};

const mapStateToProps = ({ loginReducer }: RootState) => {
  return {
    logged: loginReducer.logged,
    isFetching: loginReducer.isFetching
  };
};

const mapDispatchToProps = {
  facebookLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Regform);
