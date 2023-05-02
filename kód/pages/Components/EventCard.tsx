import { useRouter } from "next/router";
//typescript interface for the passed props
interface EventCardProps {
	name: string;
	id: string;
	
}
function EventCard(props: EventCardProps) {
	const router = useRouter();

	return (
		<div id="cardName" className="inline-block w-48 m-4 h-60 rounded-xl">
  <div id={props.id}>
  </div>
  <div id="cardModeData" className="h-48 rounded-t-xl">
  </div>
  <div>
    <a href={"events/" + props.id}></a>
    <button className="w-48 h-12 ">
      {props.name}
    </button>
  </div>
</div>


	);
}
export default EventCard;
