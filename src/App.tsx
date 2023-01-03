import React, { useEffect, useState } from 'react';

import AddCustomerRequestForm from './components/AddCustomerRequestForm/index';
import CustomerRequestList from './components/CustomerRequestList/index';
import "./App.css";
import { assignTeamMember } from './services/utils';
import {StateServiceProvider} from "./HOC/StateServiceProvider";
import {useStoreActions} from "./stores/operational/hooks";



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


    const { getOperationalTeamList } = useStoreActions((actions) => actions.operations)
    const [customerRequests, setCustomerRequests] = useState(initialCustomerRequests);

    useEffect(() => {
        // const res = getOperationalTeamList();
        // console.log(res)
    }, [])

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
            <div className="main-container">
                <div className="holding-container">
                    <CustomerRequestList customerRequests={customerRequests} toggleCustomerRequest={toggleCustomerRequest} />
                    <AddCustomerRequestForm addCustomerRequest={addCustomerRequest} />
                </div>
            </div>
    )
}

export default App;
