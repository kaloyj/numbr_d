import { render } from "@testing-library/react";
import Main from "../pages/index";

describe("Main component", () => {
  it("renders header and description correctly", async () => {
    const { getByText } = render(<Main />);

    expect(getByText("numbr_d")).toBeTruthy();
    expect(getByText(/generate phonewords/i)).toBeTruthy();
  });
});
