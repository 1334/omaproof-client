import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: `http://${window.location.hostname}:4000`,

  headers: {
    authorization: `Bearer ${localStorage.getItem('groupToken') ||
      localStorage.getItem('userToken')}`
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
