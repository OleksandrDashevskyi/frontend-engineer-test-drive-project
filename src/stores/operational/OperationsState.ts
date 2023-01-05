import { action, thunk } from "easy-peasy";
import { getOperationsTeam } from "../../services/utils";
import { OperationsStoreModel } from "../model";

export const OperationsState: OperationsStoreModel = {
    operationalTeam: [],
    customerRequestList: [],
    getOperationalTeamList: thunk(async () => {
        return await getOperationsTeam();
    }),
    setOperationTeam: action((state, payload) => {
       state.operationalTeam = payload;
    }),
    setCustomerRequestList: action((state, payload) => {
        state.customerRequestList = payload;
    }),
};