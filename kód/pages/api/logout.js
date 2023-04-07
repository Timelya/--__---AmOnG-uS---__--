import { withSessionRoute } from "lib/config/withSession";
import { useRouter } from "next/router";

export default withSessionRoute(logout);

async function logout(req, res, session) {
    req.session.destroy();
    res.send({ok: true})    
}

