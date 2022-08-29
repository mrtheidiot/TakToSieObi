import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderWithProviders from "../../../store/TestUtils/renderWithProviders";
import AboutMe from "../AboutMe";

it("creates, edits and deltes a section on page: AboutMe", () => {
  window.testMode = true; // to not send the data to API

  const initialState = {
    aboutme: {
      aboutMeContent: [{ id: 1, title: "title", parts: [] }],
    },
    ui: { editMode: true },
  }; // initial redux store

  renderWithProviders(<AboutMe />, {
    preloadedState: initialState,
  }); // render with the preloaded redux store

  fireEvent.click(screen.getByText("Dodaj"));

  const title = screen.getByTestId("aboutMeActions-title");
  expect(title).toBeInTheDocument();

  fireEvent.change(title, { target: { value: "test" } });
  expect(title.value).toBe("test");

  fireEvent.click(screen.getByText("ZAAKCEPTUJ"));
  expect(title).not.toBeInTheDocument();

  expect(screen.getByText("test")).toBeVisible();

  const editButtons = screen.queryAllByText("Edytuj");
  fireEvent.click(editButtons[1]);

  const secondTitle = screen.getByTestId("aboutMeActions-title");
  expect(secondTitle).toBeInTheDocument();

  fireEvent.change(secondTitle, { target: { value: "change" } });
  fireEvent.click(screen.getByText("ZAAKCEPTUJ"));

  expect(screen.queryByText("test")).not.toBeInTheDocument();
  expect(screen.getByText("change")).toBeInTheDocument();

  fireEvent.click(editButtons[1]);
  fireEvent.click(screen.getByTestId("delete-button"));

  expect(screen.queryByText("change")).not.toBeInTheDocument;
});
