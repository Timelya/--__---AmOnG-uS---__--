import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { prisma } from "../lib/prisma";
import { useRouter } from "next/router";
import Navbar from "./Components/Navbar";
import EventCard from "./Components/EventCard";
import { GetServerSideProps } from "next";
import DarkMode from "./Components/DarkMode";
import EventAdd from "./Components/eventAdd";
import InviteCard from "./Components/InviteCard";

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
      <div>
        <Head>
          <title>Rendezvény lista</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        {
          events.events.map(x => <InviteCard key={x.id} name={x.name} />)
        }
        <DarkMode />
      </div>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
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
