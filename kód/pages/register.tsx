import type { NextPage } from "next";
import Head from "next/head";
import { Component, useState } from "react";
import { prisma } from "../lib/prisma";
import { useRouter } from "next/router";
import { sha256 } from "js-sha256";
import { GetServerSideProps } from "next";

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

  function handleSubmit(data: FormData) {
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
    console.log(users)
    if (users.find(x => x.name == data.name)) {
      alert("Foglalt felhasználónév");
      return;
    }
    if (users.find(x => x.email == data.email)) {
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
      setForm({ name: "", email: "", password: "", passwordConfirmation: "", id: "" });
      refreshData();
    });
  }
  return (
    <>
      <Head>
        <title>bejelentkezés|regisztráció</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/styles.css" />
      </Head>

      <div>
        <div className="section">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3"><span>Jelentkezz be </span><span>regisztrálj</span></h6>
                  <form onSubmit={(e) => { e.preventDefault(); handleSubmit(form); }}>
                    <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                    <label htmlFor="reg-log" />
                    <div className="card-3d-wrap mx-auto">
                      <div className="card-3d-wrapper">
                        <div className="card-front">
                          <div className="center-wrap">
                            <div className="section text-center">
                              <h4 className="mb-4 pb-3">Jelentkezz be</h4>
                              <form onSubmit={(e) => { e.preventDefault(); handleSubmit(form); }}>
                                <div className="form-group">
                                  <input type="email" className="form-style" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" />
                                  <i className="input-icon uil uil-at" />
                                </div>
                                <div className="form-group mt-2">
                                  <input type="password" className="form-style" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                                  <i className="input-icon uil uil-lock-alt" />
                                </div>
                                <button type="submit" className="btn mt-4">
                                    Login{" "}
                                  </button>
                                </form>
                            </div>
                          </div>
                        </div>
                        <div className="card-back">
                          <div className="center-wrap">
                            <div className="section text-center">
                              <h4 className="mb-3 pb-3">Regisztrálj</h4>
                              <div className="form-group">
                                <input
                                  placeholder="Név"
                                  value={form.name}
                                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                                  type="text" className="form-style" />
                                <i className="input-icon uil uil-user" />
                              </div>
                              <div className="form-group mt-2">
                                <input
                                  value={form.email}
                                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                                  type="email"
                                  className="form-style"
                                  placeholder="Email" />
                                <i className="input-icon uil uil-at" />
                              </div>
                              <div className="form-group mt-2">
                                <input
                                  type="password"
                                  placeholder="Jelszó"
                                  value={form.password}
                                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                                  className="form-style" />
                                <i className="input-icon uil uil-lock-alt" />
                              </div>
                              <div className="form-group mt-2">
                                <input
                                  type="password"
                                  placeholder="Jelszó ismét"
                                  value={form.passwordConfirmation}
                                  onChange={(e) => setForm({ ...form, passwordConfirmation: e.target.value })}
                                  className="form-style" />
                                <i className="input-icon uil uil-lock-alt" />
                              </div>
                              <button type="submit" className="btn mt-4">
                                Regisztrálj{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  // READ all notes from DB
  const users = await prisma?.user.findMany({
    select: {
      id: true,
      name: true,
      password: true,
    },
  });
  console.log(users)
  return {
    props: {
      users,
    },
  };
}

export default Register;
