import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import Loader from "../Loader";
import Form from "../Form";
import { requestContactSuccess, getContact } from "../../actions";
import { RootState } from "../../reducers";

import "./contactCard.css";

type CardTypes = {
  contactsList: object[];
  requestContactSuccess: any;
  match: any;
  getContact: any;
  isFetching: boolean;
  contact: any;
  click: any;
};

const portal: HTMLElement | null = document.getElementById("portal");

const Card = ({
  contactsList,
  isFetching,
  contact,
  click,
  ...rest
}: CardTypes) => {
  useEffect(() => {
    if (contactsList.length) {
      rest.requestContactSuccess(
        contactsList.find((obj: any) => obj.login === rest.match.params.name)
      );
    } else {
      rest.getContact(rest.match.params.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [clicked, onClickHandler] = useState(false);

  return (
    <div className="card-box-2">
      {!isFetching && contact ? (
        <div className="page-card-2">
          <i
            className="fas fa-edit edit-styles"
            onClick={() => onClickHandler(!clicked)}
          />
          <h1 className="user-name center">{rest.match.params.name}</h1>
          <img
            src={contact.avatar_url}
            alt="USER_PHOTO"
            className="user-photo center"
          />
          <p>
            <span className="text">Link: </span>
            {contact.html_url}
          </p>
        </div>
      ) : (
        <Loader />
      )}
      {clicked && portal
        ? ReactDOM.createPortal(
            <Form click={() => onClickHandler(!clicked)} {...click} />,
            portal
          )
        : null}
    </div>
  );
};

const mapStateToProps = ({ contactsReducer, contactGit }: RootState) => {
  return {
    contactsList: contactsReducer.contactsList,
    contact: contactGit.contact,
    isFetching: contactGit.isFetching
  };
};

const mapDispatchToProps = {
  requestContactSuccess,
  getContact
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
