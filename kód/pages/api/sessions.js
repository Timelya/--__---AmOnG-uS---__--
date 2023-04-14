import { withSessionRoute } from "lib/config/withSession.js";
import { sha256 } from "js-sha256";
import { Console } from "console";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req, res) {
	const users = await prisma?.user.findMany({
		select: {
			id: true,
			name: true,
			password: true,
			email: true,
		},
	});

	if (req.method === "POST") {
		const email = req.body.data.email;
		const password = req.body.data.password;
		let currentUser
		if (currentUser =
			users.find(
				(user) =>
					user.email == email && user.password == sha256(password)
			)
		) {
			console.log(req.session);
			req.session.user = currentUser;
			await req.session.save();
			res.send({ ok: true });
		}
		return res.status(403).send("");
	}
	return res.status(404).send("");
}

/*
//import prisma client
import { prisma } from "lib/prisma";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
export default withIronSessionApiRoute(async (req, res) => {
	const { email } = await req.body.email;

	try {
		const {
			data: { login, avatar_url },
		} = await prisma?.user.findMany({
			select: {
				id: true,
				name: true,
				password: true,
				email: true,
			},
		});
	

		const user = { isLoggedIn: true, login, avatarUrl: avatar_url };
		req.session.user = user;
		await req.session.save();
		res.json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}, sessionOptions);
*/
