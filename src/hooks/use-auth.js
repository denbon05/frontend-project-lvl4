import React, { useState, useContext, createContext } from 'react';

const authContext = createContext();

function useProvideAuth() {
  const [user] = useState(null);

  const signIn = (cb) => {
    console.log('singIn');
    cb();
  };

  return {
    user,
    signIn,
  };
}

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default () => useContext(authContext);
