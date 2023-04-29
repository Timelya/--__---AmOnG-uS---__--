import { withSessionRoute } from "../../lib/config/withSession";
import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handleInvite(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const currentInvite = await prisma?.invites.findFirst({
		select: {
			id: true,
			accepted: true,
		},
		where: {
			id: req.query.id as unknown as number,
		},
	});

	if (req.method === "POST") {
		if (
			currentInvite !== undefined
		) {
			await prisma?.invites.update({
				where: {
					id: req.body.id as unknown as number,
				},
				data: {
					accepted: req.body.accept? 1 : -1,
				},
			});
			return res.status(200).send("");
		}
		return res.status(403).send("");
	}
	return res.status(404).send("");
}
