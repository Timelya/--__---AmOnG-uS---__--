import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../lib/prisma"

type Data = {
  name: string,
  email: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {name, email, password} = req.body

  try {
    // CREATE
    await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    })
    res.status(200).json({ message: 'Sikeres regisztráció' })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error })
  }
}
