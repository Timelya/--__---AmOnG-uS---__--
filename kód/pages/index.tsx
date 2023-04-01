import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { prisma } from "../lib/prisma";
import { useRouter } from "next/router";
import Navbar from "./Components/Navbar";
import EventCard from "./Components/EventCard";
import { getUsers } from "./Components/UNUSEDgetServerSideProps";
import { GetServerSideProps } from "next";
import DarkMode from "./Components/DarkMode";
interface Event {
  events: {
    id: string;
    name: string;
    start: number;
    end: number;
  }[];
}
function Home(events: Event) {
  return (
    <>
    <body>
    
      <Head>
        <title>Főoldal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
        {
          events.events.map(x=><EventCard id={x.id} name={x.name}/>)
        }
        <DarkMode/>
        <p>lol</p>
        </body>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  // READ all notes from DB
  let events = await prisma?.event.findMany({
    select: {
      id: true,
      name: true,
      start: true,
      end: true
    },
  });
  events = JSON.parse(JSON.stringify(events))
  return {
    props: {
      events,
    },
  };
}
export default Home;
