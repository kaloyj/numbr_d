import { render } from "@testing-library/react";
import PhoneTabs, { PHONE_TAB_VIEWS } from "./index";

const noop = () => {};

describe("PhoneTabs component", () => {
  it("renders all three tabs and highlights visibleTab", async () => {
    const { getByText } = render(
      <PhoneTabs visibleTab={PHONE_TAB_VIEWS.keypad} setVisibleTab={noop} />
    );
    const keypadBtn = getByText(PHONE_TAB_VIEWS.keypad);
    expect(keypadBtn).toBeTruthy();
    expect(getByText(PHONE_TAB_VIEWS.contacts)).toBeTruthy();
    expect(getByText(PHONE_TAB_VIEWS.results)).toBeTruthy();
    expect(keypadBtn).toHaveStyle("color: var(--accent)");
  });
});
