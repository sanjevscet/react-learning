import React, { useMemo, useState } from 'react'
// import SumByMemoComponent from './SumByMemoComponent';
import UseMemoComponent from './UseMemoComponent';

function CounterComponent() {
    const [count, setCount] = useState(0)
    const [forceRender, setForceRender] = useState(true)
    
    return (
        <div>
            CounterComponent

            <br />
            <br />
            <h2>{count}</h2>
            <button onClick={() => setCount(c => c + 1)}>+1 Count</button>
            <br />
            <button onClick={() => setForceRender(r => !r)}>Force Render</button>

            <br />
            <UseMemoComponent name={"normal"} />
            {useMemo(() => <UseMemoComponent name={"memo"}/>, [forceRender])}


            {/* <SumByMemoComponent /> */}
        </div>
    )
}

export default CounterComponent