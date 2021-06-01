import fs from "fs";
import {
  isValidNumString,
  getPhonewordsMemo,
  savePhoneWordsMemo,
} from "./phoneword";

const DUMMY_MEMO = {
  "23": ["AD", "AE", "AF", "BD", "BE", "BF", "CD", "CE", "CF"],
};

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => JSON.stringify(DUMMY_MEMO)),
  writeFile: jest.fn(),
}));

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

  it("fetches phonewords memo from json", () => {
    expect(getPhonewordsMemo()).toEqual(DUMMY_MEMO);
  });

  it("writes phonewords to phoneword json", () => {
    savePhoneWordsMemo("23", DUMMY_MEMO["23"]);
    expect(fs.writeFile).toHaveBeenCalledTimes(1);
  });
});
