import { createContext, useReducer } from "react";

export const Store = createContext();
export const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const reducer = (state, action) => {
  switch (action.type) {
    //sign
    case "SIGNIN_USER":
      return { ...state, user: action.payload };
    //sign-out
    case "USER_SIGNOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
