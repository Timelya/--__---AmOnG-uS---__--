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
		if (
			users.find(
				(user) => 
                    user.email == email &&
                    user.password == sha256(password)
            )
		) {
            console.log(req.session)
			await req.session.save();
			res.send({ ok: true });

		}
		return res.status(403).send("");
	}
	return res.status(404).send("");
}
