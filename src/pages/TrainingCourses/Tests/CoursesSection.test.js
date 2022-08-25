import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

import CourseSection from "./../CourseSection";
import renderWithProviders from "./../../../store/TestUtils/renderWithProviders";

it("checks if the HomeSection renders", async () => {
  const props = {
    title: "Title",
  };

  render(
    <Router>
      <CourseSection {...props} />
    </Router>
  );

  const title = screen.getByText("Title");
  expect(title).toBeInTheDocument();
});
