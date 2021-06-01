import fs from "fs";

interface PhonewordMap {
  [key: string]: string[];
}

export const PHONE_WORD_DIGIT_MAP: PhonewordMap = {
  "2": ["A", "B", "C"],
  "3": ["D", "E", "F"],
  "4": ["G", "H", "I"],
  "5": ["J", "K", "L"],
  "6": ["M", "N", "O"],
  "7": ["P", "Q", "R", "S"],
  "8": ["T", "U", "V"],
  "9": ["W", "X", "Y", "Z"],
};

export const isValidNumString = (numString: string) =>
  /^[2-9]+$/.test(numString);

export const getPhonewordsMemo = () => {
  let memo: PhonewordMap = {};

  try {
    const rawPhonewords = fs.readFileSync("phonewords-memo.json");
    memo = JSON.parse(rawPhonewords.toString());
  } catch (e) {
    // no existing memo yet, do nothing
    // proceeding ...
  }

  return memo;
};

export const savePhoneWordsMemo = (numStr: string, phonewords: string[]) => {
  const currentPhonewords = getPhonewordsMemo();

  fs.writeFile(
    "phonewords-memo.json",
    JSON.stringify({ ...currentPhonewords, [numStr]: phonewords }, null, 2),
    (err) => {
      if (err) throw err;
      console.log("Write successful");
    }
  );
};
