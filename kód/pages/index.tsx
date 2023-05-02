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
import { useSelector } from 'react-redux';

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
          <title>Főoldal</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <DarkMode />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
        </div>
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
