import { testApiHandler } from "next-test-api-route-handler";
import generateApi from "../pages/api/generate";
import { ErrorData, Data } from "../types/generate-api";

// normally i would mock fs here to intercept all calls,
// but given the time constraint, and the case where
// this app will only be ran locally
// i opted to let the test hit the disk for read & write

const isArrayUnique = (arr: string[]) => new Set(arr).size === arr.length;

describe("phonewords generation API", () => {
  it("returns an exhaustive list", async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = "/api/generate"),
      handler: generateApi,
      test: async ({ fetch }) => {
        let res = await fetch({
          method: "POST",
          body: JSON.stringify({ numStr: "23" }),
        });
        const { phonewords }: Data = await res.json();
        expect(phonewords.length).toBe(9);
        expect(phonewords).toEqual([
          "AD",
          "AE",
          "AF",
          "BD",
          "BE",
          "BF",
          "CD",
          "CE",
          "CF",
        ]);

        res = await fetch({
          method: "POST",
          body: JSON.stringify({ numStr: "2653" }),
        });
        const { phonewords: fourLetterPhonewords }: Data = await res.json();
        expect(fourLetterPhonewords.length).toBe(3 * 3 * 3 * 3);
        expect(isArrayUnique(fourLetterPhonewords)).toBeTruthy();
        expect(fourLetterPhonewords).toContain("COKE");
        expect(fourLetterPhonewords).not.toContain("DANK");

        res = await fetch({
          method: "POST",
          body: JSON.stringify({ numStr: "445866" }),
        });
        const { phonewords: sixLetterPhonewords }: Data = await res.json();
        expect(sixLetterPhonewords.length).toBe(3 * 3 * 3 * 3 * 3 * 3);
        expect(isArrayUnique(sixLetterPhonewords)).toBeTruthy();
        expect(sixLetterPhonewords).toContain("HILTON");
        expect(sixLetterPhonewords).not.toContain("HILTED");
      },
    });
  });

  it("throws a 400 error with a bad request", async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = "/api/generate"),
      handler: generateApi,
      test: async ({ fetch }) => {
        // with 1 && 0
        let res = await fetch({
          method: "POST",
          body: JSON.stringify({ numStr: "1230" }),
        });
        const { message }: ErrorData = await res.json();
        expect(message).toContain("Invalid number string");

        // empty string
        res = await fetch({
          method: "POST",
          body: JSON.stringify({ numStr: "" }),
        });
        const { message: messageForEmptyString }: ErrorData = await res.json();
        expect(messageForEmptyString).toContain("Invalid number string");

        // letters
        res = await fetch({
          method: "POST",
          body: JSON.stringify({ numStr: "234ABC" }),
        });
        const { message: messageForChars }: ErrorData = await res.json();
        expect(messageForChars).toContain("Invalid number string");

        // special characters
        res = await fetch({
          method: "POST",
          body: JSON.stringify({ numStr: "2349@!#$%^" }),
        });
        const { message: messageForSpecialChars }: ErrorData = await res.json();
        expect(messageForSpecialChars).toContain("Invalid number string");
      },
    });
  });
});
