import React from 'react'
import { Outlet, useOutlet } from 'react-router'

function UserComponent() {

  const outlet = useOutlet()
  return (
    <div>UserComponent
      {outlet &&
        <div className='outlet'>
          <Outlet />
        </div>
      }
    </div>
  )
}

export default UserComponent