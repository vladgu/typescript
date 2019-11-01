import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';

import { getContacts } from '../../actions';
import ContactPageCard from '../../components/ContactPageCard';
import Loader from '../../components/Loader';
import { RootState } from '../../reducers';

import './contactsPage.css';

type ContactsPageProps = {
  getContacts: () => void;
  contactsList: [];
  isFetching: boolean;
};

const throttled = throttle((value, foo) => foo(value), 1000);

const ContactsPage = ({
  getContacts,
  contactsList,
  isFetching
}: ContactsPageProps) => {
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [searchValue, setSearchValue] = useState('');

  const filteredContList = contactsList.filter((elem: any) => elem.login.startsWith(searchValue.trim()) && searchValue.length)

  const showUsers = (value: string) => {
    setSearchValue(value);
  };
  return (
    <div className="contacts-page">
      <div className="input-group mb-3" style={{ margin: '20px' }}>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <i className="fas fa-user"></i>
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

      {
        isFetching
          ? <Loader />
          : searchValue
            ? filteredContList.length
              ? filteredContList.map((obj: object, index: number) => (
                <ContactPageCard key={String(index + 10)} {...obj} />
              ))
              : <h5>no results</h5>
            : contactsList.map((obj: object, index: number) => (
              <ContactPageCard key={String(index)} {...obj} />
            ))
      }
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
)(React.memo(ContactsPage));
