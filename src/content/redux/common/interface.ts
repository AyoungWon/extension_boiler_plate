import { setIsVIRendered } from "./action";

export interface ICommonState {
  isVIRendered: boolean;
}

export type ICommonAction = ReturnType<typeof setIsVIRendered>;
