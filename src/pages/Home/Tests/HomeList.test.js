import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "./../../../store/index";

import HomeList from "./../HomeList";
import { Provider } from "react-redux";

it("checks if the HomeList page renders", () => {
  render(
    <Provider store={store}>
      <HomeList />
    </Provider>
  );

  const main = screen.getByRole("main");
  expect(main).toBeInTheDocument();

  expect(screen.getByText("Witaj w Tak", { exact: false })).toBeInTheDocument();
});
