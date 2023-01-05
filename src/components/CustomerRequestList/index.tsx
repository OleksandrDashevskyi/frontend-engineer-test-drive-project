import React from 'react';
import { Pagination } from 'semantic-ui-react';
import CustomerRequestItem from '../CustomerRequestItem/index';
import {useStoreState} from "../../stores/operational/hooks";

interface Props {
    customerRequests: CustomerRequest[];
    toggleCustomerRequest: ToggleCustomerRequest;
    onPageChange: OnPageChange;
}

const CustomerRequestList: React.FC<Props> =
    ({ customerRequests,
         toggleCustomerRequest,
         onPageChange
    }) => {

    return (
        <div>
            {customerRequests.map((customerRequest) => (
                <CustomerRequestItem
                    key={customerRequest.customerRequestDescription}
                    customerRequest={customerRequest}
                    toggleCustomerRequest={toggleCustomerRequest}
                />
            ))}
            <Pagination
                defaultActivePage={1}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                onPageChange={onPageChange}
                totalPages={Math.floor(customerRequests.length / 5) + 1}
            />
        </div>
    )
}

export default CustomerRequestList;