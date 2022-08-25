import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "./../../../store/index";

import CoursesList from "./../CoursesList";
import { Provider } from "react-redux";

it("checks if the HomeList page renders", () => {
  render(
    <Provider store={store}>
      <CoursesList />
    </Provider>
  );

  const main = screen.getByRole("main");
  expect(main).toBeInTheDocument();
});
