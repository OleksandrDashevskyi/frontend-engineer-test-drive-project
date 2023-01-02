import React from "react";
import { Container } from 'semantic-ui-react';

interface Props {
    customerRequest: CustomerRequest,
    toggleCustomerRequest: ToggleCustomerRequest
}

const StyledContainer = {
    display: "flex",
    background: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "2rem",
    marginTop: "2rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    borderRadius: "0.5rem",
    border: "1px solid #000000",
    fontSize: "1rem",
}

const CustomerRequestItem: React.FC<Props> = ({ customerRequest, toggleCustomerRequest }) => {
    return (
        <Container style={StyledContainer}>
            <div style={{ textDecoration: customerRequest.complete ? 'line-through' : undefined }}>
                <input
                    type='checkbox'
                    onClick={() => toggleCustomerRequest(customerRequest)}
                    defaultChecked={customerRequest.complete}
                />{' '}{customerRequest.customerRequestDescription}
                <br />
                <p>{`Assigned to ${customerRequest.assignee} on ${customerRequest.assignedDate}`}</p>
            </div>
        </Container>
    );
}

export default CustomerRequestItem;