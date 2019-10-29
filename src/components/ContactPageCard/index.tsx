import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { RootState } from "../../reducers";

import "./contactPageCard.css";

export type PageCardProps = {
  login: string;
  avatar_url: string;
  html_url: string;
  history: any;
};

const PageCard = ({ login, avatar_url, html_url, history }: PageCardProps) => {
  const goToCard = () => {
    history.push("/contacts/" + login.toLowerCase());
  };

  return (
    <div className="page-card" onClick={goToCard}>
      <h3>{login}</h3>
      <img src={avatar_url} alt="USER_PHOTO" className="user-photo center" />
      <p>
        <span className="text">Link: </span>
        {html_url}
      </p>
    </div>
  );
};

const mapStateToProps = ({ contactsReducer }: RootState) => {
  return {
    contactsList: contactsReducer.contactsList
  };
};

export default connect(mapStateToProps)(withRouter(PageCard));
