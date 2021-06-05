import { render } from "@testing-library/react";
import PhoneContacts from "./index";

describe("PhoneContacts component", () => {
  it("render all 3 contact links", async () => {
    const { getByText } = render(<PhoneContacts />);

    expect(getByText(/Linkedin/i)).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/carlo-janea-2880a2132/"
    );

    expect(getByText(/Portfolio/i)).toHaveAttribute(
      "href",
      "https://carlojanea.com/"
    );

    expect(getByText(/Twitter/i)).toHaveAttribute(
      "href",
      "https://twitter.com/carlojanea/"
    );
  });
});
