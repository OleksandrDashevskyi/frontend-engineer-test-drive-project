import React from 'react';
import "./App.css";
import { assignTeamMember } from './services/utils';
import OperationalTasks from "./Dashboards/OperationalTasks";
import { StateServiceProvider } from "./HOC/StateServiceProvider";




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
    return (
           <>
               <StateServiceProvider >
               <OperationalTasks />
               </StateServiceProvider>
           </>
    )
}

export default App;
