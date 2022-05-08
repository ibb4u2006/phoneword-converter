import { convertNumberToPhonewords } from "utils/converter";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  result: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    try {
      const { input } = req.body;
      const converted = convertNumberToPhonewords(input);
      res.status(200).json({ result: converted });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(200).json({ result: "Nothing Found!" });
  }
}
