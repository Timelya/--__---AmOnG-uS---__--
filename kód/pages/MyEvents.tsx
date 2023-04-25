import { withSessionSsr } from "../lib/config/withSession";

export default function MyEvents() {

}

export const getServerSideProps = withSessionSsr(
    async ({ req, res, query }: { req: any; res: any, query: any}) => {

        const session = req.session;
        if (!session?.user) {
            res.setHeader("location", "/login");
            res.statusCode = 302;
            res.end();
            return { props: {} };
        }
        const event = await prisma?.event.findMany({
            select: {
                id: true,
                name: true,
                start: true,
                end: true,
            },
            where: {
                organizerId: Number(session.user.id),
            },
        });

        return {
            props: { event, session },
        };
    }
