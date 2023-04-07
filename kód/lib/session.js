import { withSessionRoute } from "lib/config/withSession.js";

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
        const { email, password } = req.body;

        if (users.find((user) => user.email == email && user.password == password)) {
            req.session.user = {
                username: email,
            };
            await req.session.save();
            res.send({ ok: true });
        }
        return res.status(403).send("");
    }
    return res.status(404).send("");
}

export const sessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "iron-session/examples/next.js",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  };
