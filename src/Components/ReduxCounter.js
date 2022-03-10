const ReduxCounter =(props)=>{
    return(
        <div>
            {console.log(props)}
            <h1>Counter - Redux </h1>
            <button onClick={props.increment}>+</button>
            {props.count}
            <button  onClick={props.decrement}>-</button>
        </div>
    )
}
export default ReduxCounter