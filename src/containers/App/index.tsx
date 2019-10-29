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

const App = (props: any) => {
  useEffect(() => {
    const isUserInfo = localStorage.getItem("userKey");
    if (isUserInfo) {
      props.autnFromLs(JSON.parse(isUserInfo));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {props.logged && props.userInfo ? (
        <Header userInfo={props.userInfo} />
      ) : null}
      <Switch>
        <PrivateRouter
          exact
          path={routes.index}
          component={MainPage}
          {...props}
        />
        <PrivateRouter
          path={routes.profile}
          component={ProfilePage}
          {...props}
        />
        <PrivateRouter
          path={routes.contactsDetail}
          component={ContactCard}
          {...props}
        />
        <PrivateRouter
          path={routes.contacts}
          component={ContactsPage}
          {...props}
        />
        <Route path={routes.login} component={RegistrationForm} />
        <Redirect to={routes.index} />
      </Switch>
    </>
  );
};

const mapStateToProps = ({ loginReducer }: RootState) => {
  return {
    logged: loginReducer.logged,
    userInfo: loginReducer.userInfo
  };
};

const mapDispatchToProps = {
  autnFromLs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
