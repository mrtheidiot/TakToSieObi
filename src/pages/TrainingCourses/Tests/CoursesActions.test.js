import { screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import renderWithProviders from "../../../store/TestUtils/renderWithProviders";
import CoursesList from "../CoursesList";

it("creates new section, edits it and deletes on the CoursesList page", () => {
  window.testMode = true
  const initialState = {
    courses: {
      coursesContent: [],
    },
    ui: { editMode: true },
  };

  renderWithProviders(
    <Router>
      <CoursesList />
    </Router>,
    {
      preloadedState: initialState,
    }
  );

  fireEvent.click(screen.getByText("Dodaj"));

  const coursesListTitleInput = screen.getByLabelText("Tytuł:");
  expect(coursesListTitleInput).toBeInTheDocument();

  fireEvent.change(coursesListTitleInput, { target: { value: "test" } });
  expect(coursesListTitleInput.value).toBe("test");

  fireEvent.click(screen.getByText("ZAAKCEPTUJ"));
  expect(coursesListTitleInput).not.toBeInTheDocument();

  expect(screen.getByText("test")).toBeVisible();

  const editButtons = screen.queryAllByText("Edytuj");
  fireEvent.click(editButtons[0]);

  const coursesListTitleInput2 = screen.getByLabelText("Tytuł:");
  expect(coursesListTitleInput2).toBeInTheDocument();

  fireEvent.change(coursesListTitleInput2, { target: { value: "change" } });
  fireEvent.click(screen.getByText("ZAAKCEPTUJ"));

  expect(screen.queryByText("test")).not.toBeInTheDocument();
  expect(screen.getByText("change")).toBeInTheDocument();

  fireEvent.click(editButtons[0]);
  fireEvent.click(screen.getByTestId("delete-button"));

  expect(screen.queryByText("change")).not.toBeInTheDocument;
});
