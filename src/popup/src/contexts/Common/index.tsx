import React, { useReducer, useContext, createContext, Dispatch } from "react";

type State = {
  user?: any;
};

type Action = {
  type: "SET_USER_INFO";
  user?: any;
};

type CommonDispatch = Dispatch<Action>;

const CommonStateContext = createContext<State>({});
const CommonDispatchContext = createContext<CommonDispatch | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    default:
      throw new Error("Unhandled action");
  }
};

export const CommonProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <CommonStateContext.Provider value={state}>
      <CommonDispatchContext.Provider value={dispatch}>
        {children}
      </CommonDispatchContext.Provider>
    </CommonStateContext.Provider>
  );
};

const useState = () => {
  const state = useContext(CommonStateContext);
  if (!state) {
    throw new Error("Cannot find CommonProvider");
  }
  return state;
};

const useDispatch = () => {
  const dispatch = useContext(CommonDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find CommonProvider");
  }
  return dispatch;
};

export default { useDispatch, useState };
