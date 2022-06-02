import React, { useState } from 'react'

function BuggyCounter() {
    const [num, setNum] = useState(0);
    const incrementValueHandler = () => {
        setNum(n => n + 1);

    }

    if (num > 5) {
        throw new Error("Overflow the max value");
    }

    return (

        <>
            <div>BuggyCounter</div>
            <h1>Count = {num}</h1>
            <button onClick={incrementValueHandler}>IncrementValue</button>
        </>
    )
}

export default BuggyCounter