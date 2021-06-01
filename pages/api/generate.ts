// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { isValidNumString, PHONE_WORD_DIGIT_MAP } from "../../utils/phoneword";

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

export interface Data {
  phonewords: string[];
}

export interface ErrorData {
  message: string;
}

export default (
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) => {
  const numStr = req.body;

  if (typeof numStr !== "string" || !isValidNumString(numStr))
    return res
      .status(400)
      .json({ message: "Invalid number string passed for phone generation" });

  const digits: string[] = numStr.split("");
  const phonewords: string[] = [];

  generatePhonewords(digits, phonewords);

  // TODO: save phonewords result in json
  // access memo if existing

  res.status(200).json({ phonewords });
};
