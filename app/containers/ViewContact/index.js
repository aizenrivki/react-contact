import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { find } from 'lodash';
import { makeSelectContactList } from 'containers/App/selectors';
import ContactDetails from '../../components/ContactDetails';

export function ViewContact(props) {
  // eslint-disable-next-line react/prop-types
  const { match: { params }, contactList } = props;
  const currentContactId = params.contactId;
  const currentContact = find(contactList, { _id: currentContactId });
  // const contacts = contactList;
  // const contacts = contactList.filter(item => item._id.includes('5d35a6e473ba203bc8740c16'));
  // const contacts = contactList.filter(item => item._id.includes(idContact));

  return (
    <div>
      <Helmet>
        <title>ViewContact</title>
        <meta name="description" content="Description of ViewContact" />
      </Helmet>
      <ContactDetails contact={currentContact} />
    </div>
  );
}

ViewContact.propTypes = {
  idContact: PropTypes,
  contactList: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  contactList: makeSelectContactList(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(ViewContact);