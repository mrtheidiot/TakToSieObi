import { render } from "@testing-library/react";

import Toggler from "./Toggler";

it("matches the Toggler snapshot", () => {
  const {
    container: { firstChild },
  } = render(<Toggler />);
  
  expect(firstChild).toMatchSnapshot()
});
