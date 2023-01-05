import React, { useState } from "react";
import { Input, Form, Button, Label } from "semantic-ui-react";
import "./styling.css"

interface Props {
    addCustomerRequest: AddCustomerRequest;
}

const AddCustomerRequestForm: React.FC<Props> = ({ addCustomerRequest }) => {
    const [requestDescription, setRequestDescription] = useState("");
    return (
        <Form>
            <Form.Field className="form-field">
                <Input
                    type="text"
                    className="custom-input"
                    placeholder="Add new Customer Request"
                    value={requestDescription}
                    onChange={(e) => setRequestDescription(e.target.value)}
                />
                <Button
                    basic
                    color="blue"
                    onClick={(e) => {
                        e.preventDefault();
                        addCustomerRequest(requestDescription);
                        setRequestDescription("") }}
                >
                    Add Request
                </Button>
            </Form.Field>
        </Form>
    )
}

export default AddCustomerRequestForm;