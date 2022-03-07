import TestComponent from "./Components/TestComponent"
import NewComponent from "./Components/NewComponent";
import FormComponent from "./Components/FormComponent"
import EffectHook from "./Components/EffectHook";
import NewsApp from "./Components/NewsApp"
import NewsAppCopy from "./Components/CopyNews"
import axios from "axios"
import Stopwatch from "./Components/Counter";
const handleAPI=async (text)=>{
    console.log(text)
   const res=await axios.get("https://hn.algolia.com/api/v1/search?query="+text)
   return res.data.hits
}
const App=()=>{
    return(
        <div>
        
{/*<TestComponent msg="final" count={0}></TestComponent>*/}
<NewsAppCopy handleAPI={handleAPI}></NewsAppCopy>
<Stopwatch></Stopwatch>
        </div>
    )
}
export default App;