import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "./../../../store/index";

import AboutMe from "./../AboutMe";

it("renders the AboutMe page", () => {
  render(
    <Provider store={store}>
      <AboutMe />
    </Provider>
  );

  const AboutMeMainSection = screen.getByTestId("aboutme-mainsection");
  expect(AboutMeMainSection).toBeInTheDocument();
});
