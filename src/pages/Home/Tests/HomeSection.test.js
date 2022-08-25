import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HomeSection from "./../HomeSection";

it("checks if the HomeSection renders", () => {
  const props = {
    contentPart1: "test",
    contentPart2: "",
    contentPart3: "",
    buttons: [],
  };

  render(<HomeSection {...props} />);

  const outputs = screen.queryAllByTestId("output");
  expect(outputs).not.toHaveLength(0);

  expect(screen.getByText('test')).toBeInTheDocument()
});
