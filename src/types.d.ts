interface CustomerRequest {
    customerRequestDescription: string;
    complete: boolean;
    assignee: string;
    assignedDate: Date;
    picture: string;
}

type ToggleCustomerRequest = (selectedRequest: CustomerRequest) => void;
type AddCustomerRequest = (text: string) => void;
type OnPageChange = (event: React.MouseEvent<HTMLAnchorElement>, data: any) => void