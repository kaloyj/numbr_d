import { isValidNumString } from ".";

const DUMMY_MEMO = {
  "23": ["AD", "AE", "AF", "BD", "BE", "BF", "CD", "CE", "CF"],
};

describe("Phoneword Utility Functions", () => {
  it("validates regex correctly", () => {
    expect(isValidNumString("123")).not.toBeTruthy();
    expect(isValidNumString("230")).not.toBeTruthy();
    expect(isValidNumString("a123")).not.toBeTruthy();
    expect(isValidNumString("ABC0123")).not.toBeTruthy();
    expect(isValidNumString("@233")).not.toBeTruthy();
    expect(isValidNumString("")).not.toBeTruthy();

    expect(isValidNumString("234")).toBeTruthy();
    expect(isValidNumString("444")).toBeTruthy();
    expect(isValidNumString("4567893")).toBeTruthy();
  });
});
