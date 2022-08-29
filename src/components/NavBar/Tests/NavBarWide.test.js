import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

import NavBarWide from "./../NavBarWide";

it("checks if the navbar text is visible", () => {
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
      <NavBarWide {...props} />
    </Router>
  );

  const navLink = screen.getByText("WYDARZENIA");
  expect(navLink).toBeVisible();
});
