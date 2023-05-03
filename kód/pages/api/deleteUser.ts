import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const name = req.body.name;

	try {
		//find user

		const userToBeDeleted = await prisma.user.findFirst({
			where: {
				name: name,
			},
		});
		//if user isnt found throw http error
		if (!userToBeDeleted) {
			res.status(404).json({ message: "Nincs ilyen felhasználó" });
			throw new Error("Nincs ilyen felhasználó");
		} else {
			await prisma.user.delete({
				where: {
					id: userToBeDeleted.id,
				},
			});
			res.status(200).json({ message: "Sikeres regisztráció" });
		}
	} catch (error) {
		res.status(400).json({ message: error });
	}
}
