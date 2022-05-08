import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const inputHeading = screen.getByRole("heading", {
      name: /Numeric Text Input/i,
    });

    expect(inputHeading).toBeInTheDocument();
  });
});
