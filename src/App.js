import TestComponent from "./Components/TestComponent"
import NewComponent from "./Components/NewComponent";
import FormComponent from "./Components/FormComponent"
import EffectHook from "./Components/EffectHook";
import NewsApp from "./Components/NewsApp"
import NewsAppCopy from "./Components/CopyNews"
import axios from "axios"
import Stopwatch from "./Components/Counter";
import ContactBook from "./Components/ContactBook"
import RootComponent from "./Components/RootComponent"
import ContextComponent from "./Components/ContextComponent";
import {ContextUpdate} from "./Components/UpdateContext"
import { Parent } from "./Components/FunctionalComponent";
import {User} from "./Components/RefComponentTwo"
import {BrowserRouter as Router,Routes,Route,Link, Navigate} from "react-router-dom"
import Layout from "./Components/Layout";
//import {Home,DashBoard,About} from "./Components/Layout"
import LoginComponent from "./Components/LoginComponent"
import { useState } from "react";

const App=()=>{
    const [user,setUser]=useState(null)
    const handleSignIn=()=>setUser({username:"john",email:"john@gmail.com"})
    const handleSignOut=()=>setUser(null)

    return(
        <div>
            
{/**<Router>
    <button>
    <Link to="/login"> Login</Link>  
    </button>
    <Routes>
    
      
    <Route path="/" element={<Layout></Layout>}>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="dashboard/:username/:role" element={<DashBoard></DashBoard>}></Route>
        <Route path="about" element={<About></About>}></Route>
    </Route>
   
    <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>
    </Routes>
    </Router>*
    //protected Routes*/}
    <Router>
        <Navigation></Navigation>
{
    user?
    
    <button onClick={handleSignOut}>Sign Out</button>:
    <button onClick={handleSignIn}>Sign In</button>
}
    <Routes>
        <Route path="/home" element={
        <ProtectedRoute user={user}>
        <Home>
        </Home>
        </ProtectedRoute>
        }></Route>
         <Route path="/dashboard" element={
        <ProtectedRoute user={user}>
        <DashBoard></DashBoard>
        </ProtectedRoute>
        }></Route>
        <Route path="/landing" element={<Landing></Landing>}></Route>
    </Routes>
    </Router>
        </div>
    )
}
const Landing=()=>{
    return(
        <div>
            <h1>Landing Page : Public</h1>
        </div>
    )
}
const Home=(props)=>{
    return(
        <div>
        <h1>Home Page : Private</h1>
        </div>
    )
}
const DashBoard=(props)=>{
    return(
        <div>
        <h1>DashBoard  : Private</h1>
        </div>
    )
}
/*const Home =(props)=>{
    if(props.user){
        return(
            <div>
                 <h1>Home Page : Private</h1>
            </div>
        )
    }
    return(
     /*   <div>
             <h1>Sorry Login again!</h1>
        </div>
        <Navigate to="/landing"></Navigate>

    )   
}*/
const Navigation=()=>{
    return(
    <nav>
        <Link to="/home">Home</Link> <br></br>
        <Link to="/landing">landing</Link><br></br>
        <Link to="/dashboard">dashboard</Link>
    </nav>
    )
}
const ProtectedRoute =(props)=>{
  if(props.user){
    return props.children
  }
  else{
      return <Navigate to="/landing"></Navigate> 
  }
}

export default App;