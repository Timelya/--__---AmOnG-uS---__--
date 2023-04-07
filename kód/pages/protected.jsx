import React from 'react';
import { withSessionSsr } from '../lib/config/withSession';
import { useRouter } from "next/router";
function PrivatePage({ user }) {
  const router = useRouter();

  return (
    <>
      <div>
        <h1>Hello {user.username}</h1>
        <p>Secret Content</p>

        <p> // this button log out the user using next router</p>
        <button onClick={async function () {
          await fetch('/api/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          
          router.push('/login');
        
          
          return logout();
        }}>Logout</button>

      </div>
    </>
  );
}
async function logout() {
  
}

export const getServerSideProps = withSessionSsr(
    async ({req, res}) => {
        const user = req.session.user;
        console.log(req.session);
        if(!user) {
            return {
                notFound: true,
            }
        }
        return {
            props: { user }
        }
    }
);

export default PrivatePage;