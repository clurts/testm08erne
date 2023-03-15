import {render, screen, cleanup} from "@testing-library/react"
import Home from "../views/Home"

describe("Home Component", () => {
    afterEach(cleanup)

    it("renders Home headline", () => {
        render(<Home />)
        const headlineElement = screen.getByText(/home/i)
        expect(headlineElement).toBeInTheDocument()
    })

    it("renders option to log in in a button", () => {
        render(<Home />)
        const loginText = screen.getByText(/log in/i).closest("button")
        expect(loginText).toBeInTheDocument()
    })

    // it("renders login button", () => {
    //     render(<Home />)
    //     const loginButton = screen.getAllByText((_, element) => element.tagName === "BUTTON")[0]
    //     expect(loginButton).toBeInTheDocument()
    // })

})

