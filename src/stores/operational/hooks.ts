import { createTypedHooks } from 'easy-peasy';
import { OperationsModel } from "./Model";

const typedHooks = createTypedHooks<OperationsModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;