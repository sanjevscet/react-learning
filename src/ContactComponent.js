import React from 'react'
import { useLocation } from 'react-router';

function ContactComponent() {
  const currentLocation = useLocation();

  return (
    <div>
      ContactComponent
      <p>{JSON.stringify(currentLocation, null, 4)}</p>
      </div>
  )
}

export default ContactComponent