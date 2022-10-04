import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { emailSchema } from "../../../schemas/email";
import z from 'zod';



export default function validate<T extends z.ZodTypeAny>(schema: T, handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (["POST", "PUT"].includes(req.method!)) {
      try {
        // const newSchema =<post
        //   req.method === "POST"
        //     ? schema
        //     : schema.concat(object({ id: number().required().positive() }));
        req.body = await schema.parseAsync(req.body)
        
      } catch (error) {
        return res.status(422).json(error);
      }
    }

    await handler(req, res)
  }
}