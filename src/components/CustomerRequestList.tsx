import React from 'react';
import CustomerRequestItem from './CustomerRequestItem';
import { Container } from "semantic-ui-react";

interface Props {
    customerRequests: CustomerRequest[];
    toggleCustomerRequest: ToggleCustomerRequest;
}

const CustomerRequestList: React.FC<Props> =
    ({ customerRequests,
         toggleCustomerRequest
    }) => {
        console.log(customerRequests, "customerRequests")
    return (
        <div>
            {customerRequests.map((customerRequest) => (
                <CustomerRequestItem key={customerRequest.customerRequestDescription} customerRequest={customerRequest} toggleCustomerRequest={toggleCustomerRequest} />
            ))}
        </div>
    )
}

export default CustomerRequestList;