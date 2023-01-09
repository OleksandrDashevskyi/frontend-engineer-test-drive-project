import React from 'react';
import { Pagination } from 'semantic-ui-react';
import CustomerRequestItem from '../CustomerRequestItem/index';
import usePagination, {usePaginationProps} from "../../hooks/usePagination";
import "./styling.css"

interface Props {
    customerRequests: CustomerRequest[];
    toggleCustomerRequest: ToggleCustomerRequest;
}

const CustomerRequestList: React.FC<Props> =
    ({ customerRequests,
         toggleCustomerRequest,
    }) => {

        const _DATA = usePagination({
            data: customerRequests,
            itemsPerPage: 5
        } as usePaginationProps)

        const onPageChange: OnPageChange = (event, data) => {
            _DATA.jump(data.activePage);
        };

    return (
        <div className="customer-tasks-container">
            {_DATA.currentData().map((customerRequest: CustomerRequest) => (
                <CustomerRequestItem
                    key={customerRequest.customerRequestDescription}
                    customerRequest={customerRequest}
                    toggleCustomerRequest={toggleCustomerRequest}
                />
            ))}
            <Pagination
                defaultActivePage={1}
                className="pagination-menu"
                firstItem={null}
                lastItem={null}
                onPageChange={onPageChange}
                totalPages={customerRequests.length <= 5 ? 1 : Math.ceil(customerRequests.length / 5)}
            />
        </div>
    )
}

export default CustomerRequestList;