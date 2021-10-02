import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectContactList = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.contacts
  );

const makeSelectContact = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.contact
  );

export {
  selectGlobal,
  makeSelectContactList,
  makeSelectContact
};
