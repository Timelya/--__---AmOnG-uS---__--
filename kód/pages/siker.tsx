import React from 'react'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

   

export const getServerSideProps = async ({ req }) => {
    const token = req.headers.AUTHORIZATION
    const users = await prisma.user.findMany()
    return { props: { users } }
  }
  export default ({users}) =>
  <ul>  
        {users?.map(user => (<li key={user.id}>{user.name}</li>))}
  </ul>
