import React from "react";
import { Container, Checkbox } from 'semantic-ui-react';
import "./styling.css"

interface Props {
    customerRequest: CustomerRequest,
    toggleCustomerRequest: ToggleCustomerRequest
}

const CustomerRequestItem: React.FC<Props> = ({ customerRequest, toggleCustomerRequest }) => {
    return (
        <Container className="container">
            <div style={{ textDecoration: customerRequest.complete ? 'line-through' : undefined }}>
                <div className="task-header">
                    <Checkbox
                        className="check-box"
                        onClick={() => toggleCustomerRequest(customerRequest)}
                        defaultChecked={customerRequest.complete}
                    />
                    <div className="task-header">{customerRequest.customerRequestDescription}</div>
                </div>
                <div className="main-text">{`Assigned to ${customerRequest.assignee} on ${customerRequest.assignedDate}`}</div>
            </div>
        </Container>
    );
}

export default CustomerRequestItem;