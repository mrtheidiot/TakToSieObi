import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

import EventsSection from "./../EventsSection";

it("checks if the events section is visible", () => {
  const props = {
    title: "test",
  };

  render(
    <Router>
      <EventsSection {...props} />
    </Router>
  );

  const eventSection = screen.getByText("test");
  expect(eventSection).toBeInTheDocument();
});
