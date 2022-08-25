import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderWithProviders from "../../store/TestUtils/renderWithProviders";

import AboutMe from "./AboutMe";

it("renders the AboutMe page", () => {
  const initialState = {
    aboutme: {
      aboutMeContent: [{ id: 1, title: "title", parts: [] }],
    },
    ui: { editMode: true },
  };

  renderWithProviders(<AboutMe />, {
    preloadedState: initialState,
  });
  const titleElement = screen.getByText("title");
  expect(titleElement).toBeInTheDocument();
});
