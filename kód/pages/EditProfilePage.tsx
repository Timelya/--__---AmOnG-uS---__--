import { useState } from "react";
import { RouteComponentProps } from "@reach/router";
//import prisma
import { prisma } from "../lib/prisma";
import { withSessionSsr } from "../lib/config/withSession";
import { redirect } from "next/dist/server/api-utils";
import Navbar from "./Components/Navbar";

interface FormData {
	name: string;

}
interface Props {
	session: any;
}


const EditProfilePage: React.FC<RouteComponentProps> = (props: Props) => {
	const [form, setForm] = useState<FormData>({
		name: "",
	});
	const [error, setError] = useState("");

	async function handleUpdate(data: FormData) {
		if (!data.name) {
			setError("Minden mező kitöltése kötelező!");
			return;
		}
		try {
			const response = await fetch(`api/EditProfile`, {
				body: JSON.stringify({
					id: props.session.user.id,
					name: data.name,

				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			});
			console.log(response);
			if (response.ok) {
				setForm({
					name: "",
				});
				setError("");
				alert("Név sikeresen módosítva!");
			} else {
				setError("Hiba történt a név módosítása során!");
			}
		} catch (error) {
			console.log(error);
			setError(":(");
		}
	}

	return (
		<div>
			<Navbar></Navbar>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleUpdate(form);
				}}
			>
				<div className="form-group">
					<input
						name="name"
						placeholder="Név"
						value={form.name}
						onChange={(e) =>
							setForm({
								...form,
								name: e.target.value,
							})
						}
						type="text"
						className="form-style"
					/>
				</div>
				{error && <div className="error-message">{error}</div>}
				<button type="submit" className="mt-4 btn">
					Mentés
				</button>
			</form>
		</div>
	);
};

export const getServerSideProps = withSessionSsr(
	async ({ req, res, query }: { req: any; res: any; query: any }) => {
		const session = req.session;
		console.log(session);
		if (!session?.user) {
			res.setHeader("location", "/register");
			res.statusCode = 302;
			res.end();
			return { props: {} };
		}
		return {
			props: { session },
		};
	}
);
export default EditProfilePage;
