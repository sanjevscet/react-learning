import React, { useId } from 'react'

function UseCallBackDemoComponent1({todos, addTodo}) {
    const id = useId();
    console.log("UseCallBackDemoComponent1 rendered", {todos, addTodo})
  return (
    <div>
        <h2>Use Callback Demo implmentation</h2>
        {todos.map((todo, index) => {
            return (
                <p key={`${id}-${index}`}>{todo}</p>
            )
        })}
        <button onClick={addTodo}>Add Todo</button>


    </div>
  )
}

export default UseCallBackDemoComponent1