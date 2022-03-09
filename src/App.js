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
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Layout from "./Components/Layout";
import {Home,DashBoard,About} from "./Components/Layout"
import LoginComponent from "./Components/LoginComponent"
{/*const handleAPI=async (text)=>{
    console.log(text)
   const res=await axios.get("https://hn.algolia.com/api/v1/search?query="+text)
   return res.data.hits
}
<TestComponent msg="final" count={0}></TestComponent>
<Parent></Parent>
<User></User>*/}
const App=()=>{
    return(
        <div>
            <h1>React Hooks</h1>
        <p>Accepts a function that contains imperative, possibly effectful code.
Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.
Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.
By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.
    </p>
<Router>
    <button>
    <Link to="/login"> Login</Link>  
    </button>
    <Routes>
    
        {/** nested routes */}
    <Route path="/" element={<Layout></Layout>}>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="dashboard/:username/:role" element={<DashBoard></DashBoard>}></Route>
        <Route path="about" element={<About></About>}></Route>
    </Route>
    {/** navigating */}
    <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>
    </Routes>
</Router>




        </div>
    )
}
export default App;