import React from 'react';
import CustomerRequestItem from '../CustomerRequestItem/index';

interface Props {
    customerRequests: CustomerRequest[];
    toggleCustomerRequest: ToggleCustomerRequest;
}

const CustomerRequestList: React.FC<Props> =
    ({ customerRequests,
         toggleCustomerRequest
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
        </div>
    )
}

export default CustomerRequestList;