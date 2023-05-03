import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id, name } = req.body;
  try {
    const userToBeDeleted = await prisma.user.findFirst({
			where: {
				name: name,
			},
		});
    // UPDATE
    await prisma.user.update({
      where: {
        id: userToBeDeleted.id as number,
      },
      data: {
        name: name,
      },
    });
    res.status(200).json({ message: "Name updated" });
  } catch (error) {
    res.status(400).json({ message: error as string});
  }
}
