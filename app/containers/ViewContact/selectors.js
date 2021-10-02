import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the viewContact state domain
 */

const selectViewContactDomain = state => state.viewContact || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ViewContact
 */

const makeSelectViewContact = () =>
  createSelector(
    selectViewContactDomain,
    substate => substate,
  );

export default makeSelectViewContact;
export { selectViewContactDomain };
