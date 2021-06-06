import fs from "fs";
import got from "got";
import { PHONE_WORD_DIGIT_MAP } from ".";

interface PhonewordMap {
  [key: string]: string[];
}

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

export const convertNumToRegex = (numStr: string) => {
  const str = numStr
    .split("")
    .reduce(
      (res, digit) =>
        `${res}[${PHONE_WORD_DIGIT_MAP[digit].join("").toLowerCase()}]`,
      ""
    );
  return `^${str}$`;
};

export const getDictionaryWords = async (numStr: string) => {
  let searchedWords: string[] = [];
  const regexString = convertNumToRegex(numStr);

  try {
    const { body } = await got(
      `https://wordsapiv1.p.rapidapi.com/words/?letterPattern=${encodeURI(
        regexString
      )}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.RAPID_API_KEY,
          "x-rapidapi-host": process.env.RAPID_API_HOST,
        },
      }
    );

    searchedWords = JSON.parse(body).results.data;
  } catch (e) {
    console.log("RapidAPI request failed", { e });
  }

  return searchedWords;
};
