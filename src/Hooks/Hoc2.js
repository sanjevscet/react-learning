import React from 'react'

function Hoc2(Component) {
    return function withHoc2Style() {
        return (
            <div ><Component color={"red"} /></div>
        )

    }
}

export default Hoc2