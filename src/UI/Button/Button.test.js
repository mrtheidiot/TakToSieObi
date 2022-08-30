import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./Button";

it("checks if the Footer text is visible", () => {
  const props = {
    button: {
      backgroundColor: "00000",
      textColor: "ffffff",
      address: "https://www.facebook.pl",
      text: "Facebook",
      internal: 0,
    },
  };

  render(<Button {...props} />)

  expect(screen.getByText("Facebook").closest("a")).toHaveAttribute(
    "href",
    "https://www.facebook.pl"
  );
});
