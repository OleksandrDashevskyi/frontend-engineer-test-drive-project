import { Action, Thunk } from 'easy-peasy';
interface Name {
    title: string,
    first: string,
    last: string
}

interface Id {
    name: string,
    value: string,
}

interface Picture {
    large: string,
    medium: string,
    thumbnail: string,
}

export interface OperationalTeam {
    name: Name,
    email: string,
    id: Id,
    picture: Picture
}


export interface OperationsModel {
    operationalTeam: OperationalTeam[];
    customerRequestList: CustomerRequest[];
    getOperationalTeamList: Thunk<OperationsModel, OperationalTeam | undefined>;
    addOperationTeam: Action<OperationsModel, OperationalTeam[]>;
    addCustomerRequest: Action<OperationsModel, CustomerRequest>;
}