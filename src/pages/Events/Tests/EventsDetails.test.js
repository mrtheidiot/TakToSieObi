import { screen } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";

import EventsDetails from "./../EventsDetails";
import renderWithProviders from "./../../../store/TestUtils/renderWithProviders";

it("checks if EventsDetails reads params and displays proper eventsDetails entry", () => {
  const initialState = {
    events: {
      eventsContent: [
        { title: "Title", link: "test", descriptionLong: "" },
      ],
    },
  };

  const history = createMemoryHistory({ initialEntries: ["/wydarzenia/test"] });

  renderWithProviders(
    <Router history={history}>
      <Route path="/wydarzenia/:eventlink">
        <EventsDetails />
      </Route>
    </Router>,
    {
      preloadedState: initialState,
    }
  );

  const eventsDetails = screen.getByTestId("events-details");
  expect(eventsDetails).toBeInTheDocument();
});
