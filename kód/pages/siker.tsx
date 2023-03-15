import executeQuery from "../lib/db"
function Siker()
{
    const results = executeQuery({query: 'select * from users', values:''});
    console.log(results);
    
}

export default Siker