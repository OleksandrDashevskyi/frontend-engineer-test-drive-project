interface CustomerRequest {
    customerRequestDescription: string;
    complete: boolean;
    assignee: string;
    assignedDate: Date;
}

type ToggleCustomerRequest = (selectedRequest: CustomerRequest) => void;
type AddCustomerRequest = (text: string) => void;