import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { prisma } from "../../lib/prisma";
import Navbar from "./Navbar";
import useInvite from "../../lib/useInvite";
import fetchJson from "../../lib/fetchJson";
interface InviteCardProps {
	id: number;
	eventName: string;
}

function InviteCard(props: InviteCardProps) {
	return (
		<div
			className="inline-block w-48 m-4 h-60 rounded-t-xl bg-slate-900"
			id={props.id as unknown as string}
		>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg"
				alt="Event neve"
				className="h-48 rounded-t-xl"
			/>

			<div className="p-0 m-0">
				<div>Meghívtak a #{props.eventName} eventre</div>
				<button
					className="w-24 h-12 text-white bg-green-500 rounded-bl-xl"
					onClick={async (e) => {
						e.preventDefault();
						handleInvite(props.id, false);
						//refresh the page
						window.location.reload();
					}}
				>
					✔
				</button>

				<button
					className="w-24 h-12 text-white bg-red-500 rounded-br-xl"
					onClick={async (e) => {
						e.preventDefault();
						handleInvite(props.id, false);
					}}
				>
					X
				</button>
			</div>
		</div>
	);
}
async function handleInvite(id: number, accept: boolean) {
	try {
		console.log(id, accept);
		const response = await fetch("/api/handleInvite", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				id: id,
				accept: accept,
			}),
		});
		if (response.ok) {
			console.log(response);
		}
	} catch (error) {
		console.error("An unexpected error happened:", error);
	}
}

export default InviteCard;
