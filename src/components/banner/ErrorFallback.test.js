import { render, screen } from "@testing-library/react";
import ErrorFallback from "./ErrorFallback";

describe("Error boundary component", () => {
  const error = {};
  const reset = jest.fn();

  beforeEach(() => {
    render(<ErrorFallback />);
  });

  it("displays the text something went wrong", () => {
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("has an element with a main role", () => {
    expect(screen.getByRole("main")).toHaveClass("main-container");
  });

  it("contains a button to redirect the user", async () => {
    expect(await screen.findByText("Open Referral UK Home")).toBeInTheDocument();
  });

  it("contains one header tag", () => {
    expect(screen.getAllByRole("heading", {level: 1}).length).toEqual(1);
  });

  it("contains an anchor tag", () => {
    expect(screen.getByText("Open Referral UK Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getAllByRole('link').length).toEqual(2);
  });
});
