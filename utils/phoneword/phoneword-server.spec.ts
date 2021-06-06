import fs from "fs";
import got from "got";
import {
  getPhonewordsMemo,
  savePhoneWordsMemo,
  convertNumToRegex,
  getDictionaryWords,
} from "./phoneword-server";

const DUMMY_MEMO = {
  "23": ["AD", "AE", "AF", "BD", "BE", "BF", "CD", "CE", "CF"],
};

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => JSON.stringify(DUMMY_MEMO)),
  writeFile: jest.fn(),
}));

jest.mock("got", () =>
  jest.fn(() => ({
    body: JSON.stringify({ results: { data: DUMMY_MEMO["23"] } }),
  }))
);

describe("Phoneword Server Utility Functions", () => {
  it("fetches phonewords memo from json", () => {
    expect(getPhonewordsMemo()).toEqual(DUMMY_MEMO);
  });

  it("writes phonewords to phoneword json", () => {
    savePhoneWordsMemo("23", DUMMY_MEMO["23"]);
    expect(fs.writeFile).toHaveBeenCalledTimes(1);
  });

  it("converts num string to regex correctly", () => {
    expect(convertNumToRegex("235")).toEqual("^[abc][def][jkl]$");
    expect(convertNumToRegex("79")).toEqual("^[pqrs][wxyz]$");
  });

  it("call rapidapi endpoint for dictionary filter", async () => {
    const dummyInput = "23";
    const result = await getDictionaryWords(dummyInput);
    expect(got).toHaveBeenCalledTimes(1);
    expect(result.length).toEqual(DUMMY_MEMO[dummyInput].length);
  });
});
