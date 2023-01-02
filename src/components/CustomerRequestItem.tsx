import React from "react";

interface Props {
    customerRequest: CustomerRequest,
    toggleCustomerRequest: ToggleCustomerRequest
}

const CustomerRequestItem: React.FC<Props> = ({ customerRequest, toggleCustomerRequest }) => {
    return (
        <li>
            <label style={{ textDecoration: customerRequest.complete ? 'line-through' : undefined }}>
                <input
                    type='checkbox'
                    onClick={() => toggleCustomerRequest(customerRequest)}
                    defaultChecked={customerRequest.complete}
                />{' '}{customerRequest.customerRequestDescription}
                <br />
                <p>{`Assigned to ${customerRequest.assignee} on ${customerRequest.assignedDate}`}</p>
            </label>
        </li>
    );
}

export default CustomerRequestItem;