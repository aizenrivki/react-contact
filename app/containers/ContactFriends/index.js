import React, { memo, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { getContact } from '../App/actions'
import { makeSelectContact } from '../App/selectors';


// import { find } from 'lodash';
export function ContactFriends(props) {
  // eslint-disable-next-line react/prop-types
  const { match: { params }, getCurrentContact, currentContact } = props;
  const currentContactId = params.contactId;
  getCurrentContact(currentContactId);
  const [friendName, setFriendName] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    setFriendName('');
  };
  const handleChange = event => {
    event.preventDefault();
    setFriendName(event.target.value);
  };
  if (currentContact !== undefined) {
    return (
      <div>
        <Helmet>
          <title>ContactFriends</title>
          <meta name="description" content="Description of ContactFriends" />
        </Helmet>
        Hi {currentContact.name}!!
        {
          currentContact.friends.map(friend => <li> {friend.name}</li>)
        }
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={friendName}
            onChange={handleChange}
            placeholder="Friendname"
            required
          />
          <input type="submit" value="add friend"></input>
        </form>
        <br />
      </div>

    );
  }
}


ContactFriends.propTypes = {
  getCurrentContact: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    getCurrentContact: contactId => dispatch(getContact(contactId)),
  };
}

const mapStateToProps = createStructuredSelector({
  currentContact: makeSelectContact(),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  memo,
)(ContactFriends);

