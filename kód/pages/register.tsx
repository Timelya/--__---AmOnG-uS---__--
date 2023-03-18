import type { NextPage } from "next";
import Head from "next/head";
import { Component, useState } from "react";
import { prisma } from "../lib/prisma";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { sha256 } from "js-sha256";

interface FormData {
  name: string;
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
    if (!data.password) {
      alert("Jelszó nem lehet üres");
      return;
    }
    if (!data.passwordConfirmation) {
      alert("Jelszó megerősítés nem lehet üres");
      return;
    }
    if(data.password !=data.passwordConfirmation)
    {
      alert("A megadott jelszavak nem egyeznek");
      return;
    }
    console.log(users)
    if(users.find(x=>x.name==data.name))
    {
      alert("Foglalt felhasználónév");
      return;
    }
    // CREATE
    data.password = sha256(data.password);
      fetch("api/create", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then(() => {
      setForm({ name: "", password: "", passwordConfirmation: "", id: "" });
      refreshData();
    });
  }
  return (
    <>
      <Head>
        <title>Regisztráció</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="m-4 text-2xl font-bold text-center">Regisztráció</h1>
      <form
        className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form);
        }}
      >
        <input
          type="text"
          placeholder="Felhasználónév"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="p-1 border-2 border-gray-600 rounded"
        />
        <input
          type="password"
          placeholder="Jelszó"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="p-1 border-2 border-gray-600 rounded"
        />
        <input
          type="password"
          placeholder="Jelszó ismét"
          value={form.passwordConfirmation}
          onChange={(e) => setForm({ ...form, passwordConfirmation: e.target.value })}
          className="p-1 border-2 border-gray-600 rounded"
        />
        <button type="submit" className="p-1 text-white bg-blue-500 rounded">
          Register{" "}
        </button>
      </form>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // READ all users from DB
  const users = await prisma?.user.findMany({
    select: {
      id: true,
      name: true,
      password: true
    }
  })

  return {
    props: {
      users
    }
  }
}

export default Register;
