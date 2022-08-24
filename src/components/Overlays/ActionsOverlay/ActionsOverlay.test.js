import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import store from './../../../store/index'

import AddOrEdit from "./AddOrEdit";

it("checks the AddOrEdit button is visible and Overlay is shown onClick and closes after clicking on 'Zamknij'", () => {
  render(
    <Provider store={store}>
      <AddOrEdit edit={true} />
    </Provider>
  );

  const editButton = screen.getByRole("button");
  expect(editButton).toBeInTheDocument();

  fireEvent.click(editButton);

  const overlay = screen.getByTestId("overlay");
  expect(overlay).toBeVisible();

  const closeButton = screen.getByText("Zamknij");
  expect(closeButton).toBeVisible();

  fireEvent.click(closeButton);

  expect(overlay).not.toBeInTheDocument();
});
