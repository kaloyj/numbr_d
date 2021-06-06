import type { NextApiRequest, NextApiResponse } from "next";
import { GenerateApiResult } from "../../types/generate-api";
import {
  FILTERS,
  isValidNumString,
  PHONE_WORD_DIGIT_MAP,
} from "../../utils/phoneword";
import {
  savePhoneWordsMemo,
  getPhonewordsMemo,
  getDictionaryWords,
} from "../../utils/phoneword/phoneword-server";

const generatePhonewords = (
  digits: string[],
  phonewords: string[],
  index = 0,
  phoneword = ""
) => {
  if (index >= digits.length) {
    phonewords.push(phoneword);
    return;
  }

  const letters = PHONE_WORD_DIGIT_MAP[digits[index]];

  letters.forEach((letter) =>
    generatePhonewords(digits, phonewords, index + 1, `${phoneword}${letter}`)
  );
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<GenerateApiResult>
) => {
  const { numStr, filter = FILTERS.all } = JSON.parse(req.body);

  if (typeof numStr !== "string" || !isValidNumString(numStr))
    return res
      .status(400)
      .json({ message: "Invalid number string passed for phone generation" });

  if (filter === FILTERS.dictionary) {
    const result = await getDictionaryWords(numStr);
    return res.status(200).json({ phonewords: result });
  } else {
    const phonewordsMemo = getPhonewordsMemo();
    if (phonewordsMemo[numStr])
      return res.status(200).json({ phonewords: phonewordsMemo[numStr] });

    const digits: string[] = numStr.split("");
    const phonewords: string[] = [];

    generatePhonewords(digits, phonewords);

    // can be any length
    // we're using 5 as a personal choice
    // to save the serverless function from
    // heavy computing
    if (numStr.length >= 5) savePhoneWordsMemo(numStr, phonewords);

    return res.status(200).json({ phonewords });
  }
};
