import React from "react";
import { Container, Checkbox, Image, Icon } from 'semantic-ui-react';
import "./styling.css"

export interface Props {
    customerRequest: CustomerRequest,
    toggleCustomerRequest: ToggleCustomerRequest
}

const CustomerRequestItem: React.FC<Props> = ({ customerRequest, toggleCustomerRequest }) => {
    const options: object = {
        year: "numeric",
        month: "short",
        day: "numeric",
    }
    const convertedAssignedDate = customerRequest.assignedDate.toLocaleDateString("en-US", options)

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
                    {customerRequest.picture ?
                        <Image
                            className="team-avatar"
                            src={customerRequest.picture}
                            size="mini"
                        />
                        : null
                    }
                    {!customerRequest.picture ?
                        <Icon
                            className="team-avatar"
                            name="user circle outline"
                            size="large"
                        />
                        : null
                    }
                </div>
                <div className="main-text">{`Assigned to ${customerRequest.assignee} on ${convertedAssignedDate}`}</div>
            </div>
        </Container>
    );
}

export default CustomerRequestItem;