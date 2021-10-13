import { SET_IS_INTERFACE_RENDERED } from "./action";
import { ICommonAction, ICommonState } from "./interface";

const initialState: ICommonState = {
  isVIRendered: false,
};

const common = (state: ICommonState = initialState, action: ICommonAction) => {
  switch (action.type) {
    case SET_IS_INTERFACE_RENDERED:
      return {
        ...state,
        isVIRendered: !state.isVIRendered,
      };
    default:
      return state;
  }
};

export default common;

export type { ICommonAction, ICommonState };
