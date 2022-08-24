import { render } from "@testing-library/react";

import UploadBar from "./UploadBar";

it("matches the UploadBar snapshot", () => {
  const {
    container: { firstChild },
  } = render(<UploadBar />);
  
  expect(firstChild).toMatchSnapshot()
});
