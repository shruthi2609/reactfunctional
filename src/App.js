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
const handleAPI=async (text)=>{
    console.log(text)
   const res=await axios.get("https://hn.algolia.com/api/v1/search?query="+text)
   return res.data.hits
}
const App=()=>{
    return(
        <div>
        
{/*<TestComponent msg="final" count={0}></TestComponent>*/}
<ContextComponent></ContextComponent>
        </div>
    )
}
export default App;