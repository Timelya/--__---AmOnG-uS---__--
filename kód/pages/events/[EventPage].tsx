import { useState } from "react";
import { useRouter } from "next/router";
import { withSessionSsr } from "../../lib/config/withSession";
import { prisma } from "../../lib/prisma";
import Head from "next/head";
import Navbar from "../Components/Navbar";
let asd: Number;

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
	const router = useRouter();
	const { id } = router.query;
	//asd is id as number
	asd = Number(id);
	return (
		<div>
			<Head>
				<title>{props.event.name}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<h1>{props.event.name}</h1>
		</div>
	);
}

export const getServerSideProps = withSessionSsr(
	async ({ req, res }: { req: any; res: any }) => {
		const session = req.session;

		const event = await prisma?.event.findFirst({
			select: {
				id: true,
				name: true,
				start: true,
				end: true,
			},
			where: {
				id: asd as number,
			},
		});

		return {
			props: { event, session },
		};
	}
);
