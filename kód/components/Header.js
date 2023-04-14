import Link from "next/link";
import useUser from "lib/useUser";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Header() {
	
	return (
		<header>
		<style jsx>{`
				ul {
					display: flex;
					list-style: none;
					margin-left: 0;
					padding-left: 0;
				}

				li {
					margin-right: 1rem;
					display: flex;
				}

				li:first-child {
					margin-left: auto;
				}

				a {
					color: #fff;
					text-decoration: none;
					display: flex;
					align-items: center;
				}

				a img {
					margin-right: 1em;
				}

				header {
					padding: 0.2rem;
					color: #fff;
					background-color: #333;
				}
			`}</style>
		</header>
	);
}
