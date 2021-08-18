import { render, screen } from "@testing-library/react";
import ErrorFallback from "./ErrorFallback";

describe("Error boundary component", () => {
  const error = {};
  const reset = jest.fn();

  beforeEach(() => {
    render(<ErrorFallback />);
  });

  it("should display the text something has gone wrong", () => {
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("should have an element with a Main role", () => {
    expect(screen.getByRole("main")).toHaveClass("main-container");
  });

  it("should alert the user there", async () => {
    expect(await screen.findByText("Open Referral UK Home")).toBeInTheDocument();
  });
  // check it has one header tag 
  // check anchor tag
});
