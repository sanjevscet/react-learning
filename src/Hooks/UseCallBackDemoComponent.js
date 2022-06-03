import React, { useState } from 'react'
import UseCallBackDemoComponent1 from './UseCallBackDemoComponent1';

function UseCallBackDemoComponent() {

  const [count, setCount]  =useState(0);
  const [todos, setTodos]  =useState([]);


  const addTodo = () => {
      console.log("hhh")
      setTodos(t => [...t, "New To" + new Date()]);
  }
  
  return (
    <div>
        <h2>Use Call Back demo</h2>
        <br />

        <UseCallBackDemoComponent1 todos={todos} addTodo={addTodo}/>
        <h3>{count}</h3>
        <button onClick={e => setCount(c => c+1)}>Change Count </button>
    </div>
  )
}

export default UseCallBackDemoComponent