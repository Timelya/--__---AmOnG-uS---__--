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

interface Invite{
	invites:
	{
		id: string;
		eventid: string;
		userid: string;
	}[];

}

function Home(invites: Invite) {
	return (
		<>
			<div>
				<Head>
					<title>Rendezvény lista</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Navbar />
				{
					invites.invites.map((invite) => (
						<InviteCard userId={invite.userid} eventId={invite.eventid} id={Number(invite.id)} key={Number(invite.id)} />
					))

				}
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
			},

		});
		invites = JSON.parse(JSON.stringify(invites));

		return {
			props: {
				invites,
			},
		};
	}
);
export default Home;
