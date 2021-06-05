import { fireEvent, render } from "@testing-library/react";
import PhoneKeypadButton from "./PhoneKeypadButton";

const noop = () => {};
describe("PhoneKeypadButton component", () => {
  it("should not be a button when not a phoneword digit", async () => {
    const { queryByRole } = render(
      <PhoneKeypadButton keypadDigit="1" onClick={noop} />
    );
    expect(queryByRole("button")).toBeFalsy();
  });

  it("should render button if valid phoneword digit", async () => {
    const { getByRole } = render(
      <PhoneKeypadButton keypadDigit="2" onClick={noop} />
    );
    const btn = getByRole("button");
    expect(btn).toBeTruthy();

    fireEvent.mouseDown(btn);
    expect(btn).toHaveStyle("backgroundColor: var(--tapped-black)");
  });
});
