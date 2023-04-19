const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
//declare sha256
const sha256 = require("js-sha256");
async function main() {
	//seeds the user table
	await prisma.user.create({
		data: {
			name: "a",
			email: "a@a.a",
			password: sha256("a"),
			admin: true,
		},
	});
	await prisma.user.create({
		data: {
			name: "b",
			email: "b@b.b",
			password: sha256("b"),
			admin: false,
		},
	});
	//seeds the event table
	await prisma.event.create({
		data: {
			name: "a",
			description:
				"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",

			start: "2021-01-01",
			end: "2021-01-01",
		},
	});
	await prisma.event.create({
		data: {
			name: "b",
			description:
				"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
			start: "2021-01-01",
			end: "2021-01-01",
		},
	});
	//seeds the ticket table
	await prisma.ticket.create({
		data: {
			user_id: 1,
			event_id: 1,
		},
	});
	await prisma.ticket.create({
		data: {
			user_id: 2,
			event_id: 2,
		},
	});
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
