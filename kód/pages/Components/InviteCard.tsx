import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
//typescript interface for the passed props
interface EventCardProps {
	name: string;
	id: string;
}

function InviteCard(props: EventCardProps) {
	return (
		<div className="inline-block w-48 m-4 h-60 rounded-t-xl bg-slate-900" id={props.id}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg"
				alt="Event neve"
				className="h-48 rounded-t-xl"
			/>
			
			<div>
				
				<button className="w-48 h-12 text-white ">{props.name}</button>
				
			</div>
				<button className="w-24 h-12 text-white bg-green-500 rounded-bl-xl" onClick={() => acceptInvite(props.id)}>✔</button>
				<button className="w-24 h-12 text-white bg-red-500 rounded-br-xl" onClick={() => denyInvite(props.id)}	>X</button>

			
		</div>
	);
}
export default InviteCard;

function acceptInvite(id: string) {
	console.log("Invite accepted" + id)
}

function denyInvite(id: string) {
	console.log("Invite denied" + id)
}