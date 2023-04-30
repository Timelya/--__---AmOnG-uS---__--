import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  const { name } = req.body;

  try {
    // UPDATE
    await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
      },
    });
    res.status(200).json({ message: "Name updated" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
}
