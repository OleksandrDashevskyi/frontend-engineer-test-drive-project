import React from 'react';
import CustomerRequestItem from './CustomerRequestItem';

interface Props {
    customerRequests: CustomerRequest[];
    toggleCustomerRequest: ToggleCustomerRequest;
}

const CustomerRequestList: React.FC<Props> = ({ customerRequests, toggleCustomerRequest }) => {
    return (
        <ul>
            {customerRequests.map((customerRequest) => (
                <CustomerRequestItem key={customerRequest.customerRequestDescription} customerRequest={customerRequest} toggleCustomerRequest={toggleCustomerRequest} />
            ))}
        </ul>
    )
}

export default CustomerRequestList;