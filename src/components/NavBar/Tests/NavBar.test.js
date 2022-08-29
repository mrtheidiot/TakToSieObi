import NavBar from "./../NavBar";
import { BrowserRouter as Router } from "react-router-dom";

import renderWithProviders from "./../../../store/TestUtils/renderWithProviders";

it("matches the NavBar snapshot", () => {
  const initialState = {
    ui: { editMode: false },
  };

  const {
    container: { firstChild },
  } = renderWithProviders(
    <Router>
      <NavBar />
    </Router>,
    {
      preloadedState: initialState,
    }
  );

  expect(firstChild).toMatchSnapshot();
});
