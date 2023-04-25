import { withSessionSsr } from "../lib/config/withSession";
import Navbar from "./Components/Navbar";
import { prisma } from "../lib/prisma";


interface MyEventsProps {
	event: any;
	session: any;
}

export default function MyEvents(props: MyEventsProps) {
	return (
		<>
			<Navbar />
			<div>
				<h1>My Events</h1>
				<p>Here you can see your events</p>
				<ul>
					{props.event.map((event: any) => (
						<li key={event.id}>
							<h2>{event.name}</h2>
							<p>Start: {event.start}</p>
							<p>End: {event.end}</p>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export const getServerSideProps = withSessionSsr(
	async ({ req, res, query }: { req: any; res: any; query: any }) => {
		const session = req.session;
		if (!session?.user) {
			res.setHeader("location", "/register");
			res.statusCode = 302;
			res.end();
			return { props: {} };
		}
		console.log(session.user);
		let event = await prisma?.event.findMany({
			select: {
				id: true,
				name: true,
				start: true,
				end: true,
                organizerId: true,
			},
            where: {
                organizerId: session.user.id
            }

		});

		return {
			props: { event, session },
		};
	}
);
