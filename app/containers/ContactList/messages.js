/*
 * ContactList Messages
 *
 * This contains all the text for the ContactList container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ContactList';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ContactList container!',
  },
});
