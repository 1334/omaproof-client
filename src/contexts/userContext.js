import React from 'react';

export const userCtx = {
  user: {
    id: '',
    name: 'Guest',
    picture: '',
    activeGroup: '',
    groups: [],
    userToken: '',
    groupToken: ''
  },
  updateUser: () => {}
};

export default React.createContext(userCtx);
