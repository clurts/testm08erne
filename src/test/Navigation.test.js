import { render, screen, cleanup, within } from "@testing-library/react";
import Navigation from "../components/Navigation";

describe("navigation component", () => {
    afterEach(cleanup)

    it("renders ul element in a nav tag", () => {
        render(<Navigation/>)
        const listElement = screen.getByRole("list")
        expect(listElement.parentElement.tagName).toBe("NAV")
    })

    it("renders listitems within list", () => {
        render(<Navigation />)
        const listItems = screen.getAllByRole("listitem")
        listItems.forEach(listItem => 
            expect(listItem.parentElement.tagName).toBe("MENU")
        )
    })

    it("renders 'about' link in a list-item", () => {
        render(<Navigation />)
        const aboutLink = screen.getByRole('link', { name: /about/i });
        expect(aboutLink.parentElement.tagName).toBe("LI")
    })

    it("renders 'contact' link in a list item", () => {
        render(<Navigation />)
        const contactLink = screen.getByRole('link', {name: /contact/i})
        expect(contactLink.parentElement.tagName).toBe("LI")
    })
})