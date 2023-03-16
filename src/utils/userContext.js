import React, { createContext, useReducer, useMemo, useEffect } from 'react';
import Cookie from 'js-cookie';
import { useAuthentication } from '@components/Authentication/useAuthentication';

function parseCookie(str) {
  let object;
  try {
    object = JSON.parse(str);
  } catch (e) {
    return {};
  }
  return object;
}

const initialState = {};
let cachedUser = {};

const userReducer = verifyAuthenticationControl => (state, action) => {
  switch (action.type) {
    case 'login':
      Cookie.set('userData', JSON.stringify(action.data));
      verifyAuthenticationControl(false);
      return { ...action.data };
    case 'logout':
      Cookie.remove('userData');
      verifyAuthenticationControl(false);
      cachedUser = {};
      return {};
    case 'saved-cookie':
      return { ...action.data };
    default:
      return state;
  }
};

export const getUserData = async () => {
  if (cachedUser.userToken) {
    return cachedUser;
  }

  cachedUser = await parseCookie(Cookie.get('userData'));

  return cachedUser;
};

const UserContext = createContext();

export const UserReducerProvider = ({ children }) => {
  const { verifyAuthenticationControl } = useAuthentication();
  const [state, dispatch] = useReducer(userReducer(verifyAuthenticationControl), initialState);

  useEffect(() => {
    if (!initialState.userToken) {
      const dispatchAsyncUser = async () => {
        const user = await getUserData();

        dispatch({ type: 'saved-cookie', data: { ...user } });
      };
      dispatchAsyncUser();
    }
  }, [initialState]);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserContext;
