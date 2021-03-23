import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { ActionType, StateType } from "./reducer";

const StateContext = createContext<[StateType, Dispatch<ActionType>] | null>(
  null
);

type PropsType = {
  reducer: (state: StateType, action: ActionType) => StateType;
  initialState: StateType;
  children: JSX.Element;
};

export const StateProvider: React.FC<PropsType> = ({
  reducer,
  initialState,
  children,
}: PropsType): JSX.Element => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// eslint-disable-next-line
export const useStateValue = (): any => useContext(StateContext);
