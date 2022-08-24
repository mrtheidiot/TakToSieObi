import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

import Footer from "./Footer";

it("checks if the Footer text is visible", () => {
  render(
    <Router>
      <Footer />
    </Router>
  );

  const footerText = screen.getByText("Tak to się Obi 2022", { exact: false });
  expect(footerText).toBeInTheDocument();
});
