import { render, within, fireEvent } from "@testing-library/react";
import { FILTERS } from "../../../utils/phoneword";
import PhonewordsList from "./index";

const EMPTY_MESSAGE = "No searched query, yet.";
const noop = () => {};

describe("PhonewordsList component", () => {
  it("renders an empty unsearched list correctly", async () => {
    const { getByText } = render(
      <PhonewordsList
        query=""
        phonewords={[]}
        setPhonewords={noop}
        filter={FILTERS.all}
        setFilter={noop}
      />
    );
    expect(getByText(EMPTY_MESSAGE)).toBeTruthy();
  });

  it("renders a phoneword list correctly", async () => {
    const dummyResult = ["A", "B", "C", "D", "E", "F"];
    const query = "235";
    const { queryByText, getByText, getByRole } = render(
      <PhonewordsList
        query={query}
        phonewords={dummyResult}
        setPhonewords={noop}
        filter={FILTERS.all}
        setFilter={noop}
      />
    );

    expect(queryByText(EMPTY_MESSAGE)).toBeFalsy();
    expect(getByText(query)).toBeTruthy();
    expect(getByText(dummyResult.length)).toBeTruthy();

    const list = getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(dummyResult.length);
  });

  it("renders a phoneword list filters correctly", async () => {
    const { getByText } = render(
      <PhonewordsList
        query="235"
        phonewords={["A", "B", "C", "D", "E", "F"]}
        setPhonewords={noop}
        filter={FILTERS.all}
        setFilter={noop}
      />
    );

    const allFilterBtn = getByText(FILTERS.all);
    const dictionaryFilterBtn = getByText(FILTERS.dictionary);

    expect(allFilterBtn).toBeTruthy();
    expect(dictionaryFilterBtn).toBeTruthy();
    expect(allFilterBtn).toBeDisabled();
    expect(dictionaryFilterBtn).not.toBeDisabled();
  });

  it("renders an empty phoneword list result correctly", async () => {
    const { getByText } = render(
      <PhonewordsList
        query="235"
        phonewords={[]}
        setPhonewords={noop}
        filter={FILTERS.all}
        setFilter={noop}
      />
    );
    expect(getByText("No results found.")).toBeTruthy();
  });
});
