// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  phonewords: string[];
}

interface ErrorData {
  message: string;
}

export default (
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) => {
  const numStr = req.body;

  if (!numStr || typeof numStr !== "string")
    res
      .status(400)
      .json({ message: "Invalid number string passed for phone generation" });

  const phonewords: string[] = [];

  // TODO: do logic here

  res.status(200).json({ phonewords });
};
