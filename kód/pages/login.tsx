import type { NextPage } from "next";
import Head from "next/head";
import { Component, useState } from "react";
import { prisma } from "../lib/prisma";
import { useRouter } from "next/router";
import { sha256 } from "js-sha256";
import { getUsers } from "./Components/UNUSEDgetServerSideProps";
import { GetServerSideProps } from "next";


interface FormData {
  name: string;
  password: string;
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

const Login: NextPage<User> = ({ users }) => {
  const [form, setForm] = useState<FormData>({
    name: "",
    password: "",
    id: "",
  });
  const [newUser] = useState<Boolean>(true);
  const router = useRouter();

  async function handleSubmit(data: FormData) {
    // console.log(data)
    // console.log(newUser)

    try {
      if(!users.find((x) => x.name == data.name && x.password == sha256(data.password)))
      {
        alert("Helytelen felahsználónév, vagy jelszó")
        return
      }
      router.push('/')
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>users</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="m-4 text-2xl font-bold text-center">Users</h1>
      <form
        className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form);
        }}
      >
        <input
          type="text"
          placeholder="Name"
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
        {newUser ? (
          <button type="submit" className="p-1 text-white bg-blue-500 rounded">
            Add +
          </button>
        ) : (
          <>
            <button
              type="submit"
              className="p-1 text-white bg-blue-500 rounded"
            >
              Update
            </button>
          </>
        )}
      </form>
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


export default Login;
