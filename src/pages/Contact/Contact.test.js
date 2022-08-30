import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

import Contact from "./Contact";

it("checks if the Contact Page matches snapshot", () => {
  const {
    container: { firstChild },
  } = render(
    <Router>
      <Contact />
    </Router>
  );

  expect(firstChild).toMatchSnapshot();
});
