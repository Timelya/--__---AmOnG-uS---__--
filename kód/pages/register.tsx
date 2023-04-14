import type { NextApiHandler, NextPage } from "next";
import Head from "next/head";
import { Component, useState } from "react";
import { prisma } from "../lib/prisma";
import { useRouter } from "next/router";
import { sha256 } from "js-sha256";
import { GetServerSideProps } from "next";
import withIronSessionApiRoute from "./api/login.js";
import login from "./api/login.js";
import { withSessionSsr } from "../lib/config/withSession";
import { NextApiRequest, NextApiResponse } from "next";

interface FormData {
	name: string;
	email: string;
	password: string;
	passwordConfirmation: string;
	id: string;
}
interface User {
	users: {
		id: string;
		name: string;
		password: string;
		email: string;
	}[];
}

const Register: NextPage<User> = ({ users }) => {
	const [form, setForm] = useState<FormData>({
		name: "",
		password: "",
		email: "",
		passwordConfirmation: "",
		id: "",
	});
	const router = useRouter();
	const refreshData = () => {
		router.replace(router.asPath);
	};

	function handleRegister(data: FormData) {
		if (!data.name) {
			alert("Felhasználó név nem lehet üres");
			return;
		}
		if (!data.email) {
			alert("Az email nem lehet üres");
			return;
		}
		if (!data.password) {
			alert("Jelszó nem lehet üres");
			return;
		}
		if (!data.passwordConfirmation) {
			alert("Jelszó megerősítés nem lehet üres");
			return;
		}
		if (data.password != data.passwordConfirmation) {
			alert("A megadott jelszavak nem egyeznek");
			return;
		}
		if (users.find((x) => x.name == data.name)) {
			alert("Foglalt felhasználónév");
			return;
		}
		if (users.find((x) => x.email == data.email)) {
			alert("Ezzel az email-el már van fiók.");
			return;
		}
		// CREATE
		data.password = sha256(data.password);
		fetch("api/createUser", {
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		}).then(() => {
			setForm({
				name: "",
				email: "",
				password: "",
				passwordConfirmation: "",
				id: "",
			});
			refreshData();
		});
	}
	async function handleLogin(data: FormData) {
		if (
			!users.find(
				(x) =>
					x.email == data.email && x.password == sha256(data.password)
			)
		) {
			alert("Helytelen felahsználónév, vagy jelszó");
			return;
		} else {
			const user = users.find(
				(x) =>
					x.email == data.email && x.password == sha256(data.password)
			);
			if (user) {
				console.log({ "Content-Type": "application/json" } + " "+JSON.stringify({ data }),)
				const response = await fetch("/api/sessions", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ data }),
				});
				if (response.ok) {
					console.log(response);
					return alert("Sikeres bejelentkezés");
					
				}
			}
		}
	}

	return (
		<>
			<Head>
				<title>bejelentkezés|regisztráció</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta charSet="utf-8" />
				<link
					rel="stylesheet"
					href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
				/>
			</Head>
			<div className="bg-stone-700 text-amber-200...">
				<div className="section">
					<div className="container">
						<div className="row full-height justify-content-center">
							<div className="py-5 text-center col-12 align-self-center">
								<div className="pt-5 pb-5 text-center section pt-sm-2">
									<div className="pb-3 mb-0">
										<span>Jelentkezz be </span>
										<span> Regisztrálj</span>
									</div>
									<input
										className="checkbox"
										type="checkbox"
										id="reg-log"
										name="reg-log"
									/>
									<label htmlFor="reg-log" />
									<div className="mx-auto card-3d-wrap">
										<div className="card-3d-wrapper">
											<div className="card-front">
												<div className="center-wrap">
													<div className="text-center section">
														<div className="pb-3 mb-4">
															Jelentkezz be
														</div>
														<form
															onSubmit={(e) => {
																e.preventDefault();
																handleLogin(
																	form
																);
															}}
														>
															<div className="form-group">
																<input
																	type="email"
																	className="form-style"
																	value={
																		form.email
																	}
																	onChange={(
																		e
																	) =>
																		setForm(
																			{
																				...form,
																				email: e
																					.target
																					.value,
																			}
																		)
																	}
																	placeholder="Email"
																/>
																<i className="input-icon uil uil-at" />
															</div>
															<div className="mt-2 form-group">
																<input
																	type="password"
																	className="form-style"
																	placeholder="Password"
																	value={
																		form.password
																	}
																	onChange={(
																		e
																	) =>
																		setForm(
																			{
																				...form,
																				password:
																					e
																						.target
																						.value,
																			}
																		)
																	}
																/>
																<i className="input-icon uil uil-lock-alt" />
															</div>
															<button
																type="submit"
																className="mt-4 btn"
															>
																Login{" "}
															</button>
														</form>
													</div>
												</div>
											</div>
											<div className="card-back">
												<div className="center-wrap">
													<div className="text-center section">
														<div className="pb-3 mb-3">
															Regisztrálj
														</div>
														<form
															onSubmit={(e) => {
																e.preventDefault();
																handleRegister(
																	form
																);
															}}
														>
															<div className="form-group">
																<input
																	placeholder="Név"
																	value={
																		form.name
																	}
																	onChange={(
																		e
																	) =>
																		setForm(
																			{
																				...form,
																				name: e
																					.target
																					.value,
																			}
																		)
																	}
																	type="text"
																	className="form-style"
																/>
																<i className="input-icon uil uil-user" />
															</div>
															<div className="mt-2 form-group">
																<input
																	value={
																		form.email
																	}
																	onChange={(
																		e
																	) =>
																		setForm(
																			{
																				...form,
																				email: e
																					.target
																					.value,
																			}
																		)
																	}
																	type="email"
																	className="form-style"
																	placeholder="Email"
																/>
																<i className="input-icon uil uil-at" />
															</div>
															<div className="mt-2 form-group">
																<input
																	type="password"
																	placeholder="Jelszó"
																	value={
																		form.password
																	}
																	onChange={(
																		e
																	) =>
																		setForm(
																			{
																				...form,
																				password:
																					e
																						.target
																						.value,
																			}
																		)
																	}
																	className="form-style"
																/>
																<i className="input-icon uil uil-lock-alt" />
															</div>
															<div className="mt-2 form-group">
																<input
																	type="password"
																	placeholder="Jelszó ismét"
																	value={
																		form.passwordConfirmation
																	}
																	onChange={(
																		e
																	) =>
																		setForm(
																			{
																				...form,
																				passwordConfirmation:
																					e
																						.target
																						.value,
																			}
																		)
																	}
																	className="form-style"
																/>
																<i className="input-icon uil uil-lock-alt" />
															</div>
															<button
																type="submit"
																className="mt-4 btn"
															>
																Regisztrálj{" "}
															</button>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export const getServerSideProps = withSessionSsr(async (req: any, res: any) => {
	if (req.session != null)
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	const users = await prisma?.user.findMany({
		select: {
			id: true,
			name: true,
			password: true,
			email: true,
		},
	});

	return {
		props: { users },
	};
});

export default Register;
