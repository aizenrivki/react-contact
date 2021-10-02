/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { GET_CONTACTS, GET_CONTACT } from './constants';

/**
 * Load the contacts list
 *
 * @return {object} An action object with a type of GET_CONTACTS
 */
export function getContacts(contacts) {
  return {
    type: GET_CONTACTS,
    contacts
  };
}


/**
 * Get the contact by Id
 *
 * @return {object} An action object with a type of GET_CONTACT
 */
export function getContact(contactId) {
  return {
    type: GET_CONTACT,
    contactId
  };
}
