import { combineReducers, CombinedState, Store } from "redux";

import common, { ICommonAction, ICommonState } from "./common";

const rootReducer = combineReducers({
  common,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

export type StoreType = Store<
  CombinedState<{
    common: ICommonState;
  }>,
  ICommonAction
>;
