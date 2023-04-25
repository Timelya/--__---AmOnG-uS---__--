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
			events: {},
		},
	});
	await prisma.user.create({
		data: {
			name: "b",
			email: "b@b.b",
			password: sha256("b"),
			events: {},
		},
	});
	//seeds the event table
	await prisma.event.create({
		data: {
			name: "Nagyfaszú koncert",

			start: "2021-01-01",
			end: "2021-01-01",
		},
	});
	await prisma.event.create({
		data: {
			name: "Kisfaszú koncert",
			start: "2021-01-01",
			end: "2021-01-01",
		},
	});
	//seeds the ticket table
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
