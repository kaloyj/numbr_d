import { render, within } from "@testing-library/react";
import PhonewordsList from "./index";

const EMPTY_MESSAGE = "No searched query, yet.";

describe("PhonewordsList component", () => {
  it("renders an empty list correctly", async () => {
    const { getByText } = render(<PhonewordsList query="" phonewords={[]} />);
    expect(getByText(EMPTY_MESSAGE)).toBeTruthy();
  });

  it("renders a phoneword list correctly", async () => {
    const dummyResult = ["A", "B", "C", "D", "E", "F"];
    const query = "235";
    const { queryByText, getByText, getByRole } = render(
      <PhonewordsList query={query} phonewords={dummyResult} />
    );

    expect(queryByText(EMPTY_MESSAGE)).toBeFalsy();
    expect(getByText(query)).toBeTruthy();
    expect(getByText(dummyResult.length)).toBeTruthy();

    const list = getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(dummyResult.length);
  });
});
