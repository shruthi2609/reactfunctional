const Todo=(props)=>{

    return(
        <div>
<h3>Todo App</h3>
{
    props.items.map((item)=>(
        <h1>{item}</h1>
    ))
}
<button onClick={props.addItem}>add</button>
</div>
    )
}
export default Todo