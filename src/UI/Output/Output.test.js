import { render } from "@testing-library/react";

import Output from "./Output";

it("matches the Output snapshot", () => {
  const text =
    "Is it /b/possible/b/ to be such a /l/beaurifull/l/ person?/addresses//treningi";

  const {
    container: { firstChild },
  } = render(<Output text={text} />);

  expect(firstChild).toMatchSnapshot();
});
