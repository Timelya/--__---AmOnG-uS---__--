import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = req.query.id
  const {name, password, id} = req.body
    // DELETE
    if (req.method === 'DELETE') {
        const user = await prisma.user.delete({
            where: { id: Number(userId) }
        })
        res.json(user)
    } 
    // UPDATE
    else if (req.method === 'PUT') {
      const user = await prisma.user.update({
        where: { id: Number(userId) },
        data: {
          name,
          password
        }
      })
      res.status(200).json({ message: 'User updated' })
    } 
    else {
        console.log("User could not be modified")
        res.status(400).json({ message: "User could not be modified" })
    }
}
