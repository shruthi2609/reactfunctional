import { useState,useCallback, useMemo} from "react"
import Todo from "./Todo"
import Cart from "./Count"
const RootComponent=()=>{
    const [items,setItems]=useState([
        "buy milk",
        "buy groceries",
        "compelte task"
    ])
    const [count,setCount]=useState(0)
    const addItem=useCallback(()=>{
        console.log("add item")
        setItems(()=>[...items,"new item"])
    },[items])
    const updateCount=()=>{
        console.log("counter")
        setCount(count+1)
    }
    useCallback(updateCount,[count])
    return(
        <div>
        
            <Todo items={items} addItem={addItem}></Todo>
            <Cart count={count} updateCount={updateCount}></Cart>
        </div>

    )
}
export default RootComponent