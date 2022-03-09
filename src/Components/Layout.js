import { Link, Outlet,useParams,useSearchParams } from "react-router-dom"
const Layout=()=>{
    return(
        <div>
    <nav>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/dashboard/:username/:role">dashboard</Link>
            </li>
        </ul>
    </nav>
    <hr>
    </hr>
    <Outlet></Outlet>
    
    </div>
    )
}
export const Home=()=>{
    return(
        <div>
            <h1>Home Component</h1>
        </div>
    )
}
export const DashBoard=()=>{
const {username,role}=useParams()
console.log(username)
    return(
        <div>
            <h1>dashboard Component</h1>
            <h2>Welcome {username} {role}</h2>
        </div>
    )
}
export const About=()=>{
    const [qdata]=useSearchParams()
    console.log(qdata.get("search"))
    console.log(qdata.get("profile"))
    return(
        <div>
            <h1>About Component</h1>
        </div>
    )
}
export default Layout