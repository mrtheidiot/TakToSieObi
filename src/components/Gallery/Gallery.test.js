import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Gallery from "./Gallery";

it("checks if the thumbnails are visible and if the full sized image is visible after clicking on the image ", () => {
  const sources = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
  ];
  render(<Gallery sources={sources} />);

  const thumbailContiner = screen.getByTestId("thumbnail-gallery-container");
  expect(thumbailContiner).toBeVisible();

  const thumbnailImage = screen.getByTestId("thumbnail-image");
  expect(thumbnailImage).toBeInTheDocument();

  fireEvent.click(thumbnailImage);

  const fullImage = screen.getByAltText("gallery-image");
  expect(fullImage).toBeInTheDocument();
});
