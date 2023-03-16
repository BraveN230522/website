import React, { useState, createContext, useContext } from 'react';

const AuthenticationContext = createContext();
const AuthenticationProvider = AuthenticationContext.Provider;

const AuthenticationStateProvider = ({ children }) => {
  const [shouldRequireAuthenticatedAccess, setAuthenticationRequirement] = useState(false);

  const verifyAuthenticationControl = isProtected => {
    setAuthenticationRequirement(isProtected);
  };

  return (
    <AuthenticationProvider value={{ shouldRequireAuthenticatedAccess, verifyAuthenticationControl }}>
      {children}
    </AuthenticationProvider>
  );
};

const useAuthentication = () => useContext(AuthenticationContext);

export { useAuthentication, AuthenticationContext, AuthenticationStateProvider };
