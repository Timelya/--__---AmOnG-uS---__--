import { GetServerSideProps } from "next";

export const getUsers: GetServerSideProps = async () => {
    // READ all users from DB
    const users = await prisma?.user.findMany({
      select: {
        id: true,
        name: true,
        password: true,
      },
    });
  
    return {
      props: {
        users,
      },
    };
  };