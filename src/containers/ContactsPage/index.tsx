import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { throttle } from "lodash";

import { getContacts } from "../../actions";
import ContactPageCard from "../../components/ContactPageCard";
import Loader from "../../components/Loader";
import { RootState } from "../../reducers";

import "./contactsPage.css";

type ContactsPageProps = {
  getContacts: any;
  contactsList: any;
  isFetching: any;
};

const throttled = throttle((value: string, foo: any) => foo(value), 1000);

const ContactsPage = ({
  getContacts,
  contactsList,
  isFetching
}: ContactsPageProps) => {
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [searchArr, setSearchArr] = useState([]);

  const showUsers = (value: string) => {
    setSearchArr(
      contactsList.filter(
        (elem: any) => elem.login.startsWith(value.trim()) && value.length
      )
    );
  };

  return (
    <div className="contacts-page">
      <div className="input-group mb-3" style={{ margin: "20px" }}>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={e => throttled(e.target.value, showUsers)}
        />
      </div>

      {searchArr.length ? (
        searchArr.map((obj: any, index: number) => (
          <ContactPageCard key={String(index + 10)} {...obj} />
        ))
      ) : !isFetching ? (
        contactsList.map((obj: any, index: number) => (
          <ContactPageCard key={String(index)} {...obj} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

const mapStateToProps = ({ contactsReducer }: RootState) => {
  return {
    contactsList: contactsReducer.contactsList,
    isFetching: contactsReducer.isFetching
  };
};

const mapDispatchToProps = {
  getContacts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsPage);

// [
//     {
//         name: 'main',
//         id: 1,
//         parent: null
//     },
//     {
//         name: 'contacts',
//         id: 2,
//         parent: 1
//     },
//     {
//         name: 'news',
//         id: 3,
//         parent: 1
//     },
//     {
//         name: 'info',
//         id: 4,
//         parent: 2
//     }
// ]

// {
//     id: 1
//     name: 'main'
//     parent: null
//     list: [
//         {
//             name: 'contacts',
//             id: 2,
//             parent: 1,
//             list: [
//                 {
//                     name: 'info',
//                     id: 4,
//                     parent: 2
//                 }
//             ]
//         },
//         {
//             name: 'news',
//             id: 3,
//             parent: 1,
//             list: []
//         }
//     ]
// }
