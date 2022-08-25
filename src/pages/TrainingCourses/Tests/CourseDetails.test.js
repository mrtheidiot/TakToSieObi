import { screen } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";

import CourseDetails from "./../CourseDetails";
import renderWithProviders from "./../../../store/TestUtils/renderWithProviders";

it("checks if CourseDetails reads params and displays proper courseConent entry", () => {
  const initialState = {
    courses: {
      coursesContent: [
        { title: "Title", link: "test", subsite: [], sectionGallery: [] },
      ],
    },
    ui: { editMode: true },
  };

  const history = createMemoryHistory({ initialEntries: ["/treningi/test"] });

  renderWithProviders(
    <Router history={history}>
      <Route path="/treningi/:courselink">
        <CourseDetails />
      </Route>
    </Router>,
    {
      preloadedState: initialState,
    }
  );

  const courseDetails = screen.getByTestId("courseDetails");
  expect(courseDetails).toBeInTheDocument();
});
