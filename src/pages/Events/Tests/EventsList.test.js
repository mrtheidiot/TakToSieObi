import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import renderWithProviders from "../../../store/TestUtils/renderWithProviders";

import EventsList from "./../EventsList";

it("checks if the main EventsList element is in the document", () => {
    const initialState = {
        courses: {
          eventsContent: [],
        },
      };
    
      renderWithProviders(
          <EventsList />,
        {
          preloadedState: initialState,
        }
      );

  const eventsList = screen.getByTestId('events-list');
  expect(eventsList).toBeInTheDocument();
});
