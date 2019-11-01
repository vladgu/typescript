import { hot } from "react-hot-loader/root";
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import MainPage from "../MainPage";
import RegistrationForm from "../RegistrationForm";
import ProfilePage from "../ProfilePage";
import ContactsPage from "../ContactsPage";
import ContactCard from "../../components/ContactCard";
import PrivateRouter from "../../components/PrivateRouter";
import { autnFromLs } from "../../actions";
import { routes } from "../../router";
import Header from "../../components/header/index";
import { RootState } from "../../reducers";

type AppTypes = {
  autnFromLs: (a: any) => void;
  logged: boolean;
  userInfo: any;
};

const App = ({ logged, userInfo, ...props }: AppTypes) => {
  useEffect(() => {
    const isUserInfoInLs = localStorage.getItem("userKey");
    if (isUserInfoInLs) {
      props.autnFromLs(JSON.parse(isUserInfoInLs));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {logged && userInfo ? <Header userInfo={userInfo} /> : null}
      <Switch>
        <PrivateRouter exact path={routes.index} component={MainPage} />
        <PrivateRouter path={routes.profile} component={ProfilePage} />
        <PrivateRouter path={routes.contactsDetail} component={ContactCard} />
        <PrivateRouter path={routes.contacts} component={ContactsPage} />
        <Route path={routes.login} component={RegistrationForm} />
        <Redirect to={routes.index} />
      </Switch>
    </>
  );
};

const mapStateToProps = ({ loginReducer, router }: RootState) => {
  return {
    logged: loginReducer.logged,
    userInfo: loginReducer.userInfo,
    routerRedux: router.location
  };
};

const mapDispatchToProps = {
  autnFromLs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hot(App));
