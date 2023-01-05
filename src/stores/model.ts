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


export interface OperationsStoreModel {
    operationalTeam: OperationalTeam[];
    customerRequestList: CustomerRequest[];
    paginatedCustomerRequestList: CustomerRequest[];
    getOperationalTeamList: Thunk<OperationsStoreModel, OperationalTeam[]>;
    setOperationTeam: Action<OperationsStoreModel, OperationalTeam[]>;
    setCustomerRequestList: Action<OperationsStoreModel, CustomerRequest[]>;
    setPaginatedCustomerRequestList: Action<OperationsStoreModel, CustomerRequest[]>;
}

export interface StoreState {
    operations: OperationsStoreModel
}