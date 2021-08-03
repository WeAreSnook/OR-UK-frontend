import { render, screen } from "@testing-library/react";
import Header from "./Header";
import mockMainMenuData from "./mockMainMenuData";
import { BrowserRouter as Router } from "react-router-dom";

// header contains logo with link
// contains hamburger menu on mobile
// link to forum
// link to developers
// contains navigation elements

describe("<Header> test", () => {
  beforeEach(() => {
    render(
      <Router>
        <Header mainMenu={mockMainMenuData} topMenuId="" />
      </Router>
    );
  });
  it("displays logo with link", () => {
    const logo = screen.getByAltText(/open referral uk/i);
    expect(logo).toBeInTheDocument();
  });

  it("displays forum links", () => {
    const forumLinks = screen.getAllByRole("link", { name: /forum/i });
    expect(forumLinks).toHaveLength(2);
  });

  it("displays developer links", () => {
    const forumLinks = screen.getAllByRole("link", { name: /developers/i });
    expect(forumLinks).toHaveLength(2);
  });
});
