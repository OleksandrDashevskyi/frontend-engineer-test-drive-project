import { action, computed, thunk, createStore } from "easy-peasy";
import { OperationsModel } from "./Model";
import { getOperationsTeam } from "../../services/utils";

export const OperationsState = createStore<OperationsModel>({
    operationalTeam: [],
    customerRequestList: [],
    getOperationalTeamList: thunk(async (actions) => {
      const result = await getOperationsTeam();
      console.log(result, "result")

    }),
    addOperationTeam: action((state, payload) => {
        state.operationalTeam = payload;
    }),
    addCustomerRequest: action(() => {}),
})