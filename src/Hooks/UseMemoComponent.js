import React from 'react'

function UseMemoComponent(props) {

    console.log("use memo", JSON.stringify({props}));

    return (
        <div>UseMemoComponent</div>
    )
}

export default UseMemoComponent