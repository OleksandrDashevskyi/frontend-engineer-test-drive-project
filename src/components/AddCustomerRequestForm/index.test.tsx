import { describe, it, expect, vi } from "vitest";
import { render, screen, userEvent } from "./../../../test-utils";
import AddCustomerRequestForm from "../AddCustomerRequestForm/index";

describe("<AddCustomerRequestForm />", () => {
    it("AddCustomerRequestFrom mounts properly", () => {
        const mockAddCustomerRequest = vi.fn();
        const wrapper = render(<AddCustomerRequestForm addCustomerRequest={mockAddCustomerRequest}/>)
        expect(wrapper).toBeTruthy()
    });
    it("Should call addCustomerRequest function", () => {
        const mockAddCustomerRequest = vi.fn();
        const {/* RTL queries */} = render(<AddCustomerRequestForm  addCustomerRequest={mockAddCustomerRequest}/>)
        expect(mockAddCustomerRequest).toHaveBeenCalledTimes(0);
    });
})

describe("Test if Button in AddCustomerRequestFrom works as expected", () => {
    it("should render on render parent component", () => {
        const mockAddCustomerRequest = vi.fn();
        render(<AddCustomerRequestForm addCustomerRequest={mockAddCustomerRequest} />)
        const button = screen.getByTestId("addRequestButton")
        userEvent.click(button)
        expect(mockAddCustomerRequest).toHaveBeenCalledTimes(1)
    })
})


