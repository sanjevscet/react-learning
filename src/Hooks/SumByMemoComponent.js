import React, { useCallback, useMemo, useState } from 'react'

function SumByMemoComponent() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [sum, SetSum] = useState(0)


    const getSum = () => {
        console.debug("getSum Called")
        const ans =  +num1 + +num2;
        SetSum(ans);
    }

    // const SumByMemo =  useMemo(() => {
    //     console.debug("getSumMemo Called")

    //     const ans =  +num1 + +num2;
    //     SetSum(ans);
    // }, [])

    const SumByMemo =  useCallback(() => {
        console.debug("getSumMemo Called")

        const ans =  +num1 + +num2;
        SetSum(ans);
    }, [num1, num2])

    return (

        <div>
            <input value={num1} onChange={(e) => setNum1(e.target.value)} /><br />
            <input value={num2} onChange={(e) => setNum2(e.target.value)} /><br />
            <button onClick={getSum}>Get Sum</button>
            <button onClick={SumByMemo}>Get Sum By Memo</button>
            <h2>Sum = {sum}</h2>
        </div>
    )
}

export default SumByMemoComponent