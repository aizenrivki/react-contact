import { createSelector } from 'reselect';
import { initialState } from '../App/reducer';

/**
 * Direct selector to the contactList state domain
 */

const selectContactListDomain = state => state.contactList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ContactList
 */

const makeSelectContactList = () =>
  createSelector(
    selectContactListDomain,
    globalState => globalState.contactList
  );

export default makeSelectContactList;
export { selectContactListDomain };
