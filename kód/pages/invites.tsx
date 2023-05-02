import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { prisma } from "../lib/prisma";
import { useRouter } from "next/router";
import Navbar from "./Components/Navbar";
import EventCard from "./Components/EventCard";
import { GetServerSideProps } from "next";
import DarkMode from "./Components/DarkMode";
import EventAdd from "./Components/eventAdd";
import InviteCard from "./Components/InviteCard";
import { withSessionSsr } from "../lib/config/withSession";
interface InvitePageProps {
	invites: {
		eventid: string;
		id: string;
		eventName: string;
	}[],
	eventNames: {
		id: string;
		name: string;
	}[];
}


function Home(props: InvitePageProps) {
	console.log(props);

	return (
		<>
			<div>
				<Head>
					<title>Rendezvény lista</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Navbar />
				{props.invites.map((invite) => (
					<InviteCard
						id={Number(invite.id)}
						eventName={props.eventNames.find(
							(event) => event.id == invite.eventid
						)?.name as string}
					/>
				))}
				<DarkMode />
			</div>
		</>
	);
}
export const getServerSideProps = withSessionSsr(
	async ({ req, res }: { req: any; res: any }) => {
		console.log(req.session);
		if (!req.session) {
			return {
				redirect: {
					destination: "/register",
					permanent: false,
				},
			};
		}
		let invites = await prisma?.invites.findMany({
			select: {
				id: true,
				eventid: true,
				userid: true,
			},
			where: {
				userid: req.session.id,
				accepted: 0,
			},
		});
		const eventnames = await prisma?.event.findMany({
			select: {
				id: true,
				name: true,
			},
		});

		invites = JSON.parse(JSON.stringify(invites));
		console.log(eventnames);
		return {
			props: {
				invites,
				eventNames: eventnames,
			},
		};
	}
);
export default Home;
