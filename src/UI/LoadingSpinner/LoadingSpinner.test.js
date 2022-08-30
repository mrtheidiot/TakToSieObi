import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import LoadingSpinner from "./LoadingSpinner";

it("checks if the Footer text is visible", () => {
  render(<LoadingSpinner />);

  const testId = screen.getByTestId("loading-spinner");
  expect(testId).toBeInTheDocument();
});
