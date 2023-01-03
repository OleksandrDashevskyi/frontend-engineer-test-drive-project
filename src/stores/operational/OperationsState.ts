import { action, thunk } from "easy-peasy";
import { getOperationsTeam } from "../../services/utils";
import { OperationsStoreModel } from "../model";

export const OperationsState: OperationsStoreModel = {
    operationalTeam: [],
    customerRequestList: [],
    getOperationalTeamList: thunk(async (actions) => {
        const result = await getOperationsTeam();
        console.log(result, "result")
        return result

    }),
    addOperationTeam: action((state, payload) => {
        console.log(state, "state")
       state.operationalTeam = payload
    }),
    addCustomerRequest: action(() => {
    }),
}