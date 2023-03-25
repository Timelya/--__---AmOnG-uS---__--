import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../lib/prisma"

type Data = {
  name: string,
  start: string,
  end: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {name, start, end} = req.body

  try {
    // CREATE
    await prisma.event.create({
      data: {
        name,
        start,
        end,
      }
    })
    res.status(200).json({ message: 'Note created' })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error })
  }
}

