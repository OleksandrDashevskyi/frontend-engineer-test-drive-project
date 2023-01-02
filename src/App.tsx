import React, { useState } from 'react';
import AddCustomerRequestForm from './components/AddCustomerRequestForm';
import CustomerRequestList from './components/CustomerRequestList';
// @ts-ignore
import { assignTeamMember } from './services/utils';

const initialCustomerRequests: CustomerRequest[] = [
    {
        customerRequestDescription: "Increase Shawn's Trucking Credit Limit to $50,000",
        complete: true,
        assignee: assignTeamMember(),
        assignedDate: new Date()
    },
    {
        customerRequestDescription: "Change email address for primary contact on Sean's Carrier Service",
        complete: false,
        assignee: assignTeamMember(),
        assignedDate: new Date(),
    }
]

const App = () => {
    const [customerRequests, setCustomerRequests] = useState(initialCustomerRequests);

    const toggleCustomerRequest = (selectedCustomerRequest: CustomerRequest) => {
        const newCustomerRequests = customerRequests.map((customerRequest) => {
            if (customerRequest === selectedCustomerRequest) {
                return {
                    ...customerRequest,
                    complete: !customerRequest.complete
                }
            }
            return customerRequest;
        });
        setCustomerRequests(newCustomerRequests);
    }

    const addCustomerRequest: AddCustomerRequest = (customerRequestDescription: string) => {
        const newCustomerRequest = { customerRequestDescription, complete: false, assignee: assignTeamMember(), assignedDate: new Date() };
        setCustomerRequests([...customerRequests, newCustomerRequest])
    }

    return (
        <>
            <CustomerRequestList customerRequests={customerRequests} toggleCustomerRequest={toggleCustomerRequest} />
            <AddCustomerRequestForm addCustomerRequest={addCustomerRequest} />
        </>
    )
}

export default App;
