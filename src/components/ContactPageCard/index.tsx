import React from "react";
import { withRouter } from "react-router-dom";

import "./contactPageCard.css";

type PageCardTypes = {
  login?: any;
  avatar_url?: string;
  html_url?: string;
  history: any;
};

const PageCard = ({ login, avatar_url, html_url, ...rest }: PageCardTypes) => {
  const goToCard = () => {
    rest.history.push("/contacts/" + login.toLowerCase());
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

export default withRouter(PageCard);
