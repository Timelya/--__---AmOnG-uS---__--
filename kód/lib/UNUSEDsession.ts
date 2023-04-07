
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiHandler } from "next";
import { IronSessionOptions } from "iron-session";

export const sessionOptions = {

    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "iron-session/examples/next.js",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};
export function withSession(handler: any) 
    {
        return withIronSessionApiRoute(handler, {
            password: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            cookieName: "appConfig.cookies.sessionToken.name",
            cookieOptions: { secure: process.env.NODE_ENV === "production" },
        })}