import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// import AboutMeActions from "./AboutMeActions";
// import AddOrEdit from "../../../components/Overlays/ActionsOverlay/AddOrEdit";
import renderWithProviders from "./../../../store/TestUtils/renderWithProviders";
import AboutMe from "../AboutMe";

it("creates new section, edits it and deletes on AboutMe page", () => {
  window.testMode = true
  const initialState = {
    aboutme: {
      aboutMeContent: [{ id: 1, title: "title", parts: [] }],
    },
    ui: { editMode: true },
  };

  renderWithProviders(<AboutMe />, {
    preloadedState: initialState,
  });

  fireEvent.click(screen.getByText("Dodaj"));

  const aboutMeFormTitle = screen.getByTestId("aboutMeActions-title");
  expect(aboutMeFormTitle).toBeInTheDocument();

  fireEvent.change(aboutMeFormTitle, { target: { value: "test" } });
  expect(aboutMeFormTitle.value).toBe("test");

  fireEvent.click(screen.getByText("ZAAKCEPTUJ"))
  expect(aboutMeFormTitle).not.toBeInTheDocument()

  expect(screen.getByText("test")).toBeVisible()

  const editButtons = screen.queryAllByText('Edytuj');
  fireEvent.click(editButtons[1])

  const aboutMeFormTitle2 = screen.getByTestId("aboutMeActions-title");
  expect(aboutMeFormTitle2).toBeInTheDocument()

  fireEvent.change(aboutMeFormTitle2, {target: {value: "change"}})
  fireEvent.click(screen.getByText("ZAAKCEPTUJ"))

  expect(screen.queryByText('test')).not.toBeInTheDocument()
  expect(screen.getByText("change")).toBeInTheDocument()

  fireEvent.click(editButtons[1])
  fireEvent.click(screen.getByTestId("delete-button"))

  expect(screen.queryByText('change')).not.toBeInTheDocument
});
