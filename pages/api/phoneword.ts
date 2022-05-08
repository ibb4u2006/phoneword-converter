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
      if (converted.length < 2621439) {
        res.status(200).json({ result: converted });
      } else {
        res.status(200).json({
          result:
            "Oops! This request cannot be handled because of large response size! API Routes are meant to respond quickly and are not intended to support responding with large amounts of data. Please reduce the length of your entry.",
        });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(200).json({ result: "Nothing Found!" });
  }
}
