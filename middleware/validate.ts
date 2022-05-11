import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";

export function validate(
  schema: OptionalObjectSchema<ObjectShape>,
  handler: NextApiHandler
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (["POST", "PUT"].includes(req.method!)) {
      try {
        // const newSchema =
        //   req.method === "POST"
        //     ? schema
        //     : schema.concat(object({ id: number().required().positive() }));
        req.body = await schema
          .camelCase()
          .validate(req.body, { abortEarly: false });
      } catch (error) {
        return res.status(422).json(error);
      }
    }

    await handler(req, res);
  };
}
