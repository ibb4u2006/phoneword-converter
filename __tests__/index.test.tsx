import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders input heading", () => {
    render(<Home />);

    const inputHeading = screen.getByRole("heading", {
      name: /Numeric Text Input/i,
    });

    expect(inputHeading).toBeInTheDocument();
  });
  it("renders result heading", () => {
    render(<Home />);
    const resultHeading = screen.getByRole("heading", { name: /result/i });
    expect(resultHeading).toBeInTheDocument();
  });
  it("renders keypad heading", () => {
    render(<Home />);
    const keypadHeading = screen.getByRole("heading", { name: /t9 keypad/i });
    expect(keypadHeading).toBeInTheDocument();
  });
});
