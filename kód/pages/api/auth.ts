//this file is the auth api route of a nextjs application

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    const session = await getSession({ req });
    
    if (!session) {
        res.status(401).json({ message: "Not authenticated!" });
        return;
    }
    
    const client = prisma;

    
    
    const meetupsCollection = db.collection("meetups");
    
    const meetups = await meetupsCollection.find().toArray();
    
    res.status(200).json({ meetups: meetups });
    }	
