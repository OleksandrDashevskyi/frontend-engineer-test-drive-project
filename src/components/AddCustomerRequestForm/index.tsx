import React, { useState } from "react";
import { Input, Form, Button, Label } from "semantic-ui-react";
import {useStoreState} from "../../stores/operational/hooks";

interface Props {
    addCustomerRequest: AddCustomerRequest;
}

const AddCustomerRequestForm: React.FC<Props> = ({ addCustomerRequest }) => {
    const [requestDescription, setRequestDescription] = useState("");
    return (
        <Form>
            <Form.Field>
                <Label>New Customer Request</Label>
                <Input type="text" value={requestDescription} onChange={(e) => setRequestDescription(e.target.value)} />
                <Button primary onClick={(e) => { e.preventDefault(); addCustomerRequest(requestDescription); setRequestDescription("") }}>Add Request</Button>
            </Form.Field>
        </Form>
    )
}

export default AddCustomerRequestForm;