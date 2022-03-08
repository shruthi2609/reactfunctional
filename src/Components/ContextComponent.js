import { useContext,createContext } from "react"
import Login from "./Login"
 export const UserContext=createContext()
const ContextComponent=()=>{
    const userName="user"
    return(
<UserContext.Provider value={userName}>
<Login>
</Login>
</UserContext.Provider>
)
}
export default ContextComponent