import React from 'react'
import { useParams } from 'react-router'

function UserDeatilComponent() {
    const parms = useParams();
    return (
        <div>
            UserDeatilComponent
            <pre>{JSON.stringify(parms, null, 4)}</pre>

        </div>
    )
}

export default UserDeatilComponent