import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

import App from "./App";

it("fetches data from api and checks if content is rendered", async () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );

  const homeSection = await screen.findAllByTestId("home-section");
  expect(homeSection[0]).toBeVisible();

  const navCourses = screen.getByText("TRENINGI OBEDIENCE");
  expect(navCourses).toBeVisible();
  fireEvent.click(navCourses);
  const coursesSection = await screen.findAllByTestId("courses-section");
  expect(coursesSection[0]).toBeVisible();

  const navEvents = screen.getByText("WYDARZENIA");
  expect(navEvents).toBeVisible();
  fireEvent.click(navEvents);
  const eventsSection = await screen.findAllByTestId("events-section");
  expect(eventsSection[0]).toBeVisible();

  const navAboutMe = screen.getByText("JA I MOJE PSY");
  expect(navAboutMe).toBeVisible();
  fireEvent.click(navAboutMe);
  const aboutMeSection = await screen.findAllByTestId("aboutme-section");
  expect(aboutMeSection[0]).toBeVisible();

  const navContact = screen.getByText("KONTAKT");
  expect(navContact).toBeVisible();
  fireEvent.click(navContact);
  const contact = screen.getByTestId("contact");
  expect(contact).toBeVisible();
});
