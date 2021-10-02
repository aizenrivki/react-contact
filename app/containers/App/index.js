import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactList from 'containers/ContactList/Loadable';
import ViewContact from 'containers/ViewContact/Loadable';
import ContactFriend from 'containers/ContactFriends/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path="/ContactList" component={ContactList} />
        <Route path="/ViewContact/:contactId" component={ViewContact} />
        <Route path="/ContactFriends/:contactId" component={ContactFriend} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
