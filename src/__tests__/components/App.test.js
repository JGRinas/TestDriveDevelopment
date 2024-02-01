import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App.jsx";
import "@testing-library/jest-dom";

describe("App Component", () => {
  test("renders Vite + React header", () => {
    render(<App />);
    const headerElement = screen.getByText(/Vite \+ React/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("counter increases when button is clicked", () => {
    render(<App />);
    const buttonElement = screen.getByRole("button", { name: /count is/i });
    fireEvent.click(buttonElement);
    const countElement = screen.getByText(/count is 1/i);
    expect(countElement).toBeInTheDocument();
  });

  test("renders additional texts and links", () => {
    render(<App />);
    const editElement = screen.getByText((content, node) => {
      const hasText = (node) =>
        node.textContent === "Edit src/App.jsx and save to test HMR";
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    });
    expect(editElement).toBeInTheDocument();
    const docsElement = screen.getByText(
      /Click on the Vite and React logos to learn more/i
    );
    expect(docsElement).toBeInTheDocument();
  });
});
