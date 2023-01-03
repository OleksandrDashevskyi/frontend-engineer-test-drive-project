import {createStore} from "easy-peasy";
import { OperationsState } from "./operational/OperationsState";
import { StoreState } from "./model";

export const store = createStore<StoreState>({
    operations: OperationsState
})

