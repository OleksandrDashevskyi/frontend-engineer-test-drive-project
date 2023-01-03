import { createTypedHooks } from 'easy-peasy';
import {OperationsStoreModel} from "../model";
;

const typedHooks = createTypedHooks<OperationsStoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;