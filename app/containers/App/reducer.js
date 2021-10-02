import produce from 'immer';
import { find } from 'lodash';
import { GET_CONTACTS, GET_CONTACT} from './constants';
import * as contactsData from '../../data/contacts.json';

export const initialState = {
  contacts: contactsData.default,
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_CONTACTS:
        draft.contacts = action.contacts;
        break;
      case GET_CONTACT:
        draft.contact = find(state.contacts, { _id: action.contactId });
        break;
      default:
    }
  });

export default appReducer;
