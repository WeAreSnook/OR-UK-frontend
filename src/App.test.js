import { render, screen } from '@testing-library/react';
import App from './App';
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("renders correctly", async () => {
  const routerHistory = createMemoryHistory({
    initialEntries: ["/"],
  });

  render(
    <Router history={routerHistory}>
      <App />
    </Router>
  );
  const imgElement = await screen.findByAltText("Open Referral UK");
  expect(imgElement).toBeInTheDocument();
});
