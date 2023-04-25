import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
//typescript interface for the passed props
interface EventCardProps {
	name: string;
	id: string;
	
}
function EventCard(props: EventCardProps) {
	const router = useRouter();

	return (
		<div
			className="inline-block w-48 m-4 h-60 rounded-xl bg-slate-900"
			id={props.id}
		>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg"
				alt="Event neve"
				className="h-48 rounded-t-xl"
			/>
			<div>
				<a href={"events/" + props.id}>dsadas</a>
				<button className="w-48 h-12 text-white">{props.name}</button>
			</div>
		</div>
	);
}
export default EventCard;
