import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import HelloWorld from "../../../src/components/hello-world/hello-world"

test('render hello world ', () => {
    render(<HelloWorld />)
    const title = screen.getByText(/hello world/i)

    expect(title).toBeInTheDocument()
})