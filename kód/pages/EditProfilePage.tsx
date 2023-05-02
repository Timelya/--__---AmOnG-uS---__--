import { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { prisma } from "../lib/prisma";
import { withSessionSsr } from "../lib/config/withSession";
import { redirect } from "next/dist/server/api-utils";
import Head from "next/head";
import Navbar from "./Components/Navbar";
import DarkMode from "./Components/DarkMode";

interface FormData {
	email: string;
	name: string;
	password: string;
}
interface Props {
	session: any;
}

const EditProfilePage: React.FC<RouteComponentProps> = (props: Props) => {
	
	const [form, setForm] = useState<FormData>({
		email: props.session.user.email,
		name: props.session.user.username,
		password: "",
	});

	const [error, setError] = useState("");
	async function handleUpdate(data: FormData) {
		if (!data.email || !data.name) {
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
			if (response.ok) {
				setForm({
					email: props.session.user.email,
					name: props.session.user.name,
					password: "",
				});
				setError("");
				alert("Név sikeresen módosítva!");
			} else {
				setError("Hiba történt a név módosítása során!");
			}
		} catch (error) {
			setError(":(");
		}
	}
	
	return (
		<>
			<Head>
				<title>Profil Szerkesztése</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleUpdate(form);
					}}
				>
					<div className="form-group">
						<input
							name="email"
							placeholder="Email"
							value={form.email}
							onChange={(e) =>
								setForm({
									...form,
									email: e.target.value,
								})
							}
							type="text"
							className="form-style"
						/>
					</div>

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

					<div className="form-group">
						<input
							name="password"
							placeholder="Új Jelszó"
							value={form.password}
							onChange={(e) =>
								setForm({
									...form,
									password: e.target.value,
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
			<DarkMode />
		</>
	);
};

export const getServerSideProps = withSessionSsr(
	async ({ req, res, query }: { req: any; res: any; query: any }) => {
		const session = req.session;
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
