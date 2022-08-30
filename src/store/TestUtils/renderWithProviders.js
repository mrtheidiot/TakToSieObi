import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "./store";

// customer renderer which preloads the store with content for testing components using redux

function renderWithProviders(
  ui,
  { preloadedState = {}, store = setupStore(preloadedState) } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>
      {children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper }) };
}


export default renderWithProviders;
