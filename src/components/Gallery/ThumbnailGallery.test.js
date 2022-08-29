import { render } from "@testing-library/react";
import placeholder from './../../assets/placeholder.png'
import ThumbnailGallery from "./ThumbnailGallery";

it("matches the UploadBar snapshot", () => {
  const props = {
    source: [placeholder],
  };

  const {
    container: { firstChild },
  } = render(<ThumbnailGallery {...props} />);

  expect(firstChild).toMatchSnapshot();
});
