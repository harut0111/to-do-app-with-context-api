import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { ActionType, initialState, StateType } from "./reducer";

const StateContext = createContext<
  StateType | [StateType, Dispatch<ActionType>]
>(initialState);

type PropsType = {
  reducer: (state: StateType, action: ActionType) => StateType;
  initialState: StateType;
  children: JSX.Element;
};

export const StateProvider: React.FC<PropsType> = ({
  reducer,
  initialState,
  children,
}: PropsType) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// eslint-disable-next-line
export const useStateValue = (): any => useContext(StateContext);
