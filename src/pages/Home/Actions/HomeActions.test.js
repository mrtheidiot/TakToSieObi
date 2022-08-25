import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderWithProviders from "../../../store/TestUtils/renderWithProviders";
import HomeList from "../HomeList";

it("creates new section, edits it and deletes on the HomeList page", () => {
  const initialState = {
    ui: { editMode: true },
  };

  renderWithProviders(<HomeList />, {
    preloadedState: initialState,
  });

  fireEvent.click(screen.getByText("Dodaj"));

  const homeListPart = screen.getByLabelText("Część 1:");
  expect(homeListPart).toBeInTheDocument();

  fireEvent.change(homeListPart, { target: { value: "test" } });
  expect(homeListPart.value).toBe("test");

  fireEvent.click(screen.getByText("ZAAKCEPTUJ"))
  expect(homeListPart).not.toBeInTheDocument()

  expect(screen.getByText("test")).toBeVisible()

  const editButtons = screen.queryAllByText('Edytuj');
  fireEvent.click(editButtons[0])

  const homeListPart2 = screen.getByLabelText("Część 1:");
  expect(homeListPart2).toBeInTheDocument()

  fireEvent.change(homeListPart2, {target: {value: "change"}})
  fireEvent.click(screen.getByText("ZAAKCEPTUJ"))

  expect(screen.queryByText('test')).not.toBeInTheDocument()
  expect(screen.getByText("change")).toBeInTheDocument()

  fireEvent.click(editButtons[0])
  fireEvent.click(screen.getByTestId("delete-button"))

  expect(screen.queryByText('change')).not.toBeInTheDocument
});
