import fs from "fs";
import { getPhonewordsMemo, savePhoneWordsMemo } from "./phoneword-server";

const DUMMY_MEMO = {
  "23": ["AD", "AE", "AF", "BD", "BE", "BF", "CD", "CE", "CF"],
};

jest.mock("fs", () => ({
  readFileSync: jest.fn(() => JSON.stringify(DUMMY_MEMO)),
  writeFile: jest.fn(),
}));

describe("Phoneword Server Utility Functions", () => {
  it("fetches phonewords memo from json", () => {
    expect(getPhonewordsMemo()).toEqual(DUMMY_MEMO);
  });

  it("writes phonewords to phoneword json", () => {
    savePhoneWordsMemo("23", DUMMY_MEMO["23"]);
    expect(fs.writeFile).toHaveBeenCalledTimes(1);
  });
});
