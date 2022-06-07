import React, { useRef } from 'react'

function UseRefComponent() {
    const ref = useRef();

    const onClickHandler = () => {
        console.log("click called")
        ref.current.focus();
    }
    return (
        <>
            <h1>UseRef Demo</h1>
            <input type="text" placeholder='useref ...' ref={ref}/>  
            <br />
            <button onClick={onClickHandler}>Set Foucs</button>
        </>
    )
}

export default UseRefComponent;