import { screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import renderWithProviders from "../../../store/TestUtils/renderWithProviders";
import EventsList from "./../EventsList";

it("creates new section, edits it and deletes on the EventsList page", () => {
  window.testMode = true
  const initialState = {
    courses: {
      eventsContent: [],
    },
    ui: { editMode: true },
  };

  renderWithProviders(
    <Router>
      <EventsList />
    </Router>,
    {
      preloadedState: initialState,
    }
  );

  fireEvent.click(screen.getByText("Dodaj"));

  const eventsListTitleInput = screen.getByLabelText("Tytuł:");
  expect(eventsListTitleInput).toBeInTheDocument();

  fireEvent.change(eventsListTitleInput, { target: { value: "test" } });
  expect(eventsListTitleInput.value).toBe("test");

  fireEvent.click(screen.getByText("ZAAKCEPTUJ"));
  expect(eventsListTitleInput).not.toBeInTheDocument();

  expect(screen.getByText("test")).toBeVisible();

  const editButtons = screen.queryAllByText("Edytuj");
  fireEvent.click(editButtons[0]);

  const coursesListTitleInput2 = screen.getByLabelText("Tytuł:");
  expect(coursesListTitleInput2).toBeInTheDocument();

  fireEvent.change(coursesListTitleInput2, { target: { value: "test changed" } });
  fireEvent.click(screen.getByText("ZAAKCEPTUJ"));

  expect(screen.queryByText("test")).not.toBeInTheDocument();
  expect(screen.getByText("test changed")).toBeInTheDocument();

  fireEvent.click(editButtons[0]);
  fireEvent.click(screen.getByTestId("delete-button"));

  expect(screen.queryByText("test changed")).not.toBeInTheDocument;
});
