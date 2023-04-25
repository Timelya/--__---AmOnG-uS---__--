import { withSessionSsr } from "../../lib/config/withSession";
import { prisma } from "../../lib/prisma";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import { useRouter } from "next/router";
interface EventPageProps {
	event: {
		id: number;
		name: string;
		start: Date;
		end: Date;
	};
	session: any;
}

export default function EventPage(props: EventPageProps) {
	return (
		<div>
			<Head>
				<title>{props.event.name}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<h1>{props.event.name}</h1>
            <p>{String(props.event.start)}</p>
            <p>{String(props.event.end)}</p>
            

		</div>
	);
}

export const getServerSideProps = withSessionSsr(
	async ({ req, res, query }: { req: any; res: any, query: any}) => {
		const session = req.session;
		if (!session?.user) {
			res.setHeader("location", "/login");
			res.statusCode = 302;
			res.end();
			return { props: {} };
		}
		const event = await prisma?.event.findFirst({
			select: {
				id: true,
				name: true,
				start: true,
				end: true,
			},
			where: {
				id: Number(query.EventPage),
			},
		});

		return {
			props: { event, session },
		};
	}
);
