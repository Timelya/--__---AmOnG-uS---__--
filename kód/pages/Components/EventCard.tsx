import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
//typescript interface for the passed props
interface EventCardProps {
	name: string;
	key: string;
}
function EventCard(props: EventCardProps) {
	return (
		<div className="inline-block w-48 m-4 h-60 rounded-xl bg-slate-900" id={props.key}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg"
				alt="Event neve"
				className="h-48 rounded-t-xl"
			/>
			<div>
				<button className="w-48 h-12 text-white" >{props.name}</button>
			</div>
		</div>
	);
}
export default EventCard;
