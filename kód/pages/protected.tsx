import React from "react";
import { withSessionSsr } from "../lib/config/withSession";
import { useRouter } from "next/router";
import { NextPage } from "next";
interface User {
	users: {
		id: string;
		name: string;
		password: string;
		email: string;
	}[];
	session: {
		user: {
			id: string;
			username: string;
			email: string;
		};
	};
	
}

const PrivatePage: NextPage<User> = ({session}) => {

	const router = useRouter();
	console.log(session);
	console.log(session.user.username);
	return (
		<>
			<div>
				<h1>Hello {session.user.username}</h1>
				<p>Secret Content</p>

				<p> {JSON.stringify(session)}</p>
				<button
					onClick={async function () {
						await fetch("/api/logout", {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
						});

						router.push("/register");

						return logout();
					}}
				>
					Logout
				</button>
			</div>
		</>
	);
}
async function logout() {}

export const getServerSideProps = withSessionSsr(async ({ req, res }: {req:any, res:any}): Promise<{ notFound: boolean; props?: undefined; } | { props: { session: any; }; notFound?: undefined; }> => {
	const session = req.session;
	if (!session.user) {
		return {
			notFound: true,
		};
	}
	return {
		props: { session },
	};
});

export default PrivatePage;
