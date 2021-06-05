import { render } from "@testing-library/react";
import PhoneKeypad from "./index";

const noop = () => {};
describe("Keypad component", () => {
  it("should hide backspace & disable submit when no input", async () => {
    const { getByText, queryByTestId } = render(
      <PhoneKeypad setPhonewords={noop} setQuery={noop} onSearch={noop} />
    );

    expect(getByText("Go")).toBeDisabled();
    expect(queryByTestId("BackspaceBtn")).toBeFalsy();
  });
});
