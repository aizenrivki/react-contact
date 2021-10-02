import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the contactFriends state domain
 */

const selectContactFriendsDomain = state =>
  state.contactFriends || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ContactFriends
 */

const makeSelectContactFriends = () =>
  createSelector(
    selectContactFriendsDomain,
    substate => substate,
  );

export default makeSelectContactFriends;
export { selectContactFriendsDomain };
