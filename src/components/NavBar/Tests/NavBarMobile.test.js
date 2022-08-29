import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

import NavBarMobile from "./../NavBarMobile";

it("checks if the navbar text is visible only after the click", () => {
  const navData = [
    { id: 1, title: "TRENINGI OBEDIENCE", to: "/treningi" },
    { id: 3, title: "WYDARZENIA", to: "/wydarzenia" },
    { id: 4, title: "JA I MOJE PSY", to: "/omnie" },
    { id: 5, title: "KONTAKT", to: "/kontakt" },
  ];

  const props = {
    navData: navData,
    isLoggedIn: false,
    setEdititngModeHandler: null,
    editMode: false,
  };

  render(
    <Router>
      <NavBarMobile {...props} />
    </Router>
  );

  expect(screen.queryByText("WYDARZENIA")).not.toBeInTheDocument();

  const hamburger = screen.getByTestId("hamburger");
  expect(hamburger).toBeVisible();

  fireEvent.click(hamburger);
  expect(screen.getByText("WYDARZENIA")).toBeInTheDocument();
});
