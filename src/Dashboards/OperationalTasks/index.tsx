import React, { useEffect } from "react";
import { Header } from 'semantic-ui-react';
import CustomerRequestList from "../../components/CustomerRequestList";
import AddCustomerRequestForm from "../../components/AddCustomerRequestForm";
import { assignTeamMember } from "../../services/utils";
import { useStoreActions, useStoreState } from "../../stores/operational/hooks";

const OperationalTasks:React.FC = () => {

    const { getOperationalTeamList, setOperationTeam, setCustomerRequestList } = useStoreActions((actions: any) => actions.operations);
    const { operationalTeam, customerRequestList } = useStoreState((state: any) => state.operations);

    const toggleCustomerRequest = (selectedCustomerRequest: CustomerRequest) => {
        const newCustomerRequests = customerRequestList.map((customerRequest: CustomerRequest) => {
            if (customerRequest === selectedCustomerRequest) {
                return {
                    ...customerRequest,
                    complete: !customerRequest.complete
                }
            }
            return customerRequest;
        });
        setCustomerRequestList(newCustomerRequests);
    };

    const addCustomerRequest: AddCustomerRequest = (customerRequestDescription: string) => {
        const newCustomerRequest = {
            customerRequestDescription,
            complete: false,
            assignee: assignTeamMember(operationalTeam),
            assignedDate: new Date() };
        setCustomerRequestList([...customerRequestList, newCustomerRequest])
    };

    const getTeamList = async (): Promise<void> => {
            const res = await getOperationalTeamList();
            setOperationTeam(res);
    };

    useEffect(() => {
        getTeamList();
    }, []);

    return (
        <div className="main-container">
            <div className="holding-container">
                <Header as="h2" textAlign="center">Customer Request Tracking</Header>
                {customerRequestList.length < 1 ? <div className="empty-tasks">No Tasks Are Available</div> : null }
                {customerRequestList.length > 0 ? <CustomerRequestList customerRequests={customerRequestList} toggleCustomerRequest={toggleCustomerRequest} /> : null}
                <AddCustomerRequestForm addCustomerRequest={addCustomerRequest} />
            </div>
        </div>
    )
}

export default OperationalTasks;