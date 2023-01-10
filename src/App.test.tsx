import { describe, expect, it } from "vitest";
import { render } from "../test-utils";
import App from './App'


describe("<App />", () => {
    it("App mounts properly", () => {
        const wrapper = render(<App />)
        expect(wrapper).toBeTruthy()
    })
})