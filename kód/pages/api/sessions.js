import { withSessionRoute } from "lib/config/withSession.js";
import { sha256 } from "js-sha256";

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
		console.log("req.body" + JSON.stringify(req.body));
		const email = req.body.data.email;
		const password = req.body.data.password;
		const foundUser = users.find(
			(user) => user.email == email && user.password == sha256(password)
		);
		if (
			//check if foundUser is not undefined
			foundUser !== undefined
		) {
			req.session.user = {
				id: foundUser.id,
				email: foundUser.email,
				username: foundUser.name,
				id: foundUser.id,
			};
			await req.session.save();
			res.send({ ok: true });
		}
		return res.status(403).send("");
	}
	return res.status(404).send("");
}
/*
const { username } = await req.body;

  try {
    const

    const user = { isLoggedIn: true, login, avatarUrl: avatar_url };
    req.session.user = user;
    await req.session.save();
    res.json(user);
*/
